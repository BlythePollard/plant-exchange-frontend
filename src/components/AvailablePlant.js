import React from 'react';
import { Link } from 'react-router-dom';
import {fetchUser} from '../actions/fetchUser'
import {connect} from 'react-redux';

class AvailablePlant extends React.Component {

    handleOnClick = event => {
        console.log(`this belongs to user ${this.props.user_id}`)
        //this.props.fetchPlantOwner(this.props.user_id)
        //need to figure out how to access user by plant ID here!
    }

    render() { 
        console.log(this.props)
        return(
            <div>
            <Link onClick={this.handleOnClick}>I'll take it!</Link> 
            </div>
        )
    }
}

export default connect(null, {fetchUser})(AvailablePlant)