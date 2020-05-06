import { ADD_PLANT } from './types'

export const addPlant = (data) => {
    const user = localStorage.token
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${user}/plants`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(newPlant => {
            dispatch({
                type: ADD_PLANT,
                payload: newPlant
            })
        })
    }
}


