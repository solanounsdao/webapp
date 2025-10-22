import React from 'react';

const BrandKit: React.FC = () => {
  return (
    <section id="brand-kit" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Brand Kit
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Official Solanouns brand assets, guidelines, and resources for community use
          </p>
        </div>

        {/* Brand Guidelines */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Brand Guidelines</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Logo Usage</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Always maintain clear space around the logo</li>
                <li>• Use the provided logo files without modification</li>
                <li>• Ensure sufficient contrast with background</li>
                <li>• Don't stretch, rotate, or distort the logo</li>
                <li>• Minimum size: 32px for digital, 0.5 inch for print</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Color Palette</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-solana-purple rounded"></div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Solana Purple</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">#9333ea</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-solana-green rounded"></div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Solana Green</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">#14f195</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-900 dark:bg-white rounded"></div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Primary Text</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">#111827 / #ffffff</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Downloads */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Logo Downloads</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 bg-gray-100 dark:bg-gray-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <img src="/logo.png" alt="Solanouns Logo" className="w-12 h-12 object-contain" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Primary Logo</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">PNG format, transparent background</p>
              <button className="bg-solana-purple text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors w-full">
                Download PNG
              </button>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 bg-gray-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <img src="/logo.png" alt="Solanouns Logo" className="w-12 h-12 object-contain filter invert" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Logo (Inverted)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">For dark backgrounds</p>
              <button className="bg-solana-purple text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors w-full">
                Download PNG
              </button>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg text-center md:col-span-2 lg:col-span-1">
              <div className="w-20 h-20 bg-gray-100 dark:bg-gray-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📦</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Complete Package</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">All formats and variations</p>
              <button className="bg-solana-green text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors w-full">
                Download ZIP
              </button>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Typography</h3>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Primary Font</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white">Inter</h5>
                    <p className="text-gray-600 dark:text-gray-400">Used for headings and body text</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Google Fonts - Inter family</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Font Samples</h4>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">Solanouns Heading</p>
                  <p className="text-lg text-gray-600 dark:text-gray-300">Subheading example text</p>
                  <p className="text-base text-gray-600 dark:text-gray-300">Body text for descriptions and content</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Usage Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-green-600">✓ Do</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Use official brand colors</li>
                <li>• Maintain logo proportions</li>
                <li>• Ensure readable contrast</li>
                <li>• Use consistent spacing</li>
                <li>• Follow typography guidelines</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-red-600">✗ Don't</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Modify logo colors or design</li>
                <li>• Use low-resolution assets</li>
                <li>• Place logo on busy backgrounds</li>
                <li>• Use unauthorized fonts</li>
                <li>• Stretch or distort elements</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center bg-gradient-to-r from-solana-purple/10 to-solana-green/10 dark:from-solana-purple/20 dark:to-solana-green/20 p-6 lg:p-8 rounded-2xl">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Need Custom Assets?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Contact our team for custom brand assets or partnership materials
          </p>
          <button className="bg-solana-purple text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
            Contact Brand Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandKit;