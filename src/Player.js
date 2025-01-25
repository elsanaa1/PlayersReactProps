import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
// style list item  
const styleItem={ display: 'flex', alignItems: 'center' }
const styleDiv={display: 'flex', justifyContent: 'center', alignItems: 'center', padding:20 }
const cardStyle={ width: '18rem', boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)"  ,transition: "0.3s" ,borderRadius: "10px"}
const imgStyle={width:"100%",height:200}
const titlestyle={textAlign:'center',fontWeight:'bold', fontSize:'16px'};



// default props values
const Player=({name="Mohamed Salah",team="Liverpool",age=32,img="/playersimg/salah.jpg",nationality="Egyptian",jerseyNumber=11})=>{
    return (
   <div style={styleDiv}> 
     <Card style={cardStyle}>
      <Card.Img variant="top" src={img} alt="player image" style={imgStyle} />
      <Card.Body>
         <Card.Title style={titlestyle}> {name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <div style={styleItem}>
            <h5 >Age: </h5> <ListGroup.Item> {age}</ListGroup.Item>
      </div>
       <div style={styleItem}>
           <h5>Nationality: </h5><ListGroup.Item> {nationality}</ListGroup.Item>
        </div>
        <div style={styleItem}>
           <h5>Team: </h5> <ListGroup.Item>{team}</ListGroup.Item>
        </div>
        <div style={styleItem}>
           <h5>Jersey number: </h5><ListGroup.Item>{jerseyNumber}</ListGroup.Item>
        </div>
      </ListGroup>
    
      </Card> 
  </div>
    )
};


// Prop Types
Player.propTypes = {
   name: PropTypes.string,
   team: PropTypes.string,
   nationality: PropTypes.string,
   jerseyNumber: PropTypes.number,
   age: PropTypes.number,
   img: PropTypes.string
 };

 



export default Player;