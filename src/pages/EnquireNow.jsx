import React from 'react'

const EnquireNow = () => {
  return (
    <section id="enquire" className="py-20 bg-lightbg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">Enquire Now</h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-slate-600">Send us your inquiry and our team will get back to you within 24 hours.</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">First Name</label>
                  <input type="text" required className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Last Name</label>
                  <input type="text" required className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Company Name</label>
                <input type="text" required className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                <input type="email" required className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
                <input type="tel" required className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Service Required</label>
                <select className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none">
                  <option>Wholesale Supply</option>
                  <option>Construction Services</option>
                  <option>Building Installation</option>
                  <option>Commercial Project Support</option>
                  <option>Product Sourcing</option>
                  <option>B2B Solutions</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Project Details</label>
                <textarea rows="5" required className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none" placeholder="Describe your project or requirements..."></textarea>
              </div>
              <button type="submit" className="w-full bg-accent hover:bg-steel text-white font-bold py-3 rounded-lg transition">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnquireNow