import fs from 'fs';
import path from 'path';

const postsPath = 'j:/WorkSpace/Ongoing/mindsCraft.dev/src/data/posts.json';
const imagesDir = 'j:/WorkSpace/Ongoing/mindsCraft.dev/public/images/blog';

const posts = JSON.parse(fs.readFileSync(postsPath, 'utf8'));
const missingFiles = [];

posts.forEach(post => {
  // Check featured image
  const imgPath = post.image;
  if (imgPath.startsWith('/images/blog/')) {
    const fileName = imgPath.replace('/images/blog/', '');
    const fullPath = path.join(imagesDir, fileName);
    if (!fs.existsSync(fullPath)) {
      missingFiles.push({ slug: post.slug, type: 'featured', path: imgPath });
    }
  }

  // Check inline images in content
  const inlineRegex = /src="\/images\/blog\/(.*?)"/g;
  let match;
  while ((match = inlineRegex.exec(post.content)) !== null) {
    const fileName = match[1];
    const fullPath = path.join(imagesDir, fileName);
    if (!fs.existsSync(fullPath)) {
      missingFiles.push({ slug: post.slug, type: 'inline', path: `/images/blog/${fileName}` });
    }
  }
});

if (missingFiles.length > 0) {
  console.log('MISSING IMAGES:');
  console.log(JSON.stringify(missingFiles, null, 2));
} else {
  console.log('All image paths are valid.');
}
