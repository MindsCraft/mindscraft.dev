import React from 'react';
import { FiArrowRight, FiDownload, FiTrash2, FiPlus, FiCheck } from 'react-icons/fi';
import '@/styles/pages/design-system.css';

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
            <h2 className="ds-buttons-section-title">3. Components</h2>
            <p className="ds-buttons-section-desc">Premium button variations with glossy effects.</p>

            <div className="ds-bd-section">
                {/* Primary Buttons - Navy */}
                <div>
                    <div className="ds-bd-heading-block">
                        <h3>Primary (Navy)</h3>
                        <p>Main call-to-action buttons with premium glossy effect.</p>
                    </div>
                    <div className="ds-buttons-card">
                        {/* Default Size */}
                        <div className="ds-bd-subgroup">
                            <div className="ds-buttons-label">Default</div>
                            <div className="ds-buttons-row">
                                <button
                                    className="ds-btn-base ds-btn-default"
                                    style={navyStyle}
                                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, navyHoverStyle)}
                                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, navyStyle)}
                                >
                                    Primary Button
                                </button>
                                <button
                                    className="ds-btn-base ds-btn-default"
                                    style={navyStyle}
                                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, navyHoverStyle)}
                                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, navyStyle)}
                                >
                                    Get Started <FiArrowRight className="ds-btn-icon-trailing" />
                                </button>
                                <button
                                    className="ds-btn-base ds-btn-default ds-btn-disabled"
                                    style={{ backgroundColor: NAVY }}
                                    disabled
                                >
                                    Disabled
                                </button>
                            </div>
                        </div>

                        {/* Large Size */}
                        <div className="ds-bd-subgroup">
                            <div className="ds-buttons-label">Large</div>
                            <div className="ds-buttons-row">
                                <button
                                    className="ds-btn-base ds-btn-large"
                                    style={navyStyle}
                                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, navyHoverStyle)}
                                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, navyStyle)}
                                >
                                    <FiPlus className="ds-btn-icon-leading" /> Create New
                                </button>
                            </div>
                        </div>

                        {/* Small Size */}
                        <div className="ds-bd-subgroup">
                            <div className="ds-buttons-label">Small</div>
                            <div className="ds-buttons-row">
                                <button
                                    className="ds-btn-base ds-btn-small"
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
            </div>

            <div className="ds-bd-section">
                {/* Secondary Buttons - Outline */}
                <div>
                    <div className="ds-bd-heading-block">
                        <h3>Secondary (Outline)</h3>
                        <p>Subtle buttons with soft shadows.</p>
                    </div>
                    <div className="ds-buttons-card">
                        <div className="ds-bd-subgroup">
                            <div className="ds-buttons-label">Default</div>
                            <div className="ds-buttons-row">
                                <button
                                    className="ds-btn-base ds-btn-default ds-btn-secondary"
                                    style={outlineStyle}
                                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, outlineHoverStyle)}
                                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, outlineStyle)}
                                >
                                    Secondary Action
                                </button>
                                <button
                                    className="ds-btn-base ds-btn-default ds-btn-secondary"
                                    style={outlineStyle}
                                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, outlineHoverStyle)}
                                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, outlineStyle)}
                                >
                                    <FiDownload className="ds-btn-icon-leading" /> Download
                                </button>
                            </div>
                        </div>

                        {/* Navy Outline */}
                        <div className="ds-bd-subgroup">
                            <div className="ds-buttons-label">Navy Outline</div>
                            <div className="ds-buttons-row">
                                <button
                                    className="ds-btn-base ds-btn-default ds-btn-navy-outline"
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
            </div>

            <div className="ds-bd-section">
                {/* Accent Buttons - Cream */}
                <div>
                    <div className="ds-bd-heading-block">
                        <h3>Accent (Cream)</h3>
                        <p>Highlight buttons with warm glossy effect.</p>
                    </div>
                    <div className="ds-buttons-card">
                        <div className="ds-bd-subgroup">
                            <div className="ds-buttons-label">Default</div>
                            <div className="ds-buttons-row">
                                <button
                                    className="ds-btn-base ds-btn-default ds-btn-accent"
                                    style={creamStyle}
                                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, creamHoverStyle)}
                                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, creamStyle)}
                                >
                                    Accent Button
                                </button>
                                <button
                                    className="ds-btn-base ds-btn-default ds-btn-accent"
                                    style={creamStyle}
                                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, creamHoverStyle)}
                                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, creamStyle)}
                                >
                                    <FiCheck className="ds-btn-icon-leading" /> Success
                                </button>
                            </div>
                        </div>

                        {/* Subtle Cream */}
                        <div className="ds-bd-subgroup">
                            <div className="ds-buttons-label">Subtle</div>
                            <div className="ds-buttons-row">
                                <button
                                    className="ds-btn-base ds-btn-default ds-btn-subtle"
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
            </div>

            <div className="ds-bd-section">
                {/* Ghost & Destructive */}
                <div>
                    <div className="ds-bd-heading-block">
                        <h3>Ghost &amp; Destructive</h3>
                        <p>Minimal buttons with subtle hover effects.</p>
                    </div>
                    <div className="ds-buttons-card">
                        <div className="ds-bd-subgroup">
                            <div className="ds-buttons-label">Ghost</div>
                            <div className="ds-buttons-row">
                                <button
                                    className="ds-btn-base ds-btn-default ds-btn-ghost"
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
                                    className="ds-btn-base ds-btn-default ds-btn-ghost-navy"
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

                        <div className="ds-bd-subgroup">
                            <div className="ds-buttons-label">Destructive</div>
                            <div className="ds-buttons-row">
                                <button
                                    className="ds-btn-base ds-btn-default ds-btn-destructive-outline"
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
                                    <FiTrash2 className="ds-btn-icon-leading" /> Delete
                                </button>
                                <button
                                    className="ds-btn-base ds-btn-default ds-btn-destructive-solid"
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
                                    <FiTrash2 className="ds-btn-icon-leading" /> Delete Forever
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ds-bd-section">
                {/* Full-Width Card Buttons */}
                <div>
                    <div className="ds-bd-heading-block">
                        <h3>Full-Width Card Buttons</h3>
                        <p>Full-width buttons for forms and cards.</p>
                    </div>
                    <div className="ds-buttons-card">
                        <div className="ds-bd-fullwidth-block">
                            <div className="ds-buttons-label">Primary Full-Width</div>
                            <div className="ds-bd-subgroup-stack">
                                <button
                                    className="ds-btn-base ds-btn-fullwidth"
                                    style={navyStyle}
                                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, navyHoverStyle)}
                                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, navyStyle)}
                                >
                                    Send Message
                                </button>
                                <button
                                    className="ds-btn-base ds-btn-fullwidth"
                                    style={navyStyle}
                                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, navyHoverStyle)}
                                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, navyStyle)}
                                >
                                    <FiArrowRight className="ds-btn-icon-leading" /> Get Started
                                </button>
                            </div>
                        </div>

                        <div className="ds-bd-fullwidth-block">
                            <div className="ds-buttons-label">Secondary Full-Width</div>
                            <div className="ds-bd-subgroup-stack">
                                <button
                                    className="ds-btn-base ds-btn-fullwidth ds-btn-secondary"
                                    style={outlineStyle}
                                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, outlineHoverStyle)}
                                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, outlineStyle)}
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>

                        <div className="ds-bd-fullwidth-block">
                            <div className="ds-buttons-label">Accent Full-Width</div>
                            <div className="ds-bd-subgroup-stack">
                                <button
                                    className="ds-btn-base ds-btn-fullwidth ds-btn-accent"
                                    style={creamStyle}
                                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, creamHoverStyle)}
                                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, creamStyle)}
                                >
                                    <FiCheck className="ds-btn-icon-leading" /> Confirm Action
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
