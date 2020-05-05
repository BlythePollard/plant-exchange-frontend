import React from 'react';
import PlantInput from '../components/PlantInput'
import {connect} from 'react-redux';

class UserList extends React.Component {

    render() {
        console.log(this.props)
        return(
            <div>
                This is UserList
               <PlantInput />
            </div>
        )
    }
}

const mapStateToProps = state => {//this is state from redux store
    console.log(state)
    return {
         user: state.login
    }
}

export default connect(mapStateToProps)(UserList)
