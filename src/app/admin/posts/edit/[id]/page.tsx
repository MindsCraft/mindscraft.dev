'use client'

import { useState, useEffect, use } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ArrowLeft, Save, Eye, CheckCircle, Star, Tag, FileText, Globe } from 'lucide-react'
import Loading from '../../new/loading'

const BlogEditor = dynamic(
  () => import('@/components/admin/BlogEditor'),
  {
    ssr: false,
    loading: () => (
      <div style={{
        height: '400px', width: '100%', borderRadius: 'var(--radius-lg)',
        backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--color-text-tertiary)', fontSize: 'var(--text-sm)'
      }}>
        Loading editor...
      </div>
    )
  }
)

const CATEGORIES = ['AI & SaaS', 'Web Development', 'Performance', 'UX & CRO', 'Future']

export default function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const id = resolvedParams.id

  const [formData, setFormData] = useState({
    id: 0,
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    category: 'AI & SaaS',
    published: false,
    featured: false,
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
        setFormData({
          ...data,
          published: data.status === 'Published',
          featured: !!data.featured,
        })
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

  if (isLoading) return <Loading />

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-surface)' }}>
      {/* Top Bar */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 20,
        backgroundColor: 'var(--color-background)',
        borderBottom: '1px solid var(--color-border)',
        padding: '0 var(--space-6)',
        height: '56px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        boxShadow: 'var(--shadow-xs)',
      }}>
        <Link
          href="/admin/posts"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
            color: 'var(--color-text-secondary)', textDecoration: 'none',
            fontSize: 'var(--text-sm)', fontWeight: 'var(--font-medium)',
            transition: 'color var(--transition-fast)',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text-primary)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
        >
          <ArrowLeft size={15} />
          Posts
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          {/* Status badge */}
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '5px',
            padding: '3px 10px', borderRadius: 'var(--radius-full)',
            fontSize: 'var(--text-xs)', fontWeight: 'var(--font-semibold)',
            backgroundColor: formData.published ? '#dcfce7' : 'var(--color-surface)',
            color: formData.published ? '#16a34a' : 'var(--color-text-tertiary)',
            border: `1px solid ${formData.published ? '#bbf7d0' : 'var(--color-border)'}`,
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              backgroundColor: formData.published ? '#16a34a' : 'var(--color-text-disabled)',
            }} />
            {formData.published ? 'Published' : 'Draft'}
          </span>

          {formData.slug && (
            <Link
              href={`/blog/${formData.slug}`}
              target="_blank"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '5px',
                padding: 'var(--space-2) var(--space-3)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-background)',
                color: 'var(--color-text-secondary)',
                textDecoration: 'none', fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-medium)',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-border-hover)'; e.currentTarget.style.color = 'var(--color-text-primary)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text-secondary)' }}
            >
              <Eye size={14} />
              Preview
            </Link>
          )}

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: 'var(--space-2) var(--space-4)',
              borderRadius: 'var(--radius-md)',
              backgroundColor: saveSuccess ? '#16a34a' : 'var(--color-primary)',
              color: '#fff', border: 'none',
              fontWeight: 'var(--font-semibold)', fontSize: 'var(--text-sm)',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              opacity: isSubmitting ? 0.7 : 1,
              transition: 'background-color var(--transition-fast)',
            }}
          >
            {saveSuccess ? <CheckCircle size={15} /> : <Save size={15} />}
            {isSubmitting ? 'Saving...' : saveSuccess ? 'Saved' : 'Save Changes'}
          </button>
        </div>
      </div>

      {/* Page Body */}
      <form onSubmit={handleSubmit}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 280px',
          gap: 'var(--space-6)',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: 'var(--space-6)',
          alignItems: 'start',
        }}>

          {/* Left: Main Editor */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {/* Title */}
            <div style={{
              backgroundColor: 'var(--color-background)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-6)',
              boxShadow: 'var(--shadow-xs)',
            }}>
              <input
                type="text"
                name="title"
                placeholder="Post title..."
                required
                value={formData.title}
                onChange={handleChange}
                style={{
                  width: '100%',
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--font-bold)',
                  border: 'none', outline: 'none',
                  color: 'var(--color-text-primary)',
                  backgroundColor: 'transparent',
                  lineHeight: 'var(--leading-tight)',
                }}
              />
            </div>

            {/* Rich Text Editor */}
            <div
              data-editor-wrap
              style={{
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-xs)',
                overflow: 'hidden',
                transition: 'border-color 150ms ease, box-shadow 150ms ease',
              }}
            >
              <BlogEditor
                content={formData.content}
                onChange={handleEditorChange}
                placeholder="Write your article content here..."
              />
            </div>

            {/* Excerpt */}
            <div style={{
              backgroundColor: 'var(--color-background)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xs)',
            }}>
              <div style={{
                padding: 'var(--space-4) var(--space-5)',
                borderBottom: '1px solid var(--color-border)',
                display: 'flex', alignItems: 'center', gap: 'var(--space-2)',
              }}>
                <FileText size={14} color="var(--color-text-tertiary)" />
                <span className="label" style={{ margin: 0 }}>Excerpt</span>
              </div>
              <div style={{ padding: 'var(--space-4) var(--space-5)' }}>
                <textarea
                  name="excerpt"
                  rows={3}
                  value={formData.excerpt}
                  onChange={handleChange}
                  placeholder="A short summary shown on blog cards and in search results..."
                  style={{
                    width: '100%', border: 'none', outline: 'none',
                    fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)',
                    color: 'var(--color-text-primary)', backgroundColor: 'transparent',
                    resize: 'none', fontFamily: 'inherit',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right: Settings Panel */}
          <div style={{
            position: 'sticky', top: '72px',
            display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
          }}>

            {/* Publish */}
            <div style={{
              backgroundColor: 'var(--color-background)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xs)',
            }}>
              <div style={{
                padding: 'var(--space-4) var(--space-5)',
                borderBottom: '1px solid var(--color-border)',
                display: 'flex', alignItems: 'center', gap: 'var(--space-2)',
              }}>
                <Globe size={14} color="var(--color-text-tertiary)" />
                <span className="label" style={{ margin: 0 }}>Publish</span>
              </div>
              <div style={{ padding: 'var(--space-4) var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <ToggleRow
                  name="published"
                  checked={formData.published}
                  onChange={handleChange}
                  label="Published"
                  description="Visible to the public"
                  activeColor="#16a34a"
                />
                <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
                <ToggleRow
                  name="featured"
                  checked={formData.featured}
                  onChange={handleChange}
                  label="Featured"
                  description="Highlighted on homepage"
                  activeColor="#d97706"
                  icon={<Star size={13} />}
                />
              </div>
            </div>

            {/* Category */}
            <div style={{
              backgroundColor: 'var(--color-background)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xs)',
            }}>
              <div style={{
                padding: 'var(--space-4) var(--space-5)',
                borderBottom: '1px solid var(--color-border)',
                display: 'flex', alignItems: 'center', gap: 'var(--space-2)',
              }}>
                <Tag size={14} color="var(--color-text-tertiary)" />
                <span className="label" style={{ margin: 0 }}>Category</span>
              </div>
              <div style={{ padding: 'var(--space-4) var(--space-5)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                  {CATEGORIES.map(cat => (
                    <label
                      key={cat}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
                        padding: 'var(--space-2) var(--space-3)',
                        borderRadius: 'var(--radius-md)',
                        cursor: 'pointer',
                        backgroundColor: formData.category === cat ? 'var(--color-surface)' : 'transparent',
                        transition: 'background-color var(--transition-fast)',
                      }}
                      onMouseEnter={e => { if (formData.category !== cat) e.currentTarget.style.backgroundColor = 'var(--color-surface)' }}
                      onMouseLeave={e => { if (formData.category !== cat) e.currentTarget.style.backgroundColor = 'transparent' }}
                    >
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={formData.category === cat}
                        onChange={handleChange}
                        style={{ accentColor: 'var(--color-primary)', width: '14px', height: '14px' }}
                      />
                      <span style={{
                        fontSize: 'var(--text-sm)',
                        fontWeight: formData.category === cat ? 'var(--font-medium)' : 'var(--font-normal)',
                        color: formData.category === cat ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                      }}>
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* URL Slug */}
            <div style={{
              backgroundColor: 'var(--color-background)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xs)',
            }}>
              <div style={{
                padding: 'var(--space-4) var(--space-5)',
                borderBottom: '1px solid var(--color-border)',
                display: 'flex', alignItems: 'center', gap: 'var(--space-2)',
              }}>
                <Globe size={14} color="var(--color-text-tertiary)" />
                <span className="label" style={{ margin: 0 }}>URL Slug</span>
              </div>
              <div style={{ padding: 'var(--space-4) var(--space-5)' }}>
                <div style={{
                  display: 'flex', alignItems: 'center',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-background)',
                  transition: 'border-color var(--transition-fast)',
                }}
                  onFocusCapture={e => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
                  onBlurCapture={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                >
                  <span style={{
                    padding: 'var(--space-2) var(--space-3)',
                    backgroundColor: 'var(--color-surface)',
                    borderRight: '1px solid var(--color-border)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-text-tertiary)',
                    whiteSpace: 'nowrap',
                  }}>
                    /blog/
                  </span>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    placeholder="post-slug"
                    style={{
                      flex: 1, border: 'none', outline: 'none',
                      padding: 'var(--space-2) var(--space-3)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-text-primary)',
                      backgroundColor: 'transparent',
                      minWidth: 0,
                    }}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </form>
    </div>
  )
}

function ToggleRow({
  name, checked, onChange, label, description, activeColor, icon
}: {
  name: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  description: string
  activeColor: string
  icon?: React.ReactNode
}) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', gap: 'var(--space-3)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
        {icon && <span style={{ color: checked ? activeColor : 'var(--color-text-disabled)' }}>{icon}</span>}
        <div>
          <div style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-medium)', color: 'var(--color-text-primary)' }}>{label}</div>
          <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-tertiary)' }}>{description}</div>
        </div>
      </div>
      {/* Toggle switch */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
        />
        <div
          onClick={() => onChange({ target: { name, type: 'checkbox', checked: !checked } } as any)}
          style={{
            width: '36px', height: '20px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: checked ? activeColor : 'var(--color-border)',
            transition: 'background-color var(--transition-fast)',
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          <div style={{
            position: 'absolute',
            top: '2px',
            left: checked ? '18px' : '2px',
            width: '16px', height: '16px',
            borderRadius: '50%',
            backgroundColor: '#fff',
            boxShadow: 'var(--shadow-xs)',
            transition: 'left var(--transition-fast)',
          }} />
        </div>
      </div>
    </label>
  )
}
