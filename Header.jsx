import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/IMG_2796-removebg-preview.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Khushi Dadheech</h1>
        <h5 className="text-light">B.Tech IT II year Student</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header