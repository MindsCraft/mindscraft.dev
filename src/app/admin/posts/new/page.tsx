'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ArrowLeft, Save, CheckCircle, Star, Tag, FileText, Globe, Image as ImageIcon } from 'lucide-react'
import styles from '@/styles/admin/pages/posts.module.css'

// Dynamically import the BlogEditor with SSR disabled
const BlogEditor = dynamic(
  () => import('@/components/admin/BlogEditor'),
  { 
    ssr: false,
    loading: () => (
      <div style={{ height: '400px', width: '100%', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-tertiary)', fontSize: 'var(--text-sm)'}}>
        Loading editor...
      </div>
    )
  }
)

const CATEGORIES = ['AI & SaaS', 'Web Development', 'Performance', 'UX & CRO', 'Future']

function ToggleRow({
  name, checked, onChange, label, description, activeColor, icon
}: {
  name: string; checked: boolean; onChange: any; label: string; description: string; activeColor: string; icon?: React.ReactNode
}) {
  return (
    <label className={styles.toggleRow}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
        {icon && <span style={{ color: checked ? activeColor : 'var(--color-text-disabled)' }}>{icon}</span>}
        <div>
          <div style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-medium)', color: 'var(--color-text-primary)' }}>{label}</div>
          <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-tertiary)' }}>{description}</div>
        </div>
      </div>
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <input type="checkbox" name={name} checked={checked} onChange={onChange} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
        <div
          onClick={() => onChange({ target: { name, type: 'checkbox', checked: !checked } } as any)}
          className={styles.toggleSwitch}
          style={{ backgroundColor: checked ? activeColor : 'var(--color-border)' }}
        >
          <div className={styles.toggleThumb} style={{ left: checked ? '18px' : '2px' }} />
        </div>
      </div>
    </label>
  )
}

export default function NewPostPage() {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    category: 'AI & SaaS',
    published: false,
    featured: false,
    image: '',
    imageSearchTerm: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const router = useRouter();

  const generateSlug = () => {
    if (formData.slug || !formData.title) return;
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
    setSaveSuccess(false)

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          id: Date.now(), // Fallback if API needs it
          date: new Date().toISOString().split('T')[0],
          readTime: `${Math.ceil(formData.content.length / 1000) || 1} min read`
        }),
      })

      if (!response.ok) throw new Error('Failed to create post')

      setSaveSuccess(true)
      setTimeout(() => {
        router.push('/admin/posts')
        router.refresh()
      }, 1000)
    } catch (error) {
      console.error('Error creating post:', error)
      alert('Failed to create post. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-surface)' }}>
      {/* Top Bar */}
      <div className={styles.editTopBar}>
        <Link href="/admin/posts" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-medium)'}}>
          <ArrowLeft size={15} /> Blog Posts
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          <span className={styles.badge} style={{ backgroundColor: formData.published ? '#dcfce7' : 'var(--color-surface)', color: formData.published ? '#16a34a' : 'var(--color-text-tertiary)', border: `1px solid ${formData.published ? '#bbf7d0' : 'var(--color-border)'}`}}>
            <span className={styles.badgeDot} style={{ backgroundColor: formData.published ? '#16a34a' : 'var(--color-text-disabled)' }} />
            {formData.published ? 'Published' : 'Draft'}
          </span>
          <button type="button" onClick={handleSubmit} disabled={isSubmitting || saveSuccess} className={styles.btnPrimary} style={{ backgroundColor: saveSuccess ? '#16a34a' : 'var(--color-primary)' }}>
            {saveSuccess ? <CheckCircle size={15} /> : <Save size={15} />}
            {isSubmitting ? 'Creating...' : saveSuccess ? 'Created!' : 'Create Post'}
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.editGrid}>
          {/* Main Editor */}
          <div className={styles.editMainCol}>
            <div className={styles.editCard} style={{ padding: 'var(--space-6)' }}>
              <input 
                type="text" name="title" placeholder="Post title..." required 
                value={formData.title} onChange={handleChange} onBlur={generateSlug}
                style={{ width: '100%', fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-bold)', border: 'none', outline: 'none', color: 'var(--color-text-primary)', backgroundColor: 'transparent', lineHeight: 'var(--leading-tight)' }} 
              />
            </div>

            <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xs)', overflow: 'hidden' }}>
              <BlogEditor content={formData.content} onChange={handleEditorChange} placeholder="Write your article content here..." />
            </div>

            <div className={styles.editCard}>
              <div className={styles.editCardHeader}>
                <FileText size={14} color="var(--color-text-tertiary)" />
                <span className="label" style={{ margin: 0 }}>Excerpt</span>
              </div>
              <div className={styles.editCardBody}>
                <textarea 
                  name="excerpt" rows={3} value={formData.excerpt} onChange={handleChange} 
                  placeholder="A short summary shown on blog cards and in search results..." 
                  style={{ width: '100%', border: 'none', outline: 'none', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-primary)', backgroundColor: 'transparent', resize: 'none', fontFamily: 'inherit' }} 
                />
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className={styles.editSidebarCol}>
            <div className={styles.editCard}>
              <div className={styles.editCardHeader}>
                <Globe size={14} color="var(--color-text-tertiary)" />
                <span className="label" style={{ margin: 0 }}>Publish</span>
              </div>
              <div className={styles.editCardBody} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <ToggleRow name="published" checked={formData.published} onChange={handleChange} label="Published" description="Visible to the public" activeColor="#16a34a" />
                <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
                <ToggleRow name="featured" checked={formData.featured} onChange={handleChange} label="Featured" description="Highlighted on homepage" activeColor="#d97706" icon={<Star size={13} />} />
              </div>
            </div>

            <div className={styles.editCard}>
              <div className={styles.editCardHeader}>
                <Tag size={14} color="var(--color-text-tertiary)" />
                <span className="label" style={{ margin: 0 }}>Category</span>
              </div>
              <div className={styles.editCardBody}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                  {CATEGORIES.map(cat => (
                    <label key={cat} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-2) var(--space-3)', borderRadius: 'var(--radius-md)', cursor: 'pointer', backgroundColor: formData.category === cat ? 'var(--color-surface)' : 'transparent', transition: 'background-color var(--transition-fast)' }}>
                      <input type="radio" name="category" value={cat} checked={formData.category === cat} onChange={handleChange} style={{ accentColor: 'var(--color-primary)', width: '14px', height: '14px' }} />
                      <span style={{ fontSize: 'var(--text-sm)', fontWeight: formData.category === cat ? 'var(--font-medium)' : 'var(--font-normal)', color: formData.category === cat ? 'var(--color-text-primary)' : 'var(--color-text-secondary)' }}>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.editCard}>
              <div className={styles.editCardHeader}>
                <ImageIcon size={14} color="var(--color-text-tertiary)" />
                <span className="label" style={{ margin: 0 }}>Featured Image</span>
              </div>
              <div className={styles.editCardBody}>
                {formData.image && (
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: 'var(--space-3)', border: '1px solid var(--color-border)', backgroundColor: '#101828' }}>
                    <img src={formData.image} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-tertiary)', margin: '0 0 4px 0' }}>Image URL / Local Path</p>
                  <input 
                    type="text" 
                    name="image" 
                    value={formData.image} 
                    onChange={handleChange} 
                    placeholder="https://... or /uploads/..." 
                    style={{ width: '100%', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-2) var(--space-3)', fontSize: 'var(--text-xs)', color: 'var(--color-text-primary)', backgroundColor: 'transparent' }} 
                  />
                  <input 
                    type="text" 
                    name="imageSearchTerm" 
                    value={formData.imageSearchTerm} 
                    onChange={handleChange} 
                    placeholder="Refine AI prompt (optional)..." 
                    style={{ width: '100%', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-2) var(--space-3)', fontSize: 'var(--text-xs)', color: 'var(--color-text-primary)', backgroundColor: 'transparent', marginTop: '8px' }} 
                  />
                </div>
              </div>
            </div>

            <div className={styles.editCard}>
              <div className={styles.editCardHeader}>
                <Globe size={14} color="var(--color-text-tertiary)" />
                <span className="label" style={{ margin: 0 }}>URL Slug</span>
              </div>
              <div className={styles.editCardBody}>
                <div className={styles.slugInputWrap}>
                  <span className={styles.slugPrefix}>/blog/</span>
                  <input type="text" name="slug" value={formData.slug} onChange={handleChange} placeholder="post-slug" style={{ flex: 1, border: 'none', outline: 'none', padding: 'var(--space-2) var(--space-3)', fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)', backgroundColor: 'transparent', minWidth: 0 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
