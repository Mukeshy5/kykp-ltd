import React from 'react'

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-lightbg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">About KYKP LTD</h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg leading-relaxed">
            KYKP LTD is a UK-based company providing wholesale trading, construction, and installation services. We work with businesses and commercial clients by delivering quality products, reliable project execution, and professional customer support. Our focus is on building long-term relationships through quality, transparency, and timely delivery.
          </p>
        </div>

        {/* Vision, Mission & Core Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-accent text-2xl mb-6">
              <i className="fa-solid fa-bullseye"></i>
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Our Mission</h3>
            <p className="text-slate-600">To provide reliable wholesale products and construction solutions while maintaining the highest standards of quality, safety, and customer satisfaction.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-accent text-2xl mb-6">
              <i className="fa-solid fa-eye"></i>
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Our Vision</h3>
            <p className="text-slate-600">To become a trusted UK business partner recognized for dependable service, innovation, and long-term client relationships.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-accent text-2xl mb-6">
              <i className="fa-solid fa-gem"></i>
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Core Values</h3>
            <ul className="grid grid-cols-2 gap-2 text-slate-600 text-sm font-semibold">
              <li><i className="fa-solid fa-check text-gold mr-2"></i>Integrity</li>
              <li><i className="fa-solid fa-check text-gold mr-2"></i>Quality</li>
              <li><i className="fa-solid fa-check text-gold mr-2"></i>Innovation</li>
              <li><i className="fa-solid fa-check text-gold mr-2"></i>Reliability</li>
              <li><i className="fa-solid fa-check text-gold mr-2"></i>Professionalism</li>
              <li><i className="fa-solid fa-check text-gold mr-2"></i>Customer Focus</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs