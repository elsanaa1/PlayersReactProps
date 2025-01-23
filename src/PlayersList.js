import players from "./players";
import Player from "./Player";
const PlayerList=()=>{
       return (
        <div>
        {players.map( (e)=>{return (<Player >{e}</Player>)}  )}
        </div>
       )
}





export default PlayerList;