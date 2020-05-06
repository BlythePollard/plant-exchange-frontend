//recieves user info as props

import React from 'react';

export default class PlantCards extends React.Component {

    render() { 
        //console.log(this.props.userPlants.login.user)
        //console.log(this.props.userPlants.login.user.plants)
        return(
            <div> 
                {/* {this.props.userPlants.login.user.map(userPlant => 
                <li key={userPlant.id}>
                    {userPlant.name}
                    <ul>{userPlant.description}</ul>
                </li> 
                )} */}
            </div>
        )
    }
}


// {userPlants: {…}}
// userPlants:
// login:
// user:
// id: 5
// plants: (5) [{…}, {…}, {…}, {…}, {…}]