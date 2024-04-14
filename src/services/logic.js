const gameBoard = document.getElementById('gameboard');
const playerDisplay = document.getElementById('player');
const infoDisplay = document.getElementById('info-display');

const width = 8;

const startPieces = [
  rook, knight, bishop, king, queen, bishop, knight, rook,
  pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
  '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '',
  pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
  rook, knight, bishop, king, queen, bishop, knight, rook
];

function createBoard() {
  startPieces.forEach((startPiece) => {
    const square = document.createElement('div');
    square.classList.add('square');
    square.classList.add('beige');
    gameBoard.append(square);
  });
}
