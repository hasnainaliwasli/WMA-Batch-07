import React, { createContext, useContext } from 'react'

const Auth = createContext()
const initialState = { isAuthenticated: false, user: {} }

const reducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_LOGGED_IN":
            return { isAuthenticated: true, user: payload.user }
        case "SET_PROFILE":
            return { ...state, user: payload.user }
        case "SET_LOGGED_OUT":
            return initialState
        default:
            return state
    }
}



export default function AuthContext() {
    return (
        <div>AuthContext</div>
    )
}

