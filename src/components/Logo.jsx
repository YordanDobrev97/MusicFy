import { useContext } from 'react'

import {
    IconButton,
    Typography
} from '@mui/material'
import { Menu } from '@mui/icons-material'

import { MusicFyContext } from '../context/MusicFyContext'

const Logo = () => {
    const context = useContext(MusicFyContext)

    const showDrawer = () => {
        context.setOpenToolbar(!context.drawerOpen)
    }

    return (
        <IconButton onClick={showDrawer}>
            <Menu sx={{color: 'white'}}/>
            <Typography variant='h5' color='white'>MusicFy</Typography>
        </IconButton>
    )
}

export default Logo