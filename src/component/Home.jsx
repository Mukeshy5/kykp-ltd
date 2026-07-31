import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      {/* Hero Section - Light Mode */}
      <section id="home" className="relative bg-gradient-to-br from-blue-50 to-white text-darktext py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-blue-100 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-blue-200">
              Premier UK Technology Solutions Partner
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-navy">
              Empowering Businesses with Smart IT Solutions
            </h1>
            <p className="text-mutedtext text-lg mb-8 leading-relaxed">
              We provide high-quality computers, IT hardware, software solutions, and professional technology services to businesses of all sizes. Our mission is to help organizations improve productivity, efficiency, and digital transformation through reliable products and expert support.
            </p>
            <p className="text-mutedtext text-lg mb-8 leading-relaxed">
              With years of industry experience and a dedicated team of technology professionals, KYKP LTD has become a trusted partner for companies seeking comprehensive IT solutions. From small startups to large enterprises, we deliver tailored technology strategies that drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services" className="bg-accent hover:bg-steel text-white text-center px-8 py-3.5 rounded-lg font-bold shadow-lg transition">
                Explore Services
              </Link>
              <Link to="/contact" className="border border-slate-300 hover:border-navy text-mutedtext hover:text-navy text-center px-8 py-3.5 rounded-lg font-bold transition">
                Contact Our Team
              </Link>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" 
              alt="Technology and digital solutions" 
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-200 hidden md:block">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xl">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div>
                  <p className="font-bold text-navy text-lg">100+</p>
                  <p className="text-xs text-mutedtext">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">What We Offer</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-mutedtext text-lg">Comprehensive technology solutions designed to meet the unique needs of your business.</p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80" 
              alt="Business technology solutions" 
              className="rounded-xl shadow-lg w-full mb-12"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
              <div className="w-14 h-14 bg-accent text-white rounded-xl flex items-center justify-center text-2xl mb-4">
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Computer & Laptop Wholesale</h3>
              <p className="text-mutedtext">We supply premium desktops, laptops, workstations, and servers from leading manufacturers at competitive wholesale prices.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
              <div className="w-14 h-14 bg-accent text-white rounded-xl flex items-center justify-center text-2xl mb-4">
                <i className="fa-solid fa-cloud"></i>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Software & Cloud Solutions</h3>
              <p className="text-mutedtext">From business applications to cloud infrastructure, we provide end-to-end software solutions tailored to your operations.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
              <div className="w-14 h-14 bg-accent text-white rounded-xl flex items-center justify-center text-2xl mb-4">
                <i className="fa-solid fa-headset"></i>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Managed IT Support</h3>
              <p className="text-mutedtext">Our team provides 24/7 IT support, system monitoring, maintenance, and troubleshooting to keep your business running smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-extrabold text-gold">100+</p>
              <p className="text-slate-300 mt-2">Clients Served</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-gold">3+</p>
              <p className="text-slate-300 mt-2">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-gold">10+</p>
              <p className="text-slate-300 mt-2">Expert Team Members</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-gold">98%</p>
              <p className="text-slate-300 mt-2">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" 
                alt="Team collaboration" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-navy mb-4">Why Businesses Trust KYKP LTD</h2>
              <div className="w-16 h-1 bg-gold mb-6"></div>
              <p className="text-mutedtext mb-6 leading-relaxed">
                At KYKP LTD, we understand that technology is the backbone of modern business. Our commitment to quality, reliability, and customer satisfaction sets us apart from other technology providers. We don't just supply products — we build lasting partnerships with our clients.
              </p>
              <p className="text-mutedtext mb-6 leading-relaxed">
                Every solution we deliver is backed by years of industry expertise, rigorous quality assurance, and a dedicated support team that is always ready to assist you. Whether you need a single computer or a complete IT infrastructure overhaul, we have the knowledge and resources to deliver.
              </p>
              <Link to="/why-choose-us" className="inline-flex items-center text-accent font-semibold hover:underline">
                Learn More About Us <i className="fa-solid fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Ready to Transform Your Business Technology?</h2>
          <p className="text-mutedtext text-lg mb-8">
            Get in touch with our team today and discover how KYKP LTD can help your business achieve more with the right technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-block bg-accent hover:bg-steel text-white px-8 py-3.5 rounded-lg font-bold shadow-lg transition">
              Request a Free Quote
            </Link>
            <Link to="/enquire" className="inline-block border border-navy text-navy hover:bg-navy hover:text-white px-8 py-3.5 rounded-lg font-bold transition">
              Enquire Now
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home