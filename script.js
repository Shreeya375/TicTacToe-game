/* --- game data ---- */
const board = Array(9).fill('');  // 3 x 3 tic tac toe board
let currentPlayer = 'X';  // player X always goes first
let isGameActive = true;  // flag to track if the game has ended

const END_GAME = {
    WIN: 'win',
    TIE: 'tie',
    NONE: 'none',
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

/* --- event listeners --- */
tiles.forEach((tile, idx) => {
    tile.addEventListener('click', () => userAction(tile, idx));
});

resetButton.addEventListener('click', resetGame);

/* --- functions --- */

function userAction(tile, index) {
    if (!isValidAction(tile) || !isGameActive) return;  // ignore if game is over or tile is occupied 
    tile.innerText = currentPlayer;  // mark the tile
    tile.classList.add(`player-${currentPlayer.toLowerCase()}`); // add player-specific class for styling
    board[index] = currentPlayer;  //update the board to current player at index

        handleResultValidation();  // check for win or tie
        if (isGameActive) changePlayer();  // switch player if game is still active


function changePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';  // toggle between X and O
    displayCurrentPlayer.innerText = currentPlayer;  // update the display
    displayCurrentPlayer.className = `player-${currentPlayer.toLowerCase()}`;  // update the color
}

/* announce win or tie in the game  */
function announce(type) {
    if (type === END_GAME.WIN) {
        announcement.textContent = `Player ${currentPlayer} wins!`; // display the winner
    } else if (type === END_GAME.TIE) {
        announcement.textContent = "It's a tie!"; //display tie message
    }
    announcement.classList.remove('hide');
}

/* check the board for win or tie after each move */
    handleResultValidation() 
    {
    for (const condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            announce(END_GAME.WIN);
            isGameActive = false;
            return;
        }
    }
    if (!board.includes('')) {
        announce(END_GAME.TIE);
        isGameActive = false;
    }
  }
}

