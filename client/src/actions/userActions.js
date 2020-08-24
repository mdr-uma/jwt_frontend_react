export const loginUser = (payload) => {
    console.log("payload", payload)
    return (dispatch) => {
        fetch("http://localhost:3000/login", {
            method: "POST", 
            credentials: "include", 
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({user: payload})
        })
        .then(response => response.json())
        .then(response => console.log("response", response))
        .then(data => dispatch({type: 'LOGIN_USER', user: data}))
        
    }
   
}

export const createUser = (payload) => {
    return (dispatch) => {
        fetch("http://localhost:3000/users", {
            method: "POST", 
            credentials: "include", 
            headers: {
                "Accept": "application/json", 
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({user: payload})
        })
        .then(response => response.json())
        .then(data => dispatch({type: 'CREATE_USER', user: data}))
    }
}