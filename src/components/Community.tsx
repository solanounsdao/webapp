import React from "react";

const Community: React.FC = () => {
  return (
    <section id="community" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Join the Community
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Connect with fellow Solanouns holders, participate in governance,
            and shape the future of our ecosystem
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 lg:mb-16">
          <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="text-2xl sm:text-3xl font-bold text-solana-purple mb-2">
              2,222
            </div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Max Supply</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="text-2xl sm:text-3xl font-bold text-solana-green mb-2">0</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Holders</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="text-2xl sm:text-3xl font-bold text-purple-500 mb-2">0</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Proposals</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="text-2xl sm:text-3xl font-bold text-blue-500 mb-2">0</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Stakers</div>
          </div>
        </div>

        {/* Social Platforms */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {/* Discord */}
          <div className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg sm:text-xl">💬</span>
              </div>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                  Discord
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Join our community chat
                </p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
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

            <div className="text-center space-y-4 md:col-span-2 lg:col-span-1">
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
                    Phase 1: Launch
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Completed - Q4 2024
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
                    Website & Community Setup
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-solana-green">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Discord & Social Channels
                  </span>
                </div>
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
                    In Progress - Q1 2025
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
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Phase 3: Expansion
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Planned - Q2 2025
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">○</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Staking Rewards
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">○</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Utility Token Launch
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">○</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Partnerships & Integrations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
