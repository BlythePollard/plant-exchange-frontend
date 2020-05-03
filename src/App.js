import React from 'react';
import {connect} from 'react-redux';
import {fetchPlants} from './actions/fetchPlants'
import PlantsContainer from './containers/PlantsContainer'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <PlantsContainer />
      </div>
    
    );
  }
}

export default App;

//connect(null, {fetchPlants})(App); 
//connect is saying hey, i want access to this part of the store
//automatically calling dispatch for us on return value of fetchPlants
//function that sends action object to reducer is dispatch, which is called in connect
//essentially calling store.dispatch(action)
//we use thunk when we want to make asynchronous request to backend
//without thunk, connect is expecting an action returned from the action,
//but when we make fetch request, it takes some time & connect expects immediate return
//thunk allows connect to call dispatch from inside fetch/action create, 
//allows us to wait for request to finish before dispatching anything to reducer


//mapstatetoprops gives us access to what's in store
//mapdispatchtoprops gives us ability to pass down functions
