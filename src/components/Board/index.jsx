import Piece from '../Piece'; // eslint-disable-line
import style from './Board.module.css';

export default function Board () {
  const boardPieces = [
    'rook', 'knight', 'bishop', 'king', 'queen', 'bishop', 'knight', 'rook',
    'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn',
    'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty',
    'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty',
    'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty',
    'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty',
    'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn',
    'rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'
  ];

  const paintBox = box => {
    if (box < 8 || (box >= 16 && box < 24) || (box >= 32 && box < 40) || (box >= 48 && box < 56)) {
      return box % 2;
    } else return !(box % 2);
  };

  return (
    <div className={style.board_container}>
      {
        boardPieces.map((piece, index) => {
          return (
            <div className={style.box} key={index} id={`${index}`} style={
              paintBox(index) ? { backgroundColor: 'brown' } : { backgroundColor: 'beige' }
            }>
              <Piece piece={piece}/>
            </div>
          );
        })
      }
    </div>
  );
}
