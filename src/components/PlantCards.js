import React from 'react';
import { connect } from 'react-redux';
import {deletePlant} from '../actions/deletePlant'
import Navbar from '../components/Navbar'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CardDeck from 'react-bootstrap/CardDeck'
import Col from 'react-bootstrap/Col'

class PlantCards extends React.Component {

    handleDelete = (plant) => {
        this.props.deletePlant(plant.id, plant.user_id)
    }

    render() { 
        return(
            <div> 
                <Navbar/>
                <Container>
                    <Row>
                <CardDeck>
                {this.props.userPlants.map(userPlant => 
                <Col >
                <Card style={{ width: '18rem' }} border="header" bg="light" key={userPlant.id}>
                    <Card.Body>
                        <Card.Title>{userPlant.name}</Card.Title>
                        <Card.Text>{userPlant.description}</Card.Text>
                        <button onClick={() => this.handleDelete(userPlant)}>Delete</button>
                    </Card.Body>
                </Card> 
                <br></br>
                </Col>
                )}
                 </CardDeck>
                 </Row>
                 </Container>
            </div>
        )
    }
}

export default connect(null, {deletePlant})(PlantCards)

//<Col md={3}>     </Col>

{/* <Row>
            const numberOfRows = Math.ceil(this.props.userPlants.length / 3)

Array(numberOfRows).fill().map((_, rowIndex) => (
    <Row key={rowIndex}>
     {
       beersArray.slice(rowIndex * 3, (rowIndex *3) + 3).map(beer => (
        <Col xs="12" sm="4">
          <BeersListItem key={beer.id} beer={beer} />
        </Col>
      ))}
    </Row>
))
</Row> */}