import { IconButton } from '@mui/material';

const AppIcon = () => (
    <IconButton sx={{ p: 0 }}>
        <img
            src='https://i.pinimg.com/736x/64/74/d0/6474d09867070c565440fc3e609436fd.jpg'
            alt='App Icon'
            style={{
                width: 60,
                height: 60,
                borderRadius: '50%',
            }}
        />
    </IconButton>
);

export default AppIcon;