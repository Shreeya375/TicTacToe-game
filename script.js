/* --- game data ---- */
const board = Array(9).fill('');  // 3 x 3 tic tac toe board
let currentPlayer = 'X';  // player X always goes first
let gameOver = false;  // flag to track if the game has ended

const END_Game = {
    WIN: 'win',
    TIE: 'tie',
    NONE: 'none';
};

/* all winning  combos */
const winningConditions = [
    [0,1,2], [3,4,5], [6,7,8],  // rows
    [0,3,6], [1,4,7], [2,5,8],  // columns
    [0,4,8], [2,4,6]             // diagonals
];

/* references == */

const tiles = Array.from(document.querySelectorAll('.tile'));  // all the tiles
const announcement = document.getElementById('announcement');  // end game message 
const resetButton = document.getElementById('reset');  // reset button
const displayCurrentPlayer = document.getElementById('current-player');  // display current player

/* --- event listeners -- */
tiles.forEach((tile,idx))  => {
    tile.addEventListener('click', () => userAction(tile, idx));
};

resetButton.addEventListener('click', resetGame);

/* --- functions --- */

function userAction(tile, index) {
    if (!isValidAction(tile) || !isGameActive) return;  // ignore if game is over or tile is occupied 
    tile.innerText = currentPlayer;  // mark the tile
    tile.classList.add(currentPlayer);  // add class for styling
    updateBoard(index);  // update the game state;
    handleResultValidation();  // check for win/tie
    if(isGameActive) changePlayer();  // switch turns if game is still active and not over
}

function isValidAction(tile) {
    return tile.innerText === '';  // valid if the tile is empty
}

function updateBoard(index) {
    board[index] = currentPlayer;  // update the board state
}
