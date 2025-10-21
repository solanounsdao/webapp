import React, { useState } from 'react';

const Docs: React.FC = () => {
  const [activeSection, setActiveSection] = useState('getting-started');

  const sections = [
    { id: 'getting-started', title: 'Getting Started', icon: '🚀' },
    { id: 'collection', title: 'Collection Details', icon: '🎨' },
    { id: 'governance', title: 'DAO Governance', icon: '🏛️' },
    { id: 'staking', title: 'Staking & Rewards', icon: '💰' },
    { id: 'technical', title: 'Technical Specs', icon: '⚙️' },
    { id: 'faq', title: 'FAQ', icon: '❓' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'getting-started':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Welcome to Solanouns</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Solanouns is a collection of 2,222 unique generative avatar NFTs on the Solana blockchain. 
                Each Solanouns is algorithmically generated and serves as your membership to the Solanouns DAO.
              </p>
            </div>

            <div className="bg-solana-purple/10 dark:bg-solana-purple/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Start Guide</h3>
              <ol className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="bg-solana-purple text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                  Set up a Solana wallet (Phantom, Solflare, or Backpack)
                </li>
                <li className="flex items-start">
                  <span className="bg-solana-purple text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                  Purchase SOL from an exchange and transfer to your wallet
                </li>
                <li className="flex items-start">
                  <span className="bg-solana-purple text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                  Browse the collection on Magic Eden or other Solana marketplaces
                </li>
                <li className="flex items-start">
                  <span className="bg-solana-purple text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                  Join our Discord community and verify your holder status
                </li>
              </ol>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Collection Stats</h4>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <div className="flex justify-between">
                    <span>Total Supply:</span>
                    <span className="font-semibold">2,222</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Blockchain:</span>
                    <span className="font-semibold">Solana</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Unique Traits:</span>
                    <span className="font-semibold">100+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Royalties:</span>
                    <span className="font-semibold">5%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Holder Benefits</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="text-solana-green mr-2">✓</span>
                    DAO voting rights
                  </li>
                  <li className="flex items-center">
                    <span className="text-solana-green mr-2">✓</span>
                    Treasury distributions
                  </li>
                  <li className="flex items-center">
                    <span className="text-solana-green mr-2">✓</span>
                    Exclusive Discord access
                  </li>
                  <li className="flex items-center">
                    <span className="text-solana-green mr-2">✓</span>
                    Future drop priority
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'collection':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Collection Details</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Each Solanouns is unique, generated from a combination of traits with varying rarity levels.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Trait Categories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Background</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                    <li>• Solana Purple (Common)</li>
                    <li>• Solana Green (Common)</li>
                    <li>• Cosmic Blue (Rare)</li>
                    <li>• Golden Hour (Epic)</li>
                    <li>• Rainbow (Legendary)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Body</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                    <li>• Human (Common)</li>
                    <li>• Robot (Uncommon)</li>
                    <li>• Alien (Rare)</li>
                    <li>• Cyborg (Epic)</li>
                    <li>• Spirit (Legendary)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Accessories</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                    <li>• Sunglasses (Common)</li>
                    <li>• Cap (Common)</li>
                    <li>• Crown (Rare)</li>
                    <li>• Halo (Epic)</li>
                    <li>• Laser Eyes (Legendary)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-solana-green/10 dark:bg-solana-green/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Rarity Distribution</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-500 mb-1">60%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Common</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500 mb-1">25%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Uncommon</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500 mb-1">10%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Rare</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-500 mb-1">4%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Epic</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-500 mb-1">1%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Legendary</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'governance':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">DAO Governance</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Solanouns holders have voting rights in our decentralized autonomous organization (DAO).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Voting Power</h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center">
                    <span className="text-solana-purple mr-2">•</span>
                    1 Solanouns = 1 Vote
                  </div>
                  <div className="flex items-center">
                    <span className="text-solana-purple mr-2">•</span>
                    Minimum 1 NFT to participate
                  </div>
                  <div className="flex items-center">
                    <span className="text-solana-purple mr-2">•</span>
                    Snapshot voting system
                  </div>
                  <div className="flex items-center">
                    <span className="text-solana-purple mr-2">•</span>
                    7-day voting periods
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Proposal Types</h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center">
                    <span className="text-solana-green mr-2">•</span>
                    Treasury spending
                  </div>
                  <div className="flex items-center">
                    <span className="text-solana-green mr-2">•</span>
                    Partnership approvals
                  </div>
                  <div className="flex items-center">
                    <span className="text-solana-green mr-2">•</span>
                    Feature development
                  </div>
                  <div className="flex items-center">
                    <span className="text-solana-green mr-2">•</span>
                    Community initiatives
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">How to Create a Proposal</h3>
              <ol className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>1. Discuss your idea in the #governance Discord channel</li>
                <li>2. Create a formal proposal using our template</li>
                <li>3. Submit for community review (72-hour period)</li>
                <li>4. If approved, proposal goes to official vote</li>
                <li>5. Majority vote (51%+) required to pass</li>
              </ol>
            </div>
          </div>
        );

      case 'faq':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">What is Solanouns?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Solanouns is a collection of 2,222 unique generative avatar NFTs on Solana. Each NFT grants 
                  you membership to our DAO and voting rights on community decisions.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">How do I buy a Solanouns?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  You can purchase Solanouns on secondary marketplaces like Magic Eden, Solanart, or OpenSea. 
                  Make sure you have a Solana wallet with SOL for transactions.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">What are the holder benefits?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Holders get DAO voting rights, access to exclusive Discord channels, treasury distributions, 
                  and priority access to future drops and collaborations.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">How does the DAO work?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Each Solanouns NFT represents one vote in our DAO. Holders can create and vote on proposals 
                  that affect the project's direction, treasury spending, and community initiatives.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">What's the roadmap?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our roadmap includes DAO governance implementation, staking rewards, utility token launch, 
                  and various partnerships. Check our Community section for detailed roadmap information.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">How do I join the community?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Join our Discord server and verify your holder status using Collab.Land. Follow us on 
                  Twitter for updates and participate in our governance forum for deeper discussions.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Section Coming Soon</h2>
            <p className="text-gray-600 dark:text-gray-300">This documentation section is under development.</p>
          </div>
        );
    }
  };

  return (
    <section className="pt-20 pb-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Documentation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about Solanouns, our DAO, and how to participate in our community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Sections</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-3 ${
                      activeSection === section.id
                        ? 'bg-solana-purple text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <span className="text-lg">{section.icon}</span>
                    <span className="font-medium">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Docs;
