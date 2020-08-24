import React, { Component } from 'react'
import SignUp from '../components/SignUp'
import { connect } from 'react-redux'
import {createUser} from '../actions/userActions'
import Navbar from '../components/Navbar'
class MainContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <p>Hi and Welcome</p>
                You are in the main component
            </div>
        )
    }
}


export default connect(null, {createUser})(MainContainer)
