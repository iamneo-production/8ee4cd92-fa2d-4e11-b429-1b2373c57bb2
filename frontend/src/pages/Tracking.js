import React, { useEffect } from 'react';
import Navbar from '../layout/Navbar';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Tracking = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="container">
        <div className="card" data-aos="fade-up">
          <div className="card-body">
            <h5 className="card-title">Workout Details</h5>
            <p className="card-text">Start adding your exercises to track your progress.</p>
            <Link to="/add-exercises" className="btn btn-primary">Add the remaining details for your Workouts</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
  