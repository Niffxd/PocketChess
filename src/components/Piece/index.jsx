import { normalSkin } from '../../services/data';
import style from './Piece.module.css';

const parser = new DOMParser(); // eslint-disable-line

export default function Piece ({ piece }) {
  const image = parser.parseFromString(normalSkin[piece], 'text/html');

  return (
    <div className={style.piece_container} id={`${piece}`}>
      {
        image
      }
    </div>
  );
}
