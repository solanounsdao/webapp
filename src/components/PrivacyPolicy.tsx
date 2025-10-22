import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            How we collect, use, and protect your information
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
                1. Information We Collect
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  When you interact with Solanouns, we may collect the following types of information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Wallet Information:</strong> Public wallet addresses when you connect your wallet</li>
                  <li><strong>Transaction Data:</strong> NFT transactions and blockchain interactions</li>
                  <li><strong>Usage Data:</strong> How you interact with our website and services</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
                  <li><strong>Communication Data:</strong> Messages sent through our community platforms</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. How We Use Your Information
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>We use the collected information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Facilitate NFT transactions and verify ownership</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Improve our website and user experience</li>
                  <li>Send important updates about the project</li>
                  <li>Ensure security and prevent fraud</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. Information Sharing
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to outside parties except:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To trusted service providers who assist us in operating our website</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Blockchain and NFTs
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  Please note that blockchain transactions are public and permanent. When you:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Purchase, transfer, or interact with Solanouns NFTs</li>
                  <li>Connect your wallet to our platform</li>
                  <li>Participate in on-chain governance</li>
                </ul>
                <p>
                  This information becomes publicly available on the Solana blockchain and cannot be deleted or modified.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Data Security
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  We implement appropriate security measures to protect your information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security audits and monitoring</li>
                  <li>Access controls and authentication measures</li>
                  <li>Secure hosting and infrastructure</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. Your Rights
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data (where legally permissible)</li>
                  <li>Object to processing of your information</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                7. Cookies and Tracking
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  We use cookies and similar technologies to enhance your experience. You can control cookie settings through your browser preferences.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                8. Changes to This Policy
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "last updated" date.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                9. Contact Us
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  If you have any questions about this Privacy Policy, please contact us:
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

export default PrivacyPolicy;