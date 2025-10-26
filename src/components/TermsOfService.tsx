import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Terms and conditions for using Solanouns
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Last updated: October 22, 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  By accessing or using Solanouns, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Description of Service
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  Solanouns Project is a generative cult art collective of 2222 unique NFTs on Solana with a utility token called $SOLNT integrated with x402 protocol. Our service includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>NFT marketplace and trading platform</li>
                  <li>Community features and governance tools</li>
                  <li>Educational resources and documentation</li>
                  <li>Brand assets and developer tools</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. NFT Ownership and Rights
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  When you purchase a Solanouns NFT, you own the underlying NFT completely. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Use:</strong> Right to use, display, and enjoy your NFT for personal purposes</li>
                  <li><strong>Commercial Use:</strong> Limited commercial rights as specified in our license</li>
                  <li><strong>Transfer Rights:</strong> Right to sell, trade, or transfer your NFT</li>
                </ul>
                <p>
                  However, ownership of an NFT does not grant you any intellectual property rights in the underlying artwork beyond what is expressly granted.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Prohibited Uses
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>You may not use our service:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                  <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Blockchain and Cryptocurrency Risks
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  By using our platform, you acknowledge and accept the following risks:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Volatility:</strong> Cryptocurrency values can be extremely volatile</li>
                  <li><strong>Irreversible Transactions:</strong> Blockchain transactions cannot be reversed</li>
                  <li><strong>Technical Risks:</strong> Smart contract bugs or network issues may occur</li>
                  <li><strong>Regulatory Risks:</strong> Future regulations may affect NFT ownership or trading</li>
                  <li><strong>Loss of Private Keys:</strong> Loss of wallet access means permanent loss of assets</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. Disclaimer of Warranties
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this Company:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Excludes all representations and warranties relating to this website and its contents</li>
                  <li>Does not guarantee the accuracy, completeness, or timeliness of information</li>
                  <li>Makes no warranties about the functionality or availability of the service</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                7. Limitation of Liability
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  In no event shall Solanouns or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                8. Indemnification
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  You agree to indemnify and hold harmless Solanouns, its officers, directors, employees, agents, and suppliers from any claim, demand, or damages arising out of your use of our services or violation of these terms.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                9. Governing Law
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction where the service is operated, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                10. Community Guidelines
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  When participating in our community spaces (Discord, X, etc.), you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Be respectful and constructive in all interactions</li>
                  <li>Avoid spam, self-promotion, or off-topic content</li>
                  <li>Respect intellectual property rights</li>
                  <li>Follow platform-specific rules and guidelines</li>
                  <li>Report inappropriate behavior to moderators</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                11. Modifications
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the service after any changes constitutes acceptance of the new terms.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                12. Contact Information
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Discord: <a href="https://mee6.xyz/i/37plYwmYJY" className="text-solana-purple hover:text-solana-green" target="_blank" rel="noopener noreferrer">Join our server</a></li>
                  <li>X (Twitter): <a href="https://x.com/solanouns" className="text-solana-purple hover:text-solana-green" target="_blank" rel="noopener noreferrer">@solanouns</a></li>
                </ul>
              </div>
            </section>

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

export default TermsOfService;