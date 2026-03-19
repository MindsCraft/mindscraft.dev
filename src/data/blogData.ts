import postsData from './posts.json';

export const categories = [
    'All',
    'AI & SaaS',
    'Web Development',
    'UX & CRO',
    'Performance',
];

export const posts = postsData.map(post => ({
    id: post.id,
    title: post.title,
    description: post.description,
    category: post.category,
    date: post.date,
    readTime: post.readTime,
    slug: post.slug,
    image: post.image,
    imageAlt: post.imageAlt,
    featured: post.featured,
}));

