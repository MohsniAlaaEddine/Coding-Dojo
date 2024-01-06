import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='navbar navbar-expand-lg bg-body-tertiary d-flex flex-column border'>
            <h2>Notes</h2>
            <div className='d-flex gap-5'>
                <Link  to={'/home'}>Home</Link>
                <Link  to={'/notes/new'}>Create</Link>
            </div>
        </div>
    )
}

export default Navbar