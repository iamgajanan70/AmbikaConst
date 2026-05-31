import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

interface HeaderProps {
  activeTab: 'home' | 'contact';
  setActiveTab: (tab: 'home' | 'contact') => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Header({ activeTab, setActiveTab, onScrollToSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setActiveTab('home');
    setMobileMenuOpen(false);
    // Add small delay to ensure home screen is active before scrolling
    setTimeout(() => {
      onScrollToSection(sectionId);
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <button 
            id="header-logo-btn"
            onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center space-x-3 group focus:outline-none"
          >
            <div className="border-2 border-brand-dark rounded-lg px-4 py-1.5 font-display font-bold text-xl tracking-wider text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-all">
              AMBIKA
            </div>
            <span className="font-sans font-black text-brand-dark text-base tracking-wider hidden sm:inline-block">
              CONSTRUCTIONS
            </span>
          </button>

          {/* Desktop Nav Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              id="nav-home-btn"
              onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="font-sans font-semibold text-sm tracking-wide text-brand-yellow hover:text-brand-yellow-hover transition-colors focus:outline-none cursor-pointer"
            >
              Home
            </button>
            <button
              id="nav-projects-btn"
              onClick={() => handleNavClick('projects-section')}
              className="font-sans font-medium text-sm tracking-wide text-gray-800 hover:text-brand-yellow transition-colors focus:outline-none cursor-pointer"
            >
              Projects
            </button>
            <button
              id="nav-about-btn"
              onClick={() => handleNavClick('about-section')}
              className="font-sans font-medium text-sm tracking-wide text-gray-800 hover:text-brand-yellow transition-colors focus:outline-none cursor-pointer"
            >
              About us
            </button>
            <button
              id="nav-services-btn"
              onClick={() => handleNavClick('services-section')}
              className="font-sans font-medium text-sm tracking-wide text-gray-800 hover:text-brand-yellow transition-colors focus:outline-none cursor-pointer"
            >
              Services
            </button>
            <button
              id="nav-faq-btn"
              onClick={() => handleNavClick('projects-section')}
              className="font-sans font-medium text-sm tracking-wide text-gray-800 hover:text-brand-yellow transition-colors focus:outline-none cursor-pointer"
            >
              Project
            </button>

            {/* CTA Contact Button */}
            <button
              id="nav-contact-btn"
              onClick={() => setActiveTab('contact')}
              className="font-sans font-bold text-sm px-6 py-2.5 rounded-full transition-all focus:outline-none bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark shadow hover:shadow-md cursor-pointer"
            >
              Contact us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-brand-yellow focus:outline-none p-2 rounded-lg"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drop-down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-3 shadow-lg absolute w-full left-0 transition-all">
          <button
            id="mobile-nav-home-btn"
            onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={`block w-full text-left px-4 py-2.5 rounded-lg text-base font-semibold ${
              activeTab === 'home' ? 'bg-amber-50 text-brand-yellow' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Home
          </button>
          <button
            id="mobile-nav-projects-btn"
            onClick={() => handleNavClick('projects-section')}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-base font-semibold text-gray-700 hover:bg-gray-50"
          >
            Projects
          </button>
          <button
            id="mobile-nav-about-btn"
            onClick={() => handleNavClick('about-section')}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-base font-semibold text-gray-700 hover:bg-gray-50"
          >
            About us
          </button>
          <button
            id="mobile-nav-services-btn"
            onClick={() => handleNavClick('services-section')}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-base font-semibold text-gray-700 hover:bg-gray-50"
          >
            Services
          </button>
          <button
            id="mobile-nav-faq-btn"
            onClick={() => handleNavClick('projects-section')}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-base font-semibold text-gray-700 hover:bg-gray-50"
          >
            Project
          </button>
          <div className="border-t border-gray-100 pt-3">
            <button
              id="mobile-nav-contact-btn"
              onClick={() => { setActiveTab('contact'); setMobileMenuOpen(false); }}
              className="flex w-full justify-center items-center font-display font-bold text-center bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark px-4 py-3 rounded-full text-base transition-colors"
            >
              Contact us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
