import Board from './components/Board'; // eslint-disable-line
import Menu from './components/Menu'; // eslint-disable-line
import Game from './components/Game'; // eslint-disable-line
import background from './assets/backgorunds/background.jpg';
import './App.css';

function App () {
  return (
    <div className='app' style={{ backgroundImage: `url(${background})` }}>
      {/* <Menu /> */}
      <Board />
    </div>
  );
}

export default App;
