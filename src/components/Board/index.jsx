import Piece from '../Piece'; // eslint-disable-line
import style from './Board.module.css';

export default function Board () {
  return (
    <div className={style.board_container}>
      <Piece />
    </div>
  );
}
