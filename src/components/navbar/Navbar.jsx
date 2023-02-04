import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import Button from '../../components/button/Button'
import Logo from '../../assets/logo.svg'
import './navbar.css'

const Navbar = () => {
    const navbar = [
        {
            name: 'About',
            path: 'about',
        },
        {
            name: 'Skills',
            path: 'skills',
        },
        {
            name: 'Portfolio',
            path: 'portfolio',
        },
        {
            name: 'Testimonial',
            path: 'testimonial',
        }
    ]
    const [visible, setVisible] = useState(false)
    const navbarVisible = () => {
        if(window.scrollY > 30) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    useEffect(() => {
      window.addEventListener('scroll', navbarVisible)
      return () => {
        window.removeEventListener('scroll', navbarVisible)
      }
    }, [])

  return (
    <header className={`navbar${visible ? ' scroll' : ''}`}>
        <div className="container-navbar">
            <div className="navbar-brand">
                <img src={Logo} alt="logo" />
                <span className='text-brand'>Design</span>
            </div>
            <ul className='navbar-item'>
                {navbar.map((item, idx) => (
                <li key={idx} className='nav-item'>
                    <Link 
                        to={item.path} 
                        className='nav-link' 
                        spy={true} 
                        smooth={true} 
                        duration={500}
                    >
                        {item.name}
                    </Link>
                </li>
                ))}
            </ul>
            <div className="button-navbar">
                <Button
                    text='Download CV'
                    className='btn-outline-green'
                />
            </div>
        </div>
    </header>
  )
}

export default Navbar