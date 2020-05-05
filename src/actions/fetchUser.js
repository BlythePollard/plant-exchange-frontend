// export const fetchUser = () => {
//     // return (dispatch) => {
//      fetch('http://localhost:3000/api/v1/users')
//      .then(resp => resp.json())
//      .then(data => dispatch({      
//         type: 'FETCH_USER',
//         payload: data
//     }))
//     // }
//   }

//this is getting ALL USER DATA, we will then need to find user that matches payload!

export const fetchUser = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/sessions', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(user => dispatch({
            type: 'FETCH_USER',
            payload: user
        }))
    }
}
