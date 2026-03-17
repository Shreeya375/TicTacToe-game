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

