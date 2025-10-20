import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                2222 Solanouns,
                <br />
                <span className="text-solana-purple">Minted Forever,</span>
                <br />
                On Solana.
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                Solanouns is a generative avatar art collective of 2222 unique NFTs on Solana.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-solana-purple text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-all transform hover:scale-105">
                View Collection
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-solana-purple hover:text-solana-purple transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-4 border-gray-200 dark:border-gray-600">
              <div className="aspect-square bg-gradient-to-br from-solana-purple to-solana-green rounded-xl flex items-center justify-center">
                <div className="text-8xl">🕶️</div>
              </div>
              <div className="mt-6 space-y-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Solanouns Collection</h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Total Supply</span>
                  <span className="font-bold text-solana-purple">2,222</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Unique Traits</span>
                  <span className="font-bold text-solana-green">100+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Blockchain</span>
                  <span className="font-bold text-purple-500">Solana</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
