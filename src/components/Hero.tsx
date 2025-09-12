import React from 'react';
import { ArrowRight, TrendingUp, Globe, Users, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Sophisticated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      
      {/* Animated mesh gradient overlay */}
      {/* <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-teal-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      </div> */}


        {/* Animated mesh gradient overlay with a sky-darkish gradient */}
<div className="absolute inset-0 opacity-50">
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-gray-900/70 to-black/90"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.9),transparent_60%)]"></div>
</div>




      
      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float-medium"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float-fast"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 left-20 w-2 h-2 bg-teal-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-40 right-40 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-50"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium animate-fade-in-up">
              <Sparkles className="h-4 w-4 text-blue-400" />
              <span className="text-blue-100">Digital Transformation Experts</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up animation-delay-200">
                <span className="text-white">Upvima</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent animate-gradient-x">
                  Digital
                </span>
              </h1>
              
              <div className="space-y-4 animate-fade-in-up animation-delay-400">
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-200">
                  Bringing Small Businesses Online
                </h2>
                <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed">
                  We help small vendors & local businesses build websites, grow their brand, and reach more customers through innovative digital solutions.
                </p>
              </div>
            </div>

            {/* Enhanced stats with icons */}
            <div className="flex flex-wrap gap-8 animate-fade-in-up animation-delay-600">
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-blue-300">Web Development</div>
                  <div className="text-xs text-slate-400">Modern & Responsive</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-teal-300">Digital Growth</div>
                  <div className="text-xs text-slate-400">Data-Driven Results</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-purple-300">Brand Consulting</div>
                  <div className="text-xs text-slate-400">Strategic Guidance</div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <div className="animate-fade-in-up animation-delay-800">
              <button
                onClick={scrollToContact}
                className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 hover:from-blue-700 hover:via-purple-700 hover:to-teal-700 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center space-x-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative z-10">Get Started Today</span>
                <ArrowRight className="h-6 w-6 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                <Zap className="h-5 w-5 relative z-10 text-yellow-300 animate-pulse" />
              </button>
            </div>
          </div>

          {/* Right content - Enhanced visual element */}
          <div className="hidden lg:block animate-fade-in-up animation-delay-1000">
            <div className="relative">
              {/* Main card */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-teal-500/10 rounded-3xl"></div>
                
                {/* Floating elements inside card */}
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center animate-pulse">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">500+</div>
                      <div className="text-sm text-slate-300">Projects Delivered</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">Growth Focused Solutions</h3>
                    <p className="text-slate-300">Helping businesses reach new heights with cutting-edge digital strategies</p>
                    
                    {/* Progress bars */}
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm text-slate-300 mb-1">
                          <span>Client Satisfaction</span>
                          <span>98%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full animate-progress-98"></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm text-slate-300 mb-1">
                          <span>Project Success Rate</span>
                          <span>95%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-progress-95"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-green-400 to-teal-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;