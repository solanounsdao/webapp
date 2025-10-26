import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
  const [copied, setCopied] = useState(false);
  
  // Placeholder contract address - same as in footer
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
    <section className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Solanouns
                <br />
                <span className="text-solana-purple">Someone has to do it</span>
                <br />
                On Solana.
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0 px-2 lg:px-0">
                Solanouns Project is a generative cult art collective of 2222 unique NFTs on Solana with a utility token called $SOLNT integrated with x402 protocol.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button 
                className="bg-solana-purple text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-purple-700 transition-all transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
                onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Collection
              </button>
              <Link 
                to="/playground"
                className="bg-solana-green text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-green-600 transition-all transform hover:scale-105 w-full sm:w-auto text-center inline-block text-sm sm:text-base"
              >
                🎨 Create PFP
              </Link>
              <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold hover:border-solana-purple hover:text-solana-purple transition-colors w-full sm:w-auto text-sm sm:text-base"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                Learn More
              </button>
            </div>
                  {/* Contract Address Section */}

        <div className="text-center lg:text-left space-y-2">
          <button
            onClick={copyToClipboard}
            className="group relative flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-purple-50 to-green-50 dark:from-gray-800 dark:to-gray-700 hover:from-purple-100 hover:to-green-100 dark:hover:from-gray-700 dark:hover:to-gray-600 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 backdrop-blur-sm border-2 border-purple-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto justify-center lg:justify-start"
            title="Click to copy contract address"
          >
            <div className="flex items-center space-x-2 flex-1 justify-center lg:justify-start">
              <span className="text-purple-600 dark:text-purple-400">🔗</span>
              <span className="text-xs sm:text-sm font-mono text-gray-700 dark:text-gray-300 truncate max-w-[120px] xs:max-w-[140px] sm:max-w-[180px] md:max-w-[220px] font-semibold">
                {contractAddress}
              </span>
            </div>
            <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full bg-white dark:bg-gray-600 shadow-sm">
              {copied ? (
                <span className="text-solana-green text-xs sm:text-sm animate-pulse">✓</span>
              ) : (
                <span className="text-purple-500 group-hover:text-solana-purple text-xs sm:text-sm transition-colors">📋</span>
              )}
            </div>
            {!copied && (
              <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-purple-400/20 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            )}
          </button>
          {copied && (
            <p className="text-xs sm:text-sm text-solana-green font-medium animate-bounce">Contract Copied! 🎉</p>
          )}
        </div>

          </div>
          
          <div className="relative mt-6 sm:mt-8 lg:mt-0 order-1 lg:order-2">
            <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-2xl border-2 sm:border-4 border-gray-200 dark:border-gray-600 mx-auto max-w-xs sm:max-w-sm lg:max-w-none">
              <div className="relative aspect-square bg-gradient-to-br from-solana-purple to-solana-green rounded-lg sm:rounded-xl overflow-hidden">
                {featuredNFT ? (
                  <img 
                    src={featuredNFT.imageUrl} 
                    alt={featuredNFT.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-white"></div>
                  </div>
                )}
                <button
                  onClick={loadRandomNFT}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-colors text-sm sm:text-base"
                  title="Show random NFT"
                >
                  🎲
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



      <br className="hidden sm:block"/><br className="hidden sm:block"/><br className="hidden md:block"/><br className="hidden lg:block"/><br className="hidden lg:block"/><br className="hidden lg:block"/>
      
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
