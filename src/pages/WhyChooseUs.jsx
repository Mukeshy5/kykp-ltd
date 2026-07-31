import React from 'react'
import { Link } from 'react-router-dom'

const WhyChooseUs = () => {
  return (
    <>
      <section id="why-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Why Choose KYKP LTD</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-mutedtext">Setting standards of reliability, innovation, and operational excellence in IT solutions. Discover what makes us the preferred technology partner for businesses across the UK.</p>
          </div>

          {/* Image */}
          <div className="mb-16">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80" 
              alt="Why choose KYKP LTD" 
              className="rounded-xl shadow-lg w-full"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition">
              <i className="fa-solid fa-user-tie text-gold text-2xl mb-4"></i>
              <h4 className="text-lg font-bold text-navy mb-2">Experienced IT Professionals</h4>
              <p className="text-mutedtext text-sm">Skilled experts with deep knowledge of modern technology solutions and business requirements. Our team has years of hands-on experience across multiple industries.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition">
              <i className="fa-solid fa-medal text-gold text-2xl mb-4"></i>
              <h4 className="text-lg font-bold text-navy mb-2">High-Quality Products</h4>
              <p className="text-mutedtext text-sm">Premium hardware and software from trusted manufacturers with rigorous quality checks. We only source products that meet our strict quality standards.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition">
              <i className="fa-solid fa-pound-sign text-gold text-2xl mb-4"></i>
              <h4 className="text-lg font-bold text-navy mb-2">Competitive Wholesale Pricing</h4>
              <p className="text-mutedtext text-sm">Fair, transparent B2B pricing to maximize your technology investment value. No hidden fees, no surprises — just honest pricing.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition">
              <i className="fa-solid fa-headset text-gold text-2xl mb-4"></i>
              <h4 className="text-lg font-bold text-navy mb-2">Reliable Customer Support</h4>
              <p className="text-mutedtext text-sm">Dedicated support team ready to assist with technical queries and after-sales service. We are always here when you need us.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition">
              <i className="fa-solid fa-shield-halved text-gold text-2xl mb-4"></i>
              <h4 className="text-lg font-bold text-navy mb-2">Secure Technology Solutions</h4>
              <p className="text-mutedtext text-sm">Robust security measures implemented across all products and services. Your data and systems are protected with enterprise-grade security protocols.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition">
              <i className="fa-solid fa-truck-fast text-gold text-2xl mb-4"></i>
              <h4 className="text-lg font-bold text-navy mb-2">Fast Delivery</h4>
              <p className="text-mutedtext text-sm">Efficient logistics ensuring timely delivery of products across the UK. We understand that downtime costs money, and we prioritize speed.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition">
              <i className="fa-solid fa-gears text-gold text-2xl mb-4"></i>
              <h4 className="text-lg font-bold text-navy mb-2">Customized Business Solutions</h4>
              <p className="text-mutedtext text-sm">Tailored technology solutions designed to meet your specific business requirements. No two businesses are alike, and neither are our solutions.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition">
              <i className="fa-solid fa-handshake text-gold text-2xl mb-4"></i>
              <h4 className="text-lg font-bold text-navy mb-2">Long-Term Business Partnerships</h4>
              <p className="text-mutedtext text-sm">Building lasting relationships through trust, transparency, and consistent delivery. We invest in our clients' success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-lightbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">What Our Clients Say</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-center space-x-1 text-gold mb-4">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="text-mutedtext mb-4 italic">"KYKP LTD has been our technology partner for over 3 years. Their professional approach and quality products have significantly improved our IT infrastructure. Highly recommended!"</p>
              <div className="flex items-center space-x-3">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80" 
                  alt="Client" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-navy text-sm">Robert Wilson</p>
                  <p className="text-xs text-mutedtext">CEO, TechBridge Solutions</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-center space-x-1 text-gold mb-4">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="text-mutedtext mb-4 italic">"We approached KYKP for our office IT setup and they delivered beyond expectations. The team was professional, responsive, and the pricing was very competitive."</p>
              <div className="flex items-center space-x-3">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&q=80" 
                  alt="Client" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-navy text-sm">Lisa Chen</p>
                  <p className="text-xs text-mutedtext">Operations Manager, FinCorp Ltd</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
              <div className="flex items-center space-x-1 text-gold mb-4">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="text-mutedtext mb-4 italic">"Excellent service and support. KYKP helped us transition to cloud-based systems seamlessly. Their expertise made the entire process smooth and hassle-free."</p>
              <div className="flex items-center space-x-3">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80" 
                  alt="Client" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-navy text-sm">Mark Thompson</p>
                  <p className="text-xs text-mutedtext">IT Director, EduPrime Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-4">Our Commitment to Excellence</h2>
              <div className="w-16 h-1 bg-gold mb-6"></div>
              <p className="text-mutedtext mb-4 leading-relaxed">
                At KYKP LTD, we are committed to delivering exceptional value to every client. Our dedication to quality, innovation, and customer satisfaction drives everything we do. We continuously invest in our team, our processes, and our partnerships to ensure that we remain at the forefront of the technology industry.
              </p>
              <p className="text-mutedtext mb-4 leading-relaxed">
                We believe in building long-term relationships with our clients based on trust, transparency, and mutual success. When you choose KYKP LTD, you are choosing a partner who is genuinely invested in your business growth and success.
              </p>
              <p className="text-mutedtext leading-relaxed">
                Our team is available to answer your questions, provide expert advice, and support you every step of the way. From initial consultation to ongoing support, we are committed to your satisfaction.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" 
                alt="Our commitment" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the KYKP Difference</h2>
          <p className="text-slate-300 text-lg mb-8">
            Join hundreds of satisfied businesses that trust KYKP LTD for their technology needs. Get in touch today and let us show you what real partnership looks like.
          </p>
          <Link to="/contact" className="inline-block bg-accent hover:bg-steel text-white px-8 py-3.5 rounded-lg font-bold shadow-lg transition">
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  )
}

export default WhyChooseUs