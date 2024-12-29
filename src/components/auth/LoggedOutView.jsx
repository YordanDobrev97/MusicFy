import { Typography, Box } from '@mui/material';
import LoginIcon from '@mui/icons-material/VpnKey';
import RegisterIcon from '@mui/icons-material/LockOpenOutlined';

import NavigationList from '../leftBar/NavigationList';
import AppIcon from '../leftBar/AppIcon';

const LoggedOutView = () => (
    <Box display='flex' flexDirection='column' alignItems='center' mb={4}>
        <AppIcon />
        
        <Typography variant='h6' sx={{ color: 'white', mt: 2 }}>
            MusicFy
        </Typography>
        <NavigationList
            links={[
                { text: 'Log In', icon: LoginIcon, to: '/login' },
                { text: 'Register', icon: RegisterIcon, to: '/register' },
            ]}
        />
    </Box>
);

export default LoggedOutView;