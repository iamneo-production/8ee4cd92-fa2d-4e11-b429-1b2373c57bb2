import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Toast } from 'react-bootstrap';
import '../style/header.css';
import logo from '../assets/img/dumble.png';
import profile from '../assets/img/profile.png';
import NavDropdown from 'react-bootstrap/NavDropdown';




const Navbar = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false); // State for toast visibility
  const user = JSON.parse(localStorage.getItem('user'));
  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add('sticky_header');
    } else {
      headerRef.current.classList.remove('sticky_header');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', headerFunc);
    return () => window.removeEventListener('scroll', headerFunc);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setShowToast(true); // Show the toast message
    navigate('/');
  };

  return (
    <>
      <header className="header" ref={headerRef}>
        <div className="container">
          <div className="nav_wrapper">
            <div className="logo">
              <div className="logo_img">
                <img src={logo} alt="" />
              </div>
              <h2>SweatSync</h2>
            </div>

            <div className="nav_right">
              <Link className="btn" to="/workout-track">
                Workout Track
              </Link>
              <span className="mobile_menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>

            <div className="nav_right">
              <Link className="btn" to="/workout-history">
                Workout History
              </Link>
              <span className="mobile_menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>

            <div className="nav_right">
              <Link className="btn" to="/exercise-tracking">
                Exercise Tracking
              </Link>
              <span className="mobile_menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>

            <div className="nav_right">
              <Link className="btn" to="/nutritionHome">
                Nutrition Recommandations
              </Link>
              <span className="mobile_menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>

            <div className="nav_right">
              <Link className="btn" to="/goal-setting">
                Goal Setting
              </Link>
              <span className="mobile_menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>

            <div className="nav_right">
              <Link className="btn" to="/WorkoutBase">
                Plan your workouts
              </Link>
              <span className="mobile_menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>
            


            <div className="nav_left">
              <div>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title={user.name}
                >
                  <NavDropdown.Item as={Link} to="/UpdateProfile"  className="btn">
                    Update Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item as='button' className="btn" onClick={handleLogout} >
                      Logout
                  </NavDropdown.Item>

                </NavDropdown>

              </div>

              <span className="mobile_menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>




            <div className="nav_left">
              <div className="logo_avtar">
                <img src={profile} alt="" />
              </div>
              <span className="mobile_menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>

          </div>
        </div>
      </header>

      {/* Toast component */}
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        className="logout-toast"
        delay={3000} // Adjust the delay as needed
        autohide
      >
        <Toast.Body>Logged out successfully!</Toast.Body>
      </Toast>
    </>
  );
};

export default Navbar;
