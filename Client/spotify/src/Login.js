import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

function Login() {
    return (
        <div>
           <MuiThemeProvider>
               <div>
                   <AppBar title='Login'/>
                   <TextField hintText='Your username' floatingLabelText='Username' />
                   <br />
                   <TextField hintText='Your password' floatingLabelText='Password'/>
                    <br />
                   <RaisedButton label='Submit' primary={true}/>
               </div>
           </MuiThemeProvider>
        </div>
    )
}

export default Login;