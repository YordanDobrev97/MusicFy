import React, { Component } from 'react';
import SideBarComponent from '../Home/Home';
import userService from '../Services/user';
import { Redirect } from 'react-router-dom'
import Form from '../Form/Form';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            isRegister: false
        }
    }

    updateEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    updatePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    registerUser = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        console.log(email);
        
        await userService.register(email, password);

        this.setState({
            isRegister: true
        });
    }

    redirectToLoginAfterRegister = () => {
        if (this.state.isRegister) {
            return <Redirect to='/login'/>
        }
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <p className='h4 mb-4'>Register</p>
                    </div>

                    <form className='text-center border border-light d-flex p-2 d-flex justify-content-center' onSubmit={this.registerUser} >
                        <div className='form-row mb-4'>
                            <input type='email' name='name' value={this.state.email} className='form-control mb-6 w-50' placeholder='E-mail' onChange={this.updateEmail} />
                            <input type='password'  name='password' value={this.state.password} className='form-control mb-4 sm-2 w-50' placeholder='Password' onChange={this.updatePassword}  />

                            <button className='btn btn-info btn-block my-4' type='submit'>Register</button> 
                        </div>
                    </form>
                </div>
                {this.redirectToLoginAfterRegister()}
            </div>
        )
    }
}

export default Register;