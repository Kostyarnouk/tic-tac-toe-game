# Tic Tac Toe Game

This is a simple Tic Tac Toe game implemented using HTML, CSS, and JavaScript.

## Features
- Playable Tic Tac Toe game with two players.
- Tracks scores for Player A, Player B, and Draws.
- Displays a message when a player wins or when the game is a draw.
- First player to win 3 rounds is the overall winner.
- Reset button to start a new game.
- Favicon added for a presentable look.

## How to Play
1. Open the `index.html` file in a web browser.
2. Players take turns clicking on the cells to place their symbol (X or O).
3. The game checks for a winner after each turn.
4. If a player wins, a message is displayed, and the score is updated.
5. If the game is a draw, a message is displayed, and the draw count is updated.
6. The first player to win 3 rounds is declared the overall winner.
7. Click the reset button to start a new game.
8. If an overall winner is declared, the game can be reset to start a new series of rounds.

## Files
- `index.html`: The main HTML file containing the game structure.
- `style.css`: The CSS file for styling the game.
- `game.js`: The JavaScript file containing the game logic.

## Adding a Favicon
A favicon is added to the game using the following line in the `<head>` section of `index.html`:
```html
<link rel="icon" href="https://cdn-icons-png.flaticon.com/512/566/566294.png">
