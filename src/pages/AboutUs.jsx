import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Your Trusted Technology Partner</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-mutedtext text-lg leading-relaxed">
              We are a technology-focused company specializing in wholesale computer products and comprehensive IT services. From supplying premium hardware to delivering customized software and IT support, we help businesses build reliable and scalable technology infrastructures.
            </p>
            <p className="text-mutedtext text-lg leading-relaxed mt-4">
              Our experienced professionals understand modern business requirements and provide cost-effective solutions designed to maximize performance, security, and operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" 
            alt="Our professional team" 
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </section>

      {/* Vision, Mission & Core Values Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-accent text-2xl mb-6">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Our Mission</h3>
              <p className="text-mutedtext">To deliver reliable, innovative, and cost-effective technology solutions that enable businesses to grow through digital transformation. We are committed to providing exceptional value through high-quality products and expert services.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-accent text-2xl mb-6">
                <i className="fa-solid fa-eye"></i>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Our Vision</h3>
              <p className="text-mutedtext">To become a trusted provider of IT products and technology services by delivering excellence, innovation, and exceptional customer satisfaction. We strive to be the go-technology partner for businesses across the UK.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-accent text-2xl mb-6">
                <i className="fa-solid fa-gem"></i>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Core Values</h3>
              <ul className="grid grid-cols-2 gap-2 text-mutedtext text-sm font-semibold">
                <li><i className="fa-solid fa-check text-gold mr-2"></i>Integrity</li>
                <li><i className="fa-solid fa-check text-gold mr-2"></i>Quality</li>
                <li><i className="fa-solid fa-check text-gold mr-2"></i>Innovation</li>
                <li><i className="fa-solid fa-check text-gold mr-2"></i>Reliability</li>
                <li><i className="fa-solid fa-check text-gold mr-2"></i>Professionalism</li>
                <li><i className="fa-solid fa-check text-gold mr-2"></i>Customer Focus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 bg-lightbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1664575198308-3959905a7e5d?w=600&q=80" 
                alt="Our company story" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-navy mb-4">Our Story</h2>
              <div className="w-16 h-1 bg-gold mb-6"></div>
              <p className="text-mutedtext mb-4 leading-relaxed">
                KYKP LTD was founded with a simple mission — to make high-quality technology accessible to businesses of all sizes. What started as a small IT supply company has grown into a comprehensive technology solutions provider serving clients across the United Kingdom.
              </p>
              <p className="text-mutedtext mb-4 leading-relaxed">
                Over the years, we have built strong relationships with leading manufacturers and distributors, enabling us to offer competitive pricing without compromising on quality. Our team of experienced professionals brings together decades of combined expertise in IT hardware, software, networking, and business technology consulting.
              </p>
              <p className="text-mutedtext leading-relaxed">
                Today, we are proud to serve a diverse range of clients — from educational institutions and healthcare organizations to corporate enterprises and government agencies. Every partnership is built on trust, transparency, and a shared commitment to achieving the best possible outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Process</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-mutedtext">A streamlined approach to delivering technology solutions that work for your business.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-slate-200">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h4 className="text-lg font-bold text-navy mb-2">Consultation</h4>
              <p className="text-mutedtext text-sm">We understand your business requirements and technology needs through detailed consultation.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-slate-200">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h4 className="text-lg font-bold text-navy mb-2">Planning</h4>
              <p className="text-mutedtext text-sm">Our experts recommend the most suitable IT solutions tailored to your specific requirements.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-slate-200">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h4 className="text-lg font-bold text-navy mb-2">Implementation</h4>
              <p className="text-mutedtext text-sm">We supply, install, and configure the required systems with minimal disruption to your operations.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-slate-200">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h4 className="text-lg font-bold text-navy mb-2">Ongoing Support</h4>
              <p className="text-mutedtext text-sm">Continuous maintenance and technical assistance ensure smooth operations and long-term reliability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-lightbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Meet Our Team</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-mutedtext">Our team of dedicated professionals is committed to delivering the best technology solutions for your business.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80" 
                alt="Team member" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h4 className="font-bold text-navy">James Mitchell</h4>
              <p className="text-sm text-mutedtext">CEO & Founder</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80" 
                alt="Team member" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h4 className="font-bold text-navy">Sarah Thompson</h4>
              <p className="text-sm text-mutedtext">Operations Director</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" 
                alt="Team member" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h4 className="font-bold text-navy">David Richards</h4>
              <p className="text-sm text-mutedtext">Technical Lead</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80" 
                alt="Team member" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h4 className="font-bold text-navy">Emily Watson</h4>
              <p className="text-sm text-mutedtext">Client Relations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Business Technology?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Partner with us for reliable computer wholesale, professional IT services, and innovative technology solutions tailored to your business.
          </p>
          <Link to="/contact" className="inline-block bg-accent hover:bg-steel text-white px-8 py-3.5 rounded-lg font-bold shadow-lg transition">
            Request a Free Quote
          </Link>
        </div>
      </section>
    </>
  )
}

export default AboutUs