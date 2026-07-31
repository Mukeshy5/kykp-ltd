import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'Contact Us', path: '/contact' },
  ]

  return (
    <>
      {/* Top Info Bar - Light Mode */}
      <div className="bg-navy text-white text-sm py-2 px-6 hidden md:flex justify-between items-center border-b border-blue-800">
        <div className="flex items-center space-x-6">
          <span><i className="fa-solid fa-location-dot text-gold mr-2"></i>6–9 The Square, Stockley Park, Uxbridge, UB11 1FW</span>
          <span><i className="fa-solid fa-envelope text-gold mr-2"></i>sales@kykpltd.com</span>
        </div>
        <div className="flex items-center space-x-4">
          <span><i className="fa-solid fa-phone text-gold mr-2"></i>7723 693256</span>
          <span className="bg-blue-800/60 text-blue-200 text-xs px-2 py-1 rounded border border-blue-600">UK Registered Business</span>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-navy text-white font-bold text-2xl px-4 py-2 rounded-lg tracking-wider border-l-4 border-gold">
              KYKP <span className="text-gold text-lg">LTD</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 font-semibold text-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-accent transition ${
                  location.pathname === link.path ? 'text-accent' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden md:inline-block bg-accent text-white px-6 py-2.5 rounded-lg font-semibold shadow-md hover:bg-steel transition"
          >
            Get a Quote
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            id="menu-btn"
            className="md:hidden text-2xl text-navy focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block font-medium py-2 hover:text-accent ${
                  location.pathname === link.path ? 'text-accent' : 'text-slate-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  )
}

export default Navbar