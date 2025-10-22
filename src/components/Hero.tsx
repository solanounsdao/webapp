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

  const scrollToNextSection = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    loadRandomNFT();
  }, []);

  return (
    <section className="pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Solanouns
                <br />
                <span className="text-solana-purple">Someone has to do it</span>
                <br />
                On Solana.
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0">
                Solanouns is a generative cult art collective of 2222 unique NFTs on Solana.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                className="bg-solana-purple text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-purple-700 transition-all transform hover:scale-105 w-full sm:w-auto"
                onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Collection
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:border-solana-purple hover:text-solana-purple transition-colors w-full sm:w-auto"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl border-4 border-gray-200 dark:border-gray-600 mx-auto max-w-sm lg:max-w-none">
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
            </div>
          </div>
        </div>
      </div>

      <br/><br/><br/><br/><br/><br/>
      
      {/* Scroll Down Button */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToNextSection}
          className="group flex flex-col items-center space-y-1 sm:space-y-2 text-gray-600 dark:text-gray-400 hover:text-solana-purple dark:hover:text-solana-purple transition-colors"
          aria-label="Scroll to next section"
        >
          <span className="text-xs sm:text-sm font-medium">Explore</span>
          <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-current rounded-full animate-bounce mt-1 sm:mt-2"></div>
          </div>
          <svg 
            className="w-5 sm:w-6 h-5 sm:h-6 transform group-hover:translate-y-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
