import React from 'react'

const Industries = () => {
  return (
    <section id="industries" className="py-20 bg-lightbg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">Industries We Serve</h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-slate-600">Partnering with sector leaders across the commercial spectrum.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl text-center shadow-sm border border-slate-200">
            <i className="fa-solid fa-hard-hat text-3xl text-accent mb-3"></i>
            <h4 className="font-bold text-navy">Construction Companies</h4>
          </div>
          <div className="p-6 bg-white rounded-xl text-center shadow-sm border border-slate-200">
            <i className="fa-solid fa-store text-3xl text-accent mb-3"></i>
            <h4 className="font-bold text-navy">Retail Businesses</h4>
          </div>
          <div className="p-6 bg-white rounded-xl text-center shadow-sm border border-slate-200">
            <i className="fa-solid fa-building-user text-3xl text-accent mb-3"></i>
            <h4 className="font-bold text-navy">Commercial Projects</h4>
          </div>
          <div className="p-6 bg-white rounded-xl text-center shadow-sm border border-slate-200">
            <i className="fa-solid fa-users-gear text-3xl text-accent mb-3"></i>
            <h4 className="font-bold text-navy">Contractors</h4>
          </div>
          <div className="p-6 bg-white rounded-xl text-center shadow-sm border border-slate-200">
            <i className="fa-solid fa-hospital-user text-3xl text-accent mb-3"></i>
            <h4 className="font-bold text-navy">Property Developers</h4>
          </div>
          <div className="p-6 bg-white rounded-xl text-center shadow-sm border border-slate-200">
            <i className="fa-solid fa-sitemap text-3xl text-accent mb-3"></i>
            <h4 className="font-bold text-navy">Business Organizations</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Industries