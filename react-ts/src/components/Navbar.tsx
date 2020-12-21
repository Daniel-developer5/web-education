import React from 'react'  

import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper purple darken-2" style={{padding: '0 20px'}}>
                <a href="/" className="brand-logo">React + TS</a>
                <ul id="nav-mobile" className="right">
                    <li><NavLink to="/">Todo List</NavLink></li>
                    <li><NavLink to="/about">Info</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}