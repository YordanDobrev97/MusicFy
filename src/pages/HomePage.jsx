
import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Typography } from '@mui/material'

function HomePage() {
  const user = useSelector((state) => state.user.user)

  return (
    <Box>
      <Typography align='center' variant='h3'>Listening your favorite music here</Typography>
      <p>Logged in: {user && user.email || 'No logged in'}</p>
    </Box>
  )
}

export default HomePage
