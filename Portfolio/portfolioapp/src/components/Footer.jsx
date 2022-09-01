import React from 'react'
import Iconfooter from './Iconfooter'
import './footer.css'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <h1>Leandro Magallanes</h1>
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`} to="/">Home</NavLink>
                    </li>
                   
                    <li className="nav-item">
                        <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`} to="/about">About</NavLink>
                    </li>
                </ul>
      <Iconfooter/>
    </div>
  )
}

export default Footer