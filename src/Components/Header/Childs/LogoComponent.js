import React from 'react'
import { NavLink } from 'react-router-dom'

function LogoComponent() {
  return (
    <div>
        <div className="nav-left">
        <NavLink to='/'>
            <div id="nav-logo">
            <a href="#" className="nav-logo-link"></a>
            <a href="#" className="nav-logo-tagline">Try Prime</a>
            </div>
        </NavLink>
        </div>
    </div>
  )
}

export default LogoComponent