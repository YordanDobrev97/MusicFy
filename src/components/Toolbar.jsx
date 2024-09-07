import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from '@mui/material'
import { AppRegistration, Home, Info, Login } from '@mui/icons-material'

import { MusicFyContext } from '../context/MusicFyContext'

const menu = [
    { text: 'Home', icon: <Home /> },
    { text: 'About', icon: <Info /> },
    { text: 'Login', icon: <Login /> },
    { text: 'SignUp', icon: <AppRegistration /> },
]

const Toolbar = () => {
    const { drawerOpen, setOpenToolbar } = useContext(MusicFyContext)

    return (
        <motion.div
            style={{
                display: drawerOpen ? 'block' : 'none'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 5.5 }}
        >
            <Drawer open={drawerOpen} onClose={() => { setOpenToolbar() }}>
                <Box sx={{ width: 200 }}>
                    <List>
                        {menu.map((menuItem) => (
                            <Link key={menuItem.text} to={`/${menuItem.text.toLowerCase()}`} onClick={() => setOpenToolbar()}>
                                <ListItem>
                                    <ListItemButton>
                                        {menuItem.icon}
                                        <ListItemText>{menuItem.text}</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </motion.div>
    )
}

export default Toolbar