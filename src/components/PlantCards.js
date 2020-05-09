import React from 'react';
import { connect } from 'react-redux';
import {deletePlant} from '../actions/deletePlant'

class PlantCards extends React.Component {

    handleDelete = (plant) => {
        this.props.deletePlant(plant.id, plant.user_id)
    }

    render() { 
        console.log(this.props)
        console.log(this.props.userPlants)
        return(
            <div> 
                {this.props.userPlants.map(userPlant => 
                <li key={userPlant.id}>
                    {userPlant.name}
                    <ul>{userPlant.description}</ul>
                <button onClick={() => this.handleDelete(userPlant)}></button>
                </li> 
                )}
            </div>
        )
    }
}

export default connect(null, {deletePlant})(PlantCards)

//delete plants from here?