//this could just be functional, but gonna make it a class
//component for sake of requirements

import React from 'react';

export default class PlantList extends React.Component {
    render() {
        console.log(this.props.plants)
        return(
            <div>
                {this.props.plants.map(plant => 
                <li key={plant.id}>
                    {plant.name}
                    <ul>{plant.description}</ul>
                </li> //plus link to each show page via user
                )}
            </div>
        )
    }
}

