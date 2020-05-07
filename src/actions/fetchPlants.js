import { FETCH_PLANTS } from './types'

export function fetchPlants() {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/landingpage')
    .then(resp => resp.json())
    .then(data => dispatch({
        type: FETCH_PLANTS,
        payload: data
    }))
    }
  }
  
