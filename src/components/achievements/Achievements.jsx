import React from 'react'
import './achievements.css'
import AVTR1 from '../../assets/avatar1.JPG'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
    {
        avatar: AVTR1,
        name: 'Best President RID-3150',
        review: "Elected as the 7th president of Rotaract Club of St. Peter's Engineering College for the year 2019-20. As president I need to Preside over club and board meetings, Appoint committee chairs and members, Conduct club assemblies, Develop a safe environment for youth participants, Work with your DRR and assistant DRR. For my extraordinary contribution Won Best President awarded Rotary International District 3150 in 2019-20."
    },
    {
        avatar: AVTR3,
        name: 'Best New Resource',
        review: "Recieved recognition of excellence for outstanding performance by 'Pathak Mithilesh' - Project Lead Telstra Corporation Limited ANZ. This recognition is for my contribution in Automation Script development and maintainence using Tricentis Tosca and up-skillig in very short time. Currently working on to fullstack web development using Java with SpringBoot and ReactJs and up-skilling in UI/UX desgin."
    },
    {
        avatar: AVTR2,
        name: "Best Technical Project - 'AQUILA-2018'",
        review: "Recieved certificate of excellence for achieving 1st position in Technical Projects conducted during the Annual Techno-Cultural fest 'AQUILA-2018' on 16th and 17th March 2018, held at St. Peter's Engineering College. The project is Remote Controlled Vechicle inspried from mars-rover, it's build to travel in extreme traines and narrow paths. Equipped with IR, ultra-sonic, IP camera sensors, radio module using Arudino."
    }
]

const Achievements = () => {
    return (
        <section id='achievements'>
            <h5>Recognition for my work</h5>
            <h2>Achievements</h2>

            <Swiper className="container achievements__containers"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="achievement">
                                <div className="achievement__avatar">
                                    <img src={avatar} alt='' />
                                </div>
                                <h5 className='achievement__name'>{name}</h5>
                                <small className='achievement__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Achievements