import './App.css';
import GameBoard from './Components/Gamebord/GameBoard';
import Heading from './Components/ScoreBoard/Heading';

function App() {
  return (
    <div className="App">
      <Heading/>
      <GameBoard/>
    </div>
  );
}

export default App;
