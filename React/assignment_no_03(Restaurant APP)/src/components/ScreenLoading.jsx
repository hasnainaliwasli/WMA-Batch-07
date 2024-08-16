import React from 'react'
import { useAuthContext } from '../context/AuthContext'

export default function ScreenLoading() {

    const { isAppLoading } = useAuthContext()
    return (
        <div className='loader-container'>
            <span className='loader'>........</span>

        </div>
    )
}
