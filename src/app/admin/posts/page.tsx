'use client'

import { Plus, Pencil, Trash, Eye } from 'phosphor-react'
import Link from 'next/link'

export default function PostsPage() {
  const posts = [
    { id: 1, title: 'Getting Started with Next.js 14', status: 'Published', author: 'John Doe', date: 'Dec 15, 2024', views: '1.2k' },
    { id: 2, title: 'Modern Web Design Principles', status: 'Published', author: 'Jane Smith', date: 'Dec 12, 2024', views: '856' },
    { id: 3, title: 'TypeScript Best Practices', status: 'Draft', author: 'Mike Johnson', date: 'Dec 10, 2024', views: '-' },
    { id: 4, title: 'Building Scalable React Applications', status: 'Published', author: 'Sarah Williams', date: 'Dec 8, 2024', views: '2.1k' },
    { id: 5, title: 'CSS Grid vs Flexbox', status: 'Scheduled', author: 'Tom Brown', date: 'Dec 20, 2024', views: '-' },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return '#10b981'
      case 'Draft': return '#a3a3a3'
      case 'Scheduled': return '#f59e0b'
      default: return '#525252'
    }
  }

  return (
    <div style={{
      padding: 'var(--space-8)',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      {/* Page Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-8)' }}>
        <div>
          <h1 style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#171717',
            marginBottom: 'var(--space-2)'
          }}>
            Posts
          </h1>
          <p style={{ fontSize: '14px', color: '#525252' }}>
            Manage your blog posts and articles
          </p>
        </div>
        <Link href="/admin/posts/new">
          <button style={{
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#171717',
            color: '#ffffff',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            transition: 'all 150ms ease'
          }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#000000'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#171717'}
          >
            <Plus size={18} weight="bold" />
            New Post
          </button>
        </Link>
      </div>

      {/* Posts Table */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #e5e5e5',
        overflow: 'hidden'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #e5e5e5' }}>
              <th style={{ textAlign: 'left', padding: 'var(--space-4)', fontSize: '12px', fontWeight: '600', color: '#a3a3a3', textTransform: 'uppercase' }}>Title</th>
              <th style={{ textAlign: 'left', padding: 'var(--space-4)', fontSize: '12px', fontWeight: '600', color: '#a3a3a3', textTransform: 'uppercase' }}>Status</th>
              <th style={{ textAlign: 'left', padding: 'var(--space-4)', fontSize: '12px', fontWeight: '600', color: '#a3a3a3', textTransform: 'uppercase' }}>Author</th>
              <th style={{ textAlign: 'left', padding: 'var(--space-4)', fontSize: '12px', fontWeight: '600', color: '#a3a3a3', textTransform: 'uppercase' }}>Date</th>
              <th style={{ textAlign: 'left', padding: 'var(--space-4)', fontSize: '12px', fontWeight: '600', color: '#a3a3a3', textTransform: 'uppercase' }}>Views</th>
              <th style={{ textAlign: 'right', padding: 'var(--space-4)', fontSize: '12px', fontWeight: '600', color: '#a3a3a3', textTransform: 'uppercase' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} style={{ borderBottom: '1px solid #f5f5f5' }}>
                <td style={{ padding: 'var(--space-4)', fontSize: '14px', color: '#171717', fontWeight: '500' }}>{post.title}</td>
                <td style={{ padding: 'var(--space-4)' }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '500',
                    color: getStatusColor(post.status),
                    backgroundColor: `${getStatusColor(post.status)}15`
                  }}>
                    {post.status}
                  </span>
                </td>
                <td style={{ padding: 'var(--space-4)', fontSize: '14px', color: '#525252' }}>{post.author}</td>
                <td style={{ padding: 'var(--space-4)', fontSize: '14px', color: '#525252' }}>{post.date}</td>
                <td style={{ padding: 'var(--space-4)', fontSize: '14px', color: '#525252' }}>{post.views}</td>
                <td style={{ padding: 'var(--space-4)' }}>
                  <div style={{ display: 'flex', gap: 'var(--space-2)', justifyContent: 'flex-end' }}>
                    <button style={{
                      padding: '8px',
                      borderRadius: '6px',
                      border: '1px solid #e5e5e5',
                      backgroundColor: '#ffffff',
                      color: '#525252',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'all 150ms ease'
                    }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f5f5f5'; e.currentTarget.style.color = '#171717' }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.color = '#525252' }}
                    >
                      <Eye size={16} />
                    </button>
                    <button style={{
                      padding: '8px',
                      borderRadius: '6px',
                      border: '1px solid #e5e5e5',
                      backgroundColor: '#ffffff',
                      color: '#525252',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'all 150ms ease'
                    }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f5f5f5'; e.currentTarget.style.color = '#171717' }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.color = '#525252' }}
                    >
                      <Pencil size={16} />
                    </button>
                    <button style={{
                      padding: '8px',
                      borderRadius: '6px',
                      border: '1px solid #fee2e2',
                      backgroundColor: '#ffffff',
                      color: '#ef4444',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'all 150ms ease'
                    }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#fef2f2' }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ffffff' }}
                    >
                      <Trash size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
