import React from 'react'

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">Our Core Services</h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-slate-600">Comprehensive B2B solutions tailored to commercial requirements across the UK.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="p-8 border border-slate-200 rounded-xl hover:shadow-lg transition bg-white group">
            <div className="text-accent text-3xl mb-4 group-hover:scale-110 transition duration-300">
              <i className="fa-solid fa-boxes-packing"></i>
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Wholesale Supply</h3>
            <p className="text-slate-600 text-sm">Bulk distribution of high-grade materials and products managed with seamless supply chain operations.</p>
          </div>

          {/* Service 2 */}
          <div className="p-8 border border-slate-200 rounded-xl hover:shadow-lg transition bg-white group">
            <div className="text-accent text-3xl mb-4 group-hover:scale-110 transition duration-300">
              <i className="fa-solid fa-city"></i>
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Construction Services</h3>
            <p className="text-slate-600 text-sm">Professional commercial construction project execution backed by strict compliance and safety standards.</p>
          </div>

          {/* Service 3 */}
          <div className="p-8 border border-slate-200 rounded-xl hover:shadow-lg transition bg-white group">
            <div className="text-accent text-3xl mb-4 group-hover:scale-110 transition duration-300">
              <i className="fa-solid fa-screwdriver-wrench"></i>
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Building Installation</h3>
            <p className="text-slate-600 text-sm">Expert structural and technical installation services ensuring durable and precise workmanship.</p>
          </div>

          {/* Service 4 */}
          <div className="p-8 border border-slate-200 rounded-xl hover:shadow-lg transition bg-white group">
            <div className="text-accent text-3xl mb-4 group-hover:scale-110 transition duration-300">
              <i className="fa-solid fa-diagram-project"></i>
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Commercial Project Support</h3>
            <p className="text-slate-600 text-sm">End-to-end management support, technical oversight, and resource planning for large projects.</p>
          </div>

          {/* Service 5 */}
          <div className="p-8 border border-slate-200 rounded-xl hover:shadow-lg transition bg-white group">
            <div className="text-accent text-3xl mb-4 group-hover:scale-110 transition duration-300">
              <i className="fa-solid fa-magnifying-glass-location"></i>
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Product Sourcing</h3>
            <p className="text-slate-600 text-sm">Strategic Global and UK-wide procurement solutions to match exact technical specifications.</p>
          </div>

          {/* Service 6 */}
          <div className="p-8 border border-slate-200 rounded-xl hover:shadow-lg transition bg-white group">
            <div className="text-accent text-3xl mb-4 group-hover:scale-110 transition duration-300">
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Business-to-Business (B2B) Solutions</h3>
            <p className="text-slate-600 text-sm">Customized commercial agreements, contract pricing, and long-term supply partner support.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services