import React from 'react';
import { Link } from 'react-router-dom';
import packageJson from '../../package.json';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="text-xl sm:text-2xl font-bold">Solanouns</div>
            <p className="text-gray-400 dark:text-gray-500 text-sm sm:text-base">
              A generative avatar art collective on Solana. 2,222 unique digital collectibles.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/solanouns" className="text-gray-400 dark:text-gray-500 hover:text-solana-purple transition-colors text-sm sm:text-base">
                🐦 Twitter
              </a>
              <a href="https://mee6.xyz/i/37plYwmYJY " className="text-gray-400 dark:text-gray-500 hover:text-solana-purple transition-colors text-sm sm:text-base">
                💬 Discord
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold">Project</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm sm:text-base">
                About
              </a>
              <a href="#community" className="block text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm sm:text-base">
                Roadmap
              </a>
              <Link to="/docs" className="block text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm sm:text-base">
                Documentation
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold">Community</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm sm:text-base">
                Governance
              </a>
              <a href="#" className="block text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm sm:text-base">
                Proposals
              </a>
              <a href="#" className="block text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm sm:text-base">
                Treasury
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold">Resources</h4>
            <div className="space-y-2">
              <Link to="/docs" className="block text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm sm:text-base">
                Documentation
              </Link>
              <Link to="/brand-kit" className="block text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm sm:text-base">
                Brand Kit
              </Link>
              <Link to="/developer-tools" className="block text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm sm:text-base">
                Developer Tools
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 transition-colors duration-300">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 dark:text-gray-500 transition-colors duration-300 text-sm sm:text-base text-center md:text-left">
              © 2025 Solanouns v{packageJson.version}. Built with ❤️ on Solana.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm sm:text-base text-center">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm sm:text-base text-center">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
