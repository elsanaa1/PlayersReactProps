import players from "./players";
import Player from "./Player";
const PlayerList=()=>{
       return (
       <div > 
     {players.map( (e)=>{  
          //  passing props as spread operator
          return( <Player {...e} />)}  )}
        </div>
       )
}





export default PlayerList;