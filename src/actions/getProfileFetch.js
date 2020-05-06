import { LOGIN_USER } from './types'

export const getProfileFetch = () => {
    return dispatch => {
      const token = localStorage.token;
      if (token) {
        return fetch(`http://localhost:3000/api/v1/users/${token}`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
          .then(resp => resp.json())
          .then(data => {
            if (data.message) {
                localStorage.removeItem("token")
                return data.message
            } else {
              dispatch(loginUser(data))
            }
          })
      }
    }
  }

  const loginUser = data => ({
    type: LOGIN_USER,
    payload: data
})
