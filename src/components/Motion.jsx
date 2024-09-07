import { useContext } from 'react'
import { motion } from 'framer-motion'

import { MusicFyContext } from '../context/MusicFyContext'

const animations = {
    initial: { opacity: 0, display: 'none' },
    animate: { opacity: 1, display: 'block' },
    exit: { opacity: 0, display: 'none' },
}

const Motion = ({ children }) => {
    const context = useContext(MusicFyContext)

    return (
        <motion.div
            style={{
                display: context.drawerOpen ? 'block' : 'none'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 5.5 }}
        >
            {children}
        </motion.div>
    )
}

export default Motion