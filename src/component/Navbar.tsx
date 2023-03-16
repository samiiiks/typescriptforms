import React from 'react'
import { Link } from 'react-router-dom'
import { FunctionComponent } from 'react';
import '../App.css'

const Navbar:FunctionComponent = () => {
    return (
        <div className='nav'>
            <Link to='/home' className='navlink' >Home</Link>
            <Link to='/about' className='navlink'>About</Link>
            <Link to='/login' className='navlink'>Log in</Link>
        </div>
    )
}

export default Navbar
