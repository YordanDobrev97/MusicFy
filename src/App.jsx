import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  ThemeProvider,
  Box,
} from '@mui/material'
import { createTheme } from '@mui/material/styles'

import {
  MusicFyProvider
} from './context/MusicFyContext'

import LeftToolbar from './components/Toolbar'
import Logo from './components/Logo'

import './index.css'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const appTheme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "white"
        }
      }
    }
  }
})

const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <MusicFyProvider>
        <BrowserRouter>
          <AppBar position='fixed'>
            <Toolbar>
              <Logo />
            </Toolbar>
            <LeftToolbar />
          </AppBar>

          <Box component='main' className='main-content'>
            <Routes>
              <Route path='/' element={<Navigate to='/home' />}/>
              <Route path='/home' element={<HomePage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </MusicFyProvider>
    </ThemeProvider>
  )
}

export default App