import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Quote className="h-10 w-10 text-blue-600" />
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Client Testimonials Coming Soon</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              We're currently working with our amazing clients to gather their feedback and success stories. 
              Check back soon to see how we've helped businesses like yours grow and succeed online.
            </p>

            {/* Preview Stars */}
            <div className="flex justify-center space-x-1 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-8 w-8 text-yellow-400 fill-current"
                />
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-100">
              <p className="text-gray-700 italic">
                "The team at Upvima Digital has been instrumental in helping us establish our online presence. 
                Their expertise and dedication to our success has been outstanding."
              </p>
              <p className="text-sm text-gray-500 mt-3">- Preview Testimonial</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Want to be one of our featured success stories?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start Your Success Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;