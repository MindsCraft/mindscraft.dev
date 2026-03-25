'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import Placeholder from '@tiptap/extension-placeholder'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { common, createLowlight } from 'lowlight'
import {
  TextBolder, TextItalic, TextUnderline,
  ListDashes, ListNumbers, Code,
  Link as LinkIcon, ImageSquare, Quotes,
  TextHOne, TextHTwo, ArrowUUpLeft, ArrowUUpRight,
  X, UploadSimple, LinkSimple,
} from 'phosphor-react'

const lowlight = createLowlight(common)

interface BlogEditorProps {
  content: string
  onChange: (html: string) => void
  placeholder?: string
}

// ── Toolbar button ────────────────────────────────────────────────────────────
const Btn = ({ onClick, active, disabled, title, children }: {
  onClick: () => void; active?: boolean; disabled?: boolean
  title: string; children: React.ReactNode
}) => (
  <button
    type="button" onClick={onClick} disabled={disabled} title={title}
    style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      width: '30px', height: '30px', borderRadius: '5px', border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer', flexShrink: 0,
      backgroundColor: active ? '#171717' : 'transparent',
      color: active ? '#fff' : disabled ? '#d4d4d4' : '#525252',
      transition: 'all 120ms ease',
    }}
    onMouseEnter={e => { if (!active && !disabled) { e.currentTarget.style.backgroundColor = '#f0f0f0'; e.currentTarget.style.color = '#171717' } }}
    onMouseLeave={e => { if (!active && !disabled) { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#525252' } }}
  >{children}</button>
)

const Sep = () => <div style={{ width: '1px', height: '18px', backgroundColor: '#e5e5e5', margin: '0 3px', flexShrink: 0 }} />

// ── Image insert panel ────────────────────────────────────────────────────────
function ImagePanel({ onInsert, onClose }: {
  onInsert: (url: string, alt?: string) => void
  onClose: () => void
}) {
  const [tab, setTab] = useState<'upload' | 'url'>('upload')
  const [urlValue, setUrlValue] = useState('')
  const [altValue, setAltValue] = useState('')
  const [uploading, setUploading] = useState(false)
  const [preview, setPreview] = useState('')
  const [error, setError] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  const handleFile = useCallback(async (file: File) => {
    setError('')
    setUploading(true)
    try {
      const fd = new FormData()
      fd.append('file', file)
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Upload failed')
      setPreview(data.url)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setUploading(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }, [handleFile])

  const handleInsert = () => {
    const src = tab === 'upload' ? preview : urlValue.trim()
    if (!src) return
    onInsert(src, altValue.trim() || undefined)
  }

  const tabStyle = (t: 'upload' | 'url') => ({
    padding: '6px 14px', fontSize: '12px', fontWeight: 500,
    border: 'none', cursor: 'pointer', borderRadius: '5px',
    backgroundColor: tab === t ? '#171717' : 'transparent',
    color: tab === t ? '#fff' : '#737373',
    transition: 'all 120ms ease',
  } as React.CSSProperties)

  return (
    <div style={{
      position: 'absolute', zIndex: 100, top: '44px', left: '50%',
      transform: 'translateX(-50%)',
      width: '340px',
      backgroundColor: '#fff',
      border: '1px solid #e5e5e5',
      borderRadius: '10px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ display: 'flex', gap: '4px' }}>
          <button type="button" style={tabStyle('upload')} onClick={() => setTab('upload')}>Upload</button>
          <button type="button" style={tabStyle('url')} onClick={() => setTab('url')}>URL</button>
        </div>
        <button type="button" onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#a3a3a3', display: 'flex', padding: '2px' }}>
          <X size={16} />
        </button>
      </div>

      <div style={{ padding: '14px' }}>
        {tab === 'upload' ? (
          <>
            {/* Drop zone */}
            <div
              onDrop={handleDrop}
              onDragOver={e => e.preventDefault()}
              onClick={() => fileRef.current?.click()}
              style={{
                border: '2px dashed #e5e5e5', borderRadius: '8px',
                padding: '24px 16px', textAlign: 'center', cursor: 'pointer',
                backgroundColor: '#fafafa', marginBottom: '10px',
                transition: 'border-color 150ms ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#0070f3')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#e5e5e5')}
            >
              {uploading ? (
                <div style={{ color: '#737373', fontSize: '13px' }}>Uploading...</div>
              ) : preview ? (
                <img src={preview} alt="preview" style={{ maxHeight: '120px', maxWidth: '100%', borderRadius: '6px', margin: '0 auto', display: 'block' }} />
              ) : (
                <>
                  <UploadSimple size={24} color="#a3a3a3" style={{ margin: '0 auto 8px' }} />
                  <div style={{ fontSize: '13px', color: '#525252', fontWeight: 500 }}>Drop image or click to browse</div>
                  <div style={{ fontSize: '11px', color: '#a3a3a3', marginTop: '4px' }}>JPEG, PNG, WebP, GIF · max 5MB</div>
                </>
              )}
            </div>
            <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }}
              onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f) }} />
            {error && <div style={{ fontSize: '12px', color: '#ef4444', marginBottom: '8px' }}>{error}</div>}
          </>
        ) : (
          <div style={{ marginBottom: '10px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              border: '1px solid #e5e5e5', borderRadius: '6px',
              padding: '8px 10px', backgroundColor: '#fafafa',
            }}>
              <LinkSimple size={14} color="#a3a3a3" />
              <input
                type="url" value={urlValue} onChange={e => setUrlValue(e.target.value)}
                placeholder="https://example.com/image.jpg"
                style={{ flex: 1, border: 'none', outline: 'none', fontSize: '13px', backgroundColor: 'transparent', color: '#171717' }}
              />
            </div>
            <ImagePreview url={urlValue} />
          </div>
        )}

        {/* Alt text */}
        <input
          type="text" value={altValue} onChange={e => setAltValue(e.target.value)}
          placeholder="Alt text (optional)"
          style={{
            width: '100%', border: '1px solid #e5e5e5', borderRadius: '6px',
            padding: '7px 10px', fontSize: '12px', outline: 'none',
            color: '#171717', backgroundColor: '#fafafa', marginBottom: '10px',
            boxSizing: 'border-box',
          }}
        />

        <button
          type="button" onClick={handleInsert}
          disabled={tab === 'upload' ? !preview : !urlValue.trim()}
          style={{
            width: '100%', padding: '8px', borderRadius: '6px', border: 'none',
            backgroundColor: '#171717', color: '#fff', fontSize: '13px',
            fontWeight: 600, cursor: (tab === 'upload' ? !preview : !urlValue.trim()) ? 'not-allowed' : 'pointer',
            opacity: (tab === 'upload' ? !preview : !urlValue.trim()) ? 0.4 : 1,
            transition: 'opacity 150ms ease',
          }}
        >
          Insert Image
        </button>
      </div>
    </div>
  )
}

// ── Security Helpers ──────────────────────────────────────────────────────────
const getSafeUrl = (url: string): string => {
  if (!url) return ''
  const trimmed = url.trim()
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('/')) {
    return trimmed
  }
  return ''
}

function ImagePreview({ url }: { url: string }) {
  const [hasError, setHasError] = useState(false)
  const safeUrl = getSafeUrl(url)
  if (hasError || !safeUrl) return null
  return (
    <img
      src={safeUrl}
      alt="preview"
      onError={() => setHasError(true)}
      style={{
        maxHeight: '100px',
        maxWidth: '100%',
        borderRadius: '6px',
        marginTop: '8px',
        display: 'block'
      }}
    />
  )
}

// ── Toolbar ───────────────────────────────────────────────────────────────────
const Toolbar = ({ editor }: { editor: ReturnType<typeof useEditor> | null }) => {
  const [showImagePanel, setShowImagePanel] = useState(false)

  if (!editor) return null

  const setLink = () => {
    const prev = editor.getAttributes('link').href
    const rawUrl = window.prompt('Link URL', prev)
    if (rawUrl === null) return
    if (rawUrl === '') { editor.chain().focus().extendMarkRange('link').unsetLink().run(); return }
    const safeUrl = getSafeUrl(rawUrl)
    if (!safeUrl) { alert('Invalid URL protocol. Use http:// or https://'); return }
    editor.chain().focus().extendMarkRange('link').setLink({ href: safeUrl }).run()
  }

  const insertImage = (src: string, alt?: string) => {
    editor.chain().focus().setImage({ src, alt: alt || '' }).run()
    setShowImagePanel(false)
  }

  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1px',
        padding: '6px 10px', borderBottom: '1px solid #e5e5e5', backgroundColor: '#fafafa',
      }}>
        <Btn onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive('bold')} title="Bold"><TextBolder size={15} weight="bold" /></Btn>
        <Btn onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive('italic')} title="Italic"><TextItalic size={15} weight="bold" /></Btn>
        <Btn onClick={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive('underline')} title="Underline"><TextUnderline size={15} weight="bold" /></Btn>
        <Sep />
        <Btn onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} active={editor.isActive('heading', { level: 1 })} title="Heading 1"><TextHOne size={15} weight="bold" /></Btn>
        <Btn onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive('heading', { level: 2 })} title="Heading 2"><TextHTwo size={15} weight="bold" /></Btn>
        <Sep />
        <Btn onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive('bulletList')} title="Bullet list"><ListDashes size={15} weight="bold" /></Btn>
        <Btn onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive('orderedList')} title="Numbered list"><ListNumbers size={15} weight="bold" /></Btn>
        <Sep />
        <Btn onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive('blockquote')} title="Blockquote"><Quotes size={15} weight="fill" /></Btn>
        <Btn onClick={() => editor.chain().focus().toggleCodeBlock().run()} active={editor.isActive('codeBlock')} title="Code block"><Code size={15} weight="bold" /></Btn>
        <Sep />
        <Btn onClick={setLink} active={editor.isActive('link')} title="Insert link"><LinkIcon size={15} weight="bold" /></Btn>
        <Btn onClick={() => setShowImagePanel(v => !v)} active={showImagePanel} title="Insert image"><ImageSquare size={15} weight="bold" /></Btn>
        <div style={{ flex: 1 }} />
        <Btn onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()} title="Undo"><ArrowUUpLeft size={15} weight="bold" /></Btn>
        <Btn onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()} title="Redo"><ArrowUUpRight size={15} weight="bold" /></Btn>
      </div>

      {showImagePanel && (
        <>
          {/* Backdrop to close panel */}
          <div style={{ position: 'fixed', inset: 0, zIndex: 99 }} onClick={() => setShowImagePanel(false)} />
          <ImagePanel onInsert={insertImage} onClose={() => setShowImagePanel(false)} />
        </>
      )}
    </div>
  )
}

// ── Main editor ───────────────────────────────────────────────────────────────
export default function BlogEditor({ content, onChange, placeholder = 'Write something amazing...' }: BlogEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ codeBlock: false }),
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { class: 'be-link' },
      }),
      Image.configure({
        inline: false,
        allowBase64: false,
        HTMLAttributes: { class: 'be-img' },
      }),
      Placeholder.configure({ placeholder }),
      CodeBlockLowlight.configure({
        lowlight,
        HTMLAttributes: { class: 'be-code' },
      }),
    ],
    content,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: { class: 'be-body', spellcheck: 'true' },
    },
    immediatelyRender: false,
  })

  // Sync external content (AI generation) without cursor jump
  const prevContent = useRef(content)
  useEffect(() => {
    if (!editor || content === prevContent.current || content === editor.getHTML()) return
    prevContent.current = content
    if (editor.isEmpty || Math.abs(content.length - editor.getHTML().length) > 100) {
      editor.commands.setContent(content)
    }
  }, [content, editor])

  const words = editor ? editor.getText().trim().split(/\s+/).filter(Boolean).length : 0
  const chars = editor ? editor.getText().length : 0

  return (
    <>
      <style>{`
        .be-body {
          outline: none;
          padding: 20px 24px;
          min-height: 440px;
          color: rgb(var(--gray-900));
          word-break: break-word;
        }
        .be-body > * + * { margin-top: 0.85em; }
        .be-body p { margin: 0; }
        .be-body h1 { margin-top: 1.6em; margin-bottom: 0.4em; font-size: 1.75rem; letter-spacing: -0.5px; }
        .be-body h2 { margin-top: 1.4em; margin-bottom: 0.35em; font-size: 1.375rem; letter-spacing: -0.3px; }
        .be-body h3 { margin-top: 1.2em; margin-bottom: 0.3em; font-size: 1.125rem; }
        .be-body strong { font-weight: var(--fw-bold); }
        .be-body em { font-style: italic; }
        .be-body u { text-decoration: underline; }
        .be-body ul { list-style: disc; padding-left: 1.4rem; }
        .be-body ol { list-style: decimal; padding-left: 1.4rem; }
        .be-body li + li { margin-top: 0.2em; }
        .be-body blockquote {
          border-left: 3px solid rgb(var(--primary-900));
          padding: 0.4em 0 0.4em 1rem;
          color: rgb(var(--gray-600));
          font-style: italic;
          background: rgb(var(--gray-50));
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
        }
        .be-link { color: rgb(var(--primary-900)); text-decoration: underline; cursor: pointer; }
        .be-img {
          display: block;
          max-width: 100%;
          height: auto;
          border-radius: var(--radius-lg);
          border: 1px solid rgb(var(--gray-200));
          margin: 0.5em 0;
        }
        .be-img.ProseMirror-selectednode { outline: 2px solid rgb(var(--primary-900)); outline-offset: 2px; }
        .be-code {
          background: rgb(var(--gray-900));
          color: rgb(var(--gray-100));
          padding: 1rem 1.25rem;
          border-radius: var(--radius-lg);
          overflow-x: auto;
          line-height: 1.6;
        }
        .be-code code { background: none; color: inherit; padding: 0; font-size: inherit; }
        .be-body code:not(pre code) {
          background: rgb(var(--gray-100));
          color: rgb(var(--error-600));
          padding: 0.1em 0.35em;
          border-radius: var(--radius-sm);
        }
        .be-body p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          color: rgb(var(--gray-400));
          float: left; height: 0; pointer-events: none;
        }
      `}</style>

      <div
        style={{ backgroundColor: '#fff', overflow: 'hidden' }}
        onFocusCapture={e => { const el = e.currentTarget.closest('[data-editor-wrap]') as HTMLElement; if (el) { el.style.borderColor = '#0070f3'; el.style.boxShadow = '0 0 0 3px rgba(0,112,243,0.08)' } }}
        onBlurCapture={e => { const el = e.currentTarget.closest('[data-editor-wrap]') as HTMLElement; if (el) { el.style.borderColor = '#e5e5e5'; el.style.boxShadow = 'none' } }}
        data-editor-inner
      >
        <Toolbar editor={editor} />
        <EditorContent editor={editor} />
        <div style={{
          padding: '5px 16px', borderTop: '1px solid #f0f0f0', backgroundColor: '#fafafa',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: '11px', color: '#b0b0b0', fontWeight: 500, textTransform: 'uppercase',
        }}>
          <span>{words} words · {chars} chars</span>
          <span>Rich Text Editor</span>
        </div>
      </div>
    </>
  )
}
