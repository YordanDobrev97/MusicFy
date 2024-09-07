import React from 'react'
import { useForm } from 'react-hook-form'
import { Container, Box, Typography } from '@mui/material'

import TextField from '../components/TextField'
import Button from '../components/Button'

function CustomForm() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log('Form Data:', data)
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
