import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { Container, Box, Typography } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'

import { setUser } from '../slices/userSlice'
import { LOGIN_USER } from '../graphql/mutations'
import TextField from '../components/TextField'
import Button from '../components/Button'
import authShema from '../validationSchemas/authSchema'
import constants from '../constants'
import { Toast } from '../toastConfig/toastConfig'
import { formBoxStyles } from '../styles/styles'

function Login() {
  const dispatch = useDispatch()
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(authShema),
  })

  const handleSuccess = useCallback(() => {
    toast.success('Login successful! Redirecting to dashboard...')
    setTimeout(() => navigate('/home'), constants.REDIRECT_TIMEOUT)
  }, [])

  const handleError = useCallback((error) => {
    toast.error(`Error: ${error.message}`)
    console.error('Error creating user:', error)
  }, [])

  const [login] = useMutation(LOGIN_USER, {
    onCompleted: handleSuccess,
    onError: handleError,
  })
  const navigate = useNavigate()

  const onSubmit = useCallback(async (data) => {
    const response = await login({ variables: { email: data.email, password: data.password } })
    localStorage.setItem('access_token', response.data.login)
    dispatch(setUser(data.email))
  }, [login])

  return (
    <Container maxWidth='md'>
      <Toast />

      <Box
        component='form'
        onSubmit={handleSubmit(onSubmit)}
        sx={formBoxStyles}
      >
        <Typography variant='h4' sx={{ textAlign: 'center', mb: 2, color: '#42a5f5' }}>
          Login
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
          Login
        </Button>
      </Box>
    </Container>
  )
}

export default Login