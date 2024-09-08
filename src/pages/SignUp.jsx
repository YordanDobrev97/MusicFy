import React from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { Container, Box, Typography } from '@mui/material'

import { SIGN_UP_USER } from '../graphql/mutations'
import TextField from '../components/TextField'
import Button from '../components/Button'

function CustomForm() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [signUpUser, { loading, error }] = useMutation(SIGN_UP_USER)

  const onSubmit = async (data) => {
    try {
      const response = await signUpUser({ 
        variables: { email: data.email, password: data.password }
      })

      console.log('User created:', response.data.createUser)
    } catch (error) {
      console.error('Error creating user:', error)
    }
  }

  return (
    <Container maxWidth='md'>
      <Box
        component='form'
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          mt: 5,
          p: 4,
          borderRadius: '12px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#ffffff',
        }}
      >
        <Typography variant='h4' sx={{ textAlign: 'center', mb: 2, color: '#42a5f5' }}>
          Sign Up
        </Typography>

        <TextField
          fullWidth
          label='Email'
          margin='normal'
          type='email'
          {...register('email', { required: 'Email is required' })}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ''}
        />

        <TextField
          fullWidth
          label='Password'
          margin='normal'
          type='password'
          {...register('password', { 
            required: 'Password is required', 
            minLength: { value: 6, message: 'Password must be at least 6 characters long' }
          })}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ''}
        />

        <Button
          type='submit'
          fullWidth
          sx={{ mt: 2 }}
        >
          Sign Up
        </Button>
      </Box>
    </Container>
  );
}

export default CustomForm
