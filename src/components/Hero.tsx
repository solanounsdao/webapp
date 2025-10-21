import React, { useState, useEffect } from 'react';

interface FeaturedNFT {
  name: string;
  edition: number;
  imageUrl: string;
  attributes: Array<{
    trait_type: string;
    value: string;
  }>;
}

const Hero: React.FC = () => {
  const [featuredNFT, setFeaturedNFT] = useState<FeaturedNFT | null>(null);

  const loadRandomNFT = async () => {
    try {
      // Get a random NFT ID between 0 and 2221
      const randomId = Math.floor(Math.random() * 2222);
      const response = await fetch(`/nft-asset/json/${randomId}.json`);
      
      if (response.ok) {
        const metadata = await response.json();
        setFeaturedNFT({
          name: metadata.name,
          edition: metadata.edition,
          imageUrl: `/nft-asset/images/${randomId}.png`,
          attributes: metadata.attributes || []
        });
      } else {
        // Fallback to NFT #0 if random one fails
        const fallbackResponse = await fetch(`/nft-asset/json/0.json`);
        if (fallbackResponse.ok) {
          const fallbackMetadata = await fallbackResponse.json();
          setFeaturedNFT({
            name: fallbackMetadata.name,
            edition: fallbackMetadata.edition,
            imageUrl: "/nft-asset/images/0.png",
            attributes: fallbackMetadata.attributes || []
          });
        }
      }
    } catch (error) {
      console.error('Error loading random NFT:', error);
      // Fallback to NFT #0 with basic attributes
      setFeaturedNFT({
        name: "Solanouns #0",
        edition: 0,
        imageUrl: "/nft-asset/images/0.png",
        attributes: [
          { trait_type: "Background", value: "Background 8" },
          { trait_type: "Head", value: "Head 213" },
          { trait_type: "Body", value: "Body 3" }
        ]
      });
    }
  };

  useEffect(() => {
    loadRandomNFT();
  }, []);

  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Solanouns
                <br />
                <span className="text-solana-purple">Someone has to do it</span>
                <br />
                On Solana.
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                Solanouns is a generative cult art collective of 2222 unique NFTs on Solana.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="bg-solana-purple text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-all transform hover:scale-105"
                onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Collection
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-solana-purple hover:text-solana-purple transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-4 border-gray-200 dark:border-gray-600">
              <div className="relative aspect-square bg-gradient-to-br from-solana-purple to-solana-green rounded-xl overflow-hidden">
                {featuredNFT ? (
                  <img 
                    src={featuredNFT.imageUrl} 
                    alt={featuredNFT.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                  </div>
                )}
                <button
                  onClick={loadRandomNFT}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  title="Show random NFT"
                >
                  🎲
                </button>
              </div>
              <div className="mt-6 space-y-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {featuredNFT ? featuredNFT.name : 'Loading...'}
                </h3>
                <div className="space-y-2">
                  {featuredNFT && featuredNFT.attributes.slice(0, 5).map((trait, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">{trait.trait_type}</span>
                      <span className="font-bold text-solana-purple">{trait.value}</span>
                    </div>
                  ))}
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
