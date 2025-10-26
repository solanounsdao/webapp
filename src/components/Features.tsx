import React, { useState, useEffect } from 'react';

interface NFTDisplay {
  id: number;
  imageUrl: string;
  name: string;
}

const Features: React.FC = () => {
  const [ecosystemNFTs, setEcosystemNFTs] = useState<NFTDisplay[]>([]);

  useEffect(() => {
    const loadEcosystemNFTs = async () => {
      try {
        // Generate random NFT IDs for ecosystem showcase on every load
        const nftIds: number[] = [];
        const usedIds = new Set<number>();
        
        // Generate 7 unique random NFT IDs
        while (nftIds.length < 7) {
          const randomId = Math.floor(Math.random() * 2222);
          if (!usedIds.has(randomId)) {
            usedIds.add(randomId);
            nftIds.push(randomId);
          }
        }
        
        const nftData: NFTDisplay[] = [];

        for (const id of nftIds) {
          try {
            const response = await fetch(`/nft-asset/json/${id}.json`);
            if (response.ok) {
              const metadata = await response.json();
              nftData.push({
                id,
                imageUrl: `/nft-asset/images/${id}.png`,
                name: metadata.name
              });
            }
          } catch (error) {
            console.error(`Error loading NFT ${id}:`, error);
          }
        }
        
        setEcosystemNFTs(nftData);
      } catch (error) {
        console.error('Error loading ecosystem NFTs:', error);
      }
    };

    loadEcosystemNFTs();
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            The Solanouns Ecosystem
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 px-2">
            More than just NFTs - building the future of decentralized communities
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Unique Collection</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300">
              Each Solanouns is algorithmically generated with a combination of unique traits. 
              With over 100 different attributes, no two Solanouns are exactly alike.
            </p>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="flex -space-x-2">
                {ecosystemNFTs.slice(0, 3).map((nft) => (
                  <div key={nft.id} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden">
                    <img 
                      src={nft.imageUrl} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                {ecosystemNFTs.length === 0 && (
                  <>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-solana-purple rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                      🕶️
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-solana-green rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                      👾
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                      🤖
                    </div>
                  </>
                )}
              </div>
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">2,222 unique Solanouns</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 order-1 lg:order-2">
            {ecosystemNFTs.slice(3, 7).map((nft) => (
              <div key={nft.id} className="pixel-border bg-white dark:bg-gray-700 p-2 sm:p-4 rounded-lg transition-colors duration-300 hover:shadow-lg">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src={nft.imageUrl} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
            
            {/* Fallback placeholders if NFTs haven't loaded yet */}
            {ecosystemNFTs.length < 4 && (
              <>
                <div className="pixel-border bg-white dark:bg-gray-700 p-2 sm:p-4 rounded-lg transition-colors duration-300">
                  <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-2xl sm:text-4xl">
                    🕶️
                  </div>
                </div>
                <div className="pixel-border bg-white dark:bg-gray-700 p-2 sm:p-4 rounded-lg transition-colors duration-300">
                  <div className="aspect-square bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center text-2xl sm:text-4xl">
                    👾
                  </div>
                </div>
                <div className="pixel-border bg-white dark:bg-gray-700 p-2 sm:p-4 rounded-lg transition-colors duration-300">
                  <div className="aspect-square bg-gradient-to-br from-green-400 to-teal-400 rounded-lg flex items-center justify-center text-2xl sm:text-4xl">
                    🤖
                  </div>
                </div>
                <div className="pixel-border bg-white dark:bg-gray-700 p-4 rounded-lg transition-colors duration-300">
                  <div className="aspect-square bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center text-4xl">
                    🎭
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg transition-colors duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-solana-purple rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <span className="text-white text-lg sm:text-xl">🗳️</span>
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Governance</h4>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 transition-colors duration-300">
              Vote on proposals that shape the future of the Solanouns project and community
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg transition-colors duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-solana-green rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <span className="text-white text-lg sm:text-xl">💰</span>
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Treasury</h4>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 transition-colors duration-300">
              Community-controlled treasury funded by auction proceeds for ecosystem growth
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg transition-colors duration-300 sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <span className="text-white text-lg sm:text-xl">🌐</span>
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Community</h4>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 transition-colors duration-300">
              Join a vibrant community of builders, creators, and Solana enthusiasts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
