const UserReducer = (state = {}, action) => {
    switch(action.type) {
        case "LOGIN_USER": 
            return state.user
        

        default: 
            return state;
    }
}

export default UserReducer