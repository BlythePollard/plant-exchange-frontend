import React from 'react';
import {connect} from 'react-redux';
import PlantList from '../components/PlantList';
import {fetchPlants} from '../actions/fetchPlants'
import { Link } from 'react-router-dom';

class PlantsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPlants()
    }

    render() {
        return (
            <div>
                <PlantList plants={this.props.plants}/>
                <Link to="/login" >Login</Link> 
            </div>
        ) 
    }
}

const mapStateToProps = state => {
    return {
         plants: state.plants
    }
}

export default connect(mapStateToProps, {fetchPlants})(PlantsContainer)