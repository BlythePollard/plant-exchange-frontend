import { LOGIN_USER } from './types'

export const fetchUser = (data) => {
    console.log(data)
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/sessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json()) //this is working! Data coming through
        .then(user => dispatch({ //somewhere between here and loginReducer is issue?
            type: LOGIN_USER,
            payload: user
        }))
    }
}
