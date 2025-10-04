import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  photo: string;
  text: string;
  stars?: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Vidya Nand",
    role: "Founder, Neelkanth School",
    photo: "/testimonal1.png",
    text: "The team helped us launch a modern and secure school website with ease. Parents and students now find it more accessible and engaging.",
    stars: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Hear directly from one of our valued clients.
          </p>
        </div>

        {/* Single Testimonial */}
        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={testimonials[0].photo}
              alt={testimonials[0].name}
              className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
            />
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                {testimonials[0].name}
              </h4>
              <p className="text-sm text-gray-500">{testimonials[0].role}</p>
            </div>
          </div>

          <div className="mb-4">
            <Quote className="w-6 h-6 text-blue-500 mb-2" />
            <p className="text-gray-700 leading-relaxed italic">
              "{testimonials[0].text}"
            </p>
          </div>

          <div className="flex space-x-1 mt-4">
            {Array.from({ length: testimonials[0].stars ?? 0 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Want to be one of our featured success stories?
          </p>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
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
