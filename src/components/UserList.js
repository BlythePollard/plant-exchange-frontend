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


        return(
            <div>
               <PlantCards userPlants={this.props.login}/>
               <PlantInput />
            </div>
        )
    }
}

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