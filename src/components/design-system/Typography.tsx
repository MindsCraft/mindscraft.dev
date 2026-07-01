import React from 'react';

export default function Typography() {
    return (
        <section>
            <div className="ds-typo-section-header">
                <h2>1. Typography</h2>
                <p>Font Family: Manrope (Modern Geometric Sans-Serif)</p>
                <p className="ds-typo-weights">
                    Weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extrabold)
                </p>
            </div>

            <div className="ds-typo-grid">
                {/* Headings Column */}
                <div className="ds-typo-col">
                    <div className="ds-typo-heading">
                        <h1 className="ds-typo-display">Display Heading</h1>
                        <p className="ds-typo-meta">text-5xl font-extrabold text-primary-900</p>
                    </div>
                    <div className="ds-typo-heading">
                        <h2 className="ds-typo-h1">Heading 1</h2>
                        <p className="ds-typo-meta">text-4xl font-bold text-primary-900</p>
                    </div>
                    <div className="ds-typo-heading">
                        <h3 className="ds-typo-h2">Heading 2</h3>
                        <p className="ds-typo-meta">text-3xl font-bold text-primary-900</p>
                    </div>
                    <div className="ds-typo-heading">
                        <h4 className="ds-typo-h3">Heading 3</h4>
                        <p className="ds-typo-meta">text-2xl font-semibold text-primary-900</p>
                    </div>
                    <div className="ds-typo-heading ds-typo-heading--no-border">
                        <h5 className="ds-typo-h4">Heading 4</h5>
                        <p className="ds-typo-meta">text-xl font-semibold text-primary-900</p>
                    </div>
                </div>

                {/* Body Text Column */}
                <div className="ds-typo-col">
                    <div className="ds-typo-lead-card">
                        <p className="ds-typo-lead">
                            <span className="ds-typo-strong">Lead Paragraph:</span> We help startups and enterprises create exceptional digital experiences that drive results through thoughtful design and cutting-edge development.
                        </p>
                        <p className="ds-typo-meta">text-lg leading-relaxed</p>
                    </div>

                    <div>
                        <p className="ds-typo-body">
                            <span className="ds-typo-strong-medium">Body Text:</span> Manrope is a modern geometric sans-serif typeface designed for clarity and readability. Its clean lines and balanced proportions make it perfect for both digital interfaces and long-form content.
                        </p>
                        <p className="ds-typo-meta">text-base leading-relaxed</p>
                    </div>

                    <div>
                        <p className="ds-typo-small">
                            <span className="ds-typo-strong-light">Small Text:</span> Used for captions, helper text, and metadata. Manrope maintains excellent legibility even at smaller sizes.
                        </p>
                        <p className="ds-typo-meta">text-sm text-text-tertiary</p>
                    </div>

                    {/* Font Weight Showcase */}
                    <div className="ds-typo-weights-block">
                        <p className="ds-typo-weights-title">Font Weights</p>
                        <div className="ds-typo-weights-list">
                            <div className="ds-typo-weight-row">
                                <span className="ds-typo-weight-sample ds-typo-weight-sample--regular">Aa</span>
                                <span className="ds-typo-weight-name">Regular (400)</span>
                            </div>
                            <div className="ds-typo-weight-row">
                                <span className="ds-typo-weight-sample ds-typo-weight-sample--medium">Aa</span>
                                <span className="ds-typo-weight-name">Medium (500)</span>
                            </div>
                            <div className="ds-typo-weight-row">
                                <span className="ds-typo-weight-sample ds-typo-weight-sample--semibold">Aa</span>
                                <span className="ds-typo-weight-name">Semibold (600)</span>
                            </div>
                            <div className="ds-typo-weight-row">
                                <span className="ds-typo-weight-sample ds-typo-weight-sample--bold">Aa</span>
                                <span className="ds-typo-weight-name">Bold (700)</span>
                            </div>
                            <div className="ds-typo-weight-row">
                                <span className="ds-typo-weight-sample ds-typo-weight-sample--extrabold">Aa</span>
                                <span className="ds-typo-weight-name">Extrabold (800)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
