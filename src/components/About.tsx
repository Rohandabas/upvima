import React from 'react';
import { Target, Heart, Lightbulb, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">Upvima Digital</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering small businesses and local vendors to thrive in the digital world through innovative web solutions and strategic branding.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Upvima Digital, we believe every small business deserves a powerful online presence. Founded with the vision of bridging the digital gap for local entrepreneurs, we specialize in creating beautiful, functional websites and comprehensive branding solutions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We understand the unique challenges faced by small vendors and local businesses. That's why we've dedicated ourselves to providing affordable, high-quality digital services that help our clients compete effectively in today's marketplace.
            </p>
          </div>

          {/* Values */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Mission Driven</h4>
              <p className="text-gray-600">Helping small businesses establish a strong digital presence and reach their target audience effectively.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Client Focused</h4>
              <p className="text-gray-600">We put our clients first, understanding their unique needs and delivering personalized solutions.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-gray-600">Leveraging the latest technologies and design trends to create modern, effective digital solutions.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Partnership</h4>
              <p className="text-gray-600">Building long-term relationships with our clients, supporting their growth every step of the way.</p>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Vision</h3>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            To become the leading digital partner for small businesses, empowering them with the tools, strategies, and support they need to thrive in an increasingly digital world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;