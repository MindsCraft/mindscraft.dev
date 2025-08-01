# Logo File Placement Guide

## 📁 Folder Structure

```
public/logo/
├── svg/                    # Vector files (already created)
│   ├── logo-full-dark.svg
│   ├── logo-full-light.svg
│   ├── logo-icon-dark.svg
│   ├── logo-icon-light.svg
│   ├── logo-horizontal-dark.svg
│   └── logo-text-dark.svg
│
├── png/                    # 👈 PUT YOUR PNG FILES HERE
│   ├── logo-full-dark.png
│   ├── logo-full-light.png
│   ├── logo-icon-dark.png
│   ├── logo-icon-light.png
│   ├── logo-horizontal-dark.png
│   └── logo-text-dark.png
│
├── favicon/                # 👈 PUT YOUR ICON FILES HERE
│   ├── favicon.ico         # 32x32 ICO format
│   ├── favicon-16x16.png   # 16x16 PNG
│   ├── favicon-32x32.png   # 32x32 PNG
│   ├── apple-touch-icon.png # 180x180 PNG for iOS
│   ├── icon-192x192.png    # 192x192 PNG for Android
│   └── icon-512x512.png    # 512x512 PNG for Android
│
└── brand/                  # Brand guidelines, usage examples
    └── brand-guidelines.pdf
```

## 🎯 Recommended Sizes for PNG Files

### Logo Files (png/ folder):
- **Full Logo**: 1200x300px, 600x150px, 300x75px
- **Icon Only**: 512x512px, 256x256px, 128x128px, 64x64px
- **Horizontal**: 800x160px, 400x80px, 200x40px

### Favicon Files (favicon/ folder):
- **favicon.ico**: 32x32px (ICO format)
- **favicon-16x16.png**: 16x16px
- **favicon-32x32.png**: 32x32px
- **apple-touch-icon.png**: 180x180px (for iOS home screen)
- **icon-192x192.png**: 192x192px (for Android)
- **icon-512x512.png**: 512x512px (for Android, PWA)

## 📝 File Naming Convention

Use this naming pattern:
- `logo-[type]-[theme]-[size].png`
- Examples:
  - `logo-full-dark-1200x300.png`
  - `logo-icon-light-512x512.png`
  - `logo-horizontal-dark-400x80.png`

## 🚀 Quick Start

1. **Drop your PNG logo files** into `public/logo/png/`
2. **Drop your icon files** into `public/logo/favicon/`
3. **Update the Logo component** (if needed) to support PNG fallbacks
4. **Test across different devices** and backgrounds

## 💡 Pro Tips

- Keep file sizes optimized (use tools like TinyPNG)
- Provide both dark and light variants
- Include multiple sizes for different use cases
- Test on various backgrounds to ensure visibility