import { DELETE_PLANT } from './types'

export const deletePlant = (plant_id, user_id) => {
    console.log(plant_id)
    console.log(user_id)
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/users/${user_id}/plants/${plant_id}`, {
            method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(plant => dispatch({
        type: DELETE_PLANT,
        payload: plant
    }))
    
}
}