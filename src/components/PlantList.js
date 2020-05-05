//this could just be functional, but gonna make it a class
//component for sake of requirements

import React from 'react';
import AvailablePlant from './AvailablePlant'

export default class PlantList extends React.Component {

    render() { //ok so this is rendering before the fetch- this,props.plants undefined
        //but when comment out jsx, this.props.plants returns nothing once, then data second. 
        //has something to do with reducer/store change
        console.log(this.props.plant)
        return(
            <div> 
                {/* {this.props.plants.map(plant => 
                <li key={plant.id}>
                    {plant.name}
                    <ul>{plant.description}</ul>
                    <ul><AvailablePlant isAvailable={plant.available}/></ul>
                </li> //plus link to each show page via user, only showing plants that are available
                )} */}
            </div>
        )
    }
}

