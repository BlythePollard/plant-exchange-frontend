//this could just be functional, but gonna make it a class
//component for sake of requirements

import React from 'react';
import AvailablePlant from './AvailablePlant'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

export default class PlantList extends React.Component {

    render() { 

        return(
            <div> 
                <CardDeck>
                {this.props.plants.plants.map(plant => 
                
                <Card border="header" bg="light" key={plant.id}>
                    <Card.Body>
                        <Card.Title>{plant.name}</Card.Title>
                        <Card.Text>{plant.description}</Card.Text>
                        <AvailablePlant user_id={plant.user_id}/>
                    </Card.Body>
                </Card>
                
                 )}
                 </CardDeck>
            </div>
        )
    }
}

                {/* {this.props.plants.plants.map(plant => 
                <li key={plant.id}>
                    {plant.name}
                    <ul>{plant.description}</ul>
                    <ul><AvailablePlant user_id={plant.user_id}/></ul>
                </li> //plus link to each show page via user, only showing plants that are available
                )} */}