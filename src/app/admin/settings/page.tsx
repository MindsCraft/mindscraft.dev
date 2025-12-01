'use client'

import { Bell, Lock, Globe, Palette } from 'phosphor-react'

export default function SettingsPage() {
  return (
    <div style={{
      padding: 'var(--space-8)',
      maxWidth: '1000px',
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
          Settings
        </h1>
        <p style={{ fontSize: '14px', color: '#525252' }}>
          Manage your application settings and preferences
        </p>
      </div>

      {/* General Settings */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #e5e5e5',
        padding: 'var(--space-6)',
        marginBottom: 'var(--space-6)'
      }}>
        <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', marginBottom: 'var(--space-5)' }}>
          <Globe size={24} weight="duotone" style={{ color: '#525252' }} />
          <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#171717' }}>
            General
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <div>
            <label style={{ fontSize: '13px', fontWeight: '500', color: '#525252', display: 'block', marginBottom: 'var(--space-2)' }}>
              Site Name
            </label>
            <input
              type="text"
              defaultValue="MindsCraft"
              style={{
                width: '100%',
                padding: '12px',
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

          <div>
            <label style={{ fontSize: '13px', fontWeight: '500', color: '#525252', display: 'block', marginBottom: 'var(--space-2)' }}>
              Site Description
            </label>
            <textarea
              rows={3}
              defaultValue="A modern design agency creating beautiful digital experiences"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #e5e5e5',
                fontSize: '14px',
                color: '#171717',
                outline: 'none',
                resize: 'vertical',
                fontFamily: 'inherit'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#171717'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#e5e5e5'}
            />
          </div>
        </div>
      </div>

      {/* Appearance Settings */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #e5e5e5',
        padding: 'var(--space-6)',
        marginBottom: 'var(--space-6)'
      }}>
        <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', marginBottom: 'var(--space-5)' }}>
          <Palette size={24} weight="duotone" style={{ color: '#525252' }} />
          <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#171717' }}>
            Appearance
          </h2>
        </div>

        <div>
          <label style={{ fontSize: '13px', fontWeight: '500', color: '#525252', display: 'block', marginBottom: 'var(--space-3)' }}>
            Theme
          </label>
          <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
            {['Light', 'Dark', 'System'].map((theme) => (
              <button
                key={theme}
                style={{
                  flex: 1,
                  padding: '12px',
                  borderRadius: '8px',
                  border: theme === 'Light' ? '2px solid #171717' : '1px solid #e5e5e5',
                  backgroundColor: '#ffffff',
                  color: '#171717',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 150ms ease'
                }}
                onMouseEnter={(e) => theme !== 'Light' && (e.currentTarget.style.backgroundColor = '#f5f5f5')}
                onMouseLeave={(e) => theme !== 'Light' && (e.currentTarget.style.backgroundColor = '#ffffff')}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications Settings */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #e5e5e5',
        padding: 'var(--space-6)',
        marginBottom: 'var(--space-6)'
      }}>
        <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', marginBottom: 'var(--space-5)' }}>
          <Bell size={24} weight="duotone" style={{ color: '#525252' }} />
          <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#171717' }}>
            Notifications
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {[
            { label: 'Email notifications', description: 'Receive email updates about your account' },
            { label: 'Push notifications', description: 'Receive push notifications in your browser' },
            { label: 'Weekly digest', description: 'Get a weekly summary of your activity' },
          ].map((item) => (
            <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--space-3)', backgroundColor: '#fafafa', borderRadius: '8px' }}>
              <div>
                <p style={{ fontSize: '14px', fontWeight: '500', color: '#171717', marginBottom: '2px' }}>{item.label}</p>
                <p style={{ fontSize: '13px', color: '#a3a3a3' }}>{item.description}</p>
              </div>
              <label style={{ position: 'relative', display: 'inline-block', width: '48px', height: '24px', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked style={{ opacity: 0, width: 0, height: 0 }} />
                <span style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: '#171717',
                  borderRadius: '24px',
                  transition: '0.4s'
                }}>
                  <span style={{
                    position: 'absolute',
                    height: '18px',
                    width: '18px',
                    left: '26px',
                    bottom: '3px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    transition: '0.4s'
                  }} />
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Security Settings */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #e5e5e5',
        padding: 'var(--space-6)',
        marginBottom: 'var(--space-6)'
      }}>
        <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', marginBottom: 'var(--space-5)' }}>
          <Lock size={24} weight="duotone" style={{ color: '#525252' }} />
          <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#171717' }}>
            Security
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <button style={{
            padding: '12px 16px',
            borderRadius: '8px',
            border: '1px solid #e5e5e5',
            backgroundColor: '#ffffff',
            color: '#171717',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            textAlign: 'left',
            transition: 'all 150ms ease'
          }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
          >
            Enable two-factor authentication
          </button>
          <button style={{
            padding: '12px 16px',
            borderRadius: '8px',
            border: '1px solid #e5e5e5',
            backgroundColor: '#ffffff',
            color: '#171717',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            textAlign: 'left',
            transition: 'all 150ms ease'
          }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
          >
            View active sessions
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end' }}>
        <button style={{
          padding: '12px 24px',
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
          Cancel
        </button>
        <button style={{
          padding: '12px 24px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#171717',
          color: '#ffffff',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 150ms ease'
        }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#000000'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#171717'}
        >
          Save Changes
        </button>
      </div>
    </div>
  )
}
