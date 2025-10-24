import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

interface TraitOption {
  id: number;
  name: string;
  filename: string;
}

interface TraitLayers {
  background: TraitOption[];
  head: TraitOption[];
  body: TraitOption[];
  accessories: TraitOption[];
  glasses: TraitOption[];
}

interface SelectedTraits {
  background: number;
  head: number;
  body: number;
  accessories: number;
  glasses: number;
}

const NFTPlayground: React.FC = () => {
  const [traits, setTraits] = useState<TraitLayers>({
    background: [],
    head: [],
    body: [],
    accessories: [],
    glasses: []
  });

  const [selectedTraits, setSelectedTraits] = useState<SelectedTraits>({
    background: 1,
    head: 1,
    body: 1,
    accessories: 1,
    glasses: 1
  });

  const [loading, setLoading] = useState(true);

  // Generate trait options based on directory structure
  const generateTraitOptions = useCallback(() => {
    const traitData: TraitLayers = {
      background: Array.from({ length: 9 }, (_, i) => ({
        id: i + 1,
        name: `Background ${i + 1}`,
        filename: `Background ${i + 1}.png`
      })),
      head: Array.from({ length: 231 }, (_, i) => ({
        id: i + 1,
        name: `Head ${i + 1}`,
        filename: `Head ${i + 1}.png`
      })),
      body: Array.from({ length: 9 }, (_, i) => ({
        id: i + 1,
        name: `Body ${i + 1}`,
        filename: `Body ${i + 1}.png`
      })),
      accessories: Array.from({ length: 93 }, (_, i) => ({
        id: i + 1,
        name: `Accessories ${i + 1}`,
        filename: `Accessories ${i + 1}.png`
      })),
      glasses: Array.from({ length: 27 }, (_, i) => ({
        id: i + 1,
        name: `Glasses ${i + 1}`,
        filename: `Glasses ${i + 1}.png`
      }))
    };

    setTraits(traitData);
    setLoading(false);
  }, []);

  useEffect(() => {
    generateTraitOptions();
  }, [generateTraitOptions]);

  const randomizeTraits = () => {
    const randomTraits: SelectedTraits = {
      background: Math.floor(Math.random() * traits.background.length) + 1,
      head: Math.floor(Math.random() * traits.head.length) + 1,
      body: Math.floor(Math.random() * traits.body.length) + 1,
      accessories: Math.floor(Math.random() * traits.accessories.length) + 1,
      glasses: Math.floor(Math.random() * traits.glasses.length) + 1
    };
    setSelectedTraits(randomTraits);
  };

  const resetToDefaults = () => {
    setSelectedTraits({
      background: 1,
      head: 1,
      body: 1,
      accessories: 1,
      glasses: 1
    });
  };

  const downloadNFT = async () => {
    // This would implement the download functionality
    // For now, we'll just show an alert
    alert('Download feature coming soon! This will generate and download your custom NFT.');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-solana-purple mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading NFT Playground...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            PFP Playground
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Mix and match different traits to create your unique Solanouns PFP. Experiment with different combinations and discover new possibilities!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* NFT Preview */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                Your Custom PFP
              </h3>
              
              {/* NFT Canvas */}
              <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl overflow-hidden border-4 border-gray-200 dark:border-gray-600 mb-6">
                {/* Background Layer */}
                {selectedTraits.background && (
                  <img
                    src={`/layers/Background/Background ${selectedTraits.background}.png`}
                    alt="Background"
                    className="absolute inset-0 w-full h-full"
                    style={{ 
                      imageRendering: 'pixelated',
                      objectFit: 'contain',
                      objectPosition: 'center'
                    }}
                    loading="eager"
                    decoding="sync"
                  />
                )}
                
                {/* Body Layer */}
                {selectedTraits.body && (
                  <img
                    src={`/layers/Body/Body ${selectedTraits.body}.png`}
                    alt="Body"
                    className="absolute inset-0 w-full h-full"
                    style={{ 
                      imageRendering: 'pixelated',
                      objectFit: 'contain',
                      objectPosition: 'center'
                    }}
                    loading="eager"
                    decoding="sync"
                  />
                )}
                
                {/* Head Layer */}
                {selectedTraits.head && (
                  <img
                    src={`/layers/Head/Head ${selectedTraits.head}.png`}
                    alt="Head"
                    className="absolute inset-0 w-full h-full"
                    style={{ 
                      imageRendering: 'pixelated',
                      objectFit: 'contain',
                      objectPosition: 'center'
                    }}
                    loading="eager"
                    decoding="sync"
                  />
                )}
                
                {/* Accessories Layer */}
                <img
                  src={`/layers/Accessories/Accessories ${selectedTraits.accessories}.png`}
                  alt="Accessories"
                  className="absolute inset-0 w-full h-full"
                  style={{ 
                    imageRendering: 'pixelated',
                    objectFit: 'contain',
                    objectPosition: 'center'
                  }}
                  loading="eager"
                  decoding="sync"
                />
                
                {/* Glasses Layer */}
                <img
                  src={`/layers/Glasses/Glasses ${selectedTraits.glasses}.png`}
                  alt="Glasses"
                  className="absolute inset-0 w-full h-full"
                  style={{ 
                    imageRendering: 'pixelated',
                    objectFit: 'contain',
                    objectPosition: 'center'
                  }}
                  loading="eager"
                  decoding="sync"
                />
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={randomizeTraits}
                  className="w-full bg-solana-purple text-white px-4 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>🎲</span>
                  <span>Randomize All</span>
                </button>
                
                <button
                  onClick={resetToDefaults}
                  className="w-full bg-gray-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>🔄</span>
                  <span>Reset to Defaults</span>
                </button>
                
                <button
                  onClick={downloadNFT}
                  className="w-full bg-solana-green text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>💾</span>
                  <span>Download PFP</span>
                </button>
              </div>

              {/* Trait Summary */}
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Current Traits:</h4>
                <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <div>Background: {selectedTraits.background}</div>
                  <div>Head: {selectedTraits.head}</div>
                  <div>Body: {selectedTraits.body}</div>
                  <div>Accessories: {selectedTraits.accessories}</div>
                  <div>Glasses: {selectedTraits.glasses}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trait Controls */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              
              {/* Background Selector */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                  <span>🌄</span>
                  <span>Background ({traits.background.length} options)</span>
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                  {traits.background.map((trait) => (
                    <button
                      key={trait.id}
                      onClick={() => setSelectedTraits(prev => ({ ...prev, background: trait.id }))}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${
                        selectedTraits.background === trait.id
                          ? 'border-solana-purple shadow-lg'
                          : 'border-gray-200 dark:border-gray-600 hover:border-solana-purple'
                      }`}
                    >
                      <img
                        src={`/layers/Background/${trait.filename}`}
                        alt={trait.name}
                        className="w-full h-full object-contain"
                        style={{ imageRendering: 'pixelated' }}
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-1 text-center">
                        {trait.id}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Head Selector */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                  <span>👤</span>
                  <span>Head ({traits.head.length} options)</span>
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-3 max-h-64 overflow-y-auto">
                  {traits.head.map((trait) => (
                    <button
                      key={trait.id}
                      onClick={() => setSelectedTraits(prev => ({ ...prev, head: trait.id }))}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${
                        selectedTraits.head === trait.id
                          ? 'border-solana-purple shadow-lg'
                          : 'border-gray-200 dark:border-gray-600 hover:border-solana-purple'
                      }`}
                    >
                      <img
                        src={`/layers/Head/${trait.filename}`}
                        alt={trait.name}
                        className="w-full h-full object-contain"
                        style={{ imageRendering: 'pixelated' }}
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-1 text-center">
                        {trait.id}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Body Selector */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                  <span>👕</span>
                  <span>Body ({traits.body.length} options)</span>
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                  {traits.body.map((trait) => (
                    <button
                      key={trait.id}
                      onClick={() => setSelectedTraits(prev => ({ ...prev, body: trait.id }))}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${
                        selectedTraits.body === trait.id
                          ? 'border-solana-purple shadow-lg'
                          : 'border-gray-200 dark:border-gray-600 hover:border-solana-purple'
                      }`}
                    >
                      <img
                        src={`/layers/Body/${trait.filename}`}
                        alt={trait.name}
                        className="w-full h-full object-contain"
                        style={{ imageRendering: 'pixelated' }}
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-1 text-center">
                        {trait.id}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Accessories Selector */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                  <span>🎩</span>
                  <span>Accessories ({traits.accessories.length} options)</span>
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-3 max-h-64 overflow-y-auto">
                  {traits.accessories.map((trait) => (
                    <button
                      key={trait.id}
                      onClick={() => setSelectedTraits(prev => ({ ...prev, accessories: trait.id }))}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${
                        selectedTraits.accessories === trait.id
                          ? 'border-solana-purple shadow-lg'
                          : 'border-gray-200 dark:border-gray-600 hover:border-solana-purple'
                      }`}
                    >
                      <img
                        src={`/layers/Accessories/${trait.filename}`}
                        alt={trait.name}
                        className="w-full h-full object-contain"
                        style={{ imageRendering: 'pixelated' }}
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-1 text-center">
                        {trait.id}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Glasses Selector */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                  <span>🕶️</span>
                  <span>Glasses ({traits.glasses.length} options)</span>
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                  {traits.glasses.map((trait) => (
                    <button
                      key={trait.id}
                      onClick={() => setSelectedTraits(prev => ({ ...prev, glasses: trait.id }))}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${
                        selectedTraits.glasses === trait.id
                          ? 'border-solana-purple shadow-lg'
                          : 'border-gray-200 dark:border-gray-600 hover:border-solana-purple'
                      }`}
                    >
                      <img
                        src={`/layers/Glasses/${trait.filename}`}
                        alt={trait.name}
                        className="w-full h-full object-contain"
                        style={{ imageRendering: 'pixelated' }}
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-1 text-center">
                        {trait.id}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 bg-solana-purple text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NFTPlayground;