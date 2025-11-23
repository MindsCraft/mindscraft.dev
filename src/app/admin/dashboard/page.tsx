'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, Clock, FileText, Users, Briefcase } from '@/components/ui/icons'

export default function DashboardPage() {
  const stats = [
    { name: 'Total Posts', value: '24', icon: FileText, change: '+12%', changeType: 'positive' },
    { name: 'Active Projects', value: '8', icon: Briefcase, change: '+2', changeType: 'positive' },
    { name: 'Team Members', value: '5', icon: Users, change: '+1', changeType: 'positive' },
    { name: 'Avg. Response Time', value: '2.4h', icon: Clock, change: '-15%', changeType: 'negative' },
  ]

  return (
    <div className="container" style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-12)' }}>
      {/* Page Header - Proper spacing and typography */}
      <div style={{ marginBottom: 'var(--space-8)' }}>
        <h1 className="heading-1">Dashboard</h1>
        <p className="body-base" style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-2)' }}>
          Welcome to the admin dashboard! Here's what's happening with your agency.
        </p>
      </div>

      {/* Stats Grid - Using design system spacing */}
      <div className="section">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="stat-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="stat-label">{stat.name}</span>
                <stat.icon style={{ width: '18px', height: '18px', color: 'var(--color-text-tertiary)' }} />
              </div>
              <div className="stat-value">{stat.value}</div>
              <p className="stat-change">
                {stat.change} from last month
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Analytics Chart Card */}
      <div className="section">
        <div className="card">
          <div className="card-header">
            <h2 className="heading-3" style={{ marginBottom: 'var(--space-1)' }}>Analytics Overview</h2>
            <p className="caption">Performance metrics and insights</p>
          </div>
          <div className="card-body">
            <div style={{
              height: '320px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--color-surface)',
              borderRadius: 'var(--radius-md)',
              border: '1px dashed var(--color-border)'
            }}>
              <p className="body-sm" style={{ color: 'var(--color-text-tertiary)' }}>
                Analytics chart will be displayed here
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-6)' }} className="lg:grid-cols-2">
        {/* Recent Posts */}
        <div className="card">
          <div className="card-header">
            <h3 className="heading-4" style={{ marginBottom: 'var(--space-1)' }}>Recent Posts</h3>
            <p className="caption">Latest published blog posts</p>
          </div>
          <div className="card-body">
            <div className="stack-sm">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  style={{
                    padding: 'var(--space-4)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    transition: 'all var(--transition-base)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border-hover)'
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <p className="body-base font-medium" style={{ marginBottom: 'var(--space-1)' }}>
                    Sample Blog Post Title {i}
                  </p>
                  <p className="caption">Published 2 days ago</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Projects */}
        <div className="card">
          <div className="card-header">
            <h3 className="heading-4" style={{ marginBottom: 'var(--space-1)' }}>Recent Projects</h3>
            <p className="caption">Latest portfolio work</p>
          </div>
          <div className="card-body">
            <div className="stack-sm">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  style={{
                    padding: 'var(--space-4)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    transition: 'all var(--transition-base)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border-hover)'
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <p className="body-base font-medium" style={{ marginBottom: 'var(--space-1)' }}>
                    Sample Project {i}
                  </p>
                  <p className="caption">Updated last week</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
