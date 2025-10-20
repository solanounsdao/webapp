import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-900 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-solana-purple">
              🕶️ Solanouns
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-solana-purple transition-colors">
              About
            </a>
            <a href="#collection" className="text-gray-700 dark:text-gray-300 hover:text-solana-purple transition-colors">
              Collection
            </a>
            <a href="#governance" className="text-gray-700 dark:text-gray-300 hover:text-solana-purple transition-colors">
              Governance
            </a>
            <a href="#community" className="text-gray-700 dark:text-gray-300 hover:text-solana-purple transition-colors">
              Community
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
