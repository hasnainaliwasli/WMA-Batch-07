import React from 'react'

export default function footer() {

    let currentYear = new Date().getFullYear()

    return (
        <div>
            <nav className=" navbar-expand-lg bg-primary ">
            <p className='text-center mb-0 text-white py-2'>&copy;{currentYear}. All Rights Reserved by Hasnain Ali</p>
            </nav>
        </div>
    )
}
