import React from 'react';

export default class PlantCards extends React.Component {

    render() { 
        return(
            <div> 
                {this.props.userPlants.map(userPlant => 
                <li key={userPlant.id}>
                    {userPlant.name}
                    <ul>{userPlant.description}</ul>
                </li> 
                )}
            </div>
        )
    }
}
