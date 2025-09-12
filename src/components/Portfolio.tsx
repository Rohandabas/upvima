import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Local Restaurant Website',
      category: 'Restaurant & Food',
      description: 'Modern, responsive website with online ordering system and reservation booking.',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Stripe'],
      status: 'Live'
    },
    {
      title: 'Boutique E-commerce Store',
      category: 'E-commerce',
      description: 'Custom online store with inventory management and secure payment processing.',
      image: 'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Shopify', 'Custom CSS', 'JavaScript'],
      status: 'Live'
    },
    {
      title: 'Professional Services Firm',
      category: 'Professional Services',
      description: 'Corporate website with client portal and appointment scheduling system.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['WordPress', 'PHP', 'MySQL'],
      status: 'Live'
    },
    {
      title: 'Local Fitness Studio',
      category: 'Fitness & Wellness',
      description: 'Dynamic website with class schedules, membership plans, and trainer profiles.',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Firebase', 'Stripe'],
      status: 'In Development'
    },
    {
      title: 'Artisan Crafts Shop',
      category: 'Arts & Crafts',
      description: 'Beautiful showcase website with integrated e-commerce and artist portfolio.',
      image: 'https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Stripe', 'CMS'],
      status: 'Coming Soon'
    },
    {
      title: 'Tech Startup Landing',
      category: 'Technology',
      description: 'Modern landing page with lead generation and product demonstration features.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'Tailwind'],
      status: 'Coming Soon'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our latest projects and the success stories of businesses we've helped grow online.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white rounded-full p-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <ExternalLink className="h-4 w-4 text-gray-600" />
                    </div>
                  </div>
                </div>
                {/* Status Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Live' ? 'bg-green-100 text-green-800' :
                  project.status === 'In Development' ? 'bg-blue-100 text-blue-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  {project.status}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-blue-600 font-medium">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group/btn">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 border">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We'd love to help you create something amazing. Let's discuss your project requirements and bring your vision to life.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;