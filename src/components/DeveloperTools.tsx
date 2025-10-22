import React from 'react';

const DeveloperTools: React.FC = () => {
  return (
    <section id="developer-tools" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Developer Tools
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            APIs, SDKs, and developer resources to build with Solanouns
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 lg:mb-16">
          <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="text-2xl sm:text-3xl font-bold text-solana-purple mb-2">2,222</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Total NFTs</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="text-2xl sm:text-3xl font-bold text-solana-green mb-2">100+</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Traits</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="text-2xl sm:text-3xl font-bold text-purple-500 mb-2">5</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Trait Types</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="text-2xl sm:text-3xl font-bold text-blue-500 mb-2">24/7</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">API Uptime</div>
          </div>
        </div>

        {/* API Endpoints */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">API Endpoints</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Get NFT Metadata</h4>
                  <p className="text-gray-600 dark:text-gray-300">Retrieve metadata for a specific Solanouns NFT</p>
                </div>
                <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium mt-2 lg:mt-0 w-fit">
                  GET
                </span>
              </div>
              <div className="bg-gray-900 dark:bg-gray-700 p-4 rounded-lg">
                <code className="text-green-400 text-sm font-mono">
                  GET /nft-asset/json/{'{id}'}.json
                </code>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Get NFT Image</h4>
                  <p className="text-gray-600 dark:text-gray-300">Retrieve the image for a specific Solanouns NFT</p>
                </div>
                <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium mt-2 lg:mt-0 w-fit">
                  GET
                </span>
              </div>
              <div className="bg-gray-900 dark:bg-gray-700 p-4 rounded-lg">
                <code className="text-green-400 text-sm font-mono">
                  GET /nft-asset/images/{'{id}'}.png
                </code>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Collection Stats</h4>
                  <p className="text-gray-600 dark:text-gray-300">Get collection-wide statistics and information</p>
                </div>
                <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mt-2 lg:mt-0 w-fit">
                  COMING SOON
                </span>
              </div>
              <div className="bg-gray-900 dark:bg-gray-700 p-4 rounded-lg">
                <code className="text-gray-400 text-sm font-mono">
                  GET /api/collection/stats
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Code Examples */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Code Examples</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">JavaScript/TypeScript</h4>
              <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-300">
                  <code>{`// Fetch NFT metadata
const fetchNFT = async (id) => {
  const response = await fetch(
    \`/nft-asset/json/\${id}.json\`
  );
  const metadata = await response.json();
  return metadata;
};

// Usage
const nft = await fetchNFT(42);
console.log(nft.name); // "Solanouns #42"`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Python</h4>
              <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-300">
                  <code>{`import requests

# Fetch NFT metadata
def fetch_nft(nft_id):
    url = f"/nft-asset/json/{nft_id}.json"
    response = requests.get(url)
    return response.json()

# Usage
nft = fetch_nft(42)
print(nft['name'])  # "Solanouns #42"`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Developer Resources */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Developer Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-solana-purple rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">📚</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Documentation</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Comprehensive API documentation and integration guides
              </p>
              <button className="text-solana-purple hover:text-purple-700 font-medium">
                View Docs →
              </button>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-solana-green rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🔧</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">SDK</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                JavaScript/TypeScript SDK for easy integration
              </p>
              <button className="text-solana-green hover:text-green-600 font-medium">
                Download SDK →
              </button>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">💬</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Developer Support</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Join our developer Discord for technical support
              </p>
              <button className="text-purple-500 hover:text-purple-600 font-medium">
                Join Discord →
              </button>
            </div>
          </div>
        </div>

        {/* Metadata Schema */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Metadata Schema</h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">NFT Metadata Structure</h4>
            <div className="bg-gray-900 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm text-gray-300">
                <code>{`{
  "name": "Solanouns #42",
  "symbol": "SOLN",
  "description": "Solanouns is a groundbreaking experiment...",
  "image": "42.png",
  "edition": 42,
  "attributes": [
    {
      "trait_type": "Background",
      "value": "Background 8"
    },
    {
      "trait_type": "Head",
      "value": "Head 213"
    },
    {
      "trait_type": "Body",
      "value": "Body 3"
    },
    {
      "trait_type": "Accessories",
      "value": "Accessories 41"
    },
    {
      "trait_type": "Glasses",
      "value": "Glasses 4"
    }
  ],
  "compiler": "The thirdweb Art Engine"
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-solana-purple/10 to-solana-green/10 dark:from-solana-purple/20 dark:to-solana-green/20 p-6 lg:p-8 rounded-2xl">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Build Something Amazing</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Use our APIs and tools to create innovative applications with Solanouns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-solana-purple text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Get API Key
            </button>
            <button className="border-2 border-solana-purple text-solana-purple px-6 py-3 rounded-lg font-semibold hover:bg-solana-purple hover:text-white transition-colors">
              View Examples
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperTools;