'use client'

import { Plus, Envelope, DotsThree } from 'phosphor-react'

export default function TeamPage() {
  const members = [
    { id: 1, name: 'John Doe', role: 'Developer', email: 'john@mindscraft.dev', status: 'Active', avatar: 'JD' },
    { id: 2, name: 'Jane Smith', role: 'Designer', email: 'jane@mindscraft.dev', status: 'Active', avatar: 'JS' },
    { id: 3, name: 'Mike Johnson', role: 'Project Manager', email: 'mike@mindscraft.dev', status: 'Active', avatar: 'MJ' },
    { id: 4, name: 'Sarah Williams', role: 'Developer', email: 'sarah@mindscraft.dev', status: 'Away', avatar: 'SW' },
    { id: 5, name: 'Tom Brown', role: 'Marketing', email: 'tom@mindscraft.dev', status: 'Active', avatar: 'TB' },
  ]

  return (
    <div style={{
      padding: 'var(--space-8)',
      maxWidth: '1400px',
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
            Team
          </h1>
          <p style={{ fontSize: '14px', color: '#525252' }}>
            Manage team members and permissions
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
          Add Member
        </button>
      </div>

      {/* Team Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-5)' }}>
        {members.map((member) => (
          <div
            key={member.id}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              border: '1px solid #e5e5e5',
              padding: 'var(--space-5)',
              transition: 'all 150ms ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-4)' }}>
              <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#171717',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  fontWeight: '600'
                }}>
                  {member.avatar}
                </div>
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#171717', marginBottom: '2px' }}>
                    {member.name}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#a3a3a3' }}>
                    {member.role}
                  </p>
                </div>
              </div>
              <button style={{
                padding: '6px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: 'transparent',
                color: '#525252',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
              }}>
                <DotsThree size={20} weight="bold" />
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
              <Envelope size={16} style={{ color: '#a3a3a3' }} />
              <span style={{ fontSize: '13px', color: '#525252' }}>{member.email}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{
                padding: '4px 12px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: '500',
                color: member.status === 'Active' ? '#10b981' : '#f59e0b',
                backgroundColor: member.status === 'Active' ? '#10b98115' : '#f59e0b15'
              }}>
                {member.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
