import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions/fetchUser'
import Navbar from '../components/Navbar'


class UserLogin extends React.Component {
    state = { username: ''}

    handleOnChange = (event) => {
        this.setState({
            username: event.target.value,
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        const response = this.props.fetchUser(this.state.username, this.props.history)
    }

    render() {
        return( 
            <div>
                <Navbar />
                <br></br>
               <form onSubmit={this.handleOnSubmit}> 
                <input 
                    type="username" 
                    placeholder="username" 
                    value={this.state.username}
                    onChange={this.handleOnChange}
                />
                 <input type='submit' value='Login'/>
               </form>
            </div>
        )
    }
}

export default connect(null, {fetchUser})(UserLogin)