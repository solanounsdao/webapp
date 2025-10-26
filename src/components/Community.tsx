import React from "react";

const Community: React.FC = () => {
  return (
    <section id="community" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Join the Community
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2">
            Connect with fellow Solanouns holders, participate in governance,
            and shape the future of our ecosystem
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 lg:mb-16">
          <div className="text-center p-3 sm:p-4 md:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-solana-purple mb-1 sm:mb-2">
              2,222
            </div>
            <div className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">Max Supply</div>
          </div>
          <div className="text-center p-3 sm:p-4 md:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-solana-green mb-1 sm:mb-2">0</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">Holders</div>
          </div>
          <div className="text-center p-3 sm:p-4 md:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-500 mb-1 sm:mb-2">0</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">Proposals</div>
          </div>
          <div className="text-center p-3 sm:p-4 md:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500 mb-1 sm:mb-2">0</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">Stakers</div>
          </div>
        </div>

        {/* Social Platforms */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {/* Discord */}
          <div className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
              <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-base sm:text-lg md:text-xl">💬</span>
              </div>
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                  Discord
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
                  Join our community chat
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 md:mb-6">
              Connect with other holders, participate in discussions, and get
              the latest updates from the team.
            </p>
            <a
              href="https://mee6.xyz/i/37plYwmYJY"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-indigo-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-colors w-full text-center text-sm sm:text-base"
            >
              Join Discord
            </a>
          </div>

          {/* Twitter */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🐦</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  X (Twitter)
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Follow for updates
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Stay updated with announcements, community highlights, and
              governance proposals.
            </p>
            <a
              href="https://x.com/solanouns"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors w-full text-center"
            >
              Follow X
            </a>
          </div>

          {/* X Community */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🐦</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  X Community
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Join our X community
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Connect with fellow holders in our dedicated X community space for
              deeper conversations.
            </p>
            <a
              href="https://x.com/i/communities/1980997471804473638"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors w-full text-center"
            >
              Join Community
            </a>
          </div>

          {/* DAO Forum */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-solana-purple rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🏛️</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  DAO Forum
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Governance hub
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Participate in governance discussions and vote on proposals that
              shape our future.
            </p>
            <br />
            <button className="bg-solana-purple text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors w-full">
              Visit Forum
            </button>
          </div>
        </div>

        {/* Community Features */}
        <div className="bg-gradient-to-r from-solana-purple/10 to-solana-green/10 dark:from-solana-purple/20 dark:to-solana-green/20 p-8 rounded-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What You Get as a Holder
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Owning a Solanouns NFT gives you access to exclusive community
              benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-solana-purple rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl text-white">🗳️</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                Voting Rights
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Vote on proposals and influence the direction of the project
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-solana-green rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl text-white">💰</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                Treasury Access
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Benefit from community treasury distributions and rewards
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl text-white">🎨</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                Exclusive Content
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Access to holder-only channels, events, and future drops
              </p>
            </div>
          </div>
        </div>

        {/* $SOLT Token Holder Benefits */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 dark:from-yellow-500/20 dark:to-orange-500/20 p-8 rounded-2xl mt-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              $SOLT Token Holder Benefits
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Additional exclusive benefits for $SOLT Solanouns Token holders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl text-white">🚀</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Early Access
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                First access to new NFT drops and limited editions
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl text-white">💎</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Staking Rewards
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Earn additional $SOLT tokens through staking mechanisms
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl text-white">�</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                VIP Events
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Exclusive invitations to holder-only events and meetups
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl text-white">🏪</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Marketplace Perks
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Reduced fees and priority listing on partner marketplaces
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white dark:bg-gray-700 rounded-xl">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              🪙 Enhanced DAO Access
            </h4>
            <div className="mb-4 p-3 bg-yellow-500/10 dark:bg-yellow-500/20 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                <strong>Note:</strong> $SOLT tokens provide DAO access but do not grant voting power. Only Solanouns NFT holders have voting rights.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <span className="text-yellow-500">⭐</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Access to private governance discussions
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-yellow-500">⭐</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Proposal viewing and discussion participation
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-yellow-500">⭐</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Early access to governance announcements
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-yellow-500">⭐</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Revenue sharing from ecosystem partnerships
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Roadmap
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our journey to building the ultimate Solana NFT community
            </p>
          </div>

          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-solana-green rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Phase 1: NFT Collection & $SOLT Token Launch
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Completed - Q4 2025
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <span className="text-solana-green">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    2,222 NFT Collection Launch
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-solana-green">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    $SOLT Token Launch on pump.fun
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-solana-green">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Website & Community Setup
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-solana-green">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Discord & Social Channels
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-solana-green">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    x402 Protocol Integration
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-solana-green">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Liquidity Pool Establishment
                  </span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-solana-green/10 to-solana-purple/10 dark:from-solana-green/20 dark:to-solana-purple/20 rounded-lg">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">🚀 Launch Highlights</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Simultaneous NFT and token launch for complete ecosystem</li>
                  <li>• $SOLT fair launch: 800M bonding curve + 200M liquidity pool</li>
                  <li>• 100% public distribution with no team or VC allocations</li>
                  <li>• Immediate utility for NFT holders and token holders</li>
                </ul>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-solana-purple rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Phase 2: DAO & Governance
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    In Progress - Q1 2026
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <span className="text-solana-purple">⏳</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    DAO Governance System
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-solana-purple">⏳</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Treasury Management
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-solana-purple">⏳</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Proposal Voting Platform
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-solana-purple">⏳</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Community Fund Management
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-solana-purple">⏳</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Multi-sig Treasury Setup
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-solana-purple">⏳</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Delegation & Proxy Voting
                  </span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-solana-purple/10 to-indigo-500/10 dark:from-solana-purple/20 dark:to-indigo-500/20 rounded-lg">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">🏛️ DAO Governance Highlights</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Decentralized decision-making for all major community initiatives</li>
                  <li>• Exclusive NFT holder voting rights (1 NFT = 1 Vote)</li>
                  <li>• $SOLT holders get DAO access without voting power</li>
                  <li>• Transparent treasury management with community oversight</li>
                  <li>• Proposal system for community-driven development</li>
                  <li>• Multi-signature security for all treasury transactions</li>
                </ul>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Phase 3: Advanced Features & Integrations
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Upcoming - Q2 2026
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500">�</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Staking & Rewards System
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500">⭐</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Enhanced Governance Features
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500">🤝</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Strategic Partnerships
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500">🔧</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Advanced x402 Features
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500">📱</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Mobile App Development
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500">🌐</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Cross-platform Integrations
                  </span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 dark:from-yellow-500/20 dark:to-orange-500/20 rounded-lg">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">🚀 Enhanced Ecosystem</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Advanced staking mechanisms with tier-based rewards</li>
                  <li>• Enhanced governance with weighted voting and delegation</li>
                  <li>• Strategic partnerships with major Solana projects</li>
                  <li>• Mobile app for seamless community interaction</li>
                </ul>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Phase 4: Solanouns Marketplace Launch
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Future - Q3-Q4 2026
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <span className="text-orange-500">🏪</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Native Solanouns Marketplace
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-orange-500">💰</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    $SOLT Payment Integration
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-orange-500">⚡</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Zero-Fee Trading for Holders
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-orange-500">🎨</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Advanced NFT Analytics
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-orange-500">🔗</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Cross-chain Integrations
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-orange-500">🎮</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Gaming & Metaverse Utility
                  </span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/20 rounded-lg">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">🏪 Marketplace Features</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Custom-built marketplace exclusively for Solanouns NFTs</li>
                  <li>• $SOLT token discounts and exclusive trading benefits</li>
                  <li>• Advanced filtering by traits and rarity rankings</li>
                  <li>• Community-driven curation and featured collections</li>
                  <li>• Integration with DAO governance for marketplace decisions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
