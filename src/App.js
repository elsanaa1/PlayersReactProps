
import './App.css';
import players from './players';
import Player from './Player';
import PlayerList from './PlayersList';
function App() {
  return (
    <div className="">
      <h1 style={{ textAlign: "center" }}>Players List</h1>
      <PlayerList />     
    </div>

  );
}

export default App;
