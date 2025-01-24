import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

// default value of name ,team,age,img,nationality,jers
const Player=({name="Mohamed Salah",team="Liverpool",age=32,img="/playersimg/salah.jpg",nationality="Egyptian",jers=11})=>{
    return (
   <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding:20 }}> 
     <Card style={{ width: '18rem', boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)"  ,transition: "0.3s" ,borderRadius: "10px"}}>
      <Card.Img variant="top" src={img} style={{width:"100%",height:200}} />
      <Card.Body>
         <Card.Title style={{textAlign:'center'}}>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <div style={{ display: 'flex', alignItems: 'center' }}>
            <h5 >Age: </h5> <ListGroup.Item>{age}</ListGroup.Item>
      </div>
       <div style={{ display: 'flex', alignItems: 'center' }}>
           <h5>Nationality: </h5><ListGroup.Item> {nationality}</ListGroup.Item>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
           <h5>Team: </h5> <ListGroup.Item>{team}</ListGroup.Item>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
           <h5>Jersey number: </h5><ListGroup.Item>{jers}</ListGroup.Item>
        </div>
      </ListGroup>
    
      </Card> 
  </div>
    )
}

export default Player;