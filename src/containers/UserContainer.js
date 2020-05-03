// // //a container renders other components and pass them any data required
// // //can have other functions (componentdidmount etc)
// // //typically are class components (often will need state or functions)

// import React from 'react';
// import {connect} from 'react-redux';
// import {fetchUser} from '../actions/fetchUser'
// import UserList from '../components/UserList'


// class UsersContainer extends React.Component {

//     // componentDidMount() {
//     //     this.props.fetchUsers()
//     // }

//     render() {
//         console.log(this.props)
//         return (
//             <div>
//                <UserList users={this.props.users}/>
//             </div>
//         )
//     }

// }

// const mapStateToProps = state => { //this is state from redux store
//     return {
//          users: state.users
//     }
// }

// export default connect(mapStateToProps, {fetchUser})(UsersContainer)