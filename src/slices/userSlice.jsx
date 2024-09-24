import { createSlice } from '@reduxjs/toolkit'
import { jwtDecode } from 'jwt-decode'

const decodeToken = (token) => {
    try {
        return jwtDecode(token)
    } catch (error) {
        return null
    }
}

const accessToken = localStorage.getItem('access_token')
const initialState = {
    user: accessToken ? { email: decodeToken(accessToken)?.email || null } : null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        clearUser: (state) => {
            state.user = null
        },
    },
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer