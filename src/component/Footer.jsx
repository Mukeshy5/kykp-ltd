import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-navy text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="bg-white/10 text-white font-bold text-xl px-3 py-1.5 inline-block rounded mb-4">
            KYKP <span className="text-gold">LTD</span>
          </div>
          <p className="text-sm">UK-based wholesale trading, construction, and building installation solutions.</p>
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
          <h4 className="text-white font-bold mb-4">Legal</h4>
          <p className="text-xs leading-relaxed">
            © 2026 KYKP LTD. All rights reserved.<br />
            Registered Address: 6–9 The Square, Stockley Park, Uxbridge, UB11 1FW
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer