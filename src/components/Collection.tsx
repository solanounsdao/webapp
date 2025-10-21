import React, { useState, useEffect } from 'react';

interface SolanounsMetadata {
  name: string;
  image: string;
  imageUrl?: string;
  attributes: Array<{
    trait_type: string;
    value: string;
  }>;
  edition: number;
  background_color?: string;
}

const Collection: React.FC = () => {
  const [solanouns, setSolanouns] = useState<SolanounsMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadedNFTIds, setLoadedNFTIds] = useState<Set<number>>(new Set());

  const loadSolanouns = async (startIndex = 0, count = 8) => {
    try {
      const nftData: SolanounsMetadata[] = [];
      const nftIds: number[] = [];
      
      // Generate random NFT IDs that haven't been loaded yet
      const availableIds = Array.from({ length: 2222 }, (_, i) => i).filter(id => !loadedNFTIds.has(id));
      
      // If we don't have enough available IDs, reset the loaded set (start fresh)
      if (availableIds.length < count) {
        setLoadedNFTIds(new Set());
        // Regenerate available IDs
        for (let i = 0; i < Math.min(count, 2222); i++) {
          const randomId = Math.floor(Math.random() * 2222);
          if (!nftIds.includes(randomId)) {
            nftIds.push(randomId);
          }
        }
      } else {
        // Select random IDs from available ones
        const shuffledAvailable = availableIds.sort(() => Math.random() - 0.5);
        nftIds.push(...shuffledAvailable.slice(0, count));
      }
      
      // Update loaded IDs set
      setLoadedNFTIds(prev => {
        const newSet = new Set(prev);
        nftIds.forEach(id => newSet.add(id));
        return newSet;
      });
      
      for (const id of nftIds) {
        try {
          const response = await fetch(`/nft-asset/json/${id}.json`);
          if (response.ok) {
            const metadata = await response.json();
            nftData.push({
              ...metadata,
              imageUrl: `/nft-asset/images/${id}.png`
            });
          }
        } catch (error) {
          console.error(`Error loading NFT ${id}:`, error);
        }
      }
      
      if (startIndex === 0) {
        setSolanouns(nftData);
      } else {
        setSolanouns(prev => [...prev, ...nftData]);
      }
    } catch (error) {
      console.error('Error loading Solanouns:', error);
    }
  };

  const loadMoreNFTs = async () => {
    setLoadingMore(true);
    await loadSolanouns(solanouns.length, 4);
    setLoadingMore(false);
  };

  useEffect(() => {
    const initializeCollection = async () => {
      await loadSolanouns(0, 8);
      setLoading(false);
    };

    initializeCollection();
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
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover unique generative avatars with distinctive traits and characteristics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {solanouns.map((nft) => (
            <div key={nft.edition} className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={nft.imageUrl || `/nft-asset/images/${nft.edition}.png`}
                  alt={nft.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-4 sm:p-5 lg:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 truncate">
                  {nft.name}
                </h3>
                
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">Traits:</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {nft.attributes.slice(0, 3).map((attr, attrIndex) => (
                      <span 
                        key={attrIndex}
                        className="bg-solana-purple/10 text-solana-purple px-2 py-1 rounded-md text-xs font-medium truncate max-w-full"
                      >
                        {attr.value}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-600">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Edition</span>
                    <span className="font-bold text-solana-purple text-sm sm:text-base">#{nft.edition}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 lg:mt-12">
          <button
            onClick={loadMoreNFTs}
            disabled={loadingMore}
            className="bg-solana-purple text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-purple-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base"
          >
            {loadingMore ? (
              <span className="flex items-center justify-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
                <span className="hidden sm:inline">Loading More...</span>
                <span className="sm:hidden">Loading...</span>
              </span>
            ) : (
              <span>
                <span className="hidden sm:inline">Load More NFTs</span>
                <span className="sm:hidden">Load More</span>
              </span>
            )}
          </button>
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <div className="bg-white dark:bg-gray-700 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Collection Stats
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-2 sm:p-0">
                <div className="text-2xl sm:text-3xl font-bold text-solana-purple">2,222</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Total Supply</div>
              </div>
              <div className="text-center p-2 sm:p-0">
                <div className="text-2xl sm:text-3xl font-bold text-solana-green">100+</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Unique Traits</div>
              </div>
              <div className="text-center p-2 sm:p-0">
                <div className="text-2xl sm:text-3xl font-bold text-purple-500">{solanouns.length}</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Shown Here</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
