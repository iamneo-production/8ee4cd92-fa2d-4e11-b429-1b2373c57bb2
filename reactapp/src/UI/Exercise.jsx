import React from 'react'
import "../../src/style/exercise.css"
import lunges from '../assets/img/lunges.png'
import yoga from '../assets/img/yoga-pose.png'
import extended from '../assets/img/extended.png'

const Exercise = () => {
  return (
    <section id='services'>
      <div className='container exercise_container'>
        <div className='exercise_top'>
          <h2 className='section_title'>
            Our <span className='highlights'>Services</span>
          </h2>

          <p>
            Regular exercise has numerous benefits <br /> for both physical and
            mental health.
          </p>
        </div>

        {/* =====  exercise list ===== */}
        <div className='exercise_wrapper'>
          <div
            className='exercise_item'
            data-aos='zoom-in'
            data-aos-duration='1500'
          >
            <span className='exercise_icon'>
              <img src={lunges} alt='' />
            </span>

            <div className='exercise_content'>
              <h4>Fitness Tracking</h4>
              <p>
              Keep track of your workouts and exercises easily with our Fitness Tracking service.
               Log your workouts, track your progress, and stay motivated towards achieving your fitness goals.
              </p>
            </div>
          </div>

          <div
            className='exercise_item'
            data-aos='zoom-in'
            data-aos-duration='1500'
          >
            <span className='exercise_icon'>
              <img src={yoga} alt='' />
            </span>

            <div className='exercise_content'>
              <h4>Progress Analytics</h4>
              <p>
              With Progress Analytics, you can monitor your fitness journey with real-time charts and graphs. Visualize your progress,
               track your achievements and identify areas that need improvement to stay on track and reach your goals.
              </p>
            </div>
          </div>

          <div
            className='exercise_item'
            data-aos='zoom-in'
            data-aos-duration='1500'
          >
            <span className='exercise_icon'>
              <img src={extended} alt='' />
            </span>

            <div className='exercise_content'>
              <h4>Workout Planner</h4>
              <p>
              Our Workout Planner provides a customized workout and exercise plan to help you achieve your fitness goals. 
              Choose from pre-made plans or create your own custom workout routine based on your fitness level and preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Exercise
