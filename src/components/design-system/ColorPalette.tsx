import React from 'react';

const ColorPalette = () => {
    const primaryColors = [
        { name: 'primary-50', value: '#F8F9FA', rgb: '248 249 250' },
        { name: 'primary-100', value: '#E9ECEF', rgb: '233 236 239' },
        { name: 'primary-200', value: '#DEE2E6', rgb: '222 226 230' },
        { name: 'primary-300', value: '#CED4DA', rgb: '206 212 218' },
        { name: 'primary-400', value: '#ADB5BD', rgb: '173 181 189' },
        { name: 'primary-500', value: '#6C757D', rgb: '108 117 125' },
        { name: 'primary-600', value: '#495057', rgb: '73 80 87' },
        { name: 'primary-700', value: '#343A40', rgb: '52 58 64' },
        { name: 'primary-800', value: '#212529', rgb: '33 37 41' },
        { name: 'primary-900', value: '#101828', rgb: '16 24 40', isLogo: true },
        { name: 'primary-950', value: '#0A0F1A', rgb: '10 15 26' },
    ];

    const accentColors = [
        { name: 'accent-50', value: '#FEFEF8', rgb: '254 254 248' },
        { name: 'accent-100', value: '#FCFCF0', rgb: '252 252 240' },
        { name: 'accent-200', value: '#F9FAE8', rgb: '249 250 232' },
        { name: 'accent-300', value: '#F6F7D4', rgb: '246 247 212' },
        { name: 'accent-400', value: '#F3F4C0', rgb: '243 244 192', isLogo: true },
        { name: 'accent-500', value: '#EAEBAC', rgb: '234 235 172' },
        { name: 'accent-600', value: '#D4D68A', rgb: '212 214 138' },
        { name: 'accent-700', value: '#B8BA6E', rgb: '184 186 110' },
        { name: 'accent-800', value: '#9C9E52', rgb: '156 158 82' },
        { name: 'accent-900', value: '#7E8036', rgb: '126 128 54' },
    ];

    const grayColors = [
        { name: 'gray-50', value: '#F9FAFB', rgb: '249 250 251' },
        { name: 'gray-100', value: '#F3F4F6', rgb: '243 244 246' },
        { name: 'gray-200', value: '#E5E7EB', rgb: '229 231 235' },
        { name: 'gray-300', value: '#D1D5DB', rgb: '209 213 218' },
        { name: 'gray-400', value: '#9CA3AF', rgb: '156 163 175' },
        { name: 'gray-500', value: '#6B7280', rgb: '107 114 128' },
        { name: 'gray-600', value: '#4B5563', rgb: '75 85 99' },
        { name: 'gray-700', value: '#374151', rgb: '55 65 81' },
        { name: 'gray-800', value: '#1F2937', rgb: '31 41 55' },
        { name: 'gray-900', value: '#111827', rgb: '17 24 39' },
    ];

    const ColorSwatch = ({ color }: { color: typeof primaryColors[0] }) => (
        <div className="ds-color-swatch-row">
            <div
                className="ds-color-swatch-tile"
                style={{ backgroundColor: color.value }}
            >
                {color.isLogo && (
                    <div className="ds-color-logo-pill">LOGO</div>
                )}
            </div>
            <div className="ds-color-swatch-info">
                <div className="ds-color-swatch-name">{color.name}</div>
                <div className="ds-color-swatch-hex">{color.value}</div>
                <div className="ds-color-swatch-rgb">rgb({color.rgb})</div>
            </div>
        </div>
    );

    return (
        <section>
            <div className="ds-color-section-header">
                <h2>2. Color Palette</h2>
                <p>Logo-based color system featuring Navy and Cream</p>
            </div>

            <div className="ds-color-blocks">
                {/* Primary - Navy/Black */}
                <div>
                    <div className="ds-color-block-header">
                        <h3>Primary - Navy/Black</h3>
                        <p>Main brand color from logo. Use for headings, primary actions, and key UI elements.</p>
                    </div>
                    <div className="ds-color-row">
                        {primaryColors.map((color) => (
                            <ColorSwatch key={color.name} color={color} />
                        ))}
                    </div>
                </div>

                {/* Accent - Cream */}
                <div>
                    <div className="ds-color-block-header">
                        <h3>Accent - Cream</h3>
                        <p>Warm accent color from logo. Use for highlights, backgrounds, and friendly touches.</p>
                    </div>
                    <div className="ds-color-row">
                        {accentColors.map((color) => (
                            <ColorSwatch key={color.name} color={color} />
                        ))}
                    </div>
                </div>

                {/* Neutral Grays */}
                <div>
                    <div className="ds-color-block-header">
                        <h3>Neutral - Grays</h3>
                        <p>Neutral colors for text, borders, and backgrounds.</p>
                    </div>
                    <div className="ds-color-row">
                        {grayColors.map((color) => (
                            <ColorSwatch key={color.name} color={color} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ColorPalette;
