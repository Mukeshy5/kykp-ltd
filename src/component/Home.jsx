import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section id="home" className="relative bg-navy text-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-blue-900/80 text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-blue-700">
            Premier UK B2B Solutions Partner
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Reliable Wholesale & Construction Excellence
          </h1>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            KYKP LTD provides top-tier wholesale trading, commercial construction, and specialized building installations across the United Kingdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/services" className="bg-accent hover:bg-steel text-white text-center px-8 py-3.5 rounded-lg font-bold shadow-lg transition">
              Explore Services
            </Link>
            <Link to="/contact" className="border border-slate-500 hover:border-white text-slate-200 text-center px-8 py-3.5 rounded-lg font-bold transition">
              Contact Our Team
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl relative">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="p-4 bg-navy/60 rounded-xl border border-slate-700">
                <i className="fa-solid fa-truck-ramp-box text-gold text-3xl mb-2"></i>
                <h3 className="font-bold text-xl text-white">Wholesale</h3>
                <p className="text-xs text-slate-400 mt-1">B2B Product Sourcing</p>
              </div>
              <div className="p-4 bg-navy/60 rounded-xl border border-slate-700">
                <i className="fa-solid fa-helmet-safety text-gold text-3xl mb-2"></i>
                <h3 className="font-bold text-xl text-white">Construction</h3>
                <p className="text-xs text-slate-400 mt-1">Commercial Execution</p>
              </div>
              <div className="p-4 bg-navy/60 rounded-xl border border-slate-700">
                <i className="fa-solid fa-tools text-gold text-3xl mb-2"></i>
                <h3 className="font-bold text-xl text-white">Installation</h3>
                <p className="text-xs text-slate-400 mt-1">Building Solutions</p>
              </div>
              <div className="p-4 bg-navy/60 rounded-xl border border-slate-700">
                <i className="fa-solid fa-handshake-angle text-gold text-3xl mb-2"></i>
                <h3 className="font-bold text-xl text-white">B2B Support</h3>
                <p className="text-xs text-slate-400 mt-1">End-to-End Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home