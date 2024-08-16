import React, { createContext, useCallback, useContext, useEffect, useReducer, useState } from 'react';

const Auth = createContext();
const isauth = localStorage.getItem('isAuthenticated') === 'true';
const user = JSON.parse(localStorage.getItem('user')) || {};
const initialState = { isAuthenticated: isauth, user };

const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'SET_LOGGED_IN':
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('user', JSON.stringify(payload.user));
            return { isAuthenticated: true, user: payload.user };

        case "SET_PROFILE":
            return { ...state, user: payload.user };

        case "SET_LOGGED_OUT":
            localStorage.setItem('isAuthenticated','false');
            localStorage.removeItem('user');
            return { isAuthenticated: false, user: {} };

        default:
            return state;
    }
};





export default function AuthContext({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isAppLoading, setIsAppLoading] = useState(true);

    const readProfile = useCallback(() => {
        setTimeout(() => {
            setIsAppLoading(false);
        }, 500);
    }, []);

    useEffect(() => { readProfile(); }, [readProfile]);

    const handleLogout = () => {
        dispatch({ type: 'SET_LOGGED_OUT' });
    };

    return (
        <Auth.Provider value={{ ...state, isAppLoading, setIsAppLoading, handleLogout, dispatch }}>
            {children}
        </Auth.Provider>
    );
}

export const useAuthContext = () => useContext(Auth);
