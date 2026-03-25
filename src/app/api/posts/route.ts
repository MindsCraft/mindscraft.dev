import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const postsFilePath = path.join(process.cwd(), 'src/data/posts.json');

// Helper to read posts
function getPosts() {
  if (!fs.existsSync(postsFilePath)) {
    return [];
  }
  const fileContent = fs.readFileSync(postsFilePath, 'utf8');
  return JSON.parse(fileContent);
}

// Helper to save posts
function savePosts(posts: any[]) {
  fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2), 'utf8');
}

// Secure HTML stripping utility to prevent ReDoS (Polynomial Regex)
async function stripTags(html: string) {
  const DOMPurify = (await import('isomorphic-dompurify')).default;
  return html ? DOMPurify.sanitize(html, { ALLOWED_TAGS: [] }) : '';
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const posts = getPosts();

    if (id) {
      const post = posts.find((p: any) => p.id === parseInt(id));
      if (!post) {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
      }
      return NextResponse.json(post);
    }

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const posts = getPosts();

    const newPost = {
      id: posts.length > 0 ? Math.max(...posts.map((p: any) => p.id)) + 1 : 1,
      title: body.title,
      slug: body.slug || body.title.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
      excerpt: body.excerpt || (await stripTags(body.content)).substring(0, 150) + '...',
      content: body.content,
      date: new Date().toISOString().split('T')[0],
      category: body.category || 'AI & SaaS',
      author: {
        name: 'MindsCraft AI',
        role: 'Technical Strategist',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100'
      },
      readTime: Math.ceil(body.content.split(' ').length / 200) + ' min read',
      views: '0',
      status: body.published ? 'Published' : 'Draft',
      image: body.image || '',
      imageSearchTerm: body.imageSearchTerm || '',
      metadata: {
        title: body.title,
        description: body.excerpt || (await stripTags(body.content)).substring(0, 160)
      }
    };

    posts.unshift(newPost);
    savePosts(posts);

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ error: 'Post ID is required' }, { status: 400 });
    }

    let posts = getPosts();
    const index = posts.findIndex((p: any) => p.id === parseInt(id));

    if (index === -1) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    // Merge updates
    const newContent = updates.content ?? posts[index].content;
    
    // Use safe stripTags utility to avoid ReDoS high severity alert
    const plainText = newContent ? await stripTags(newContent) : '';
    const wordCount = plainText.trim().split(/\s+/).filter(Boolean).length;
    const newReadTime = Math.max(1, Math.ceil(wordCount / 200)) + ' min read';

    posts[index] = {
      ...posts[index],
      title: updates.title ?? posts[index].title,
      slug: updates.slug ?? posts[index].slug,
      content: newContent,
      excerpt: updates.excerpt ?? posts[index].excerpt,
      category: updates.category ?? posts[index].category,
      image: updates.image !== undefined ? updates.image : posts[index].image,
      imageSearchTerm: updates.imageSearchTerm !== undefined ? updates.imageSearchTerm : posts[index].imageSearchTerm,
      status: updates.published !== undefined ? (updates.published ? 'Published' : 'Draft') : posts[index].status,
      featured: updates.featured !== undefined ? updates.featured : posts[index].featured,
      readTime: newReadTime,
    };

    savePosts(posts);
    return NextResponse.json(posts[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Post ID is required' }, { status: 400 });
    }

    let posts = getPosts();
    posts = posts.filter((p: any) => p.id !== parseInt(id));
    savePosts(posts);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
