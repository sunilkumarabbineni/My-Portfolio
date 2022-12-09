import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import {FaTwitter} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <a href="#footer" className="footer__logo">Sunil Kumar Abbineni</a>
        <ul className="permalink">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.facebook.com/sunilkumar.abbineni/" target='_blank' rel="noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/sunilkumar_abbineni/" target='_blank' rel="noreferrer"><RiInstagramFill /></a>
          <a href="https://twitter.com/a_sk_chowdary" target='_blank' rel="noreferrer"><FaTwitter /></a>
          <a href="https://github.com/sunilkumarabbineni" target='_blank' rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/sunil-kumar-abbineni/" target='_blank' rel="noreferrer"><FaLinkedinIn /></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Sunil Kumar Abbineni. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer