import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Services</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-mutedtext">Comprehensive IT solutions tailored to modern business requirements. From hardware supply to managed services, we cover all your technology needs.</p>
          </div>

          {/* Hero Image */}
          <div className="mb-16">
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80" 
              alt="Our IT services" 
              className="rounded-xl shadow-lg w-full"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 - Computer & Laptop Wholesale */}
            <div className="p-8 border border-slate-200 rounded-xl hover:shadow-lg transition bg-white group">
              <div className="text-accent text-3xl mb-4 group-hover:scale-110 transition duration-300">
                <i className="fa-solid fa-laptop"></i>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Computer & Laptop Wholesale</h3>
              <p className="text-mutedtext text-sm">We supply desktops, laptops, workstations, servers, and computer accessories from trusted manufacturers for businesses, educational institutions, and resellers at competitive wholesale prices.</p>
            </div>

            {/* Service 2 - IT Hardware Supply */}
            <div className="p-8 border border-slate-200 rounded-xl hover:shadow-lg transition bg-white group">
              <div className="text-accent text-3xl mb-4 group-hover:scale-110 transition duration-300">
                <i className="fa-solid fa-microchip"></i>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">IT Hardware Supply</h3>
              <p className="text-mutedtext text-sm">We provide a wide range of IT accessories including monitors, keyboards, mice, printers, storage devices, networking equipment, power backup solutions, and computer components.</p>
            </div>

            {/* Service 3 - Software Solutions */}
            <div className="p-8 border border-slate-200 rounded-xl hover:shadow-lg transition bg-white group">
              <div className="text-accent text-3xl mb-4 group-hover:scale-110 transition duration-300">
                <i className="fa-solid fa-code"></i>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Software Solutions</h3>
              <p className="text-mutedtext text-sm">Our software services include business software, productivity applications, security software, cloud applications, software licensing, and custom software development tailored to your business needs.</p>
            </div>

            {/* Service 4 - IT Consulting */}
            <div className="p-8 border border-slate-200 rounded-xl hover:shadow-lg transition bg-white group">
              <div className="text-accent text-3xl mb-4 group-hover:scale-110 transition duration-300">
                <i className="fa-solid fa-chart-line"></i>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">IT Consulting</h3>
              <p className="text-mutedtext text-sm">We help businesses select the right technology solutions, improve infrastructure, reduce costs, and implement digital transformation strategies for long-term success.</p>
            </div>

            {/* Service 5 - Managed IT Services */}
            <div className="p-8 border border-slate-200 rounded-xl hover:shadow-lg transition bg-white group">
              <div className="text-accent text-3xl mb-4 group-hover:scale-110 transition duration-300">
                <i className="fa-solid fa-headset"></i>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Managed IT Services</h3>
              <p className="text-mutedtext text-sm">Our managed services include system monitoring, remote IT support, maintenance, backup solutions, security management, and performance optimization to keep your business running smoothly.</p>
            </div>

            {/* Service 6 - Network & Infrastructure */}
            <div className="p-8 border border-slate-200 rounded-xl hover:shadow-lg transition bg-white group">
              <div className="text-accent text-3xl mb-4 group-hover:scale-110 transition duration-300">
                <i className="fa-solid fa-network-wired"></i>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Network & Infrastructure</h3>
              <p className="text-mutedtext text-sm">Our networking solutions include network design, server installation, Wi-Fi deployment, firewall configuration, data security, and complete infrastructure management services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Services Matter */}
      <section className="py-16 bg-lightbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" 
                alt="Business meeting about IT solutions" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-navy mb-4">Why Our Services Matter</h2>
              <div className="w-16 h-1 bg-gold mb-6"></div>
              <p className="text-mutedtext mb-4 leading-relaxed">
                In today's fast-paced business environment, having the right technology infrastructure is critical to success. At KYKP LTD, we understand that every business has unique requirements, and we tailor our services to meet those specific needs.
              </p>
              <p className="text-mutedtext mb-4 leading-relaxed">
                Our team of certified professionals works closely with you to understand your goals, challenges, and budget constraints. We then design and implement solutions that not only address your immediate needs but also position your business for future growth.
              </p>
              <p className="text-mutedtext leading-relaxed">
                From sourcing the latest hardware to deploying enterprise-grade software and providing ongoing technical support, we are your end-to-end technology partner. Our commitment to quality and customer satisfaction ensures that every project is delivered on time, within budget, and to the highest standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Benefits of Working With Us</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                <i className="fa-solid fa-check"></i>
              </div>
              <h4 className="font-bold text-navy mb-2">Cost-Effective Solutions</h4>
              <p className="text-mutedtext text-sm">We offer competitive pricing without compromising on quality, ensuring you get the best value for your technology investment.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                <i className="fa-solid fa-check"></i>
              </div>
              <h4 className="font-bold text-navy mb-2">Expert Technical Team</h4>
              <p className="text-mutedtext text-sm">Our certified professionals bring years of experience and expertise to every project, ensuring reliable and effective solutions.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                <i className="fa-solid fa-check"></i>
              </div>
              <h4 className="font-bold text-navy mb-2">End-to-End Support</h4>
              <p className="text-mutedtext text-sm">From initial consultation to ongoing maintenance, we provide comprehensive support at every stage of your technology journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom IT Solution?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Contact our team today to discuss your technology requirements and get a free, no-obligation quote.
          </p>
          <Link to="/contact" className="inline-block bg-accent hover:bg-steel text-white px-8 py-3.5 rounded-lg font-bold shadow-lg transition">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}

export default Services