import React from 'react';
import {connect} from 'react-redux';
import {addPlant} from '../actions/addPlant'

class PlantInput extends React.Component {
    state = {name: '', description: ''}

    handleOnChange = (event) => {
       this.setState({
           [event.target.name]: event.target.value,
       })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        const currentState = (this.state)
        if(localStorage.token != "") {
            currentState.user_id = localStorage.token //adding user ID to plant
            this.props.addPlant(currentState) }
            else { console.log("not logged in!")}
    }
    
    render() {
        return(
            <div>
                <br></br>
                <form onSubmit={this.handleOnSubmit}>
                    <p>Add a New Plant:</p>
                    <input type='text' placeholder='Name' value={this.state.name} name='name' onChange={this.handleOnChange}/>
                    <input type='text'placeholder='Description' value={this.state.description} name='description' onChange={this.handleOnChange}/>
                    <input type='submit' value='Add Plant'/>
                    <br></br>
                    <br></br>
                </form>
            </div>
        )
    }
}


export default connect(null, {addPlant})(PlantInput)