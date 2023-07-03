import React from 'react';
import '../../src/style/footer.css';
import logo from '../assets/img/dumble.png';

const Footer = () => {
  const year = new Date().getFullYear();

  const handleContactClick = () => {
    // Handle the click event for the "Contact Us" button
    // Add your logic to open a contact form or perform any desired action
    console.log('Contact Us button clicked');
  };

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer_wrapper'>
          <div className='footer_box'>
            <div className='logo'>
              <div className='logo_img'>
                <img src={logo} alt='' />
                <h2>Fitbody</h2>
              </div>
            </div>

            <p>Track your fitness journey and achieve your goals with FitBody.</p>
          </div>
        </div>

        {/* <button className='btn btn-primary' onClick={handleContactClick}>
          Contact Us
       </button> */}

        <p className='copyright'>
          Copyright - {year} developed by Virtusa. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
