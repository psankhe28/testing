import React from 'react'
import Navbar from './Navbar'
import './style.css'

const Header = () => {
  return (
    <div className="header-main">
        <Navbar/>
        <div className="name">
            <h1><span>Launch</span>with confidence and creativity</h1>
            <p className="details">lorem ipsum dolor sit amet, consectetur</p>
            <a href='/' className="cv-btn">ContactUs</a>
        </div>
    </div>
  )
}

export default Header