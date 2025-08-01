# Mindscraft Color Palette

## 🎨 Primary Brand Colors

### **Dark Slate** (Primary)
- **Hex**: `#101828`
- **RGB**: `rgb(16, 24, 40)`
- **HSL**: `hsl(220, 43%, 11%)`
- **Usage**: Logo background, text, primary dark elements

### **Light Yellow-Green** (Accent)
- **Hex**: `#F3F4C0`
- **RGB**: `rgb(243, 244, 192)`
- **HSL**: `hsl(61, 68%, 85%)`
- **Usage**: Logo icon pattern, accent elements, highlights

## 🎯 Color Usage Guidelines

### **Primary Dark (#101828)**
- Logo backgrounds and containers
- Primary text color
- Navigation elements
- Headers and important UI elements
- Dark theme backgrounds

### **Accent Light (#F3F4C0)**
- Logo geometric patterns
- Highlight elements
- Call-to-action accents
- Hover states
- Success indicators

## 📊 Color Combinations

### **High Contrast Pairs**
- `#101828` on `#FFFFFF` (Dark on White)
- `#F3F4C0` on `#101828` (Accent on Dark)
- `#101828` on `#F3F4C0` (Dark on Accent)

### **Accessibility**
- **Dark on White**: WCAG AAA compliant (21:1 contrast ratio)
- **Accent on Dark**: WCAG AA compliant (good readability)

## 🎨 Extended Palette (Suggested)

### **Dark Variations**
- **Lighter**: `#1F2937` (Gray-800)
- **Medium**: `#374151` (Gray-700)
- **Darker**: `#0F172A` (Slate-900)

### **Accent Variations**
- **Darker**: `#E5E619` (More saturated yellow)
- **Lighter**: `#F9FAFB` (Near white)
- **Muted**: `#D1D5DB` (Gray-300)

## 💻 CSS Variables

```css
:root {
  /* Primary Brand Colors */
  --color-brand-dark: #101828;
  --color-brand-accent: #F3F4C0;
  
  /* RGB Values for opacity */
  --color-brand-dark-rgb: 16, 24, 40;
  --color-brand-accent-rgb: 243, 244, 192;
  
  /* HSL Values for variations */
  --color-brand-dark-hsl: 220, 43%, 11%;
  --color-brand-accent-hsl: 61, 68%, 85%;
}
```

## 🎨 Tailwind CSS Classes

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#101828',
          accent: '#F3F4C0',
        }
      }
    }
  }
}
```

## 🖼️ Usage Examples

### **Backgrounds**
- Primary: `background-color: #101828`
- Accent: `background-color: #F3F4C0`

### **Text**
- Primary: `color: #101828`
- On dark: `color: #F3F4C0`

### **Borders**
- Subtle: `border-color: #101828`
- Accent: `border-color: #F3F4C0`

## 🎯 Brand Applications

### **Logo Usage**
- Use `#101828` for logo backgrounds
- Use `#F3F4C0` for the geometric pattern
- Maintain these exact colors for brand consistency

### **Web Design**
- Headers: `#101828` background
- Accents: `#F3F4C0` highlights
- Text: `#101828` on light backgrounds

### **Print Materials**
- **CMYK Approximations**:
  - Dark: C:85 M:70 Y:0 K:85
  - Accent: C:5 M:0 Y:25 K:5

## 🔍 Color Analysis

### **Brand Personality**
- **Dark Slate**: Professional, trustworthy, sophisticated
- **Light Accent**: Creative, innovative, approachable
- **Combination**: Modern tech with human touch

### **Psychological Impact**
- Creates trust and reliability
- Suggests innovation and creativity
- Balances professionalism with approachability