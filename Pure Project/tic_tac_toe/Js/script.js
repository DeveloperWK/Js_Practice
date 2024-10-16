alert("Welcome To Tic-Tac-Toe Game Let's Enjoy The Game ");
const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const WINNING_COMBINATION = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const cellElement = document.querySelectorAll("[data-cell]");
let board = document.getElementById("board");
const winningMessageElement = document.getElementById("winMessage");
const winningMessageTextElement = document.querySelector(
  "[data-win-message-text]"
);
const restartButton = document.getElementById("restartButton");
let circleTurn;

const startGame = () => {
  circleTurn = false;
  cellElement.forEach((cell) => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(CIRCLE_CLASS);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHoverClass();
  winningMessageElement.classList.remove("show");
};
startGame();

restartButton.addEventListener("click", startGame);

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurn();
    setBoardHoverClass();
  }
}
function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerHTML = `Draw!`;
  } else {
    winningMessageTextElement.innerHTML = `${circleTurn ? "O's" : "X's"}Wins!`;
  }
  winningMessageElement.classList.add("show");
}
function isDraw() {
  return [...cellElement].every((cell) => {
    return (
      cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    );
  });
}
function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}
function swapTurn() {
  circleTurn = !circleTurn;
}
function setBoardHoverClass() {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS);
  } else {
    board.classList.add(X_CLASS);
  }
}
function checkWin(currentClass) {
  return WINNING_COMBINATION.some((combination) => {
    return combination.every((index) => {
      return cellElement[index].classList.contains(currentClass);
    });
  });
}
