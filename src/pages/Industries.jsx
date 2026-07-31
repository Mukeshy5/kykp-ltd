import React from 'react'
import { Link } from 'react-router-dom'

const Industries = () => {
  return (
    <>
      <section id="industries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Industries We Serve</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-mutedtext">We provide technology solutions for a diverse range of industries across the United Kingdom. Our expertise spans multiple sectors, ensuring tailored solutions for every business type.</p>
          </div>

          {/* Image */}
          <div className="mb-16">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80" 
              alt="Industries we serve" 
              className="rounded-xl shadow-lg w-full"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-xl text-center shadow-md border border-slate-200 hover:shadow-lg transition">
              <i className="fa-solid fa-building text-3xl text-accent mb-3"></i>
              <h4 className="font-bold text-navy">Corporate Businesses</h4>
              <p className="text-xs text-mutedtext mt-2">Office IT infrastructure and support</p>
            </div>
            <div className="p-6 bg-white rounded-xl text-center shadow-md border border-slate-200 hover:shadow-lg transition">
              <i className="fa-solid fa-school text-3xl text-accent mb-3"></i>
              <h4 className="font-bold text-navy">Educational Institutions</h4>
              <p className="text-xs text-mutedtext mt-2">Computer labs and e-learning solutions</p>
            </div>
            <div className="p-6 bg-white rounded-xl text-center shadow-md border border-slate-200 hover:shadow-lg transition">
              <i className="fa-solid fa-hospital text-3xl text-accent mb-3"></i>
              <h4 className="font-bold text-navy">Healthcare</h4>
              <p className="text-xs text-mutedtext mt-2">Medical IT systems and compliance</p>
            </div>
            <div className="p-6 bg-white rounded-xl text-center shadow-md border border-slate-200 hover:shadow-lg transition">
              <i className="fa-solid fa-cart-shopping text-3xl text-accent mb-3"></i>
              <h4 className="font-bold text-navy">Retail Stores</h4>
              <p className="text-xs text-mutedtext mt-2">POS systems and inventory management</p>
            </div>
            <div className="p-6 bg-white rounded-xl text-center shadow-md border border-slate-200 hover:shadow-lg transition">
              <i className="fa-solid fa-industry text-3xl text-accent mb-3"></i>
              <h4 className="font-bold text-navy">Manufacturing</h4>
              <p className="text-xs text-mutedtext mt-2">Industrial automation and IT systems</p>
            </div>
            <div className="p-6 bg-white rounded-xl text-center shadow-md border border-slate-200 hover:shadow-lg transition">
              <i className="fa-solid fa-landmark text-3xl text-accent mb-3"></i>
              <h4 className="font-bold text-navy">Government Organizations</h4>
              <p className="text-xs text-mutedtext mt-2">Secure and compliant IT solutions</p>
            </div>
            <div className="p-6 bg-white rounded-xl text-center shadow-md border border-slate-200 hover:shadow-lg transition">
              <i className="fa-solid fa-rocket text-3xl text-accent mb-3"></i>
              <h4 className="font-bold text-navy">Startups</h4>
              <p className="text-xs text-mutedtext mt-2">Scalable technology from day one</p>
            </div>
            <div className="p-6 bg-white rounded-xl text-center shadow-md border border-slate-200 hover:shadow-lg transition">
              <i className="fa-solid fa-store text-3xl text-accent mb-3"></i>
              <h4 className="font-bold text-navy">Small & Medium Enterprises</h4>
              <p className="text-xs text-mutedtext mt-2">Affordable business IT packages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Details Section */}
      <section className="py-16 bg-lightbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Tailored Solutions for Every Sector</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-mutedtext">Each industry has unique technology requirements. We take the time to understand your sector-specific challenges and deliver solutions that address them effectively.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-accent text-xl">
                  <i className="fa-solid fa-building"></i>
                </div>
                <h3 className="text-xl font-bold text-navy">Corporate & Enterprise</h3>
              </div>
              <p className="text-mutedtext text-sm">We provide end-to-end IT solutions for corporate clients including office network setup, server infrastructure, workstation deployment, and ongoing managed IT support. Our enterprise solutions are designed for scalability, security, and maximum productivity.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-accent text-xl">
                  <i className="fa-solid fa-school"></i>
                </div>
                <h3 className="text-xl font-bold text-navy">Education</h3>
              </div>
              <p className="text-mutedtext text-sm">We supply educational institutions with computer labs, classroom technology, e-learning platforms, and administrative IT systems. Our education solutions are cost-effective and designed to enhance the learning experience for students and staff.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-accent text-xl">
                  <i className="fa-solid fa-hospital"></i>
                </div>
                <h3 className="text-xl font-bold text-navy">Healthcare</h3>
              </div>
              <p className="text-mutedtext text-sm">Our healthcare IT solutions include medical practice management systems, patient record management, secure data storage, and compliance-ready infrastructure. We understand the importance of data security and regulatory compliance in the healthcare sector.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-accent text-xl">
                  <i className="fa-solid fa-industry"></i>
                </div>
                <h3 className="text-xl font-bold text-navy">Manufacturing & Industrial</h3>
              </div>
              <p className="text-mutedtext text-sm">We provide IT solutions for the manufacturing sector including industrial automation systems, supply chain management software, inventory tracking, and robust network infrastructure designed to withstand demanding industrial environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Solution Fits Your Industry?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Contact our team for a free consultation. We'll help you identify the right technology solutions for your specific industry requirements.
          </p>
          <Link to="/contact" className="inline-block bg-accent hover:bg-steel text-white px-8 py-3.5 rounded-lg font-bold shadow-lg transition">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}

export default Industries