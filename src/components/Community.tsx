import React from 'react';

const Community: React.FC = () => {
  return (
    <section id="community" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Join the Community
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Connect with fellow Solanouns holders, participate in governance, and shape the future of our ecosystem
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 lg:mb-16">
          <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="text-2xl sm:text-3xl font-bold text-solana-purple mb-2">2,222</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Max Supply</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="text-2xl sm:text-3xl font-bold text-solana-green mb-2">1,500+</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Holders</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="text-2xl sm:text-3xl font-bold text-purple-500 mb-2">50+</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Proposals</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="text-2xl sm:text-3xl font-bold text-blue-500 mb-2">24/7</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Active</div>
          </div>
        </div>

        {/* Social Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Discord */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white text-xl">💬</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Discord</h3>
                <p className="text-gray-600 dark:text-gray-400">Join our community chat</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Connect with other holders, participate in discussions, and get the latest updates from the team.
            </p>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors w-full">
              Join Discord
            </button>
          </div>

          {/* Twitter */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white text-xl">🐦</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Twitter</h3>
                <p className="text-gray-600 dark:text-gray-400">Follow for updates</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Stay updated with announcements, community highlights, and governance proposals.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors w-full">
              Follow Twitter
            </button>
          </div>

          {/* DAO Forum */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-solana-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white text-xl">🏛️</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">DAO Forum</h3>
                <p className="text-gray-600 dark:text-gray-400">Governance hub</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Participate in governance discussions and vote on proposals that shape our future.
            </p>
            <button className="bg-solana-purple text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors w-full">
              Visit Forum
            </button>
          </div>
        </div>

        {/* Community Features */}
        <div className="bg-gradient-to-r from-solana-purple/10 to-solana-green/10 dark:from-solana-purple/20 dark:to-solana-green/20 p-6 lg:p-8 rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What You Get as a Holder
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Owning a Solanouns NFT gives you access to exclusive community benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-solana-purple rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl text-white">🗳️</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Voting Rights</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Vote on proposals and influence the direction of the project
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-solana-green rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl text-white">💰</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Treasury Access</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Benefit from community treasury distributions and rewards
              </p>
            </div>

            <div className="text-center space-y-3 md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl text-white">🎨</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Exclusive Content</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Access to holder-only channels, events, and future drops
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;