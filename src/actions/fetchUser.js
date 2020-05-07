import { LOGIN_USER } from './types'

export const fetchUser = (user, history) => { 
  
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
                console.log("frontend user fetch error")
                alert("please try again")
                history.push('/login')
            } else {
                localStorage.setItem("token", data.id)
                dispatch(loginUser(data))
                history.push('/userhome') //would love to reroute here to keep it secret! how to do this??
             }
        })
    }
}
    
    
const loginUser = data => ({
    type: LOGIN_USER,
    payload: data
})
