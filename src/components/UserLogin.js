import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions/fetchUser'

class UserLogin extends React.Component {
    state = { username: ''}

    handleOnChange = (event) => {
        this.setState({
            username: event.target.value,
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.fetchUser(this.state.username)
        window.location.href = '/userhome'
    }

    render() {
        return( 
            <div>
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


//current_user available throughout backend
//form for username, sends to backend(fetch/post), backend returns data or error, save 
//Globetrotter videos 1-3