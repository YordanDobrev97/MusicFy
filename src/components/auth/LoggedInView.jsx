import { IconButton, Typography, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const LoggedInView = ({ user }) => (
    <Box display='flex' flexDirection='column' alignItems='center' mb={4}>
        <IconButton>
            <AccountCircleIcon sx={{ fontSize: 60, color: 'white' }} />
        </IconButton>
        <Typography variant='h6' sx={{ color: 'white', mt: 2 }}>
            {user.name}
        </Typography>
        <Typography variant='body2' sx={{ color: 'gray' }}>
            {user.email}
        </Typography>
    </Box>
);

export default LoggedInView;