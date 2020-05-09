import React from 'react';
import {connect} from 'react-redux';
import PlantList from '../components/PlantList';
import {fetchPlants} from '../actions/fetchPlants'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';


class PlantsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPlants()
    }

    render() {
        return (
            <div>
                <PlantList plants={this.props.plants}/>
                <LinkContainer to="/login">
                 <Button variant="primary">Login</Button>
                </LinkContainer>

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