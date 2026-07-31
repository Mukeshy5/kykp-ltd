import React from 'react'

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose KYKP LTD</h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-slate-300">Setting standards of reliability, transparency, and operational efficiency.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-slate-800/80 rounded-xl border border-slate-700">
            <i className="fa-solid fa-user-shield text-gold text-2xl mb-4"></i>
            <h4 className="text-lg font-bold mb-2">Professional Team</h4>
            <p className="text-slate-400 text-sm">Skilled experts committed to managing your commercial projects with accuracy.</p>
          </div>
          <div className="p-6 bg-slate-800/80 rounded-xl border border-slate-700">
            <i className="fa-solid fa-award text-gold text-2xl mb-4"></i>
            <h4 className="text-lg font-bold mb-2">High Quality Standards</h4>
            <p className="text-slate-400 text-sm">Rigorous quality control processes on every product and installation service.</p>
          </div>
          <div className="p-6 bg-slate-800/80 rounded-xl border border-slate-700">
            <i className="fa-solid fa-clock text-gold text-2xl mb-4"></i>
            <h4 className="text-lg font-bold mb-2">On-Time Delivery</h4>
            <p className="text-slate-400 text-sm">Strict adherence to project timelines and dependable wholesale dispatch.</p>
          </div>
          <div className="p-6 bg-slate-800/80 rounded-xl border border-slate-700">
            <i className="fa-solid fa-scale-balanced text-gold text-2xl mb-4"></i>
            <h4 className="text-lg font-bold mb-2">Competitive Pricing</h4>
            <p className="text-slate-400 text-sm">Fair, transparent B2B wholesale rates to maximize project value.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs