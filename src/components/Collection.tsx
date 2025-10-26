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

  const loadRandomSolanouns = async (count = 4) => {
    try {
      const nftData: SolanounsMetadata[] = [];
      
      // Generate random unique NFT IDs for fresh preview on each refresh
      const randomIds: number[] = [];
      while (randomIds.length < count) {
        const randomId = Math.floor(Math.random() * 2222);
        if (!randomIds.includes(randomId)) {
          randomIds.push(randomId);
        }
      }
      
      // Load metadata for each random NFT
      for (const id of randomIds) {
        try {
          const response = await fetch(`/nft-asset/json/${id}.json`);
          if (response.ok) {
            const metadata = await response.json();
            nftData.push({
              ...metadata,
              imageUrl: `/nft-asset/images/${id}.png`
            });
          } else {
            // Fallback: if JSON doesn't exist, create basic metadata
            nftData.push({
              name: `Solanouns #${id}`,
              image: `/nft-asset/images/${id}.png`,
              imageUrl: `/nft-asset/images/${id}.png`,
              edition: id,
              attributes: []
            });
          }
        } catch (error) {
          console.error(`Error loading NFT ${id}:`, error);
          // Still add the NFT with basic info
          nftData.push({
            name: `Solanouns #${id}`,
            image: `/nft-asset/images/${id}.png`,
            imageUrl: `/nft-asset/images/${id}.png`,
            edition: id,
            attributes: []
          });
        }
      }
      
      setSolanouns(nftData);
    } catch (error) {
      console.error('Error loading random Solanouns:', error);
    }
  };

  useEffect(() => {
    const initializeCollection = async () => {
      await loadRandomSolanouns(4);
      setLoading(false);
    };

    initializeCollection();
  }, []);

  if (loading) {
    return (
      <section id="collection" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-solana-purple mx-auto"></div>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300">Loading Solanouns...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="collection" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Solanouns Collection
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2">
            Discover unique generative avatars with distinctive traits and characteristics. Each refresh shows different random NFTs from the collection!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {solanouns.map((nft) => (
            <div key={nft.edition} className="bg-white dark:bg-gray-700 rounded-lg sm:rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={nft.imageUrl || `/nft-asset/images/${nft.edition}.png`}
                  alt={nft.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 lg:mt-12 space-y-4">
          <button
            onClick={() => {
              setLoading(true);
              loadRandomSolanouns(4).then(() => setLoading(false));
            }}
            className="inline-block bg-solana-purple text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-purple-700 transition-all transform hover:scale-105 text-sm sm:text-base mr-4"
          >
            <span className="flex items-center justify-center gap-2">
              <span>🎲</span>
              <span className="hidden sm:inline">Show Different NFTs</span>
              <span className="sm:hidden">Refresh</span>
            </span>
          </button>
          
          <a
            href="https://launchmynft.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-solana-green text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-green-600 transition-all transform hover:scale-105 text-sm sm:text-base"
          >
            <span className="flex items-center justify-center gap-2">
              <span>🚀</span>
              <span className="hidden sm:inline">Buy Solanouns Now</span>
              <span className="sm:hidden">Buy Now</span>
            </span>
          </a>
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
