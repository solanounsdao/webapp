import React, { useState } from 'react';

const Docs: React.FC = () => {
  const [activeSection, setActiveSection] = useState('getting-started');

  const sections = [
    { id: 'getting-started', title: 'Getting Started', icon: '🚀' },
    { id: 'collection', title: 'Collection Details', icon: '🎨' },
    { id: 'tokenomics', title: '$SOLNT Tokenomics', icon: '🪙' },
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
                Solanouns is a generative cult art collective of 2222 unique NFTs on Solana with a utility token called $SOLNT integrated with x402 protocol.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Collection Metadata</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Total Supply:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">2,222 NFTs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Symbol:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">SOLN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Blockchain:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Solana</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Engine:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">REVAMPED ART ENGINE</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Trait Layers:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">5 Layers</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Art Style:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Pixel Art</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Protocol:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">x402 Integration</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Utility Token:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">$SOLNT</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Trait Categories & Layers</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Each Solanouns NFT consists of exactly 5 trait layers with numbered variations based on the actual metadata structure.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🎨 Background</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Layer 1 - Foundation</p>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                    <li>• Background 1-15</li>
                    <li>• Various color schemes</li>
                    <li>• Unique patterns</li>
                    <li>• Solana-themed designs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">👤 Head</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Layer 2 - Character</p>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                    <li>• Head 1-250+</li>
                    <li>• Diverse character types</li>
                    <li>• Unique facial features</li>
                    <li>• Various expressions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🦾 Body</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Layer 3 - Form</p>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                    <li>• Body 1-20+</li>
                    <li>• Different body types</li>
                    <li>• Various clothing styles</li>
                    <li>• Unique textures</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">⚡ Accessories</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Layer 4 - Style (Required)</p>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                    <li>• Accessories 1-100+</li>
                    <li>• Jewelry & chains</li>
                    <li>• Tech gadgets</li>
                    <li>• Special items</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🕶️ Glasses</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Layer 5 - Vision (Required)</p>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                    <li>• Glasses 1-50+</li>
                    <li>• Classic sunglasses</li>
                    <li>• Future tech designs</li>
                    <li>• Unique eyewear</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 rounded-lg">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">📋 Metadata Structure</h5>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  <p className="mb-2">Each NFT contains the following standardized attributes:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• <strong>Background:</strong> "Background X" (numbered variations)</li>
                    <li>• <strong>Head:</strong> "Head X" (numbered variations)</li>
                    <li>• <strong>Body:</strong> "Body X" (numbered variations)</li>
                    <li>• <strong>Accessories:</strong> "Accessories X" (numbered variations)</li>
                    <li>• <strong>Glasses:</strong> "Glasses X" (numbered variations)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'tokenomics':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">$SOLNT Tokenomics</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                $SOLNT is the utility token of the Solanouns ecosystem, designed for DAO feature access, staking, and ecosystem growth. 
                Launching on pump.fun with 100% public distribution ensuring fair access for all participants.
                <br /><br />
                <strong>Important:</strong> $SOLNT tokens provide access to DAO features but do not grant voting power. Only Solanouns NFT holders have voting rights in the DAO.
              </p>
            </div>

            <div className="bg-gradient-to-r from-solana-purple/10 to-solana-green/10 dark:from-solana-purple/20 dark:to-solana-green/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Token Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Token Name:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Solanouns Token</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Symbol:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">$SOLNT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Total Supply:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">1,000,000,000 SOLNT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Launch Platform:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">pump.fun</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Blockchain:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Solana</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Protocol:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">x402 Integration</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Type:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Utility Token</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Max Supply:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">1B SOLNT</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">🎯 Utility & Use Cases</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-solana-purple mr-2 mt-1">•</span>
                    <span><strong>DAO Access:</strong> Access DAO features and participate in discussions (voting power requires NFT ownership)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-solana-purple mr-2 mt-1">•</span>
                    <span><strong>Staking:</strong> Earn rewards by staking SOLNT tokens</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-solana-purple mr-2 mt-1">•</span>
                    <span><strong>NFT Access:</strong> Exclusive drops and marketplace benefits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-solana-purple mr-2 mt-1">•</span>
                    <span><strong>x402 Protocol:</strong> Advanced DeFi integrations and yield farming</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">📊 Distribution</h3>
                <div className="mb-4 p-4 bg-solana-purple/10 dark:bg-solana-purple/20 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <strong>100% Public Distribution</strong> - All tokens are available to the public through pump.fun
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    No team allocation, no private sales, no VCs - completely fair launch
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-gray-600 dark:text-gray-300">Bonding Curve (pump.fun)</span>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Trading on pump.fun platform</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-white">80%</div>
                      <div className="text-sm text-gray-500">800M SOLNT</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-gray-600 dark:text-gray-300">Liquidity Pool</span>
                      <div className="text-xs text-gray-500 dark:text-gray-400">DEX liquidity provision</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-white">20%</div>
                      <div className="text-sm text-gray-500">200M SOLNT</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-solana-purple/10 to-solana-green/10 dark:from-solana-purple/20 dark:to-solana-green/20 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🚀 Launch Details</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Platform: pump.fun</li>
                    <li>• Launch Type: Fair Launch (No Presale)</li>
                    <li>• Max Supply: 1,000,000,000 SOLNT</li>
                    <li>• All tokens available to public</li>
                  </ul>
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
