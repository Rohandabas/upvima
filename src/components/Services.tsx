import React from 'react';
import { Globe, Palette, TrendingUp, MessageSquare, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Custom, responsive websites that look great on all devices and convert visitors into customers.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First'],
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Palette,
      title: 'Brand Consulting',
      description: 'Strategic branding solutions that help your business stand out and connect with your target audience.',
      features: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Market Research'],
      color: 'green',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: MessageSquare,
      title: 'Logo & Branding',
      description: 'Professional logo design and comprehensive branding packages that reflect your business values.',
      features: ['Logo Design', 'Color Palette', 'Typography', 'Brand Assets'],
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: TrendingUp,
      title: 'Digital Growth',
      description: 'Data-driven strategies to grow your online presence and reach more customers effectively.',
      features: ['SEO Optimization', 'Content Strategy', 'Analytics', 'Growth Planning'],
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to help your business grow and succeed online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 bg-${service.color}-500 rounded-full`}></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={scrollToContact}
                className={`group/cta flex items-center space-x-2 text-${service.color}-600 hover:text-${service.color}-700 font-medium transition-colors`}
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 group-hover/cta:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Grow Your Business?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you establish a strong online presence and reach more customers.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;