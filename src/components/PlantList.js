import React from 'react';
import AvailablePlant from './AvailablePlant'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

export default class PlantList extends React.Component {
    render() { 
        return(
            <div> 
                <Container>
                    <Row>
                <CardDeck>
                {this.props.plants.plants.map(plant => 
                <Col>
                <Card key={plant.id} style={{ width: '18rem' }} border="header" bg="light">
                    <Card.Body >
                        <Card.Title>{plant.name}</Card.Title>
                        <Card.Text>{plant.description}</Card.Text>
                        <AvailablePlant user_id={plant.user_id}/>
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