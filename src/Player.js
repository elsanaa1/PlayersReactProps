import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
// style list item  
const styleItem={ display: 'flex', alignItems: 'center' }
const styleDiv={display: 'flex', justifyContent: 'center', alignItems: 'center', padding:20, color:'#333'}
const cardStyle={ width: '18rem',border:'1px solid #ddd', boxShadow:"2px 2px 10px rgba(0, 0, 0, 0.1)"  ,transition: "0.3s" ,borderRadius: "10px", backgroundColor:'#FDFAF6' }
const imgStyle={width:"100%",height:200, borderRadius: 10}
const titlestyle={textAlign:'center',fontWeight:'bold', fontSize:'18px',padding:10};



const cardItemStyle={ margin:'15px' ,fontSize:'14px',textAlign:'center'}
const labelStyle={ margin:'10 10 20 20' }
// default props values
const Player=({name,team,age,img,nationality,jerseyNumber})=>{
    return (
   <div style={styleDiv}> 
     <Card style={cardStyle}>
      <Card.Img variant="top" src={img}  alt="player image" style={imgStyle} />
      <Card.Body>
         <Card.Title style={titlestyle}> {name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush" style={{backgroundColor:'#E3F4F4' ,margin:5,borderRadius:10,padding:1}}>


   
      <ListGroup.Item style={cardItemStyle} >
      <strong style={labelStyle}>Age:</strong> 
      <span >{age}</span>
       </ListGroup.Item>


       <ListGroup.Item style={cardItemStyle}>
      <strong style={labelStyle}>Nationality: </strong> 
      <span>{nationality}</span>
       </ListGroup.Item>


       <ListGroup.Item style={cardItemStyle}>
      <strong style={labelStyle}>Team:</strong> 
      <span>{team}</span>
       </ListGroup.Item>

       
       <ListGroup.Item style={cardItemStyle}>
      <strong style={labelStyle}>Jersey number:</strong> 
      <span>{jerseyNumber}</span>
       </ListGroup.Item>

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

 // edfault propos 
 Player.defaultProps={
   name:"Liverpool",
   age:32,
   img:"/playersimg/salah.jpg",
   nationality:"Egyptian",
   jerseyNumber:11
 }



export default Player;