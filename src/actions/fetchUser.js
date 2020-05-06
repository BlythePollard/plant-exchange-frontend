import { LOGIN_USER } from './types'

export const fetchUser = (user) => { 
    return (dispatch) => {
        return fetch('http://localhost:3000/api/v1/sessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({user})
        })
        .then(resp => resp.json()) 
        .then(data => {
            if (data.message) {
                console.log("user not found frontend error") //what do here? not working- would love to 
            } else {
                localStorage.setItem("token", data.id)
                dispatch(loginUser(data))
             }
        })
    }
}
    
    
const loginUser = data => ({
    type: LOGIN_USER,
    payload: data
})
