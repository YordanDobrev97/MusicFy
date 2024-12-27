import { Drawer, Divider, Box } from '@mui/material';

import LoggedInView from '../auth/LoggedInView';
import LoggedOutView from '../auth/LoggedOutView';
import { drawerStyles } from '../styles/styles';

function LeftBar({ isLoggedIn, user }) {
    return (
        <Drawer
            anchor='left'
            open
            variant='permanent'
            sx={drawerStyles}
        >
            <Box p={2} display='flex' flexDirection='column' justifyContent='space-between' height='100%'>
                {isLoggedIn ? (
                    <LoggedInView user={user} />
                ) : (
                    <LoggedOutView />
                )}
                <Divider sx={{ backgroundColor: 'gray' }} />
            </Box>
        </Drawer>
    );
}

export default LeftBar;