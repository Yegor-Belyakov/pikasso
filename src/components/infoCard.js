import React from 'react'
import { Card} from 'react-bootstrap'

function InfoCard({user}) {
  return (
   
        <Card  style={{ width: '18rem',  marginBottom: '1rem'}}>
       
       <Card.Body >
         <Card.Title>{user.name}</Card.Title>
         <Card.Subtitle className="mb-2 text-muted">{user.username}</Card.Subtitle>
         <Card.Text>{user.adress}
         </Card.Text>
         <Card.Text>{user.email}
         </Card.Text>
        
     
       </Card.Body>
     
     </Card>



 
  )
}

export default InfoCard