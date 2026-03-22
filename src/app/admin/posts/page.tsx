'use client'

import { useState, useEffect, useRef } from 'react'
import { Plus, Pencil, Trash, Eye, Sparkle, Loader2, Search, X, FileText, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import styles from '@/styles/admin/pages/posts.module.css'

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

type ToastType = 'success' | 'error'
interface Toast { id: number; message: string; type: ToastType }

function ToastContainer({ toasts, onRemove }: { toasts: Toast[]; onRemove: (id: number) => void }) {
  return (
    <div className={styles.toastContainer}>
      {toasts.map(t => (
        <div key={t.id} className={`${styles.toast} ${t.type === 'success' ? styles.toastSuccess : styles.toastError}`}>
          {t.type === 'success'
            ? <CheckCircle size={15} className={styles.primaryIcon} />
            : <AlertCircle size={15} color="var(--color-error)" />}
          <span style={{ flex: 1 }}>{t.message}</span>
          <button type="button" onClick={() => onRemove(t.id)} className={styles.iconBtn} style={{ border: 'none', background: 'none' }}>
            <X size={13} />
          </button>
        </div>
      ))}
    </div>
  )
}

function DeleteConfirm({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) {
  return (
    <div className={styles.deleteConfirmWrap}>
      <span className={styles.deleteConfirmLabel}>Delete?</span>
      <button 
        type="button" 
        onClick={onConfirm} 
        className={styles.btnPrimary} 
        style={{ padding: '4px 10px', backgroundColor: 'var(--color-error)' }}
      >
        Yes
      </button>
      <button 
        type="button" 
        onClick={onCancel} 
        className={styles.btnSecondary} 
        style={{ padding: '4px 10px' }}
      >
        No
      </button>
    </div>
  )
}

const STATUS_CONFIG: Record<string, { color: string; bg: string; border: string; dot: string }> = {
  Published: { color: '#15803d', bg: '#f0fdf4', border: '#bbf7d0', dot: '#16a34a' },
  Draft:     { color: '#525252', bg: '#fafafa', border: '#e5e5e5', dot: '#a3a3a3' },
  Scheduled: { color: '#92400e', bg: '#fffbeb', border: '#fde68a', dot: '#d97706' },
}

function StatusBadge({ status }: { status: string }) {
  const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.Draft
  return (
    <span className={styles.badge} style={{ color: config.color, backgroundColor: config.bg, border: `1px solid ${config.border}` }}>
      <span className={styles.badgeDot} style={{ backgroundColor: config.dot }} />
      {status}
    </span>
  )
}

function IconBtn({ onClick, danger, title, children }: {
  onClick?: () => void; danger?: boolean; title: string; children: React.ReactNode
}) {
  return (
    <button type="button" onClick={onClick} title={title} className={`${styles.iconBtn} ${danger ? styles.iconBtnDanger : ''}`}>
      {children}
    </button>
  )
}

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
    <div className="admin-container">
      <div className={`admin-page-header ${styles.headerFlex}`}>
        <div>
          <h1 className="admin-page-title">Blog Posts</h1>
          <p className="admin-page-desc">
            {posts.length} {posts.length === 1 ? 'post' : 'posts'} total
          </p>
        </div>

        <div className={styles.actionsWrap}>
          <button type="button" onClick={handleGenerateAI} disabled={isGenerating} className={styles.btnSecondary}>
            {isGenerating ? <Loader2 size={15} className={styles.spin} /> : <Sparkle size={15} />}
            {isGenerating ? 'Generating...' : 'AI Writer'}
          </button>
          <Link href="/admin/posts/new" className={styles.btnPrimary}>
            <Plus size={15} strokeWidth={2.5} />
            New Post
          </Link>
        </div>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.tabsContainer}>
          {(['All', 'Published', 'Draft'] as const).map(s => (
            <button
              key={s} type="button"
              onClick={() => setStatusFilter(s)}
              className={`${styles.tabBtn} ${statusFilter === s ? styles.tabBtnActive : ''}`}
            >
              {s} <span className={styles.tabCount}>({counts[s]})</span>
            </button>
          ))}
        </div>

        <div className={styles.searchWrap}>
          <Search size={13} color="var(--color-text-tertiary)" />
          <input
            type="text" value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search blog posts..."
            className={styles.searchInput}
          />
          {search && (
            <button type="button" onClick={() => setSearch('')} className={styles.iconBtn} style={{ border: 'none', background: 'none' }}>
              <X size={13} />
            </button>
          )}
        </div>
      </div>

      <div className={styles.tableWrap}>
        {isLoading ? (
          <div className={styles.loadingContainer}>
            <Loader2 size={18} className={styles.spin} />
            Loading blog posts...
          </div>
        ) : filtered.length === 0 ? (
          <div className={styles.emptyStateContainer}>
            <FileText size={32} strokeWidth={1.5} />
            <div>
              <p className={styles.emptyStateTitle}>
                {search || statusFilter !== 'All' ? 'No posts match your filters' : 'No posts yet'}
              </p>
              <p className={styles.emptyStateDesc}>
                {search || statusFilter !== 'All' ? 'Try adjusting your search or filter' : 'Create your first post to get started'}
              </p>
            </div>
          </div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Title</th>
                <th className={styles.th}>Status</th>
                <th className={styles.th}>Category</th>
                <th className={styles.th}>Author</th>
                <th className={styles.th}>Date</th>
                <th className={`${styles.th} ${styles.thRight}`}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((post) => (
                <tr key={post.id} className={styles.tr}>
                  <td className={styles.td}>
                    <div className={styles.postTitleWrap}>
                      <Link href={`/admin/posts/edit/${post.id}`} className={styles.postTitleLink}>
                        <p className={styles.postTitleText}>{post.title}</p>
                        {post.readTime && <p className={styles.postSubText}>{post.readTime}</p>}
                      </Link>
                    </div>
                  </td>
                  <td className={styles.td}><StatusBadge status={post.status} /></td>
                  <td className={styles.td}><span className={styles.categoryPill}>{post.category || '—'}</span></td>
                  <td className={`${styles.td} ${styles.cellTextSecondary}`}>{post.author?.name || '—'}</td>
                  <td className={`${styles.td} ${styles.cellTextTertiary}`}>{post.date}</td>
                  <td className={styles.td}>
                    <div className={styles.actionsCell}>
                      {confirmDeleteId === post.id ? (
                        <DeleteConfirm onConfirm={() => handleDelete(post.id)} onCancel={() => setConfirmDeleteId(null)} />
                      ) : (
                        <>
                          {post.slug && <Link href={`/blog/${post.slug}`} target="_blank"><IconBtn title="View"><Eye size={13} /></IconBtn></Link>}
                          <Link href={`/admin/posts/edit/${post.id}`}><IconBtn title="Edit"><Pencil size={13} /></IconBtn></Link>
                          <IconBtn danger title="Delete" onClick={() => setConfirmDeleteId(post.id)}><Trash size={13} /></IconBtn>
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
    </div>
  )
}
