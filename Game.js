// Game.js
const board = document.getElementById('board');
const status = document.getElementById('status');
const resetButton = document.getElementById('reset');

let currentPlayer = 'x';
let boardState = Array(9).fill(null);
let gameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function createBoard() {
    board.innerHTML = '';
    boardState.forEach((value, index) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = index;
        cell.textContent = value;
        cell.addEventListener('click', handleClick);
        board.appendChild(cell);
    });
}

function handleClick(event) {
    const cell = event.target;
    const index = cell.dataset.index;

    if (boardState[index] || !gameActive) return;

    boardState[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer);

    if (checkWinner()) {
        status.textContent = `Player ${currentPlayer.toUpperCase()} wins!`;
        gameActive = false;
    } else if (boardState.every(cell => cell)) {
        status.textContent = 'It\'s a draw!';
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
        status.textContent = `Player ${currentPlayer.toUpperCase()}'s turn`;
    }
}

function checkWinner() {
    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c];
    });
}

function resetGame() {
    boardState = Array(9).fill(null);
    currentPlayer = 'x';
    gameActive = true;
    status.textContent = `Player ${currentPlayer.toUpperCase()}'s turn`;
    createBoard();
}

resetButton.addEventListener('click', resetGame);

createBoard();
status.textContent = `Player ${currentPlayer.toUpperCase()}'s turn`;
