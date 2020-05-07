//this could just be functional, but gonna make it a class
//component for sake of requirements

import React from 'react';
import AvailablePlant from './AvailablePlant'

export default class PlantList extends React.Component {

    render() { 

        return(
            <div> 
                {this.props.plants.plants.map(plant => 
                <li key={plant.id}>
                    {plant.name}
                    <ul>{plant.description}</ul>
                    <ul><AvailablePlant user_id={plant.user_id}/></ul>
                </li> //plus link to each show page via user, only showing plants that are available
                )}
            </div>
        )
    }
}

