import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import LeftBar from './components/leftBar/LeftBar';
import BottomNavbar from './components/BottomNavigation';
import Home from './pages/Home';
import Search from './pages/Search';
import Library from './pages/Library';
import Favorites from './pages/Favorites';
import Register from './pages/Auth/Register';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1DB954',
    },
    background: {
      default: '#121212',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <LeftBar isLoggedIn={false} />

        <Box sx={{textAlign: 'center'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/library" element={<Library />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Box>

        <BottomNavbar />
      </Router>
    </ThemeProvider>
  );
}

export default App;