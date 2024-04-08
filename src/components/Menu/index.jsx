import { options } from '../../services/data.js'; // eslint-disable-line
import style from './Menu.module.css';

export default function Menu () {
  return (
    <div className={style.menu_container}>
      <ul className={style.menu_option_list}>
        {
          options.map((option, index) => {
            return (
              <li key={index}>
                {option}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}
