'use client'

import { UploadSimple, File, Trash, MagnifyingGlass } from 'phosphor-react'

export default function MediaPage() {
  const files = [
    { id: 1, name: 'hero-image.jpg', type: 'image', size: '2.4 MB', date: 'Dec 20, 2024' },
    { id: 2, name: 'logo.svg', type: 'image', size: '45 KB', date: 'Dec 18, 2024' },
    { id: 3, name: 'presentation.pdf', type: 'document', size: '5.1 MB', date: 'Dec 15, 2024' },
    { id: 4, name: 'screenshot.png', type: 'image', size: '890 KB', date: 'Dec 12, 2024' },
    { id: 5, name: 'video-intro.mp4', type: 'video', size: '15.2 MB', date: 'Dec 10, 2024' },
    { id: 6, name: 'report.xlsx', type: 'document', size: '125 KB', date: 'Dec 8, 2024' },
  ]

  const getFileIcon = (type: string) => {
    return type === 'image' ? '🖼️' : type === 'video' ? '🎥' : '📄'
  }

  return (
    <div style={{
      padding: 'var(--space-8)',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      {/* Page Header */}
      <div style={{ marginBottom: 'var(--space-8)' }}>
        <h1 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#171717',
          marginBottom: 'var(--space-2)'
        }}>
          Media Library
        </h1>
        <p style={{ fontSize: '14px', color: '#525252' }}>
          Manage your images, videos, and documents
        </p>
      </div>

      {/* Upload Area */}
      <div style={{
        backgroundColor: '#fafafa',
        borderRadius: '12px',
        border: '2px dashed #e5e5e5',
        padding: 'var(--space-8)',
        marginBottom: 'var(--space-6)',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 150ms ease'
      }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#171717'; e.currentTarget.style.backgroundColor = '#ffffff' }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e5e5e5'; e.currentTarget.style.backgroundColor = '#fafafa' }}
      >
        <UploadSimple size={48} style={{ color: '#a3a3a3', marginBottom: 'var(--space-3)' }} />
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#171717', marginBottom: 'var(--space-2)' }}>
          Drop files to upload
        </h3>
        <p style={{ fontSize: '14px', color: '#a3a3a3' }}>
          or click to browse
        </p>
      </div>

      {/* Search & Filter */}
      <div style={{ marginBottom: 'var(--space-6)' }}>
        <div style={{ position: 'relative', maxWidth: '400px' }}>
          <MagnifyingGlass size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#a3a3a3' }} />
          <input
            type="text"
            placeholder="Search files..."
            style={{
              width: '100%',
              padding: '12px 12px 12px 40px',
              borderRadius: '8px',
              border: '1px solid #e5e5e5',
              fontSize: '14px',
              color: '#171717',
              outline: 'none'
            }}
            onFocus={(e) => e.currentTarget.style.borderColor = '#171717'}
            onBlur={(e) => e.currentTarget.style.borderColor = '#e5e5e5'}
          />
        </div>
      </div>

      {/* Files Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 'var(--space-4)' }}>
        {files.map((file) => (
          <div
            key={file.id}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              border: '1px solid #e5e5e5',
              overflow: 'hidden',
              transition: 'all 150ms ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
          >
            {/* File Preview */}
            <div style={{
              height: '160px',
              backgroundColor: '#f5f5f5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px'
            }}>
              {getFileIcon(file.type)}
            </div>

            {/* File Info */}
            <div style={{ padding: 'var(--space-4)' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '500', color: '#171717', marginBottom: 'var(--space-2)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {file.name}
              </h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
                <span style={{ fontSize: '12px', color: '#a3a3a3' }}>{file.size}</span>
                <span style={{ fontSize: '12px', color: '#a3a3a3' }}>{file.date}</span>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                <button style={{
                  flex: 1,
                  padding: '8px',
                  borderRadius: '6px',
                  border: '1px solid #e5e5e5',
                  backgroundColor: '#ffffff',
                  color: '#525252',
                  fontSize: '13px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 150ms ease'
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f5f5f5'; e.currentTarget.style.color = '#171717' }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.color = '#525252' }}
                >
                  View
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
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fef2f2'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
                >
                  <Trash size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
