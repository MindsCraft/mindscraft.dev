'use client'

import { useState, useEffect, use } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ArrowLeft, Save, Eye, CheckCircle, Star, Tag, FileText, Globe, Sparkle, Loader2, X } from 'lucide-react'
import styles from '@/styles/admin/pages/posts.module.css'
import Loading from '../../new/loading'

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
  name, checked, onChange, label, description, activeColor, icon, setFormData
}: {
  name: string; checked: boolean; onChange: any; label: string; description: string; activeColor: string; icon?: React.ReactNode; setFormData?: any
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

export default function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const id = resolvedParams.id

  const [formData, setFormData] = useState({
    id: 0, title: '', slug: '', content: '', excerpt: '', category: 'AI & SaaS', published: false, featured: false,
  })
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/posts?id=${id}`)
        if (!res.ok) throw new Error('Post not found')
        const data = await res.json()
        setFormData({ ...data, published: data.status === 'Published', featured: !!data.featured })
      } catch (err) {
        console.error(err)
        alert('Failed to load post')
        router.push('/admin/posts')
      } finally {
        setIsLoading(false)
      }
    }
    fetchPost()
  }, [id, router])

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
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!response.ok) throw new Error('Failed to update post')
        setSaveSuccess(true)
      setTimeout(() => setSaveSuccess(false), 3000)
      router.refresh()
    } catch (error) {
      console.error(error)
      alert('Failed to save changes')
    } finally {
      setIsSubmitting(false)
    }
  }

  // ── AI REFINEMENT LOGIC ──
  const [aiInstruction, setAiInstruction] = useState('')
  const [isAiRefining, setIsAiRefining] = useState(false)
  const [aiResponse, setAiResponse] = useState<string | null>(null)

  const handleAiRefine = async () => {
    if (!aiInstruction.trim()) return
    setIsAiRefining(true)
    setAiResponse(null)
    try {
      const res = await fetch('/api/admin/edit-post-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: formData.content,
          title: formData.title,
          instruction: aiInstruction
        })
      })
      const data = await res.json()
      if (data.success) {
        setFormData(prev => ({ ...prev, content: data.refinedContent }))
        setAiResponse(data.explanation || "Changes applied!")
        setAiInstruction('')
      } else {
        alert(data.error || 'Failed to refine content')
      }
    } catch (err) {
      console.error(err)
      alert('AI refinement failed')
    } finally {
      setIsAiRefining(false)
    }
  }

  if (isLoading) return <Loading />

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
          {formData.slug && (
            <Link href={`/blog/${formData.slug}`} target="_blank" className={styles.btnSecondary} style={{ padding: 'var(--space-2) var(--space-3)'}}>
              <Eye size={14} /> Preview
            </Link>
          )}
          <button type="button" onClick={handleSubmit} disabled={isSubmitting} className={styles.btnPrimary} style={{ backgroundColor: saveSuccess ? '#16a34a' : 'var(--color-primary)' }}>
            {saveSuccess ? <CheckCircle size={15} /> : <Save size={15} />}
            {isSubmitting ? 'Saving...' : saveSuccess ? 'Saved' : 'Save Changes'}
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.editGrid}>
          {/* Main Editor */}
          <div className={styles.editMainCol}>
            <div className={styles.editCard} style={{ padding: 'var(--space-6)' }}>
              <input type="text" name="title" placeholder="Post title..." required value={formData.title} onChange={handleChange} style={{ width: '100%', fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-bold)', border: 'none', outline: 'none', color: 'var(--color-text-primary)', backgroundColor: 'transparent', lineHeight: 'var(--leading-tight)' }} />
            </div>

            {/* AI COMMANDS DOCK */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
              <div style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-primary)', borderRadius: 'var(--radius-lg)', padding: '12px 16px', display: 'flex', gap: 'var(--space-3)', alignItems: 'center', boxShadow: '0 4px 20px rgba(16, 24, 40, 0.08)' }}>
                <div style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '6px', borderRadius: '8px', display: 'flex' }}><Sparkle size={16} /></div>
                <input 
                  type="text" 
                  value={aiInstruction} 
                  onChange={(e) => setAiInstruction(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAiRefine(); }}}
                  placeholder="AI conversation: 'Translate to French', 'Add a comparison chart', 'Fix my tone'..." 
                  style={{ flex: 1, border: 'none', background: 'transparent', outline: 'none', fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)' }} 
                />
                <button 
                  type="button" 
                  onClick={handleAiRefine}
                  disabled={isAiRefining || !aiInstruction.trim()}
                  className={styles.btnSecondary} 
                  style={{ padding: '6px 16px', fontSize: 'var(--text-xs)', borderColor: 'var(--color-primary)', color: 'var(--color-primary)', fontWeight: 600 }}
                >
                  {isAiRefining ? <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Loader2 size={12} className={styles.spin} /> Processing...</span> : 'Send Command'}
                </button>
              </div>

              {aiResponse && (
                <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '12px 16px', display: 'flex', gap: 'var(--space-3)', animation: 'slideIn 0.3s ease-out' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary)' }}>AI Assistant Reply</span>
                    </div>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', margin: 0, fontStyle: 'italic', lineHeight: 1.5 }}>
                      "{aiResponse}"
                    </p>
                  </div>
                  <button type="button" onClick={() => setAiResponse(null)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--color-text-tertiary)' }}><X size={14} /></button>
                </div>
              )}
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
                <textarea name="excerpt" rows={3} value={formData.excerpt} onChange={handleChange} placeholder="A short summary shown on blog cards and in search results..." style={{ width: '100%', border: 'none', outline: 'none', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-primary)', backgroundColor: 'transparent', resize: 'none', fontFamily: 'inherit' }} />
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
