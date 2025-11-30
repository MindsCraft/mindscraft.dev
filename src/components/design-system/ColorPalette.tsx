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
        { name: 'gray-300', value: '#D1D5DB', rgb: '209 213 219' },
        { name: 'gray-400', value: '#9CA3AF', rgb: '156 163 175' },
        { name: 'gray-500', value: '#6B7280', rgb: '107 114 128' },
        { name: 'gray-600', value: '#4B5563', rgb: '75 85 99' },
        { name: 'gray-700', value: '#374151', rgb: '55 65 81' },
        { name: 'gray-800', value: '#1F2937', rgb: '31 41 55' },
        { name: 'gray-900', value: '#111827', rgb: '17 24 39' },
    ];

    const ColorSwatch = ({ color }: { color: typeof primaryColors[0] }) => (
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div
                className="w-12 h-12 rounded-md flex-shrink-0 relative shadow-sm"
                style={{ backgroundColor: color.value }}
            >
                {color.isLogo && (
                    <div className="absolute -top-1 -right-1 bg-primary-900 text-white text-[10px] px-1.5 py-0.5 rounded-full font-semibold">
                        LOGO
                    </div>
                )}
            </div>
            <div className="flex-1 min-w-0">
                <div className="font-mono text-sm font-semibold text-text-primary">{color.name}</div>
                <div className="font-mono text-xs text-text-tertiary">{color.value}</div>
                <div className="font-mono text-xs text-text-tertiary">rgb({color.rgb})</div>
            </div>
        </div>
    );

    return (
        <section>
            <div className="mb-8 pb-4 border-b border-border">
                <h2 className="text-2xl font-bold text-text-primary">2. Color Palette</h2>
                <p className="text-text-secondary">Logo-based color system featuring Navy and Cream</p>
            </div>

            <div className="space-y-12">
                {/* Primary - Navy/Black */}
                <div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-text-primary mb-1">Primary - Navy/Black</h3>
                        <p className="text-sm text-text-secondary">
                            Main brand color from logo. Use for headings, primary actions, and key UI elements.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {primaryColors.map((color) => (
                            <ColorSwatch key={color.name} color={color} />
                        ))}
                    </div>
                </div>

                {/* Accent - Cream */}
                <div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-text-primary mb-1">Accent - Cream</h3>
                        <p className="text-sm text-text-secondary">
                            Warm accent color from logo. Use for highlights, backgrounds, and friendly touches.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {accentColors.map((color) => (
                            <ColorSwatch key={color.name} color={color} />
                        ))}
                    </div>
                </div>

                {/* Neutral Grays */}
                <div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-text-primary mb-1">Neutral - Grays</h3>
                        <p className="text-sm text-text-secondary">
                            Neutral colors for text, borders, and backgrounds.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
