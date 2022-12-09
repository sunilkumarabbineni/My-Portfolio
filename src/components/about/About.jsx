import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
            <FaAward className='about__icon' />
            <h5>Experience</h5>
            <small>1.5+ Years Working</small>
            </article>

            <article className='about__card'>
            <FiUsers className='about__icon' />
            <h5>Connections</h5>
            <small>300+ Worldwide</small>
            </article>

            <article className='about__card'>
            <VscFolderLibrary className='about__icon' />
            <h5>Projects</h5>
            <small>80+ Completed</small>
            </article>
          </div>

          <p>
          Enthusiastic Electronics & Communication’s engineering graduate, eager to contribute to team success through hard work, 
          attention to detail and excellent organizational skills. Good understanding of Programming and training in the same. 
          Motivated to learn, grow and excel in IT industry. Good at adopting new skills and implementing practical solutions.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About