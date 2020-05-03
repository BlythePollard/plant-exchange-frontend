// //responsible for updating user-related parts of store
// //function that takes in previous state and action, then determines what to do

// export default function userReducer(state = {users : []}, action) {
//     return state
// }
// export default function userReducer(state = {user: ''}, action) {
//     switch(action.type) {
//         case 'FETCH_USER': 
//             return {
//                 users: action.payload
//                 //payload is an array of objects
//                 //i want accounts to appoint to array from fetch request
//             }
//         default:
//             return state    
//     }
// //     //job is to update or store anything that has to do with plants
// // }