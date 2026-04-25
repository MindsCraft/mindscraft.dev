'use client'

import { useState, useEffect, useRef } from 'react'
import { Plus, Pencil, Trash, Eye, Sparkle, Loader2, Search, X, FileText, CheckCircle, AlertCircle, Link as LinkIcon } from 'lucide-react'
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

interface Topic {
  title: string
  link: string
  snippet: string
  source: string
  date: string
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

// -------------------------------------------------------------
// The AI Content Engine Modal
// -------------------------------------------------------------
function AiEngineModal({ 
  onClose, 
  onSuccess, 
  addToast 
}: { 
  onClose: () => void; 
  onSuccess: () => void;
  addToast: (msg: string, type?: ToastType) => void;
}) {
  const [topics, setTopics] = useState<Topic[]>([])
  const [loadingTopics, setLoadingTopics] = useState(true)
  const [generatingId, setGeneratingId] = useState<string | null>(null)
  
  // Custom URL rewrite state
  const [customUrl, setCustomUrl] = useState('')

  useEffect(() => {
    fetch('/api/admin/trending-topics')
      .then(res => res.json())
      .then(data => {
        if (data.topics) setTopics(data.topics)
      })
      .catch(() => addToast('Failed to load trending topics', 'error'))
      .finally(() => setLoadingTopics(false))
  }, [])

  const handleGenerate = async (payload: any, uiId: string) => {
    setGeneratingId(uiId)
    try {
      const res = await fetch('/api/admin/generate-post', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (data.success) {
        addToast('Draft created successfully!')
        onSuccess()
      } else {
        addToast(data.error || 'Generation failed', 'error')
      }
    } catch {
      addToast('AI generation failed', 'error')
    } finally {
      setGeneratingId(null)
    }
  }

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)', padding: 'var(--space-4)' }}>
      <div style={{ backgroundColor: 'var(--color-background)', width: '100%', maxWidth: '800px', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)', overflow: 'hidden', display: 'flex', flexDirection: 'column', maxHeight: '90vh' }}>
        
        {/* Modal Header */}
        <div style={{ padding: 'var(--space-5)', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--color-surface)' }}>
          <div>
            <h2 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--color-text-primary)', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkle size={18} color="var(--color-primary)" /> AI Content Engine
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', margin: '4px 0 0 0' }}>Review global trends or rewrite a specific article into a premium draft.</p>
          </div>
          <button type="button" onClick={onClose} className={styles.iconBtn} style={{ border: 'none' }}><X size={20} /></button>
        </div>

        {/* Modal Body */}
        <div style={{ overflowY: 'auto', padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          
          {/* Clone & Own Section */}
          <div>
            <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 'var(--space-3)' }}>Clone & Own</h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)' }}>Paste a link to any technical article. The AI will completely rewrite it in the MindsCraft agency voice, preventing plagiarism.</p>
            <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '0 12px', backgroundColor: 'var(--color-surface)' }}>
                <LinkIcon size={16} color="var(--color-text-tertiary)" />
                <input 
                  type="url" 
                  value={customUrl} 
                  onChange={(e) => setCustomUrl(e.target.value)} 
                  placeholder="https://example.com/interesting-article" 
                  style={{ width: '100%', border: 'none', background: 'transparent', padding: '10px', fontSize: 'var(--text-sm)', outline: 'none' }} 
                />
              </div>
              <button 
                type="button" 
                onClick={() => handleGenerate({ topicUrl: customUrl, isRewrite: true }, 'custom-url')}
                disabled={!customUrl || generatingId !== null} 
                className={styles.btnPrimary}
              >
                {generatingId === 'custom-url' ? <Loader2 size={16} className={styles.spin} /> : <Sparkle size={16} />}
                Rewrite Link
              </button>
            </div>
          </div>

          <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />

          {/* Trending Topics Section */}
          <div>
            <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 'var(--space-3)' }}>Today's Trending Topics</h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)' }}>Scraped live from trusted development and AI feeds. Pick a topic to generate a comprehensive draft.</p>
            
            {loadingTopics ? (
              <div style={{ padding: 'var(--space-8)', textAlign: 'center', color: 'var(--color-text-tertiary)' }}>
                <Loader2 size={24} className={styles.spin} style={{ margin: '0 auto var(--space-4)' }} />
                Fetching latest engineering news...
              </div>
            ) : topics.length === 0 ? (
              <div style={{ padding: 'var(--space-6)', textAlign: 'center', color: 'var(--color-text-tertiary)', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-md)' }}>
                No topics found at the moment.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {topics.map((topic, i) => (
                  <div key={i} style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-4)', display: 'flex', gap: 'var(--space-4)', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--color-background)' }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--color-primary)', backgroundColor: 'rgba(16, 24, 40, 0.05)', padding: '2px 8px', borderRadius: '12px' }}>{topic.source}</span>
                        <a href={topic.link} target="_blank" style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text-primary)', textDecoration: 'none', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{topic.title}</a>
                      </div>
                      <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{topic.snippet}</p>
                    </div>
                    <button 
                      type="button" 
                      onClick={() => handleGenerate({ topicTitle: topic.title, topicSnippet: topic.snippet }, `topic-${i}`)}
                      disabled={generatingId !== null}
                      className={styles.btnSecondary} 
                      style={{ flexShrink: 0, padding: '6px 12px', fontSize: 'var(--text-xs)' }}
                    >
                      {generatingId === `topic-${i}` ? <Loader2 size={14} className={styles.spin} /> : <Plus size={14} />}
                      {generatingId === `topic-${i}` ? 'Drafting...' : 'Draft Post'}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('All')
  const [categoryFilter, setCategoryFilter] = useState<string>('All')
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null)
  const [toasts, setToasts] = useState<Toast[]>([])
  const toastId = useRef(0)

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  
  // AI Engine State
  const [showAiEngine, setShowAiEngine] = useState(false)

  const addToast = (message: string, type: ToastType = 'success') => {
    const id = ++toastId.current
    setToasts(prev => [...prev, { id, message, type }])
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000)
  }

  useEffect(() => { 
    fetchPosts() 
  }, [])

  // Reset to page 1 on filter/search change
  useEffect(() => {
    setCurrentPage(1)
  }, [search, statusFilter, categoryFilter])

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

  const handleTogglePublish = async (post: Post) => {
    try {
      const isPublishing = post.status !== 'Published'
      const res = await fetch(`/api/posts`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: post.id, published: isPublishing })
      })
      if (res.ok) {
        setPosts(prev => prev.map(p => p.id === post.id ? { ...p, status: isPublishing ? 'Published' : 'Draft' } : p))
        addToast(isPublishing ? 'Post published' : 'Post moved to draft')
      } else {
        addToast('Failed to change status', 'error')
      }
    } catch {
      addToast('Failed to change status', 'error')
    }
  }

  const filtered = posts.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.author?.name?.toLowerCase().includes(search.toLowerCase()) ||
      p.category?.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === 'All' || p.status === statusFilter
    const matchCategory = categoryFilter === 'All' || p.category === categoryFilter
    return matchSearch && matchStatus && matchCategory
  })

  // Derive unique categories from available posts
  const availableCategories = ['All', ...Array.from(new Set(posts.map(p => p.category).filter(Boolean)))] as string[]


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
          <button type="button" onClick={() => setShowAiEngine(true)} className={styles.btnSecondary} style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}>
            <Sparkle size={15} />
            AI Content Engine
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

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <select 
            value={categoryFilter}
            onChange={e => setCategoryFilter(e.target.value)}
            className={styles.filterSelect}
          >
            {availableCategories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>

          <div className={styles.searchWrap} style={{ margin: 0, height: '34px' }}>
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
                <th className={styles.th} style={{ width: '80px' }}>Preview</th>
                <th className={styles.th}>Title</th>
                <th className={styles.th}>Status</th>
                <th className={styles.th}>Category</th>
                <th className={styles.th}>Author</th>
                <th className={styles.th}>Date</th>
                <th className={`${styles.th} ${styles.thRight}`}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((post: any) => (
                <tr key={post.id} className={styles.tr}>
                  <td className={styles.td}>
                    {post.image ? (
                      <div style={{ width: '60px', height: '40px', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--color-border)', backgroundColor: '#101828' }}>
                         <img src={post.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    ) : (
                      <div style={{ width: '60px', height: '40px', borderRadius: '4px', backgroundColor: '#f0f0f0', border: '1px border dashed #ccc' }} />
                    )}
                  </td>
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
                          <IconBtn 
                            title={post.status === 'Published' ? "Move to Draft" : "Publish"} 
                            onClick={() => handleTogglePublish(post)}
                          >
                            {post.status === 'Published' ? <X size={13} /> : <CheckCircle size={13} />}
                          </IconBtn>
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

        {/* ── Pagination ── */}
        {!isLoading && filtered.length > 0 && (
          <div className={styles.pagination}>
            <div className={styles.paginationLeft}>
              <div className={styles.pageInfo}>
                Showing <strong>{(currentPage - 1) * itemsPerPage + 1}</strong> to <strong>{Math.min(currentPage * itemsPerPage, filtered.length)}</strong> of <strong>{filtered.length}</strong> posts
              </div>
              
              <div className={styles.pageSizeSelector}>
                <span className={styles.pageInfo}>Show</span>
                <select 
                  value={itemsPerPage} 
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value))
                    setCurrentPage(1)
                  }}
                  className={styles.pageSizeSelect}
                >
                  {[10, 25, 50, 100].map(val => (
                    <option key={val} value={val}>{val}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.paginationActions}>
              <button 
                type="button"
                className={styles.pageBtn}
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(1)}
                title="First Page"
              >
                «
              </button>
              <button 
                type="button"
                className={styles.pageBtn}
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
              >
                Prev
              </button>
              
              <div className={styles.pageNumbers}>
                {Array.from({ length: Math.ceil(filtered.length / itemsPerPage) }, (_, i) => i + 1)
                  .filter(p => p === 1 || p === Math.ceil(filtered.length / itemsPerPage) || Math.abs(p - currentPage) <= 1)
                  .map((p, i, arr) => {
                    const elements = [];
                    if (i > 0 && p - arr[i-1] > 1) {
                      elements.push(<span key={`sep-${p}`} className={styles.pageEllipsis}>...</span>);
                    }
                    elements.push(
                      <button
                        key={p}
                        type="button"
                        onClick={() => setCurrentPage(p)}
                        className={`${styles.pageNumberBtn} ${currentPage === p ? styles.pageNumberBtnActive : ''}`}
                      >
                        {p}
                      </button>
                    );
                    return elements;
                  })}
              </div>

              <button 
                type="button"
                className={styles.pageBtn}
                disabled={currentPage === Math.ceil(filtered.length / itemsPerPage)}
                onClick={() => setCurrentPage(prev => prev + 1)}
              >
                Next
              </button>
              <button 
                type="button"
                className={styles.pageBtn}
                disabled={currentPage === Math.ceil(filtered.length / itemsPerPage)}
                onClick={() => setCurrentPage(Math.ceil(filtered.length / itemsPerPage))}
                title="Last Page"
              >
                »
              </button>
            </div>
          </div>
        )}
      </div>

      {showAiEngine && (
        <AiEngineModal 
          onClose={() => setShowAiEngine(false)} 
          onSuccess={() => {
            setShowAiEngine(false)
            fetchPosts()
          }} 
          addToast={addToast} 
        />
      )}

      <ToastContainer toasts={toasts} onRemove={id => setToasts(prev => prev.filter(t => t.id !== id))} />
    </div>
  )
}
