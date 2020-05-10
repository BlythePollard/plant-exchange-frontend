import React from 'react';
import { connect } from 'react-redux';
import {deletePlant} from '../actions/deletePlant'
import Navbar from '../components/Navbar'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'


class PlantCards extends React.Component {

    handleDelete = (plant) => {
        this.props.deletePlant(plant.id, plant.user_id)
    }

    render() { 
        console.log(this.props)
        return(
            <div> 
                <Navbar/>
                <CardDeck>
                {this.props.userPlants.map(userPlant => 
                
                <Card border="header" bg="light" key={userPlant.id}>
                    <Card.Body>
                        <Card.Title>{userPlant.name}</Card.Title>
                        <Card.Text>{userPlant.description}</Card.Text>
                        <button onClick={() => this.handleDelete(userPlant)}>Delete</button>
                    </Card.Body>
                </Card>
                 )}
                 </CardDeck>
            </div>
        )
    }
}

export default connect(null, {deletePlant})(PlantCards)

