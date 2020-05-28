import React, { Component } from 'react'
import './SignIn.scss'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

export class SignIn extends Component {

    constructor(props) {

        super(props);

        this.state = {
            email: '',
            password: ''
        } 

        this.handleSignInWithGoogle = this.handleSignInWithGoogle.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSignInWithGoogle(e) {
        e.preventDefault();

        signInWithGoogle()
        .then(resp => {
            console.log(resp);
        })
        .catch(err => {
            console.log(err);
        })

        this.setState({
            email: '',
            password: ''
        })
    }

    handleSignIn = async e => {
        e.preventDefault();

        const { email, password } = this.state;

        try {

            await auth.signInWithEmailAndPassword(email, password);
            
            this.setState({
                email: '',
                password: ''
            })

        } catch (error) {
            console.error(error);
        }
    }

    handleChange(e) {

        const { value, name } = e.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>

                <form onSubmit={this.handleSignIn}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        required
                        handleChange={this.handleChange}
                        label="Email"
                    />
                  
                    <FormInput
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        required 
                        handleChange={this.handleChange}
                        label="Password"
                    />

                    <div className="buttons">
                        <CustomButton 
                            type='submit'
                        >
                            Sign In
                        </CustomButton>

                        <CustomButton 
                            type='button'
                            isGoogleSignIn={true}
                            onClick={this.handleSignInWithGoogle}
                        >
                            Sign In With Google
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn
