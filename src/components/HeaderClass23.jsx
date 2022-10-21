import React from 'react'
import { Link } from 'react-router-dom'
import './headerClass23.css'

const HeaderClass23 = () => {
  return (
    <header className='header-main'>
          <button className="header-btn"><Link to='/' >Home</Link></button>
          <button className="header-btn"><Link to='/dataB'>Data Base</Link></button>
    </header>
  )
}

export default HeaderClass23