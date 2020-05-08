//given user id, find user associated with that ID
//could be a user show action in users controller
import { FIND_OWNER } from './types'
  
  export const findOwner = (user_id) => { 
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${user_id}`)
        .then(resp => resp.json())
        .then(data => 
          alert(`Contact the owner, ${data.username} at ${data.email}`))
        }
  }

  // dispatch({
  //   type: FIND_OWNER,
  //   payload: data })