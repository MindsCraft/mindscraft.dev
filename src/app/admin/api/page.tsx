'use client'

import { Plus, Key, Copy, Trash, Eye, EyeSlash } from 'phosphor-react'
import { useState } from 'react'
import styles from '@/styles/admin/pages/api.module.css'

export default function APIPage() {
  const [showKey, setShowKey] = useState<{ [key: number]: boolean }>({})

  const apiKeys = [
    { id: 1, name: 'Production Key', key: 'sk_live_xxxxxxxxxxxxxxxxxxx', created: 'Dec 15, 2024', lastUsed: '2 hours ago' },
    { id: 2, name: 'Development Key', key: 'sk_test_xxxxxxxxxxxxxxxxxxx', created: 'Dec 10, 2024', lastUsed: '1 day ago' },
    { id: 3, name: 'Testing Key', key: 'sk_test_yyyyyyyyyyyyyyyyyy', created: 'Dec 5, 2024', lastUsed: '3 days ago' },
  ]

  const toggleKeyVisibility = (id: number) => {
    setShowKey(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="admin-container">
      {/* Page Header */}
      <div className="admin-page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="admin-page-title">API Keys</h1>
          <p className="admin-page-desc">Manage your API keys and access tokens</p>
        </div>
        <button className={styles.headerBtn}>
          <Plus size={18} weight="bold" />
          Generate New Key
        </button>
      </div>

      {/* Usage Stats */}
      <div className={styles.statsGrid}>
        {[
          { label: 'Total Requests', value: '12,543' },
          { label: 'Requests Today', value: '1,234' },
          { label: 'Active Keys', value: '3' },
          { label: 'Rate Limit', value: '1000/hr' },
        ].map((stat) => (
          <div key={stat.label} className={styles.statCard}>
            <p className={styles.statLabel}>{stat.label}</p>
            <p className={styles.statValue}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* API Keys List */}
      <div className={styles.panel}>
        <div className={styles.panelHeader}>
          <h2 className={styles.panelTitle}>
            Your API Keys
          </h2>
        </div>

        <div className={styles.keyList}>
          {apiKeys.map((apiKey) => (
            <div key={apiKey.id} className={styles.keyRow}>
              <div className={styles.keyHeader}>
                <div>
                  <h3 className={styles.keyTitle}>{apiKey.name}</h3>
                  <p className={styles.keyMeta}>
                    Created {apiKey.created} • Last used {apiKey.lastUsed}
                  </p>
                </div>
                <div className={styles.actionWrap}>
                  <button onClick={() => toggleKeyVisibility(apiKey.id)} className={styles.actionBtn}>
                    {showKey[apiKey.id] ? <EyeSlash size={16} /> : <Eye size={16} />}
                  </button>
                  <button onClick={() => copyToClipboard(apiKey.key)} className={styles.actionBtn}>
                    <Copy size={16} />
                  </button>
                  <button className={styles.actionBtnDanger}>
                    <Trash size={16} />
                  </button>
                </div>
              </div>

              {/* API Key Display */}
              <div className={styles.keyDisplay}>
                <Key size={16} className={styles.keyDisplayIcon} />
                <span className={styles.keyDisplayText}>
                  {showKey[apiKey.id] ? apiKey.key : '••••••••••••••••••••'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Documentation Section */}
      <div className={styles.docPanel}>
        <h2 className={styles.docTitle}>API Documentation</h2>
        <p className={styles.docDesc}>
          Learn how to integrate our API into your applications. View our comprehensive guides and examples.
        </p>
        <button className={styles.docBtn}>
          View Documentation →
        </button>
      </div>
    </div>
  )
}
