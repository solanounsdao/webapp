import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What are Solanouns?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Solanouns are generative NFT avatars based on people, places, and things on Solana. 
            A collection of 2,222 unique digital collectibles living on the Solana blockchain.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-solana-purple rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Limited Supply</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Only 2,222 Solanouns will ever exist, making each one unique and collectible
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-solana-green rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🏛️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">DAO Governed</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Holders vote on proposals and treasury allocation through decentralized governance
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Generative Art</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Each Solanouns is algorithmically generated with unique traits and characteristics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
