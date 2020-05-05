import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {rootReducer} from './reducers/index'
import App from './App';

//set up store
//any component or child that we wrap in provider will have access to 
//redux store- wrap app in provider

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}> 
      <App /> 
   </Provider>,
  document.getElementById('root')
);
///wrap full app in router component