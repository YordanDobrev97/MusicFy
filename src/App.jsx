import { AppBar, IconButton, Toolbar, ThemeProvider, Typography } from '@mui/material'
import { Menu } from '@mui/icons-material'
import { createTheme } from '@mui/material/styles'

import './index.css'

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
      <AppBar>
        <Toolbar>
          <IconButton>
              <Menu />
              <Typography variant='h6'>MusicFy</Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default App