const UserReducer = (state = {}, action) => {
    switch(action.type) {
        case "LOGIN_USER": 
            return {user: action.user}
        case "CREATE_USER": 
            return {user: action.user }
        case "SHOW_ERROR": 
            // return {error: action.error}

        default: 
            return state;
    }
}

export default UserReducer

// state = {
//     user: {
//         id: //some number,
//         username: //some username,
//         email: //some email
//     }
// }