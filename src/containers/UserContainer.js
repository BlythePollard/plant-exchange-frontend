import React from 'react';
import PlantInput from '../components/PlantInput'
import {connect} from 'react-redux';
import PlantCards from '../components/PlantCards'
import {getProfileFetch} from '../actions/getProfileFetch'



class UserList extends React.Component {

    componentDidMount = () => {
        this.props.getProfileFetch()
    }

    render() {
        console.log(this.props.login.user.plants)
        return(
            <div>
          
          
          <PlantCards userPlants={this.props.login.user.plants}/>

               <PlantInput />
            </div>
        )
    }
}
//<PlantCards userPlants={this.props.login.user.plants}/>

  //     <div> 
            //     {this.props.login.user.plants.map(userPlant => 
            //     <li key={userPlant.id}>
            //         {userPlant.name}
            //         <ul>{userPlant.description}</ul>
            //     </li> 
            //     )}
            // </div>
const mapStateToProps = state => {
    console.log(state.login.user.plants)
    return {
         login: state.login,
         plants: state.login.user.plants
    }
}

export default connect(mapStateToProps, {getProfileFetch})(UserList)

// {userPlants: {…}}
// userPlants:
// login:
// user:
// id: 5
// plants: (5) [{…}, {…}, {…}, {…}, {…}]

//maybe onComponentMount, 