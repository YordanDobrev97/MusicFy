import React, { Component } from 'react';
import SideBarComponent from '../Home/Home';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
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

    render() {
        return (
            <div>
                <div>
                    <p className='h4 mb-4'>Login</p>
                </div>

                <form className='text-center border border-light d-flex p-2 d-flex justify-content-center' onSubmit={this.loginUser} >
                    <div className='form-row mb-4'>
                        <input type='email' name='name' value={this.state.email} className='form-control mb-6 w-50' placeholder='E-mail' onChange={this.updateEmail} />
                        <input type='password'  name='password' value={this.state.password} className='form-control mb-4 sm-2 w-50' placeholder='Password' onChange={this.updatePassword}  />

                        <button className='btn btn-info btn-block my-4' type='submit'>Login</button> 
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;