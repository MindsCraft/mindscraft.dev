'use client'

import { UploadSimple, Trash, MagnifyingGlass } from 'phosphor-react'
import styles from '@/styles/admin/pages/media.module.css'

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
    <div className="admin-container">
      {/* Page Header */}
      <div className="admin-page-header">
        <h1 className="admin-page-title">Media Library</h1>
        <p className="admin-page-desc">Manage your images, videos, and documents</p>
      </div>

      {/* Upload Area */}
      <div className={styles.uploadArea}>
        <UploadSimple size={48} className={styles.uploadIcon} />
        <h3 className={styles.uploadTitle}>
          Drop files to upload
        </h3>
        <p className={styles.uploadDesc}>
          or click to browse
        </p>
      </div>

      {/* Search & Filter */}
      <div className={styles.searchWrapper}>
        <MagnifyingGlass size={18} className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search files..."
          className={styles.searchInput}
        />
      </div>

      {/* Files Grid */}
      <div className={styles.grid}>
        {files.map((file) => (
          <div key={file.id} className={styles.fileCard}>
            {/* File Preview */}
            <div className={styles.filePreview}>
              {getFileIcon(file.type)}
            </div>

            {/* File Info */}
            <div className={styles.fileInfoWrap}>
              <h4 className={styles.fileName}>
                {file.name}
              </h4>
              <div className={styles.fileMetaRow}>
                <span className={styles.fileMetaText}>{file.size}</span>
                <span className={styles.fileMetaText}>{file.date}</span>
              </div>
              <div className={styles.actionGrid}>
                <button className={styles.actionBtn}>
                  View
                </button>
                <button className={styles.actionBtnDanger}>
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
