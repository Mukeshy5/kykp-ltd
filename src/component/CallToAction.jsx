import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <section id="cta" className="py-20 bg-accent text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Business Technology?</h2>
        <p className="text-lg mb-8">Partner with us for reliable computer wholesale, professional IT services, and innovative technology solutions tailored to your business.</p>
        <Link to="/contact" className="bg-white hover:bg-gray-200 text-accent font-bold py-3 px-8 rounded-lg shadow-lg transition">
          Request a Free Quote
        </Link>
      </div>
    </section>
  )
}

export default CallToAction