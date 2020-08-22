import React, { Component } from 'react'
import { connect } from 'react-redux'
import {loginUser} from '../actions/userActions'
class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "", 
            // email: ""
            password: ""
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.loginUser({username: this.state.username, password: this.state.password})
        this.setState({
            username: "", 
            password: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleOnChange} />
                    <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleOnChange} />
                    <input type="submit" />
                </form>
                
            </div>
        )
    }
}

export default connect(null, {loginUser})(Login)
