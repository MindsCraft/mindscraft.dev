import React from 'react';
import { FiArrowRight, FiDownload, FiTrash2, FiPlus, FiCheck } from 'react-icons/fi';

export default function ButtonsDemo() {
    // Logo colors
    const NAVY = '#101828';
    const CREAM = '#F3F4C0';
    const CREAM_DARK = '#EAEBAC';

    // Premium shadow styles
    const navyStyle = {
        backgroundColor: NAVY,
        boxShadow: `
      0px 1px 1px 0px rgba(255, 255, 255, 0.20) inset,
      0px 6px 12px 0px rgba(255, 255, 255, 0.08) inset,
      0px 1px 3px 0px rgba(0, 0, 0, 0.3),
      0px 4px 8px 0px rgba(0, 0, 0, 0.15)
    `,
        transition: 'all 0.2s ease',
    };

    const navyHoverStyle = {
        ...navyStyle,
        transform: 'translateY(-1px)',
        boxShadow: `
      0px 1px 1px 0px rgba(255, 255, 255, 0.25) inset,
      0px 8px 16px 0px rgba(255, 255, 255, 0.10) inset,
      0px 2px 4px 0px rgba(0, 0, 0, 0.3),
      0px 8px 16px 0px rgba(0, 0, 0, 0.2)
    `,
    };

    const creamStyle = {
        backgroundColor: CREAM,
        color: NAVY,
        boxShadow: `
      0px 1px 2px 0px rgba(255, 255, 255, 0.40) inset,
      0px 4px 8px 0px rgba(255, 255, 255, 0.20) inset,
      0px 1px 2px 0px rgba(16, 24, 40, 0.15),
      0px 3px 6px 0px rgba(16, 24, 40, 0.10)
    `,
        transition: 'all 0.2s ease',
    };

    const creamHoverStyle = {
        ...creamStyle,
        backgroundColor: CREAM_DARK,
        transform: 'translateY(-1px)',
        boxShadow: `
      0px 1px 2px 0px rgba(255, 255, 255, 0.50) inset,
      0px 6px 12px 0px rgba(255, 255, 255, 0.25) inset,
      0px 2px 4px 0px rgba(16, 24, 40, 0.20),
      0px 6px 12px 0px rgba(16, 24, 40, 0.15)
    `,
    };

    const outlineStyle = {
        backgroundColor: 'white',
        borderWidth: '1.5px',
        borderStyle: 'solid',
        borderColor: '#E5E7EB',
        boxShadow: `
      0px 1px 2px 0px rgba(0, 0, 0, 0.05),
      0px 1px 3px 0px rgba(0, 0, 0, 0.03)
    `,
        transition: 'all 0.2s ease',
    };

    const outlineHoverStyle = {
        ...outlineStyle,
        borderColor: '#D1D5DB',
        backgroundColor: '#F9FAFB',
        transform: 'translateY(-1px)',
        boxShadow: `
      0px 2px 4px 0px rgba(0, 0, 0, 0.08),
      0px 4px 8px 0px rgba(0, 0, 0, 0.05)
    `,
    };

    return (
        <section>
            <div className="mb-8 pb-4 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">3. Components</h2>
                <p className="text-gray-600">Premium button variations with glossy effects.</p>
            </div>

            <div className="space-y-12">
                {/* Primary Buttons - Navy */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Primary (Navy)</h3>
                        <p className="text-sm text-gray-600">Main call-to-action buttons with premium glossy effect.</p>
                    </div>
                    <div className="p-8 border border-gray-200 rounded-xl bg-white space-y-6">
                        {/* Default Size */}
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Default</h4>
                            <div className="flex flex-wrap items-center gap-4">
                                <button
                                    className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                                    style={navyStyle}
                                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, navyHoverStyle)}
                                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, navyStyle)}
                                >
                                    Primary Button
                                </button>
                                <button
                                    className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                                    style={navyStyle}
                                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, navyHoverStyle)}
                                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, navyStyle)}
                                >
                                    Get Started <FiArrowRight className="ml-2" />
                                </button>
                                <button
                                    className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white rounded-lg opacity-50 cursor-not-allowed"
                                    style={{ backgroundColor: NAVY }}
                                    disabled
                                >
                                    Disabled
                                </button>
                            </div>
                        </div>

                        {/* Large Size */}
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Large</h4>
                            <div className="flex flex-wrap items-center gap-4">
                                <button
                                    className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white rounded-lg"
                                    style={navyStyle}
                                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, navyHoverStyle)}
                                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, navyStyle)}
                                >
                                    <FiPlus className="mr-2" /> Create New
                                </button>
                            </div>
                        </div>

                        {/* Small Size */}
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Small</h4>
                            <div className="flex flex-wrap items-center gap-4">
                                <button
                                    className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-semibold text-white rounded-md"
                                    style={navyStyle}
                                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, navyHoverStyle)}
                                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, navyStyle)}
                                >
                                    Small Button
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Secondary Buttons - Outline */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Secondary (Outline)</h3>
                        <p className="text-sm text-gray-600">Subtle buttons with soft shadows.</p>
                    </div>
                    <div className="p-8 border border-gray-200 rounded-xl bg-white space-y-6">
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Default</h4>
                            <div className="flex flex-wrap items-center gap-4">
                                <button
                                    className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                                    style={outlineStyle}
                                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, outlineHoverStyle)}
                                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, outlineStyle)}
                                >
                                    Secondary Action
                                </button>
                                <button
                                    className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-gray-900 rounded-lg"
                                    style={outlineStyle}
                                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, outlineHoverStyle)}
                                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, outlineStyle)}
                                >
                                    <FiDownload className="mr-2" /> Download
                                </button>
                            </div>
                        </div>

                        {/* Navy Outline */}
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Navy Outline</h4>
                            <div className="flex flex-wrap items-center gap-4">
                                <button
                                    className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
                                    style={{
                                        backgroundColor: 'white',
                                        color: NAVY,
                                        borderWidth: '1.5px',
                                        borderStyle: 'solid',
                                        borderColor: NAVY,
                                        boxShadow: `
                      0px 1px 2px 0px rgba(16, 24, 40, 0.08),
                      0px 2px 4px 0px rgba(16, 24, 40, 0.05)
                    `,
                                        transition: 'all 0.2s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-1px)';
                                        e.currentTarget.style.backgroundColor = '#F8F9FA';
                                        e.currentTarget.style.boxShadow = `
                      0px 2px 4px 0px rgba(16, 24, 40, 0.12),
                      0px 4px 8px 0px rgba(16, 24, 40, 0.08)
                    `;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.backgroundColor = 'white';
                                        e.currentTarget.style.boxShadow = `
                      0px 1px 2px 0px rgba(16, 24, 40, 0.08),
                      0px 2px 4px 0px rgba(16, 24, 40, 0.05)
                    `;
                                    }}
                                >
                                    Navy Outline
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Accent Buttons - Cream */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Accent (Cream)</h3>
                        <p className="text-sm text-gray-600">Highlight buttons with warm glossy effect.</p>
                    </div>
                    <div className="p-8 border border-gray-200 rounded-xl bg-white space-y-6">
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Default</h4>
                            <div className="flex flex-wrap items-center gap-4">
                                <button
                                    className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
                                    style={creamStyle}
                                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, creamHoverStyle)}
                                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, creamStyle)}
                                >
                                    Accent Button
                                </button>
                                <button
                                    className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-bold rounded-lg"
                                    style={creamStyle}
                                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, creamHoverStyle)}
                                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, creamStyle)}
                                >
                                    <FiCheck className="mr-2" /> Success
                                </button>
                            </div>
                        </div>

                        {/* Subtle Cream */}
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Subtle</h4>
                            <div className="flex flex-wrap items-center gap-4">
                                <button
                                    className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium rounded-lg"
                                    style={{
                                        backgroundColor: '#FCFCF0',
                                        color: NAVY,
                                        boxShadow: `
                      0px 1px 1px 0px rgba(255, 255, 255, 0.30) inset,
                      0px 1px 2px 0px rgba(16, 24, 40, 0.08)
                    `,
                                        transition: 'all 0.2s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = CREAM;
                                        e.currentTarget.style.transform = 'translateY(-1px)';
                                        e.currentTarget.style.boxShadow = `
                      0px 1px 2px 0px rgba(255, 255, 255, 0.40) inset,
                      0px 2px 4px 0px rgba(16, 24, 40, 0.12)
                    `;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = '#FCFCF0';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = `
                      0px 1px 1px 0px rgba(255, 255, 255, 0.30) inset,
                      0px 1px 2px 0px rgba(16, 24, 40, 0.08)
                    `;
                                    }}
                                >
                                    Subtle Cream
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ghost & Destructive */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Ghost & Destructive</h3>
                        <p className="text-sm text-gray-600">Minimal buttons with subtle hover effects.</p>
                    </div>
                    <div className="p-8 border border-gray-200 rounded-xl bg-white space-y-6">
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Ghost</h4>
                            <div className="flex flex-wrap items-center gap-4">
                                <button
                                    className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-gray-700 rounded-lg"
                                    style={{ transition: 'all 0.2s ease' }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#F3F4F6';
                                        e.currentTarget.style.transform = 'translateY(-1px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    Ghost Button
                                </button>
                                <button
                                    className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium rounded-lg"
                                    style={{ color: NAVY, transition: 'all 0.2s ease' }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#F8F9FA';
                                        e.currentTarget.style.transform = 'translateY(-1px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    Navy Ghost
                                </button>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Destructive</h4>
                            <div className="flex flex-wrap items-center gap-4">
                                <button
                                    className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-red-600 bg-white rounded-lg"
                                    style={{
                                        borderWidth: '1.5px',
                                        borderStyle: 'solid',
                                        borderColor: '#FCA5A5',
                                        boxShadow: '0px 1px 2px 0px rgba(220, 38, 38, 0.08)',
                                        transition: 'all 0.2s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#FEF2F2';
                                        e.currentTarget.style.transform = 'translateY(-1px)';
                                        e.currentTarget.style.boxShadow = '0px 2px 4px 0px rgba(220, 38, 38, 0.12)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'white';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0px 1px 2px 0px rgba(220, 38, 38, 0.08)';
                                    }}
                                >
                                    <FiTrash2 className="mr-2" /> Delete
                                </button>
                                <button
                                    className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-red-600 rounded-lg"
                                    style={{
                                        boxShadow: `
                      0px 1px 1px 0px rgba(255, 255, 255, 0.15) inset,
                      0px 1px 3px 0px rgba(127, 29, 29, 0.30),
                      0px 4px 8px 0px rgba(127, 29, 29, 0.15)
                    `,
                                        transition: 'all 0.2s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#DC2626';
                                        e.currentTarget.style.transform = 'translateY(-1px)';
                                        e.currentTarget.style.boxShadow = `
                      0px 1px 2px 0px rgba(255, 255, 255, 0.20) inset,
                      0px 2px 4px 0px rgba(127, 29, 29, 0.35),
                      0px 6px 12px 0px rgba(127, 29, 29, 0.20)
                    `;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = '#EF4444';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = `
                      0px 1px 1px 0px rgba(255, 255, 255, 0.15) inset,
                      0px 1px 3px 0px rgba(127, 29, 29, 0.30),
                      0px 4px 8px 0px rgba(127, 29, 29, 0.15)
                    `;
                                    }}
                                >
                                    <FiTrash2 className="mr-2" /> Delete Forever
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Full-Width Card Buttons */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Full-Width Card Buttons</h3>
                        <p className="text-sm text-gray-600">Full-width buttons for forms and cards.</p>
                    </div>
                    <div className="p-8 border border-gray-200 rounded-xl bg-white space-y-6">
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Primary Full-Width</h4>
                            <div className="space-y-4">
                                <button
                                    className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                                    style={navyStyle}
                                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, navyHoverStyle)}
                                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, navyStyle)}
                                >
                                    Send Message
                                </button>
                                <button
                                    className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                                    style={navyStyle}
                                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, navyHoverStyle)}
                                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, navyStyle)}
                                >
                                    <FiArrowRight className="mr-2" /> Get Started
                                </button>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Secondary Full-Width</h4>
                            <div className="space-y-4">
                                <button
                                    className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-medium text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                                    style={outlineStyle}
                                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, outlineHoverStyle)}
                                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, outlineStyle)}
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Accent Full-Width</h4>
                            <div className="space-y-4">
                                <button
                                    className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
                                    style={creamStyle}
                                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, creamHoverStyle)}
                                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, creamStyle)}
                                >
                                    <FiCheck className="mr-2" /> Confirm Action
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
