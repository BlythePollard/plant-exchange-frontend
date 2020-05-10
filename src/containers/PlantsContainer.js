import React from 'react';
import {connect} from 'react-redux';
import PlantList from '../components/PlantList';
import {fetchPlants} from '../actions/fetchPlants'
import Button from 'react-bootstrap/Button';
import Navbar from '../components/Navbar'
import Nav from 'react-bootstrap/Nav'

class PlantsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPlants()
    }

    render() {
        return (
            <div>
                <Navbar />
               <Nav variant="pills">
                   <Nav.Item>
                       <Nav.Link href="/login">
                       <Button variant="primary">Login</Button>
                       </Nav.Link>
                   </Nav.Item>
               </Nav>
                <br></br>
                <PlantList plants={this.props.plants}/>
                <br></br>

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

