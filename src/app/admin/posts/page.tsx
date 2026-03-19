'use client'

import { useState, useEffect, useRef } from 'react'
import { Plus, Pencil, Trash, Eye, Sparkle, Loader2, Search, X, FileText, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'

interface Post {
  id: number
  title: string
  slug: string
  status: string
  category: string
  author: { name: string }
  date: string
  views: string
  readTime: string
  featured?: boolean
}

// ── Toast ─────────────────────────────────────────────────────────────────────
type ToastType = 'success' | 'error'
interface Toast { id: number; message: string; type: ToastType }

function ToastContainer({ toasts, onRemove }: { toasts: Toast[]; onRemove: (id: number) => void }) {
  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999, display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {toasts.map(t => (
        <div key={t.id} style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          padding: '12px 16px', borderRadius: 'var(--radius-lg)',
          backgroundColor: 'var(--color-background)',
          border: `1px solid ${t.type === 'success' ? '#bbf7d0' : '#fecaca'}`,
          boxShadow: 'var(--shadow-lg)',
          fontSize: 'var(--text-sm)', fontWeight: 'var(--font-medium)',
          color: 'var(--color-text-primary)',
          animation: 'slideUp 200ms ease',
          minWidth: '260px',
        }}>
          {t.type === 'success'
            ? <CheckCircle size={15} color="#16a34a" style={{ flexShrink: 0 }} />
            : <AlertCircle size={15} color="#dc2626" style={{ flexShrink: 0 }} />}
          <span style={{ flex: 1 }}>{t.message}</span>
          <button type="button" onClick={() => onRemove(t.id)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-tertiary)', display: 'flex', padding: 0 }}>
            <X size={13} />
          </button>
        </div>
      ))}
      <style>{`@keyframes slideUp { from { opacity:0; transform:translateY(8px) } to { opacity:1; transform:translateY(0) } }`}</style>
    </div>
  )
}

// ── Delete confirm inline ─────────────────────────────────────────────────────
function DeleteConfirm({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>Delete?</span>
      <button type="button" onClick={onConfirm} style={{
        padding: '4px 10px', borderRadius: 'var(--radius-md)', border: 'none',
        backgroundColor: '#dc2626', color: '#fff',
        fontSize: 'var(--text-xs)', fontWeight: 'var(--font-semibold)', cursor: 'pointer',
      }}>Yes</button>
      <button type="button" onClick={onCancel} style={{
        padding: '4px 10px', borderRadius: 'var(--radius-md)',
        border: '1px solid var(--color-border)', backgroundColor: 'transparent',
        fontSize: 'var(--text-xs)', fontWeight: 'var(--font-medium)', cursor: 'pointer',
        color: 'var(--color-text-secondary)',
      }}>No</button>
    </div>
  )
}

// ── Status badge ──────────────────────────────────────────────────────────────
const STATUS_STYLES: Record<string, { color: string; bg: string; border: string; dot: string }> = {
  Published: { color: '#15803d', bg: '#f0fdf4', border: '#bbf7d0', dot: '#16a34a' },
  Draft:     { color: '#525252', bg: '#fafafa', border: '#e5e5e5', dot: '#a3a3a3' },
  Scheduled: { color: '#92400e', bg: '#fffbeb', border: '#fde68a', dot: '#d97706' },
}

function StatusBadge({ status }: { status: string }) {
  const s = STATUS_STYLES[status] ?? STATUS_STYLES.Draft
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '5px',
      padding: '3px 9px', borderRadius: 'var(--radius-full)',
      fontSize: 'var(--text-xs)', fontWeight: 'var(--font-semibold)',
      color: s.color, backgroundColor: s.bg, border: `1px solid ${s.border}`,
    }}>
      <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: s.dot, flexShrink: 0 }} />
      {status}
    </span>
  )
}

// ── Icon button ───────────────────────────────────────────────────────────────
function IconBtn({ onClick, danger, title, children }: {
  onClick?: () => void; danger?: boolean; title: string; children: React.ReactNode
}) {
  return (
    <button type="button" onClick={onClick} title={title} style={{
      width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center',
      borderRadius: 'var(--radius-md)', cursor: 'pointer', flexShrink: 0,
      border: `1px solid ${danger ? '#fecaca' : 'var(--color-border)'}`,
      backgroundColor: 'var(--color-background)',
      color: danger ? '#dc2626' : 'var(--color-text-secondary)',
      transition: 'all var(--transition-fast)',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.backgroundColor = danger ? '#fef2f2' : 'var(--color-surface)'
        e.currentTarget.style.color = danger ? '#dc2626' : 'var(--color-text-primary)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.backgroundColor = 'var(--color-background)'
        e.currentTarget.style.color = danger ? '#dc2626' : 'var(--color-text-secondary)'
      }}
    >
      {children}
    </button>
  )
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isGenerating, setIsGenerating] = useState(false)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('All')
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null)
  const [toasts, setToasts] = useState<Toast[]>([])
  const toastId = useRef(0)

  const addToast = (message: string, type: ToastType = 'success') => {
    const id = ++toastId.current
    setToasts(prev => [...prev, { id, message, type }])
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000)
  }

  useEffect(() => { fetchPosts() }, [])

  const fetchPosts = async () => {
    setIsLoading(true)
    try {
      const res = await fetch('/api/posts')
      const data = await res.json()
      setPosts(data)
    } catch {
      addToast('Failed to load posts', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`/api/posts?id=${id}`, { method: 'DELETE' })
      if (res.ok) {
        setPosts(prev => prev.filter(p => p.id !== id))
        addToast('Post deleted')
      } else {
        addToast('Failed to delete post', 'error')
      }
    } catch {
      addToast('Failed to delete post', 'error')
    } finally {
      setConfirmDeleteId(null)
    }
  }

  const handleGenerateAI = async () => {
    setIsGenerating(true)
    try {
      const res = await fetch('/api/admin/generate-post', { method: 'POST' })
      const data = await res.json()
      if (data.success) {
        addToast('AI post generated successfully')
        fetchPosts()
      } else {
        addToast(data.error || 'Generation failed', 'error')
      }
    } catch {
      addToast('AI generation failed', 'error')
    } finally {
      setIsGenerating(false)
    }
  }

  // Filter
  const filtered = posts.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.author?.name?.toLowerCase().includes(search.toLowerCase()) ||
      p.category?.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === 'All' || p.status === statusFilter
    return matchSearch && matchStatus
  })

  const counts = {
    All: posts.length,
    Published: posts.filter(p => p.status === 'Published').length,
    Draft: posts.filter(p => p.status === 'Draft').length,
  }

  return (
    <div style={{ padding: 'var(--space-8)', maxWidth: '1200px', margin: '0 auto' }}>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-6)' }}>
        <div>
          <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-semibold)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-1)' }}>
            Posts
          </h1>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
            {posts.length} {posts.length === 1 ? 'article' : 'articles'} total
          </p>
        </div>

        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <button
            type="button"
            onClick={handleGenerateAI}
            disabled={isGenerating}
            style={{
              display: 'flex', alignItems: 'center', gap: '7px',
              padding: 'var(--space-2) var(--space-4)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-background)',
              color: 'var(--color-text-primary)',
              fontSize: 'var(--text-sm)', fontWeight: 'var(--font-semibold)',
              cursor: isGenerating ? 'not-allowed' : 'pointer',
              opacity: isGenerating ? 0.6 : 1,
              transition: 'all var(--transition-fast)',
            }}
            onMouseEnter={e => { if (!isGenerating) e.currentTarget.style.backgroundColor = 'var(--color-surface)' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--color-background)' }}
          >
            {isGenerating
              ? <Loader2 size={15} style={{ animation: 'spin 1s linear infinite' }} />
              : <Sparkle size={15} />}
            {isGenerating ? 'Generating...' : 'Generate with AI'}
          </button>

          <Link href="/admin/posts/new" style={{
            display: 'flex', alignItems: 'center', gap: '7px',
            padding: 'var(--space-2) var(--space-4)',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--color-text-primary)',
            color: 'var(--color-background)',
            fontSize: 'var(--text-sm)', fontWeight: 'var(--font-semibold)',
            textDecoration: 'none', transition: 'opacity var(--transition-fast)',
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            <Plus size={15} strokeWidth={2.5} />
            New Post
          </Link>
        </div>
      </div>

      {/* Toolbar: tabs + search */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: 'var(--space-4)', gap: 'var(--space-4)', flexWrap: 'wrap',
      }}>
        {/* Status tabs */}
        <div style={{ display: 'flex', gap: '2px', backgroundColor: 'var(--color-surface)', padding: '3px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
          {(['All', 'Published', 'Draft'] as const).map(s => (
            <button
              key={s} type="button"
              onClick={() => setStatusFilter(s)}
              style={{
                padding: '5px 12px', borderRadius: 'var(--radius-sm)', border: 'none',
                fontSize: 'var(--text-xs)', fontWeight: 'var(--font-semibold)',
                cursor: 'pointer', transition: 'all var(--transition-fast)',
                backgroundColor: statusFilter === s ? 'var(--color-background)' : 'transparent',
                color: statusFilter === s ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)',
                boxShadow: statusFilter === s ? 'var(--shadow-sm)' : 'none',
              }}
            >
              {s} <span style={{ opacity: 0.6 }}>({counts[s]})</span>
            </button>
          ))}
        </div>

        {/* Search */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)',
          padding: '6px 12px', backgroundColor: 'var(--color-background)',
          transition: 'border-color var(--transition-fast)',
          minWidth: '220px',
        }}
          onFocusCapture={e => (e.currentTarget.style.borderColor = 'var(--color-text-primary)')}
          onBlurCapture={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
        >
          <Search size={13} color="var(--color-text-tertiary)" style={{ flexShrink: 0 }} />
          <input
            type="text" value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search posts..."
            style={{
              border: 'none', outline: 'none', flex: 1,
              fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)',
              backgroundColor: 'transparent',
            }}
          />
          {search && (
            <button type="button" onClick={() => setSearch('')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', color: 'var(--color-text-tertiary)', padding: 0 }}>
              <X size={13} />
            </button>
          )}
        </div>
      </div>

      {/* Table */}
      <div style={{
        backgroundColor: 'var(--color-background)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
      }}>
        {isLoading ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', height: '200px', color: 'var(--color-text-tertiary)', fontSize: 'var(--text-sm)' }}>
            <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
            Loading posts...
          </div>
        ) : filtered.length === 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: 'var(--space-16)', color: 'var(--color-text-tertiary)' }}>
            <FileText size={32} strokeWidth={1.5} />
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-semibold)', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>
                {search || statusFilter !== 'All' ? 'No posts match your filters' : 'No posts yet'}
              </p>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-tertiary)' }}>
                {search || statusFilter !== 'All' ? 'Try adjusting your search or filter' : 'Create your first post to get started'}
              </p>
            </div>
            {!search && statusFilter === 'All' && (
              <Link href="/admin/posts/new" style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: 'var(--space-2) var(--space-4)',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-text-primary)', color: 'var(--color-background)',
                fontSize: 'var(--text-sm)', fontWeight: 'var(--font-semibold)', textDecoration: 'none',
              }}>
                <Plus size={14} /> New Post
              </Link>
            )}
          </div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
                {['Title', 'Status', 'Category', 'Author', 'Date', ''].map((h, i) => (
                  <th key={i} style={{
                    padding: 'var(--space-3) var(--space-4)',
                    textAlign: i === 5 ? 'right' : 'left',
                    fontSize: 'var(--text-xs)', fontWeight: 'var(--font-semibold)',
                    color: 'var(--color-text-tertiary)',
                  }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((post, idx) => (
                <tr
                  key={post.id}
                  style={{
                    borderBottom: idx < filtered.length - 1 ? '1px solid var(--color-border)' : 'none',
                    transition: 'background-color var(--transition-fast)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-surface)')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  {/* Title — clickable */}
                  <td style={{ padding: 'var(--space-3) var(--space-4)', maxWidth: '320px' }}>
                    <Link href={`/admin/posts/edit/${post.id}`} style={{ textDecoration: 'none' }}>
                      <p style={{
                        fontSize: 'var(--text-sm)', fontWeight: 'var(--font-semibold)',
                        color: 'var(--color-text-primary)', margin: 0,
                        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                        transition: 'color var(--transition-fast)',
                      }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-primary)')}
                      >
                        {post.title}
                      </p>
                      {post.readTime && (
                        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-tertiary)', margin: '2px 0 0' }}>
                          {post.readTime}
                        </p>
                      )}
                    </Link>
                  </td>

                  <td style={{ padding: 'var(--space-3) var(--space-4)', whiteSpace: 'nowrap' }}>
                    <StatusBadge status={post.status} />
                  </td>

                  <td style={{ padding: 'var(--space-3) var(--space-4)', whiteSpace: 'nowrap' }}>
                    <span style={{
                      fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)',
                      backgroundColor: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      padding: '2px 8px', borderRadius: 'var(--radius-full)',
                    }}>
                      {post.category || '—'}
                    </span>
                  </td>

                  <td style={{ padding: 'var(--space-3) var(--space-4)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>
                    {post.author?.name || '—'}
                  </td>

                  <td style={{ padding: 'var(--space-3) var(--space-4)', fontSize: 'var(--text-xs)', color: 'var(--color-text-tertiary)', whiteSpace: 'nowrap' }}>
                    {post.date}
                  </td>

                  {/* Actions */}
                  <td style={{ padding: 'var(--space-3) var(--space-4)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'flex-end' }}>
                      {confirmDeleteId === post.id ? (
                        <DeleteConfirm
                          onConfirm={() => handleDelete(post.id)}
                          onCancel={() => setConfirmDeleteId(null)}
                        />
                      ) : (
                        <>
                          {post.slug && (
                            <Link href={`/blog/${post.slug}`} target="_blank" style={{ display: 'flex' }}>
                              <IconBtn title="View live post"><Eye size={13} /></IconBtn>
                            </Link>
                          )}
                          <Link href={`/admin/posts/edit/${post.id}`} style={{ display: 'flex' }}>
                            <IconBtn title="Edit post"><Pencil size={13} /></IconBtn>
                          </Link>
                          <IconBtn danger title="Delete post" onClick={() => setConfirmDeleteId(post.id)}>
                            <Trash size={13} />
                          </IconBtn>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <ToastContainer toasts={toasts} onRemove={id => setToasts(prev => prev.filter(t => t.id !== id))} />
      <style>{`@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }`}</style>
    </div>
  )
}
