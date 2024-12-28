import { useState } from 'react';
import { Typography, Container, CssBaseline } from '@mui/material';

import AppIcon from '../../components/leftBar/AppIcon';
import { Root, Form, Input, LogoContainer, SubmitButton, Text } from './AuthStyles';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
  };

  return (
    <Root>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Form>
          <LogoContainer>
            <AppIcon />
          </LogoContainer>
          
          <Typography variant="h5" component="h1" align="center" color="white">
            Create Account
          </Typography>

          <form onSubmit={handleSubmit}>
            <Input
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <SubmitButton
              type="submit"
              variant="contained"
            >
              Sign Up
            </SubmitButton>
          </form>

          <Text variant="body2">
            Already have an account? <a href="/login" style={{ color: '#1DB954' }}>Log In</a>
          </Text>
        </Form>
      </Container>
    </Root>
  );
}

export default Register;