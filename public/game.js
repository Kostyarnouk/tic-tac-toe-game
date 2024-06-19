const cells = document.querySelectorAll('.cell');
const currentTurn = document.querySelector('.current-turn');
const playerAScore = document.querySelector('.score1');
const playerBScore = document.querySelector('.score2');
const drawScore = document.querySelector('.draw');
const resetButton = document.querySelector('.reset .button');
const overlay = document.getElementById('overlay');
const message = document.getElementById('message');
const closeMessage = document.getElementById('close');

let playerA = {
    symbol: '<i class="fa fa-close"></i>',
    played: [],
    score: 0
};

let playerB = {
    symbol: '<i class="fa fa-circle-o"></i>',
    played: [],
    score: 0
};

let currentPlayer = playerA;
currentTurn.innerHTML = currentPlayer.symbol;

let board = Array(9).fill(null);
let draws = 0;

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (!board[index]) {
            board[index] = currentPlayer;
            cell.innerHTML = currentPlayer.symbol;
            currentPlayer.played.push(index);
            if (checkWinner(currentPlayer.played)) {
                currentPlayer.score++;
                updateScores();
                if (currentPlayer.score === 3) {
                    showMessage(`${currentPlayer.symbol} wins the game!`);
                } else {
                    showMessage(`${currentPlayer.symbol} is the winner`);
                }
            } else if (board.every(cell => cell !== null)) {
                draws++;
                updateScores();
                showMessage('It\'s a draw');
            } else {
                switchPlayer();
            }
        }
    });
});

resetButton.addEventListener('click', () => {
    overlay.style.display = 'none';
    resetOverallGame();
});

closeMessage.addEventListener('click', () => {
    overlay.style.display = 'none';
    if (playerA.score === 3 || playerB.score === 3) {
        resetOverallGame();
    } else {
        resetGame();
    }
});

function switchPlayer() {
    currentPlayer = currentPlayer === playerA ? playerB : playerA;
    currentTurn.innerHTML = currentPlayer.symbol;
}

function checkWinner(played) {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winningCombinations.some(combination => 
        combination.every(index => played.includes(index))
    );
}

function updateScores() {
    playerAScore.innerHTML = playerA.score;
    playerBScore.innerHTML = playerB.score;
    drawScore.innerHTML = draws;
}

function showMessage(text) {
    message.querySelector('.content').innerHTML = text;
    overlay.style.display = 'flex';
}

function resetGame() {
    board.fill(null);
    cells.forEach(cell => cell.innerHTML = '');
    playerA.played = [];
    playerB.played = [];
    currentPlayer = playerA;
    currentTurn.innerHTML = currentPlayer.symbol;
}

function resetOverallGame() {
    resetGame();
    playerA.score = 0;
    playerB.score = 0;
    draws = 0;
    updateScores();
}

