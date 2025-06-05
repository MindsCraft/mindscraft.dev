const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Create icons directory if it doesn't exist
const iconsDir = path.join(__dirname, '../public/icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Create a simple icon with text
const createIcon = (size, text) => {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Background
  ctx.fillStyle = '#2382fc';
  ctx.fillRect(0, 0, size, size);
  
  // Text
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const fontSize = Math.floor(size / 5);
  ctx.font = `bold ${fontSize}px Arial`;
  ctx.fillText('AI', size / 2, size / 2);
  
  return canvas.toBuffer();
};

// Generate icons
const sizes = [192, 512];
sizes.forEach(size => {
  const buffer = createIcon(size, 'AI');
  fs.writeFileSync(path.join(iconsDir, `icon-${size}x${size}.png`), buffer);
});

console.log('Icons generated successfully!');
