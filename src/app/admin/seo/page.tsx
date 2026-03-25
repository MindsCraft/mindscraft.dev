'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import {
  Globe,
  Image as ImageIcon,
  BarChart2,
  CheckCircle,
  AlertCircle,
  Upload,
  RefreshCw,
  ExternalLink,
  Save,
  Eye,
} from 'lucide-react'
import styles from '@/styles/admin/pages/seo.module.css'

type SeoSettings = {
  siteTitle: string
  siteDescription: string
  siteUrl: string
  siteName: string
  twitterHandle: string
  ogImage: string
  ogImageAlt: string
  keywords: string
  googleAnalyticsId: string
  googleTagManagerId: string
  updatedAt?: string
}

const defaultSettings: SeoSettings = {
  siteTitle: '',
  siteDescription: '',
  siteUrl: '',
  siteName: '',
  twitterHandle: '',
  ogImage: '/images/og-image.png',
  ogImageAlt: '',
  keywords: '',
  googleAnalyticsId: '',
  googleTagManagerId: '',
}

type Status = { type: 'idle' | 'saving' | 'success' | 'error'; message?: string }

export default function SeoPage() {
  const [settings, setSettings] = useState<SeoSettings>(defaultSettings)
  const [isLoading, setIsLoading] = useState(true)
  const [status, setStatus] = useState<Status>({ type: 'idle' })
  const [ogPreviewKey, setOgPreviewKey] = useState(Date.now())
  const [isUploadingOg, setIsUploadingOg] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Derived: title length warning
  const titleLen = settings.siteTitle.length
  const descLen = settings.siteDescription.length

  const fetchSettings = useCallback(async () => {
    setIsLoading(true)
    try {
      const res = await fetch('/api/admin/seo-settings')
      if (!res.ok) throw new Error('Failed to load')
      const data: SeoSettings = await res.json()
      setSettings(data)
    } catch {
      setStatus({ type: 'error', message: 'Failed to load SEO settings.' })
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => { fetchSettings() }, [fetchSettings])

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'saving' })
    try {
      const res = await fetch('/api/admin/seo-settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || 'Save failed')
      }
      setStatus({ type: 'success', message: 'SEO settings saved successfully!' })
      setTimeout(() => setStatus({ type: 'idle' }), 3000)
    } catch (err: any) {
      setStatus({ type: 'error', message: err.message })
    }
  }

  const handleOgUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setIsUploadingOg(true)
    try {
      const formData = new FormData()
      formData.append('file', file)
      const res = await fetch('/api/admin/og-image', { method: 'POST', body: formData })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || 'Upload failed')
      }
      const { url } = await res.json()
      setSettings(prev => ({ ...prev, ogImage: url.split('?')[0] }))
      setOgPreviewKey(Date.now())
      setStatus({ type: 'success', message: 'OG image updated! Save settings to apply.' })
      setTimeout(() => setStatus({ type: 'idle' }), 3000)
    } catch (err: any) {
      setStatus({ type: 'error', message: err.message })
    } finally {
      setIsUploadingOg(false)
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }

  const change = (key: keyof SeoSettings, value: string) =>
    setSettings(prev => ({ ...prev, [key]: value }))

  if (isLoading) {
    return (
      <div className="admin-container">
        <div className={styles.loadingState}>
          <RefreshCw className={styles.spinIcon} size={24} />
          <p className="caption">Loading SEO settings…</p>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-container">
      {/* Header */}
      <div className="admin-page-header">
        <div className={styles.headerRow}>
          <div>
            <h1 className="admin-page-title">SEO &amp; Sharing</h1>
            <p className="admin-page-desc">
              Manage site metadata, Open Graph images, and analytics tracking codes.
            </p>
          </div>
          <div className={styles.headerActions}>
            {settings.updatedAt && (
              <span className="caption">
                Last saved: {new Date(settings.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
              </span>
            )}
            <a
              href={settings.siteUrl || 'https://mindscraft.dev'}
              target="_blank"
              rel="noopener noreferrer"
              className={`button-outline button-sm ${styles.previewLink}`}
            >
              <Eye size={14} /> Preview Site
            </a>
          </div>
        </div>
      </div>

      {/* Status Banner */}
      {status.type !== 'idle' && (
        <div className={`${styles.statusBanner} ${styles[`status_${status.type}`]}`}>
          {status.type === 'saving' ? (
            <><RefreshCw className={styles.spinIcon} size={16} /> Saving changes…</>
          ) : status.type === 'success' ? (
            <><CheckCircle size={16} /> {status.message}</>
          ) : status.type === 'error' ? (
            <><AlertCircle size={16} /> {status.message}</>
          ) : null}
        </div>
      )}

      <form onSubmit={handleSave} className={styles.formLayout}>

        {/* Left Column */}
        <div className={styles.mainCol}>

          {/* === BASIC SEO === */}
          <div className="card">
            <div className="card-header">
              <div className={styles.sectionHeader}>
                <Globe size={18} className={styles.sectionIcon} />
                <div>
                  <h2 className="heading-4" style={{ marginBottom: 2 }}>Site Identity &amp; SEO</h2>
                  <p className="caption">Controls meta title, description, and search appearance.</p>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className={styles.fieldGroup}>

                <div className={styles.field}>
                  <div className={styles.labelRow}>
                    <label className="label">Site Title</label>
                    <span className={`caption ${titleLen > 60 ? styles.counterWarn : ''}`}>
                      {titleLen}/60 chars
                    </span>
                  </div>
                  <input
                    id="seo-site-title"
                    type="text"
                    value={settings.siteTitle}
                    onChange={e => change('siteTitle', e.target.value)}
                    placeholder="Agency Name — Tagline"
                    className={styles.input}
                    required
                  />
                  {titleLen > 60 && (
                    <p className={styles.hintWarn}>Title exceeds 60 chars — may be truncated in search results.</p>
                  )}
                </div>

                <div className={styles.field}>
                  <div className={styles.labelRow}>
                    <label className="label">Meta Description</label>
                    <span className={`caption ${descLen > 160 ? styles.counterWarn : descLen < 120 ? styles.counterTip : ''}`}>
                      {descLen}/160 chars
                    </span>
                  </div>
                  <textarea
                    id="seo-meta-description"
                    rows={3}
                    value={settings.siteDescription}
                    onChange={e => change('siteDescription', e.target.value)}
                    placeholder="A concise description of your agency and what you offer…"
                    className={styles.textarea}
                    required
                  />
                  <p className={`caption ${styles.hint}`}>Aim for 120–160 characters for optimal display in search results.</p>
                </div>

                <div className={styles.row2}>
                  <div className={styles.field}>
                    <label className="label">Site URL</label>
                    <input
                      id="seo-site-url"
                      type="url"
                      value={settings.siteUrl}
                      onChange={e => change('siteUrl', e.target.value)}
                      placeholder="https://example.com"
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className="label">Site Name</label>
                    <input
                      id="seo-site-name"
                      type="text"
                      value={settings.siteName}
                      onChange={e => change('siteName', e.target.value)}
                      placeholder="MindsCraft"
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.row2}>
                  <div className={styles.field}>
                    <label className="label">Twitter / X Handle</label>
                    <input
                      id="seo-twitter"
                      type="text"
                      value={settings.twitterHandle}
                      onChange={e => change('twitterHandle', e.target.value)}
                      placeholder="@handle"
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className="label">Keywords <span className={styles.optional}>(comma separated)</span></label>
                    <input
                      id="seo-keywords"
                      type="text"
                      value={settings.keywords}
                      onChange={e => change('keywords', e.target.value)}
                      placeholder="UX design, AI development, Next.js…"
                      className={styles.input}
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* === OG IMAGE === */}
          <div className="card">
            <div className="card-header">
              <div className={styles.sectionHeader}>
                <ImageIcon size={18} className={styles.sectionIcon} />
                <div>
                  <h2 className="heading-4" style={{ marginBottom: 2 }}>Open Graph &amp; Social Image</h2>
                  <p className="caption">This image appears when your site is shared on social media.</p>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className={styles.ogLayout}>
                {/* OG Preview */}
                <div className={styles.ogPreviewWrap}>
                  <p className="caption" style={{ marginBottom: 8 }}>Current OG Image Preview</p>
                  <div className={styles.ogImageBox}>
                    <Image
                      key={ogPreviewKey}
                      src={`${settings.ogImage}?t=${ogPreviewKey}`}
                      alt="OG Preview"
                      fill
                      className={styles.ogImage}
                      unoptimized
                    />
                  </div>
                  <p className={`caption ${styles.hint}`}>Recommended size: 1200 × 630 px. Format: PNG, JPG, WebP.</p>
                </div>

                {/* OG Controls */}
                <div className={styles.ogControls}>
                  <div className={styles.field}>
                    <label className="label">Image Alt Text</label>
                    <input
                      id="seo-og-alt"
                      type="text"
                      value={settings.ogImageAlt}
                      onChange={e => change('ogImageAlt', e.target.value)}
                      placeholder="Describe the image for accessibility"
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.uploadZone} onClick={() => fileInputRef.current?.click()}>
                    <Upload size={20} className={styles.uploadIcon} />
                    <p className={styles.uploadTitle}>
                      {isUploadingOg ? 'Uploading…' : 'Replace OG Image'}
                    </p>
                    <p className={`caption ${styles.hint}`}>Click to upload a new 1200×630 image</p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      className={styles.hiddenInput}
                      onChange={handleOgUpload}
                      disabled={isUploadingOg}
                    />
                  </div>

                  {/* Social preview card mock */}
                  <div className={styles.socialPreviewCard}>
                    <p className={styles.socialPreviewUrl}>{settings.siteUrl ? new URL(settings.siteUrl).hostname : 'mindscraft.dev'}</p>
                    <p className={styles.socialPreviewTitle}>{settings.siteTitle || 'Site Title'}</p>
                    <p className={styles.socialPreviewDesc}>
                      {settings.siteDescription
                        ? settings.siteDescription.substring(0, 100) + (settings.siteDescription.length > 100 ? '…' : '')
                        : 'Meta description will appear here…'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className={styles.sideCol}>

          {/* === ANALYTICS === */}
          <div className="card">
            <div className="card-header">
              <div className={styles.sectionHeader}>
                <BarChart2 size={18} className={styles.sectionIcon} />
                <div>
                  <h2 className="heading-4" style={{ marginBottom: 2 }}>Analytics &amp; Tracking</h2>
                  <p className="caption">Paste your tracking IDs here.</p>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className={styles.fieldGroup}>

                <div className={styles.field}>
                  <label className="label">Google Analytics 4 — Measurement ID</label>
                  <input
                    id="seo-ga-id"
                    type="text"
                    value={settings.googleAnalyticsId}
                    onChange={e => change('googleAnalyticsId', e.target.value)}
                    placeholder="G-XXXXXXXXXX"
                    className={styles.input}
                  />
                  <p className={`caption ${styles.hint}`}>
                    Found in GA4 → Admin → Data Streams → your stream.
                  </p>
                  {settings.googleAnalyticsId && (
                    <a
                      href={`https://analytics.google.com/analytics/web/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.gaLink}
                    >
                      <ExternalLink size={12} /> Open Google Analytics Dashboard
                    </a>
                  )}
                </div>

                <div className={styles.field}>
                  <label className="label">Google Tag Manager ID</label>
                  <input
                    id="seo-gtm-id"
                    type="text"
                    value={settings.googleTagManagerId}
                    onChange={e => change('googleTagManagerId', e.target.value)}
                    placeholder="GTM-XXXXXXX"
                    className={styles.input}
                  />
                  <p className={`caption ${styles.hint}`}>
                    Leave blank if you are using GA4 directly.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Tips Card */}
          <div className={`card ${styles.tipsCard}`}>
            <div className="card-body">
              <p className={styles.tipsTitle}>💡 SEO Quick Tips</p>
              <ul className={styles.tipsList}>
                <li>Keep titles under <strong>60 chars</strong> to avoid truncation.</li>
                <li>Meta descriptions between <strong>120–160 chars</strong> are ideal.</li>
                <li>OG image should be <strong>1200 × 630 px</strong> for best rendering.</li>
                <li>Add your <strong>GA4 Measurement ID</strong> to see real-time analytics.</li>
                <li>Use <strong>GTM</strong> if you need multiple tracking scripts.</li>
              </ul>
            </div>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            disabled={status.type === 'saving'}
            className={styles.saveBtn}
          >
            {status.type === 'saving' ? (
              <><RefreshCw className={styles.spinIcon} size={16} /> Saving…</>
            ) : (
              <><Save size={16} /> Save SEO Settings</>
            )}
          </button>

        </div>
      </form>
    </div>
  )
}
