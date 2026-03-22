'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ArrowLeft, PlusCircle, Save, XCircle } from 'lucide-react'
import styles from '@/styles/admin/pages/posts.module.css'

// Import the loading component
import Loading from './loading'

// Dynamically import the BlogEditor with SSR disabled
const BlogEditor = dynamic(
  () => import('@/components/admin/BlogEditor'),
  { 
    ssr: false,
    loading: () => <div className="h-[400px] w-full rounded-xl bg-gray-50 animate-pulse border border-gray-100 flex items-center justify-center text-gray-400 text-sm">Loading premium editor...</div>
  }
)

const PostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    category: 'AI & SaaS',
    published: false,
    featured: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const generateSlug = () => {
    const slug = formData.title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_]+/g, '-')
      .replace(/^-+|-+$/g, '');

    setFormData(prev => ({ ...prev, slug }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleEditorChange = (html: string) => {
    setFormData(prev => ({ ...prev, content: html }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          id: Date.now(),
          date: new Date().toISOString().split('T')[0],
          readTime: `${Math.ceil(formData.content.length / 1000)} min read`
        }),
      })

      if (!response.ok) throw new Error('Failed to create post')

      router.push('/admin/posts')
      router.refresh()
    } catch (error) {
      console.error('Error creating post:', error)
      alert('Failed to create post. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
      {/* Premium Header Segment */}
      <div className={styles.editorHeader}>
        <Link href="/admin/posts" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--color-text-secondary)', textDecoration: 'none', marginBottom: 'var(--space-4)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-medium)'}}>
          <ArrowLeft size={16} style={{ marginRight: '8px' }} />
          Back to Blog Posts
        </Link>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 className="heading-1" style={{ marginBottom: 'var(--space-2)' }}>New Publication</h1>
            <p className="body-sm">Craft a premium article for the MindsCraft audience.</p>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
            <Link href="/admin/posts" className={styles.btnSecondary}><XCircle size={16} /> Discard</Link>
            <button type="submit" disabled={isSubmitting} className={styles.btnPrimary}>
              <Save size={16} /> {isSubmitting ? 'Saving...' : 'Save Draft'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Canvas Segment */}
      <div className={styles.editorMain}>
        
        {/* Editor Card */}
        <div className="card" style={{ padding: 'var(--space-8)', border: 'none', boxShadow: 'var(--shadow-md)' }}>
          <input
            type="text" name="title" placeholder="Document Title" required
            value={formData.title} onChange={handleChange}
            onBlur={() => !formData.slug && generateSlug()}
            className={styles.titleInput}
          />
          <div style={{ margin: '0 -2rem' }}>
            <BlogEditor content={formData.content} onChange={handleEditorChange} placeholder="Start writing your masterpiece..." />
          </div>
        </div>

        {/* Post Settings Card */}
        <div className="card" style={{ overflow: 'visible' }}>
          <div className="card-header"><h3 className="heading-4" style={{ margin: 0 }}>Publication Settings</h3></div>
          <div className="card-body" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 'var(--space-6)' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div>
                <label className="label" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>URL Slug</label>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                  <input type="text" name="slug" required value={formData.slug} onChange={handleChange} className={styles.inputBox} style={{ flex: 1 }} />
                  <button type="button" onClick={generateSlug} className={styles.iconBtn}><PlusCircle size={16} color="var(--color-text-secondary)" /></button>
                </div>
              </div>
              
              <div>
                <label className="label" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Category</label>
                <select name="category" value={formData.category} onChange={handleChange} className={styles.inputBox}>
                  <option value="AI & SaaS">AI & SaaS</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Performance">Performance</option>
                  <option value="UX & CRO">UX & CRO</option>
                  <option value="Future">Future</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-2)', padding: 'var(--space-4)', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-md)' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', cursor: 'pointer' }}>
                  <input type="checkbox" name="published" checked={formData.published} onChange={handleChange} style={{ width: '16px', height: '16px' }} />
                  <span className="body-sm" style={{ fontWeight: 'var(--font-medium)', color: 'var(--color-text-primary)' }}>Publish Object Immediately</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', cursor: 'pointer' }}>
                  <input type="checkbox" name="featured" checked={formData.featured} onChange={handleChange} style={{ width: '16px', height: '16px' }} />
                  <span className="body-sm" style={{ fontWeight: 'var(--font-medium)', color: 'var(--color-text-primary)' }}>Mark as Featured Content</span>
                </label>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label className="label" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Brief Excerpt</label>
              <textarea
                name="excerpt" rows={6} value={formData.excerpt} onChange={handleChange}
                placeholder="A compelling summary for blog cards and SEO."
                className={styles.inputBox} style={{ resize: 'vertical' }}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default function NewPostPage() {
  return (
    <div style={{ paddingBottom: 'var(--space-12)' }}>
      <PostForm />
    </div>
  );
}
