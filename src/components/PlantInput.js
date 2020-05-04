import React from 'react';
import {connect} from 'react-redux';
import {addPlant} from '../actions/addPlant'

//controlled form to create new plants

class PlantInput extends React.Component {
    state = {name: '', description: ''}

    handleOnChange = (event) => {
       this.setState({
           [event.target.name]: event.target.value,
       })
    }


    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.addPlant(this.state)
    }
    
    render() {
        return(
            <div>
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

//how to add user_id to this plant before saving????