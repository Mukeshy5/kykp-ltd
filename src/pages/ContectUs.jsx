import React from 'react'
import { Link } from 'react-router-dom'

const ContectUs = () => {
  return (
    <>
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Contact Us</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-mutedtext">Get in touch with our UK commercial team today. We are here to help with your technology requirements and provide expert guidance.</p>
          </div>

          {/* Image */}
          <div className="mb-16">
            <img 
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80" 
              alt="Contact our team" 
              className="rounded-xl shadow-lg w-full"
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md text-center hover:shadow-lg transition">
                <div className="w-16 h-16 bg-blue-50 text-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <h4 className="font-bold text-navy text-lg mb-2">Office Address</h4>
                <p className="text-mutedtext">6–9 The Square, Stockley Park, Uxbridge, UB11 1FW, United Kingdom</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md text-center hover:shadow-lg transition">
                <div className="w-16 h-16 bg-blue-50 text-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <h4 className="font-bold text-navy text-lg mb-2">Email Us</h4>
                <p className="text-mutedtext">sales@kykpltd.com</p>
                <p className="text-xs text-mutedtext mt-1">We respond within 24 hours</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md text-center hover:shadow-lg transition">
                <div className="w-16 h-16 bg-blue-50 text-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <h4 className="font-bold text-navy text-lg mb-2">Call Us</h4>
                <p className="text-mutedtext">7723 693256</p>
                <p className="text-xs text-mutedtext mt-1">Monday - Friday, 8:00 AM - 6:00 PM</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md text-center hover:shadow-lg transition">
                <div className="w-16 h-16 bg-blue-50 text-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <h4 className="font-bold text-navy text-lg mb-2">Business Hours</h4>
                <p className="text-mutedtext text-sm">Monday - Friday: 8:00 AM - 6:00 PM (GMT)</p>
                <p className="text-mutedtext text-sm">Saturday - Sunday: Closed</p>
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-blue-50 border border-blue-200 rounded-2xl">
                <h5 className="font-bold text-navy text-lg mb-4 flex items-center">
                  <i className="fa-solid fa-circle-check text-green-500 mr-2"></i>
                  Why Contact Us?
                </h5>
                <ul className="space-y-3 text-mutedtext">
                  <li className="flex items-center"><i className="fa-solid fa-check text-green-500 mr-3"></i>Free, no-obligation quotes</li>
                  <li className="flex items-center"><i className="fa-solid fa-check text-green-500 mr-3"></i>Expert technical advice</li>
                  <li className="flex items-center"><i className="fa-solid fa-check text-green-500 mr-3"></i>Competitive wholesale pricing</li>
                  <li className="flex items-center"><i className="fa-solid fa-check text-green-500 mr-3"></i>Fast response times</li>
                  <li className="flex items-center"><i className="fa-solid fa-check text-green-500 mr-3"></i>Dedicated account management</li>
                </ul>
              </div>

              <div className="p-8 bg-navy text-white rounded-2xl">
                <h5 className="font-bold text-lg mb-4">Need a Quote?</h5>
                <p className="text-slate-300 mb-6">Submit a detailed enquiry and our team will get back to you with a comprehensive solution tailored to your needs.</p>
                <Link to="/enquire" className="inline-block bg-accent hover:bg-steel text-white px-6 py-3 rounded-lg font-bold shadow-lg transition">
                  Submit an Enquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prefer to Speak With Us Directly?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Call our team at 7723 693256 or email us at sales@kykpltd.com. We look forward to hearing from you.
          </p>
          <Link to="/enquire" className="inline-block bg-accent hover:bg-steel text-white px-8 py-3.5 rounded-lg font-bold shadow-lg transition">
            Submit a Detailed Enquiry
          </Link>
        </div>
      </section>
    </>
  )
}

export default ContectUs