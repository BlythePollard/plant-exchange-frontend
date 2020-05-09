import React from 'react';
import { Link } from 'react-router-dom';
import {findOwner} from '../actions/findOwner'
import {connect} from 'react-redux';


class AvailablePlant extends React.Component {

    handleOnClick = event => {
        this.props.findOwner(this.props.user_id)
        //need to figure out how to access user by plant ID here!
    }

    render() { 
        return(
            <div>
            <Link onClick={this.handleOnClick}>I'll take it!</Link> 
            </div>
        )
    }
}

export default connect(null, {findOwner})(AvailablePlant)