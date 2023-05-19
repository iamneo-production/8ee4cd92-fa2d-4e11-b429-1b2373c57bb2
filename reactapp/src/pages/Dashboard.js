import React from 'react';
import "../UI/Exercise";
import Aos from 'aos';
import '../pages/Dashboard.css'
import Exercise from '../UI/Exercise';
import Footer from '../UI/Footer';
import Hero from '../UI/Hero';
import Testimonials from '../UI/Testimonials';
import { useEffect } from 'react'
import Header from '../layout/Header';


function Dashboard() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
    <Header/>
    <Hero />
    <Exercise/>
    <Testimonials />
    <Footer/>

    </>
  );
};

export default Dashboard;
