'use client';

import Logo from '@/components/ui/Logo';

export default function LogoDemo() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mindscraft Logo System
          </h1>
          <p className="text-xl text-gray-600">
            All logo variations and usage examples
          </p>
        </div>

        {/* Logo Variations */}
        <div className="space-y-16">
          {/* Full Logo */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Full Logo (PNG)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">PNG Version</h3>
                <div className="bg-gray-100 p-6 rounded-lg flex items-center justify-center">
                  <Logo variant="full" size="lg" />
                </div>
                <p className="text-sm text-gray-600">Using: /logo/png/mindscraft-logo.png</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">On Dark Background</h3>
                <div className="bg-gray-900 p-6 rounded-lg flex items-center justify-center">
                  <Logo variant="full" size="lg" />
                </div>
                <p className="text-sm text-gray-400">Same PNG works on dark backgrounds</p>
              </div>
            </div>
          </section>

          {/* Icon Only */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Icon Only (PNG)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">PNG Icon</h3>
                <div className="bg-gray-100 p-6 rounded-lg flex items-center justify-center">
                  <Logo variant="icon" size="lg" />
                </div>
                <p className="text-sm text-gray-600">Using: /logo/png/mindscraft-icon.png</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">On Dark Background</h3>
                <div className="bg-gray-900 p-6 rounded-lg flex items-center justify-center">
                  <Logo variant="icon" size="lg" />
                </div>
                <p className="text-sm text-gray-400">Same PNG icon on dark backgrounds</p>
              </div>
            </div>
          </section>

          {/* Text Only */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Text Only</h2>
            <div className="bg-gray-100 p-6 rounded-lg flex items-center justify-center">
              <Logo variant="text" size="lg" />
            </div>
          </section>

          {/* Horizontal Layout */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Horizontal Layout</h2>
            <div className="bg-gray-100 p-6 rounded-lg flex items-center justify-center">
              <Logo variant="horizontal" size="lg" />
            </div>
          </section>

          {/* Size Variations */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Size Variations</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-4 text-center">
                <h3 className="text-sm font-medium">Small</h3>
                <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center">
                  <Logo variant="horizontal" size="sm" />
                </div>
              </div>
              <div className="space-y-4 text-center">
                <h3 className="text-sm font-medium">Medium</h3>
                <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center">
                  <Logo variant="horizontal" size="md" />
                </div>
              </div>
              <div className="space-y-4 text-center">
                <h3 className="text-sm font-medium">Large</h3>
                <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center">
                  <Logo variant="horizontal" size="lg" />
                </div>
              </div>
              <div className="space-y-4 text-center">
                <h3 className="text-sm font-medium">Extra Large</h3>
                <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center">
                  <Logo variant="horizontal" size="xl" />
                </div>
              </div>
            </div>
          </section>

          {/* Usage Examples */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Usage Examples</h2>
            
            {/* Header Example */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Header Navigation</h3>
                <div className="bg-white border rounded-lg p-4 flex items-center justify-between">
                  <Logo variant="horizontal" size="md" />
                  <div className="flex space-x-4">
                    <span className="text-sm text-gray-600">Home</span>
                    <span className="text-sm text-gray-600">About</span>
                    <span className="text-sm text-gray-600">Services</span>
                    <span className="text-sm text-gray-600">Contact</span>
                  </div>
                </div>
              </div>

              {/* Footer Example */}
              <div>
                <h3 className="text-lg font-medium mb-3">Footer</h3>
                <div className="bg-gray-900 text-white rounded-lg p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-4">
                      <Logo variant="horizontal" theme="light" size="md" />
                      <p className="text-sm text-gray-300 max-w-xs">
                        UX-focused web development agency helping startups launch faster.
                      </p>
                    </div>
                    <div className="text-sm text-gray-300">
                      <p>© 2024 Mindscraft.dev</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Loading State */}
              <div>
                <h3 className="text-lg font-medium mb-3">Loading State</h3>
                <div className="bg-gray-100 rounded-lg p-8 flex flex-col items-center justify-center space-y-4">
                  <Logo variant="icon" size="lg" className="animate-pulse" />
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Code Examples */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Code Examples</h2>
            <div className="space-y-4">
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-gray-400">// Default usage</div>
                <div>&lt;Logo /&gt;</div>
                <br />
                <div className="text-gray-400">// Icon only, large size</div>
                <div>&lt;Logo variant="icon" size="lg" /&gt;</div>
                <br />
                <div className="text-gray-400">// Light theme for dark backgrounds</div>
                <div>&lt;Logo theme="light" /&gt;</div>
                <br />
                <div className="text-gray-400">// Custom dimensions</div>
                <div>&lt;Logo width={200} height={50} /&gt;</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}