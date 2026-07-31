import React from 'react'

const OurProcess = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">Our Process</h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-slate-600">We follow a simple and effective process to deliver the best IT solutions.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="relative">
            <div className="flex items-center justify-center h-24 w-24 rounded-full bg-blue-100 mx-auto border-4 border-white shadow-lg">
              <span className="text-3xl font-bold text-accent">1</span>
            </div>
            <h3 className="text-xl font-bold text-navy mt-6 mb-2">Consultation</h3>
            <p className="text-slate-600">We understand your business requirements.</p>
          </div>
          <div className="relative">
            <div className="flex items-center justify-center h-24 w-24 rounded-full bg-blue-100 mx-auto border-4 border-white shadow-lg">
              <span className="text-3xl font-bold text-accent">2</span>
            </div>
            <h3 className="text-xl font-bold text-navy mt-6 mb-2">Planning</h3>
            <p className="text-slate-600">Our experts recommend the most suitable IT solutions.</p>
          </div>
          <div className="relative">
            <div className="flex items-center justify-center h-24 w-24 rounded-full bg-blue-100 mx-auto border-4 border-white shadow-lg">
              <span className="text-3xl font-bold text-accent">3</span>
            </div>
            <h3 className="text-xl font-bold text-navy mt-6 mb-2">Implementation</h3>
            <p className="text-slate-600">We supply, install, and configure the required systems.</p>
          </div>
          <div className="relative">
            <div className="flex items-center justify-center h-24 w-24 rounded-full bg-blue-100 mx-auto border-4 border-white shadow-lg">
              <span className="text-3xl font-bold text-accent">4</span>
            </div>
            <h3 className="text-xl font-bold text-navy mt-6 mb-2">Ongoing Support</h3>
            <p className="text-slate-600">Continuous maintenance and technical assistance ensure smooth operations.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurProcess