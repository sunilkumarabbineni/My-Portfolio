import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Desgin</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Wireframing</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>User testing</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Prototyping</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>UI design</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive web design</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Information architecture</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Javascript</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>HTML 5 & CSS</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>React JS</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Java (Spring Boot)</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>MySQL</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Node.Js</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT*/}

        <article className='service'>
          <div className="service__head">
            <h3>Production & Maintance</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>API Development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>E-commerce Development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Hosting</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Git, Gitlab and Github</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Database Management</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>CI/CD pipeline</p>
            </li>
          </ul>
        </article>
        {/* END OF Content Creation */}
      </div>

    </section>
  )
}

export default Services