import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import packageJson from '../../package.json';

const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  
  // Placeholder contract address - replace with actual contract address
  const contractAddress = "SoL4N0uNs1234567890aBcDeFgHiJkLmNoPqRsTuVwXyZ";
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="text-lg sm:text-xl md:text-2xl font-bold">Solanouns</div>
            <p className="text-gray-400 dark:text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed">
              Solanouns Project is a generative cult art collective of 2222 unique NFTs on Solana with a utility token called $SOLNT integrated with x402 protocol.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a href="https://x.com/solanouns" className="text-gray-400 dark:text-gray-500 hover:text-solana-purple transition-colors text-xs sm:text-sm md:text-base">
                🐦 Twitter
              </a>
              <a href="https://mee6.xyz/i/37plYwmYJY " className="text-gray-400 dark:text-gray-500 hover:text-solana-purple transition-colors text-xs sm:text-sm md:text-base">
                💬 Discord
              </a>
            </div>
            
            {/* Contract Address */}
            <div className="space-y-2">
              <h5 className="text-xs sm:text-sm font-semibold text-gray-300">Contract Address</h5>
              <button
                onClick={copyToClipboard}
                className="group flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 transition-colors cursor-pointer w-full sm:w-auto"
                title="Click to copy contract address"
              >
                <span className="text-xs sm:text-sm font-mono text-gray-300 truncate max-w-[140px] xs:max-w-[180px] sm:max-w-[200px] md:max-w-[250px]">
                  {contractAddress}
                </span>
                <div className="flex-shrink-0">
                  {copied ? (
                    <span className="text-solana-green text-xs">✓</span>
                  ) : (
                    <span className="text-gray-400 group-hover:text-white text-xs">📋</span>
                  )}
                </div>
              </button>
              {copied && (
                <p className="text-xs text-solana-green">Contract address copied!</p>
              )}
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
