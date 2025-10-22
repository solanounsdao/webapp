import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-900 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 text-xl sm:text-2xl font-bold text-solana-purple hover:text-solana-green transition-colors">
              <img 
                src="/logo.png" 
                alt="Solanouns Logo" 
                className="w-6 sm:w-8 h-6 sm:h-8 object-contain logo-transparent logo-blend"
              />
              <span className="hidden xs:inline sm:inline">Solanouns</span>
              <span className="xs:hidden sm:hidden">S</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 dark:text-gray-300 hover:text-solana-purple transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('collection')}
              className="text-gray-700 dark:text-gray-300 hover:text-solana-purple transition-colors"
            >
              Collection
            </button>
            <button 
              onClick={() => scrollToSection('community')}
              className="text-gray-700 dark:text-gray-300 hover:text-solana-purple transition-colors"
            >
              Community
            </button>
            <Link 
              to="/docs" 
              className="text-gray-700 dark:text-gray-300 hover:text-solana-purple transition-colors"
            >
              Docs
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="px-4 py-3 space-y-3">
              <button 
                onClick={() => {
                  scrollToSection('about');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-solana-purple transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => {
                  scrollToSection('collection');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-solana-purple transition-colors"
              >
                Collection
              </button>
              <button 
                onClick={() => {
                  scrollToSection('community');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-solana-purple transition-colors"
              >
                Community
              </button>
              <Link 
                to="/docs" 
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-solana-purple transition-colors"
              >
                Docs
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
