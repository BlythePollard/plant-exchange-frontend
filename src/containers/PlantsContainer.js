import React from 'react';
import {connect} from 'react-redux';
import PlantList from '../components/PlantList';
import PlantInput from '../components/PlantInput'
import {fetchPlants} from '../actions/fetchPlants'
import { Link } from 'react-router-dom';

class PlantsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPlants()
    }

    render() {
        console.log(this.props.plants)
        return (
            <div>
                <PlantInput />
                <PlantList plants={this.props.plants}/>
                <Link to="/login" >Login</Link> 
            </div>
        ) 
    }
}

const mapStateToProps = state => { //this is state from redux store
    return {
         plants: state.plants
    }
}

export default connect(mapStateToProps, {fetchPlants})(PlantsContainer)

//app component can be container component depending on whether you set it up
//as a container- for that project requirement

//fetch plants from backend, add to redux store, add to container here
//import connect to connect to store!
//passing in store to provider gives all components access to redux store
//to tell a component it has access, use connect