import React, { useState, useEffect } from 'react';

interface SolanounsMetadata {
  name: string;
  description: string;
  image: string;
  attributes: Array<{
    trait_type: string;
    value: string;
  }>;
  edition: number;
  background_color: string;
}

const Collection: React.FC = () => {
  const [solanouns, setSolanouns] = useState<SolanounsMetadata[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSolanouns = async () => {
      try {
        const nftData = [];
        // Load sample NFTs (you can expand this to load more)
        for (let i = 1; i <= 4; i++) {
          const response = await fetch(`/json/${i}.json`);
          const metadata = await response.json();
          nftData.push(metadata);
        }
        setSolanouns(nftData);
      } catch (error) {
        console.error('Error loading Solanouns:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSolanouns();
  }, []);

  if (loading) {
    return (
      <section id="collection" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-solana-purple mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading Solanouns...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="collection" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Solanouns Collection
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover unique generative avatars with distinctive traits and characteristics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solanouns.map((nft, index) => (
            <div key={nft.edition} className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-6xl">
                {/* Placeholder for actual NFT image */}
                {index === 0 && '🕶️'}
                {index === 1 && '👾'}
                {index === 2 && '🤖'}
                {index === 3 && '🎭'}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {nft.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {nft.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Traits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {nft.attributes.slice(0, 3).map((attr, attrIndex) => (
                      <span 
                        key={attrIndex}
                        className="bg-solana-purple/10 text-solana-purple px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {attr.value}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Edition</span>
                    <span className="font-bold text-solana-purple">#{nft.edition}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Collection Stats
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-solana-purple">2,222</div>
                <div className="text-gray-600 dark:text-gray-300">Total Supply</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-solana-green">100+</div>
                <div className="text-gray-600 dark:text-gray-300">Unique Traits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-500">4</div>
                <div className="text-gray-600 dark:text-gray-300">Shown Here</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
