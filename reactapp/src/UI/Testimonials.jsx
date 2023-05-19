import React from 'react'
import '../style/testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

// import required modules
import { EffectCards } from 'swiper'
import avatar01 from '../assets/img/avatar01.png'
import avatar02 from '../assets/img/avatar02.png'

export default function Testimonials() {
  return (
    <>
      <section id='testimonials'>
        <div
          className='container sliders'
          data-aos='zoom-in'
          data-aos-duration='1500'
        >
          <h2 className='section_title'>Testimonials</h2>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className='mySwiper'
          >
            <SwiperSlide>
              <div className='slide_item'>
                <div className='slide_img-01'>
                  <img src={avatar01} alt='' />
                </div>

                <h4>Jane, 28</h4>
                <p>
                Fitbody has been a game-changer for me.
                 I've never been so motivated to exercise and track my progress. 
                 The personalized workout plans and nutrition recommendations have made all the difference!
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='slide_item'>
                <div className='slide_img-02'>
                  <img src={avatar02} alt='' />
                </div>

                <h4>John, 26</h4>
                <p>
                I've been using Fitbody for a few months now and have already seen a significant improvement in my overall fitness level.
                 The charts and graphs have been a huge help in keeping me on track and motivated.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='slide_item'>
                <div className='slide_img-03'>
                  <img src={avatar01} alt='' />
                </div>

                <h4>Jessica, 29</h4>
                <p>
                Fitbody has made it so easy for me to create and stick to a workout plan. 
                The customization options have allowed me to tailor my plan to my specific needs and preferences.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  )
}
