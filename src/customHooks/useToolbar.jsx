import { useState } from 'react'

const useToolbar = () => {
    const [open, setOpen] = useState(false)

    const setOpenHandler = () => {
        setOpen(!open)
    }

    return {
        open,
        setOpenHandler
    }
}

export default useToolbar