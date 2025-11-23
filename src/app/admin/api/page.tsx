'use client'

import { Plus, Key, Copy, Trash, Eye, EyeSlash } from 'phosphor-react'
import { useState } from 'react'

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
    <div style={{
      padding: 'var(--space-8)',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {/* Page Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-8)' }}>
        <div>
          <h1 style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#171717',
            marginBottom: 'var(--space-2)'
          }}>
            API Keys
          </h1>
          <p style={{ fontSize: '14px', color: '#525252' }}>
            Manage your API keys and access tokens
          </p>
        </div>
        <button style={{
          padding: '12px 24px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#171717',
          color: '#ffffff',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-2)',
          transition: 'all 150ms ease'
        }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#000000'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#171717'}
        >
          <Plus size={18} weight="bold" />
          Generate New Key
        </button>
      </div>

      {/* Usage Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 'var(--space-4)',
        marginBottom: 'var(--space-6)'
      }}>
        {[
          { label: 'Total Requests', value: '12,543' },
          { label: 'Requests Today', value: '1,234' },
          { label: 'Active Keys', value: '3' },
          { label: 'Rate Limit', value: '1000/hr' },
        ].map((stat) => (
          <div
            key={stat.label}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: 'var(--space-4)',
              border: '1px solid #e5e5e5'
            }}
          >
            <p style={{ fontSize: '13px', color: '#a3a3a3', marginBottom: 'var(--space-2)' }}>{stat.label}</p>
            <p style={{ fontSize: '24px', fontWeight: '700', color: '#171717' }}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* API Keys List */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #e5e5e5',
        overflow: 'hidden'
      }}>
        <div style={{ padding: 'var(--space-5)', borderBottom: '1px solid #e5e5e5' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#171717' }}>
            Your API Keys
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {apiKeys.map((apiKey) => (
            <div
              key={apiKey.id}
              style={{
                padding: 'var(--space-5)',
                borderBottom: '1px solid #f5f5f5',
                transition: 'background-color 150ms ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fafafa'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-3)' }}>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#171717', marginBottom: 'var(--space-1)' }}>
                    {apiKey.name}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#a3a3a3' }}>
                    Created {apiKey.created} • Last used {apiKey.lastUsed}
                  </p>
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                  <button
                    onClick={() => toggleKeyVisibility(apiKey.id)}
                    style={{
                      padding: '6px',
                      borderRadius: '6px',
                      border: '1px solid #e5e5e5',
                      backgroundColor: '#ffffff',
                      color: '#525252',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'all 150ms ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f5f5f5'; e.currentTarget.style.color = '#171717' }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.color = '#525252' }}
                  >
                    {showKey[apiKey.id] ? <EyeSlash size={16} /> : <Eye size={16} />}
                  </button>
                  <button
                    onClick={() => copyToClipboard(apiKey.key)}
                    style={{
                      padding: '6px',
                      borderRadius: '6px',
                      border: '1px solid #e5e5e5',
                      backgroundColor: '#ffffff',
                      color: '#525252',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'all 150ms ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f5f5f5'; e.currentTarget.style.color = '#171717' }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.color = '#525252' }}
                  >
                    <Copy size={16} />
                  </button>
                  <button style={{
                    padding: '6px',
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

              {/* API Key Display */}
              <div style={{
                padding: 'var(--space-3)',
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
                fontFamily: 'monospace',
                fontSize: '13px',
                color: '#171717',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)'
              }}>
                <Key size={16} style={{ color: '#a3a3a3', flexShrink: 0 }} />
                <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {showKey[apiKey.id] ? apiKey.key : '••••••••••••••••••••'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Documentation Section */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #e5e5e5',
        padding: 'var(--space-6)',
        marginTop: 'var(--space-6)'
      }}>
        <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#171717', marginBottom: 'var(--space-3)' }}>
          API Documentation
        </h2>
        <p style={{ fontSize: '14px', color: '#525252', marginBottom: 'var(--space-4)' }}>
          Learn how to integrate our API into your applications. View our comprehensive guides and examples.
        </p>
        <button style={{
          padding: '10px 20px',
          borderRadius: '8px',
          border: '1px solid #e5e5e5',
          backgroundColor: '#ffffff',
          color: '#171717',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 150ms ease'
        }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
        >
          View Documentation →
        </button>
      </div>
    </div>
  )
}
