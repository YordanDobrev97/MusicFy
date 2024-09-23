import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { Container, Box, Typography } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'

import authShema from '../validationSchemas/authSchema'
import { SIGN_UP_USER } from '../graphql/mutations'
import TextField from '../components/TextField'
import Button from '../components/Button'
import constants from '../constants'
import { Toast } from '../toastConfig/toastConfig'
import { formBoxStyles } from '../styles/styles'

function SignUp() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(authShema),
  })
  
  const handleSuccess = useCallback(() => {
    toast.success('Registration successful! Redirecting to login...')
    setTimeout(() => navigate('/login'), constants.REDIRECT_TIMEOUT)
  }, [])

  const handleError = useCallback((error) => {
    toast.error(`Error: ${error.message}`)
    console.error('Error creating user:', error)
  }, [])

  const [signUpUser] = useMutation(SIGN_UP_USER, {
    onCompleted: handleSuccess,
    onError: handleError,
  })
  const navigate = useNavigate()

  const onSubmit = useCallback(async (data) => {
    await signUpUser({ variables: { email: data.email, password: data.password } })
  }, [signUpUser])

  return (
    <Container maxWidth='md'>
      <Toast />

      <Box
        component='form'
        onSubmit={handleSubmit(onSubmit)}
        sx={formBoxStyles}
      >
        <Typography variant='h4' sx={{ textAlign: 'center', mb: 2, color: '#42a5f5' }}>
          Sign Up
        </Typography>

        <Controller
          name='email'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label='Email'
              margin='normal'
              type='email'
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />

        <Controller
          name='password'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label='Password'
              margin='normal'
              type='password'
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          )}
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
  )
}

export default SignUp