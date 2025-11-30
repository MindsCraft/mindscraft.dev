import React from 'react';

export default function Typography() {
    return (
        <section>
            <div className="mb-8 pb-4 border-b border-border">
                <h2 className="text-2xl font-bold text-text-primary">1. Typography</h2>
                <p className="text-text-secondary">Font Family: Manrope (Modern Geometric Sans-Serif)</p>
                <p className="text-sm text-text-tertiary mt-2">Weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extrabold)</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Headings Column */}
                <div className="space-y-8">
                    <div className="pb-4 border-b border-gray-100">
                        <h1 className="text-5xl font-extrabold text-primary-900 tracking-tight mb-2">Display Heading</h1>
                        <p className="text-xs text-text-tertiary font-mono">text-5xl font-extrabold text-primary-900</p>
                    </div>
                    <div className="pb-4 border-b border-gray-100">
                        <h2 className="text-4xl font-bold text-primary-900 tracking-tight mb-2">Heading 1</h2>
                        <p className="text-xs text-text-tertiary font-mono">text-4xl font-bold text-primary-900</p>
                    </div>
                    <div className="pb-4 border-b border-gray-100">
                        <h3 className="text-3xl font-bold text-primary-900 tracking-tight mb-2">Heading 2</h3>
                        <p className="text-xs text-text-tertiary font-mono">text-3xl font-bold text-primary-900</p>
                    </div>
                    <div className="pb-4 border-b border-gray-100">
                        <h4 className="text-2xl font-semibold text-primary-900 mb-2">Heading 3</h4>
                        <p className="text-xs text-text-tertiary font-mono">text-2xl font-semibold text-primary-900</p>
                    </div>
                    <div>
                        <h5 className="text-xl font-semibold text-primary-900 mb-2">Heading 4</h5>
                        <p className="text-xs text-text-tertiary font-mono">text-xl font-semibold text-primary-900</p>
                    </div>
                </div>

                {/* Body Text Column */}
                <div className="space-y-8">
                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <p className="text-lg text-text-secondary leading-relaxed mb-4">
                            <strong className="font-bold text-primary-900">Lead Paragraph:</strong> We help startups and enterprises create exceptional digital experiences that drive results through thoughtful design and cutting-edge development.
                        </p>
                        <p className="text-xs text-text-tertiary font-mono">text-lg leading-relaxed</p>
                    </div>

                    <div>
                        <p className="text-base text-text-secondary leading-relaxed mb-2">
                            <strong className="font-semibold text-primary-900">Body Text:</strong> Manrope is a modern geometric sans-serif typeface designed for clarity and readability. Its clean lines and balanced proportions make it perfect for both digital interfaces and long-form content.
                        </p>
                        <p className="text-xs text-text-tertiary font-mono">text-base leading-relaxed</p>
                    </div>

                    <div>
                        <p className="text-sm text-text-tertiary leading-relaxed mb-2">
                            <strong className="font-medium text-primary-900">Small Text:</strong> Used for captions, helper text, and metadata. Manrope maintains excellent legibility even at smaller sizes.
                        </p>
                        <p className="text-xs text-text-tertiary font-mono">text-sm text-text-tertiary</p>
                    </div>

                    {/* Font Weight Showcase */}
                    <div className="pt-6 border-t border-gray-200">
                        <p className="text-sm font-semibold text-primary-900 mb-4 uppercase tracking-wider">Font Weights</p>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-normal text-primary-900">Aa</span>
                                <span className="text-sm text-text-tertiary">Regular (400)</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-medium text-primary-900">Aa</span>
                                <span className="text-sm text-text-tertiary">Medium (500)</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-semibold text-primary-900">Aa</span>
                                <span className="text-sm text-text-tertiary">Semibold (600)</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-bold text-primary-900">Aa</span>
                                <span className="text-sm text-text-tertiary">Bold (700)</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-extrabold text-primary-900">Aa</span>
                                <span className="text-sm text-text-tertiary">Extrabold (800)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
