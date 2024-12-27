import { useContext } from 'react';

import {
    IconButton,
    Typography
} from '@mui/material';
import { Menu } from '@mui/icons-material';

import { MusicFyContext } from '../context/MusicFyContext'

const Logo = () => {
    const context = useContext(MusicFyContext)

    const showDrawer = () => {
        context.setOpenToolbar(!context.drawerOpen)
    }

    return (
        <IconButton onClick={showDrawer}>
            <Menu />
            <Typography variant='h6'>MusicFy</Typography>
        </IconButton>
    )
}

export default Logo;