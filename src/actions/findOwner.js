export const findOwner = (user_id) => { 
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${user_id}`)
        .then(resp => resp.json())
        .then(data => 
          alert(`Contact the owner: ${data.username} at ${data.email}`))
        }
  }