import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, '../src/data/posts.json');

function setFeaturedPost(searchParam: string) {
    if (!searchParam) {
        console.error("❌ Please provide a post ID or slug. Example: npm run blog:feature 1");
        process.exit(1);
    }

    const currentPosts = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    let found = false;

    // Reset all to not featured, and feature the matching one
    for (const post of currentPosts) {
        if (post.id.toString() === searchParam || post.slug === searchParam) {
            post.featured = true;
            found = true;
            console.log(`⭐ Set post as featured: ${post.title}`);
        } else {
            post.featured = false;
        }
    }

    if (!found) {
        console.error(`❌ Could not find post with ID or slug matching: ${searchParam}`);
        process.exit(1);
    }

    fs.writeFileSync(DATA_FILE, JSON.stringify(currentPosts, null, 2));
    console.log(`✅ posts.json updated successfully.`);
}

const args = process.argv.slice(2);
setFeaturedPost(args[0]);
