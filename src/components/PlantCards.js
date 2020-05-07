//recieves user info as props

import React from 'react';

export default class PlantCards extends React.Component {

    render() { 
        //console.log(this.props.userPlants)
        return(
            <div> 
                {/* {this.props.userPlants.map(userPlant => 
                <li key={userPlant.id}>
                    {userPlant.name}
                    <ul>{userPlant.description}</ul>
                </li> 
                )} */}
            </div>
        )
    }
}


//do i need to do a fetch to fetch user plants???



// {userPlants: {…}}
// userPlants:
// login:
// user:
// id: 5
// plants: (5) [{…}, {…}, {…}, {…}, {…}]