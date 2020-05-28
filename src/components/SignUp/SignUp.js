import React, { Component } from 'react'
import './SignUp.scss';
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

export class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            displayName: '',
            confirmPassword: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = async (e) => {

        e.preventDefault();
        const { email, password, displayName, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            return;
        }

        try {

            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({
                email: '',
                password: '',
                displayName: '',
                confirmPassword: ''
            })

        } catch (error) {
            
            console.error(error);
        }
    }

    render() {

        const { email, password, displayName, confirmPassword } = this.state;

        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>

                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        handleChange={this.handleChange}
                        label="Name"
                        required
                    />

                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        handleChange={this.handleChange}
                        label="Email"
                        required
                    />

                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        handleChange={this.handleChange}
                        label="Password"
                        required
                    />

                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />

                </form>
            </div>
        )
    }
}

export default SignUp
