import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Get all sections
      const sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header height
      
      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      
      // Remove focus from the clicked button after a short delay
      setTimeout(() => {
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      }, 100);
    }
  };

  const getNavItemClass = (section: string) => {
    const isActive = activeSection === section;
    const baseClass = `text-sm font-medium transition-all duration-200 hover:text-orange-500 focus:outline-none relative group ${
      isScrolled ? 'text-gray-700' : 'text-white'
    }`;
    
    return `${baseClass} ${isActive ? 'text-orange-500' : ''}`;
  };

  const getUnderlineClass = (section: string) => {
    const isActive = activeSection === section;
    return `absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-200 ${
      isActive ? 'w-full' : 'w-0 group-hover:w-full group-focus:w-full'
    }`;
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
           <div className="flex items-center space-x-3">
  {isScrolled ? (
    <img
      src="/src/assets/Upvima site logo.png"
      alt="Upvima Digital"
      className="h-10 w-auto transition-all duration-300"
    />
  ) : (
    <img
      src="/src/assets/Upvima site logo.png"
      alt="Upvima Digital"
      className="h-10 w-auto invert brightness-[500%] transition-all duration-300"
    />
  )}
</div>


          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'services', label: 'Services' },
              { id: 'portfolio', label: 'Portfolio' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`${getNavItemClass(item.id)} nav-button`}
              >
                {item.label}
                <span className={getUnderlineClass(item.id)}></span>
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>

        {isMenuOpen && (
  <div className="fixed inset-0 bg-white z-50 flex flex-col">
    <div className="flex items-center justify-between p-4 border-b">
      <img src="/src/assets/Upvima site logo.png" alt="Upvima Digital" className="h-10 w-auto" />
      <button onClick={() => setIsMenuOpen(false)}>
        <X className="h-6 w-6 text-gray-700" />
      </button>
    </div>
    <nav className="flex flex-col space-y-4 px-6 pt-6">
      {[
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'services', label: 'Services' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'contact', label: 'Contact' }
      ].map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`nav-button text-left text-lg ${
            activeSection === item.id
              ? 'text-orange-500 font-semibold'
              : 'text-gray-800 hover:text-orange-500'
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  </div>
)}

      </div>
    </header>
  );
};

export default Header;