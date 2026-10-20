import React from 'react'
import { Link } from 'react-router-dom'

const EnquireNow = () => {
  return (
    <>
      <section id="enquire" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Enquire Now</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-mutedtext">Send us your inquiry and our team will get back to you within 24 hours. We are ready to discuss your technology requirements and provide the best solutions for your business.</p>
          </div>

          {/* Image */}
          <div className="mb-16">
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80" 
              alt="Submit your enquiry" 
              className="rounded-xl shadow-lg w-full"
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-8 bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-lg transition">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  <i className="fa-solid fa-file-invoice"></i>
                </div>
                <h4 className="font-bold text-navy text-lg mb-2">Free Detailed Quote</h4>
                <p className="text-mutedtext text-sm">Receive a comprehensive, itemized quote tailored to your specific requirements with no obligation to purchase.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-lg transition">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <h4 className="font-bold text-navy text-lg mb-2">Fast Response Time</h4>
                <p className="text-mutedtext text-sm">Our team reviews all enquiries promptly and aims to respond within 24 hours with a personalized solution.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-lg transition">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  <i className="fa-solid fa-user-gear"></i>
                </div>
                <h4 className="font-bold text-navy text-lg mb-2">Expert Consultation</h4>
                <p className="text-mutedtext text-sm">Get access to our team of technology experts who can advise on the best solutions for your business needs.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
                <h4 className="font-bold text-navy text-xl mb-4">How to Enquire</h4>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center shrink-0 text-sm font-bold">1</div>
                    <div>
                      <p className="font-semibold text-navy">Call Us</p>
                      <p className="text-mutedtext text-sm">Speak directly with our team at 020 4650 0394</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center shrink-0 text-sm font-bold">2</div>
                    <div>
                      <p className="font-semibold text-navy">Email Us</p>
                      <p className="text-mutedtext text-sm">Send your requirements to sales@kykpltd.com</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center shrink-0 text-sm font-bold">3</div>
                    <div>
                      <p className="font-semibold text-navy">Visit Our Contact Page</p>
                      <p className="text-mutedtext text-sm">Use our contact form to send a quick message</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-navy text-white rounded-2xl p-8 flex flex-col justify-center">
                <h4 className="font-bold text-xl mb-4">Ready to Get Started?</h4>
                <p className="text-slate-300 mb-6">Contact us today and let our team of experts help you find the perfect technology solutions for your business.</p>
                <div className="space-y-3">
                  <Link to="/contact" className="block w-full bg-accent hover:bg-steel text-white text-center px-6 py-3 rounded-lg font-bold shadow-lg transition">
                    Contact Us
                  </Link>
                  <a href="tel:02046500394" className="block w-full border border-white hover:bg-white hover:text-navy text-white text-center px-6 py-3 rounded-lg font-bold transition">
                    Call 020 4650 0394
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prefer to Call or Email?</h2>
          <p className="text-slate-300 text-lg mb-4">
            Phone: 020 4650 0394
          </p>
          <p className="text-slate-300 text-lg mb-8">
            Email: sales@kykpltd.com
          </p>
          <Link to="/contact" className="inline-block bg-accent hover:bg-steel text-white px-8 py-3.5 rounded-lg font-bold shadow-lg transition">
            Visit Our Contact Page
          </Link>
        </div>
      </section>
    </>
  )
}

export default EnquireNow