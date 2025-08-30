import React, { useState } from 'react'
import { assets, menuLinks } from '../../assets/assets'
import { Link, useLocation, useNavigate } from 'react-router'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'
import './Navbar.css'

const Navbar = () => {
  const { setShowLogin, user, logout, isOwner, axios, setIsOwner } = useAppContext()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const changeRole = async () => {
    try {
      const { data } = await axios.post('/api/owner/change-role')
      if (data.success) {
        setIsOwner(true)
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className={`navbar-container ${location.pathname === '/' ? 'navbar-home' : ''}`}>
      {/* Logo */}
      <Link to='/'>
        <img src={assets.Logo} alt="Rentify Logo" className='navbar-logo' />
      </Link>

      {/* Links */}
      <div className={`navbar-links ${open ? 'open' : ''} ${location.pathname === '/' ? 'home' : ''}`}>
        {menuLinks.map((link, index) => (
          <Link key={index} to={link.path} className="nav-link">
            {link.name}
          </Link>
        ))}

        {/* Search Box */}
        <div className='navbar-search'>
          <input type="text" className='navbar-search-input' placeholder='Search properties' />
          <img src={assets.search_icon} alt="search" className="navbar-search-icon" />
        </div>

        {/* Buttons */}
        <div className='navbar-buttons'>
          <button
            onClick={() => (isOwner ? navigate('/owner') : changeRole())}
            className='nav-btn-outline'
          >
            {isOwner ? 'Dashboard' : 'List Properties'}
          </button>

          <button
            onClick={() => (user ? logout() : setShowLogin(true))}
            className='nav-btn-primary'
          >
            {user ? 'Logout' : 'Login'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className='navbar-toggle'
        aria-label='Menu'
        onClick={() => setOpen(!open)}
      >
        <img src={open ? assets.close_icon : assets.menu_icon} alt="menu" />
      </button>
    </div>
  )
}

export default Navbar
