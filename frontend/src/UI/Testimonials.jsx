import React from 'react'
import '../style/testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'


// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

// import required modules
import { EffectCards } from 'swiper'
import b from '../assets/img/b.jpg'
import c from '../assets/img/c.jpg'
import d from '../assets/img/d.jpg'
import e from '../assets/img/e.jpg'


export default function Testimonials() {
  return (
    <>
      <section id='testimonials'>
        <div
          className='container sliders'
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
                  <img src={b} alt='' />
                </div>

                <h4>Lisa, 28</h4>
                <p>
                "I have been using the Fitness Tracking Portal for the past few months, and it has completely transformed my fitness journey. The app is easy to use, and I love being able to track my workouts and see my progress over time. It keeps me motivated and helps me stay on track towards my goals." 
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='slide_item'>
                <div className='slide_img-02'>
                  <img src={c} alt='' />
                </div>

                <h4>John, 26</h4>
                <p>
                "As a fitness enthusiast, the Fitness Tracking Portal has become an essential tool in my routine. I can easily create and customize workout plans, track my exercises, and monitor my progress. The personalized recommendations have helped me reach new levels of fitness, and I highly recommend it to anyone looking to improve their health and well-being."
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='slide_item'>
                <div className='slide_img-03'>
                  <img src={d} alt='' />
                </div>

                <h4>Aman, 29</h4>
                <p>
                "I've always struggled to stay consistent with my fitness routine, but ever since I started using the Fitness Tracking Portal, everything has changed. The app keeps me accountable and motivated. I love being able to track my workouts, set goals, and see my progress. It's like having a personal trainer and cheerleader right in my pocket!"
                </p>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className='slide_item'>
                <div className='slide_img-03'>
                  <img src={e} alt='' />
                </div>

                <h4>Daniel, 31</h4>
                <p>
                "The Fitness Tracking Portal is a game-changer for me. I used to struggle with staying organized and tracking my workouts effectively. This app has simplified everything. I can easily create and customize my workout plans, track my exercises, and analyze my progress. It has taken my fitness journey to a whole new level, and I couldn't be happier."
                </p>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </section>
    </>
  )
}
