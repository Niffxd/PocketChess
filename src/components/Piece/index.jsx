import { findImage } from '../../services/data';
import style from './Piece.module.css';

export default function Piece ({ piece, white }) {
  return (
    <div className={white ? style.piece_container : style.piece_container_white} id={`${piece}`}>
      { findImage(piece) }
    </div>
  );
}
