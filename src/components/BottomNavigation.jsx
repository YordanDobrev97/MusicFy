import { useState } from 'react'
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';

import { bottomNavbarStyles } from './styles/styles';

const navItems = [
    { label: 'Home', icon: <HomeIcon />, path: '' },
    { label: 'Search', icon: <SearchIcon />, path: '/search' },
    { label: 'Library', icon: <LibraryMusicIcon />, path: '/library' },
    { label: 'Favorites', icon: <FavoriteIcon />, path: '/favorites' },
];

function BottomNavbar() {
    const [bottomNavValue, setBottomNavValue] = useState(0);

    return (
        <Box>
            <BottomNavigation
                value={bottomNavValue}
                onChange={(_, newValue) => setBottomNavValue(newValue)}
                showLabels
                sx={bottomNavbarStyles}
            >
                {navItems.map((item, index) => {
                    return (
                        <BottomNavigationAction
                            label={item.label}
                            icon={item.icon}
                            component={Link}
                            to={item.path}
                            sx={{
                                color: bottomNavValue === index ? '#ffffff' : '#bdbdbd',
                                '&.Mui-selected': {
                                    color: '#ffffff',
                                },
                            }} />
                    )
                })}
            </BottomNavigation>
        </Box>
    )
}

export default BottomNavbar;