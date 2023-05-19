import React, { useRef } from 'react'
import '../style/header.css'
import logo from '../assets/img/dumble.png'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


const nav_links = [
  {
    path: '#home',
    display: 'Home',
  },
  {
    path: '#services',
    display: 'Services',
  },
  {
    path: '#testimonials',
    display: 'Testimonials',
  },
]

const Header = () => {
  const headerRef = useRef(null)

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add('sticky_header')
    } else {
      headerRef.current.classList.remove('sticky_header')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', headerFunc)

    return () => window.removeEventListener('scroll', headerFunc)
  }, [])

  const handleClick = (e) => {
    e.preventDefault()

    const targetAttr = e.target.getAttribute('href')
    const location = document.querySelector(targetAttr).offsetTop

    window.scrollTo({
      left: 0,
      top: location - 80,
    })
  }

  return (
    <header className='header' ref={headerRef}>
      <div className='container'>
        <div className='nav_wrapper'>
          {/* ==== LOGO ==== */}

          <Link className="btn mx-2" to="/">
            
          <div className='logo'>
            <div className='logo_img'>
              <img src={logo} alt='' />
            </div>
            <h2>FitBody</h2>
          </div>
          </Link>

          {/* ====== Navigation menu ======= */}

          <div className='navigation'>
            <ul className='menu'>
              {nav_links.map((item) => (
                <li className='nav__item'>
                  <a onClick={handleClick} href={item.path}>
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ======= nav right ======= */}

          <div className='nav_right'>
            <Link className='btn btn-primary' to='/Login'>Login</Link>
            <span className='mobile_menu'>
              <i class='ri-menu-line'></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
