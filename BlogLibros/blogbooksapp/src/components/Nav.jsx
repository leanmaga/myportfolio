import React from 'react'
import {  NavLink } from 'react-router-dom'
import './nav.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'

const Navbar = () => {
  return (
    <div>

        <ul className="Navbar">
            <li className="nav-item">
                <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`} to="/about">About</NavLink>
            </li>
            <div className="vr"></div>
            <li className="nav-item ">
                <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`} to="/contacto">Contact</NavLink>
            </li>
            <div className="vr"></div>
            <li className="nav-item ">
                <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`} to="/proyectos">Works</NavLink>
            </li>
                    
        </ul>
                
    </div>
  )
}

export default Navbar