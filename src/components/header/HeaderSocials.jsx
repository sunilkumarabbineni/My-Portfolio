import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/sunil-kumar-abbineni/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/sunilkumarabbineni" target="_blank" rel="noreferrer"><FaGithub/></a>
        {/* <a href="https://dribbble.com" target="_blank"><FiDribbble/></a> */}
    </div>
  )
}

export default HeaderSocials