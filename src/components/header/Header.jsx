import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <section id='header'>
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sunil Kumar Abbineni</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        
        <div className="me">
          <img src={ME} alt="me"/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
    </section>
  )
}

export default Header