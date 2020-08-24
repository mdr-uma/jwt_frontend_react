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
                <Navbar />
                <SignUp createUser={this.props.createUser} />
            </div>
        )
    }
}


export default connect(null, {createUser})(MainContainer)
