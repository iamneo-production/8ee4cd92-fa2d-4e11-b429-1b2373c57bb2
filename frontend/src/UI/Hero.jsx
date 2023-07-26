import React from 'react'
import heroImg from '../assets/img/gym-02.png'
import '../../src/style/Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section id='home'>
      <div className='container'>
        <div className='hero_wrapper'>
          {/* ======= hero content ====== */}
          <div className='hero_content'>
            <h2
              className='section_title'
              data-aos='fade-up'
              data-aos-duration='1500'
            >
              Exercise is the Key to a <span className='highlights'>Healthy</span>{' '}
              Lifestyle
            </h2>
            <p data-aos='fade-up' data-aos-delay='100' data-aos-duration='1800'>
            "FitBody" is a fitness tracking portal that provides a centralized platform <br />for 
            individuals to track their fitness and wellness progress, 
            
            set fitness goals,<br />
             and monitor their physical activity and health metrics.
             It aims to make it easier<br /> for users to achieve their fitness goals
               and improve
                their overall health and well-being.
            </p>

            <div
              className='hero_btns'
              data-aos='fade-up'
              data-aos-delay='200'
              data-aos-duration='2000'
            >
              <Link className='btn btncolor' to='/Register'>Register</Link>

            </div>
          </div>

          {/* ======= hero img ====== */}
          <div className='hero_img'data-aos='fade-left'
              data-aos-duration='1500'>
            <div className='hero_img-wrapper'>
              <div className='box-01'  style={{background:'#1aafe8'}}>
                <div className='box-2' style={{background:'#74e4c3'}}>
                  <div className='box-3'style={{background:'White'}} >
                    <div className='box_img' >
                      <img src={heroImg} alt='' />
                    </div>
                  </div>
                </div>
              </div>




            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero





