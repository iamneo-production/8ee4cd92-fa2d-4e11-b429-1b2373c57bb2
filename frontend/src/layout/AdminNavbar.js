import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/header.css';
import logo from '../assets/img/logo1.png';
import maleAvatar from '../assets/img/male.png';
import femaleAvatar from '../assets/img/female.png';
import profile from '../assets/img/profile2.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { toast } from 'react-toastify';





const Navbar = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate()// State for toast visibility
  const admin = JSON.parse(localStorage.getItem('admin'));
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
    localStorage.removeItem('admin');
    toast.success("LogOut Successful")// Show the toast message
    navigate('/');
  };
  const renderAvatar = () => {
    if (admin.gender === 'male') {
      return <img src={maleAvatar} alt="Male Avatar" />;
    } else if (admin.gender === 'female') {
      return <img src={femaleAvatar} alt="Female Avatar" />;
    } else {
      return <img src={profile} alt="Default Avatar" />;
    }
  };
  

  return (
    <>
      <header className="header" ref={headerRef}>
        <div className="container">
          <div className="nav_wrapper">
          <Link className="btn mx-2" to="/admin-dashboard">
            <div className='logo'>
              <img src={logo} width="30%" alt='' />
          
          </div>
          </Link>
            

            <div className="nav_right">
              <Link className="btn" to="/display-AllUser">
                Display Users
              </Link>
              <span className="mobile_menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>
            


            <div className="nav_left">
              <div>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title={admin.name}
                >
                  <NavDropdown.Item as={Link} to="/admin-updateprofile"  className="btn">
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
              {renderAvatar()}
              </div>
              <span className="mobile_menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>

          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
