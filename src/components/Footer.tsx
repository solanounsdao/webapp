import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold">🕶️ Solanouns</div>
            <p className="text-gray-400 dark:text-gray-500">
              A generative avatar art collective on Solana. 2,222 unique digital collectibles.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-solana-purple transition-colors">
                🐦 Twitter
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-solana-purple transition-colors">
                💬 Discord
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Project</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                About
              </a>
              <a href="#community" className="block text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                Roadmap
              </a>
              <Link to="/docs" className="block text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                Documentation
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Community</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                Governance
              </a>
              <a href="#" className="block text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                Proposals
              </a>
              <a href="#" className="block text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                Treasury
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Resources</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                Documentation
              </a>
              <a href="#" className="block text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                Brand Kit
              </a>
              <a href="#" className="block text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                Developer Tools
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 transition-colors duration-300">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 dark:text-gray-500 transition-colors duration-300">
              © 2024 Solanouns. Built with ❤️ on Solana.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
