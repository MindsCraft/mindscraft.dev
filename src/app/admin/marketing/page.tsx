'use client'

import { useState } from 'react'
import { Sparkle, PenNib, ShareNetwork, EnvelopeSimple, Copy, CheckCircle, ArrowRight } from 'phosphor-react'
import Link from 'next/link'
import styles from '@/styles/admin/pages/marketing.module.css'

type FormType = 'blog' | 'social' | 'email'

export default function AIMarketingHub() {
  const [activeTab, setActiveTab] = useState<FormType>('blog')
  const [isLoading, setIsLoading] = useState(false)
  const [topic, setTopic] = useState('')
  const [audience, setAudience] = useState('')
  const [tone, setTone] = useState('Professional & Value-Driven')
  const [result, setResult] = useState<string | null>(null)
  const [generatedPostId, setGeneratedPostId] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setResult(null)
    setGeneratedPostId(null)

    try {
      const res = await fetch('/api/admin/ai-marketing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: activeTab, topic, audience, tone }),
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Failed to generate')

      if (activeTab === 'blog') {
        setGeneratedPostId(data.postId)
      } else {
        setResult(data.text)
      }
    } catch (error: any) {
      alert(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const tabOptions = [
    { id: 'blog', label: 'Custom Blog Writer', icon: PenNib, desc: 'Generate highly specific drafted posts' },
    { id: 'social', label: 'Social Content', icon: ShareNetwork, desc: 'Draft viral threads for LinkedIn & X' },
    { id: 'email', label: 'Cold Outreach', icon: EnvelopeSimple, desc: 'Hyper-personalized agency cold emails' },
  ] as const

  return (
    <div className="admin-container">
      {/* Header */}
      <div className="admin-page-header">
        <div className={styles.headerIconWrap}>
          <Sparkle size={24} weight="duotone" className={styles.primaryIcon} />
          <h1 className={`admin-page-title ${styles.pageTitleNoMargin}`}>AI Marketing Hub</h1>
        </div>
        <p className="admin-page-desc">
          Take absolute control of your content. Generate hyper-targeted assets to convert new clients.
        </p>
      </div>

      {/* Main Layout Grid */}
      <div className={styles.layoutGrid}>
        
        {/* Left Column: Form Controls */}
        <div className={styles.controlsCol}>
          {tabOptions.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setResult(null); setGeneratedPostId(null); }}
                className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                <div className={styles.tabBtnIconWrap}>
                  <Icon 
                    size={20} 
                    weight={isActive ? 'fill' : 'regular'} 
                    style={{ color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)' }} 
                  />
                  <span className={styles.tabBtnLabel}>{tab.label}</span>
                </div>
                <p className={styles.tabBtnDesc}>
                  {tab.desc}
                </p>
              </button>
            )
          })}
        </div>

        {/* Right Column: AI Input Form */}
        <div>
          <div className={`card ${styles.formCard}`}>
            <div className={`card-header ${styles.formCardHeader}`}>
              <h2 className={`heading-3 ${styles.cardTitleNoMargin}`}>
                <Sparkle size={20} weight="fill" className={styles.primaryIcon} />
                Configure your {activeTab === 'blog' ? 'Blog Post' : activeTab === 'social' ? 'Social Post' : 'Email Pitch'}
              </h2>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit} className={styles.formCol}>
                <div className={styles.formField}>
                  <label className={`label ${styles.formLabel}`}>
                    {activeTab === 'blog' ? 'Core Topic / Keyword' : activeTab === 'social' ? 'What are we sharing?' : 'What core service are we pitching?'}
                  </label>
                  <input
                    type="text"
                    required
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder={
                      activeTab === 'blog' ? "e.g. Migrating from React to Next.js in 2026" :
                      activeTab === 'social' ? "e.g. We just launched a huge redesign for our Client X" :
                      "e.g. Custom AI chatbot integrations to lower support tickets"
                    }
                    className={styles.inputBox}
                  />
                </div>

                <div className={styles.formField}>
                  <label className={`label ${styles.formLabel}`}>Target Audience</label>
                  <input
                    type="text"
                    required
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    placeholder={
                      activeTab === 'blog' ? "e.g. CTOs and Lead Developers" :
                      activeTab === 'social' ? "e.g. Startup Founders on LinkedIn" :
                      "e.g. E-commerce Store Owners making $1M+ / year"
                    }
                    className={styles.inputBox}
                  />
                </div>

                <div className={styles.formField}>
                  <label className={`label ${styles.formLabel}`}>Voice / Tone</label>
                  <select
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    className={`${styles.inputBox} ${styles.selectBox}`}
                  >
                    <option>Professional & Value-Driven</option>
                    <option>Visionary & Bold</option>
                    <option>Technical & Analytical</option>
                    <option>Conversational & Engaging</option>
                    <option>Aggressive Sales / Direct Response</option>
                  </select>
                </div>

                <div className={styles.submitBtnWrap}>
                  <button
                    type="submit"
                    disabled={isLoading || !topic || !audience}
                    className={styles.submitBtn}
                  >
                    {isLoading ? (
                      'Generating AI Output...'
                    ) : (
                      <>
                        <Sparkle size={18} weight="fill" />
                        Generate {activeTab === 'blog' ? 'Blog Draft' : 'Content'}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* RESULTS AREA */}
          {generatedPostId && activeTab === 'blog' && (
            <div className={`card ${styles.successCard}`}>
              <div className={`card-body ${styles.successCardBody}`}>
                <CheckCircle size={28} weight="fill" color="var(--color-success)" style={{ flexShrink: 0 }} />
                <div>
                  <h3 className={`heading-3 ${styles.successHeading}`}>Blog Post Generated Successfully!</h3>
                  <p className={`body-sm ${styles.successDesc}`}>Your new article has been written, formatted, and saved as a Draft.</p>
                  <Link 
                    href={`/admin/posts/edit/${generatedPostId}`}
                    className={styles.successBtn}
                  >
                    Open in Editor <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {result && activeTab !== 'blog' && (
             <div className={`card ${styles.resultCard}`}>
                <div className={`card-header ${styles.resultHeader}`}>
                    <h3 className="heading-4">Generated Text</h3>
                    <button 
                      onClick={handleCopy}
                      className={`${styles.copyBtn} ${copied ? styles.copyBtnSuccess : ''}`}
                    >
                      {copied ? <CheckCircle size={14} weight="fill" /> : <Copy size={14} />}
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                </div>
                <div className="card-body">
                  <div className={styles.resultText}>
                    {result}
                  </div>
                </div>
             </div>
          )}

        </div>
      </div>
    </div>
  )
}
