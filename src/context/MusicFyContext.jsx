import { createContext } from 'react'
import useToolbar from '../customHooks/useToolbar'

const MusicFyContext = createContext({
    drawerOpen: false,
    setOpenToolbar: () => {}
})

const MusicFyProvider = ({ children }) => {
    const toolbar = useToolbar()

    return (
        <MusicFyContext.Provider value={{ drawerOpen: toolbar.open, setOpenToolbar: toolbar.setOpenHandler }}>
            {children}
        </MusicFyContext.Provider>
    )
}

export {
    MusicFyContext,
    MusicFyProvider
}