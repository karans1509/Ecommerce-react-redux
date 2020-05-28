import React, { Component } from 'react'
import './AuthPage.scss'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from "../../components/SignUp/SignUp";


export class AuthPage extends Component {
    render() {
        return (
            <div className="sign-in-and-sign-up">
                <SignIn />
                <SignUp />
            </div>
        )
    }
}

export default AuthPage
