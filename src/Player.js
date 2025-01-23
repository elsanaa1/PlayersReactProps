import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import players from './players';

const Player=(props)=>{
    return (
   <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.children.img} style={{width:200,height:200}} />
      <Card.Body>
        <Card.Title>{props.children.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <h5 style={{display:'inline'}}>Age:</h5> <ListGroup.Item style={{display:'inline'}}>{props.children.age}</ListGroup.Item>
        <h5>Nationality:</h5><ListGroup.Item>{props.children.nationality}</ListGroup.Item>
        <h5>Team:</h5>        <ListGroup.Item>{props.children.team}</ListGroup.Item>
        <h5>Jersey number:</h5><ListGroup.Item>{props.children.jerseyNumber}</ListGroup.Item>
      </ListGroup>
    
      </Card> 
  </div>
    )
}

export default Player;