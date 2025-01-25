import players from "./players";
import Player from "./Player";
const PlayerList=()=>{
       return (
        <div style={{  }}>
   {players.map( (e)=>{ return(<Player name={e.name} team={e.team} nationality={e.nationality} jers={e.jerseyNumber} age={e.age} img={e.img} />)}  )}
        </div>
       )
}





export default PlayerList;