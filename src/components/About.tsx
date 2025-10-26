import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            What are Solanouns?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2">
            Solanouns is a generative cult art collective of 2222 unique NFTs on Solana with a utility token called $SOLNT integrated with x402 protocol. 
            A collection of 2,222 unique digital collectibles living on the Solana blockchain.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-solana-purple rounded-full flex items-center justify-center mx-auto">
              <span className="text-xl sm:text-2xl">⚡</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Limited Supply</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Only 2,222 Solanouns will ever exist, making each one unique and collectible
            </p>
          </div>
          
          <div className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-solana-green rounded-full flex items-center justify-center mx-auto">
              <span className="text-xl sm:text-2xl">🏛️</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">DAO Governed</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Holders vote on proposals and treasury allocation through decentralized governance
            </p>
          </div>
          
          <div className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
              <span className="text-xl sm:text-2xl">🎨</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Generative Art</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Each Solanouns is algorithmically generated with unique traits and characteristics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
