import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-navy text-slate-300 py-12 border-t border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="bg-white/10 text-white font-bold text-xl px-3 py-1.5 inline-block rounded mb-4">
            KYKP <span className="text-gold">LTD</span>
          </div>
          <p className="text-sm">UK-based technology solutions provider specializing in computer wholesale, IT services, and business technology support. We are committed to delivering excellence and innovation to businesses across the United Kingdom and beyond.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/industries" className="hover:text-white">Industries We Serve</Link></li>
            <li><Link to="/why-choose-us" className="hover:text-white">Why Choose Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-white">Computer Wholesale</Link></li>
            <li><Link to="/services" className="hover:text-white">IT Hardware</Link></li>
            <li><Link to="/services" className="hover:text-white">Software Solutions</Link></li>
            <li><Link to="/services" className="hover:text-white">IT Consulting</Link></li>
            <li><Link to="/services" className="hover:text-white">Managed IT Services</Link></li>
            <li><Link to="/services" className="hover:text-white">Network Solutions</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Contact Info</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start space-x-2">
              <i className="fa-solid fa-location-dot text-gold mt-1"></i>
              <span>6–9 The Square, Stockley Park, Uxbridge, UB11 1FW</span>
            </li>
            <li className="flex items-center space-x-2">
              <i className="fa-solid fa-envelope text-gold"></i>
              <span>sales@kykpltd.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <i className="fa-solid fa-phone text-gold"></i>
              <span>7723 693256</span>
            </li>
          </ul>
          <p className="text-xs mt-4 leading-relaxed text-slate-400">
            © 2026 KYKP LTD. All rights reserved.<br />
            Registered Address: 6–9 The Square, Stockley Park, Uxbridge, UB11 1FW
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-blue-800 text-center text-xs text-slate-500">
        <p>KYKP LTD is a UK registered company. All trademarks and registered trademarks are the property of their respective owners.</p>
      </div>
    </footer>
  )
}

export default Footer