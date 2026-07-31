import React from 'react'

const ContectUs = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">Contact Us</h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-slate-600">Get in touch with our UK commercial team today.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info Column */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-50 text-accent rounded-lg flex items-center justify-center shrink-0 text-xl">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <h4 className="font-bold text-navy text-lg">Office Address</h4>
                <p className="text-slate-600">6–9 The Square, Stockley Park, Uxbridge, UB11 1FW, United Kingdom</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-50 text-accent rounded-lg flex items-center justify-center shrink-0 text-xl">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <h4 className="font-bold text-navy text-lg">Email Us</h4>
                <p className="text-slate-600">sales@kykpltd.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-50 text-accent rounded-lg flex items-center justify-center shrink-0 text-xl">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <h4 className="font-bold text-navy text-lg">Call Us</h4>
                <p className="text-slate-600">+44 7723 693256</p>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl">
              <h5 className="font-bold text-navy mb-2">Business Hours</h5>
              <p className="text-sm text-slate-600">Monday - Friday: 8:00 AM - 6:00 PM (GMT)<br />Saturday - Sunday: Closed</p>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <form id="contact-form" className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Company / Full Name</label>
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
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Message</label>
                <textarea rows="4" required className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-navy hover:bg-steel text-white font-bold py-3 rounded-lg transition">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContectUs