import React from 'react';
import { Button } from 'react-bootstrap';
import { Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SideBarComponent from '../Home/Home';

function Register() {
    return (
        <div>
           <MuiThemeProvider>
               <div>
                   <AppBar title='Register'/>
                   <TextField type='text' hintText='Your username' floatingLabelText='Username' />
                   <br />
                   <TextField type='password' hintText='Your password' floatingLabelText='Password'/>
                    <br />
                    <TextField type='config-password' hintText='Config password' floatingLabelText='Confirm Password'/>
                    <br />
                   <RaisedButton label='Submit' primary={true}/>
               </div>
                <br />
                <Button href='/home'>Back</Button>
           </MuiThemeProvider>

           <Route path='/home' component={SideBarComponent} />
        </div>
    )
}

export default Register;