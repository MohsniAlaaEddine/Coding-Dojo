import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='navbar navbar-expand-lg bg-body-tertiary d-flex flex-column border'>
            <h2>🚩 Countries 🚩</h2>
            <div className='d-flex gap-5'>
                <Link to={'/'}>Home</Link>
                <Link to={'/country/new'}>Create</Link>
            </div>
        </div>
    )
}

export default Navbar