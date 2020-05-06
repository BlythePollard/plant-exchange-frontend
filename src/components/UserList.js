import React from 'react';
import PlantInput from '../components/PlantInput'
import {connect} from 'react-redux';
import PlantCards from '../components/PlantCards'

class UserList extends React.Component {

    render() {
        localStorage.setItem('userInfo', this.props)
        localStorage.getItem('userInfo')
        // console.log(this.props)
        // console.log(this.props.login.user)
        // console.log(this.props.login.user.plants)
        

        return(
            <div>
               <PlantCards userPlants={this.props.login}/>
               <PlantInput />
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
         login: state.login
    }
}

export default connect(mapStateToProps)(UserList)

// {userPlants: {…}}
// userPlants:
// login:
// user:
// id: 5
// plants: (5) [{…}, {…}, {…}, {…}, {…}]