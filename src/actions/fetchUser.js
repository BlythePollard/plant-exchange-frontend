export const fetchUser = (data) => {
    return (dispatch) => {
     fetch('http://localhost:3000/api/v1/users')
     .then(resp => resp.json())
     .then(console.log(resp))
     //.then(data => dispatch({
    //     //dispatch an action to our reducer with the object below, update redux store accordingly
      
    //     type: 'FETCH_USERS',
    //     payload: data
    // }))
    }
  }
