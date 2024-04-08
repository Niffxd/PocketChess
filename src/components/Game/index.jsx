import Board from '../Board'; // eslint-disable-line
import style from './Game.module.css';

export default function Game () {
  return (
    <div className={style.game_container}>
      <Board />
    </div>
  );
}
