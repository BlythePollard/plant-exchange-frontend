import { FETCH_PLANTS } from './types'

export function fetchPlants() {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/landingpage')
    .then(resp => resp.json())
    .then(data => dispatch({
        //dispatch an action to our reducer with the object below, update redux store accordingly
        type: FETCH_PLANTS,
        payload: data
    }))
    }
  }
  
//when action here is returned, dispatch automatically reduces
//but since fetch takes some time, can't return right away, so we 
//need to use dispatch inside action creator using thunk
//return function above is a thunk function
