// import pieces from './services/data.js';
import Board from './components/Board/index.jsx'; // eslint-disable-line
import './App.css';

function App () {
  return (
    <div className='game_chess'>
      <Board />
      <p>It is <span id='player'></span> go.</p>
      <p id='info-display'></p>
    </div>
  );
}

export default App;
