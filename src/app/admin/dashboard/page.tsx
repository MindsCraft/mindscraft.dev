'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, Clock, FileText, Users, Briefcase } from '@/components/ui/icons'
import styles from '@/styles/admin/pages/dashboard.module.css'

export default function DashboardPage() {
  const stats = [
    { name: 'Total Posts', value: '24', icon: FileText, change: '+12%', changeType: 'positive' },
    { name: 'Active Projects', value: '8', icon: Briefcase, change: '+2', changeType: 'positive' },
    { name: 'Team Members', value: '5', icon: Users, change: '+1', changeType: 'positive' },
    { name: 'Avg. Response Time', value: '2.4h', icon: Clock, change: '-15%', changeType: 'negative' },
  ]

  return (
    <div className="admin-container">
      {/* Page Header */}
      <div className="admin-page-header">
        <h1 className="admin-page-title">Dashboard</h1>
        <p className="admin-page-desc">
          Welcome to the admin dashboard! Here's what's happening with your agency.
        </p>
      </div>

      {/* Stats Grid - Using design system spacing */}
      <div className="section">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="stat-card">
              <div className={styles.statRow}>
                <span className="stat-label">{stat.name}</span>
                <stat.icon className={styles.statIcon} />
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
            <div className={styles.chartPlaceholder}>
              <p className={`body-sm ${styles.chartText}`}>
                Analytics chart will be displayed here
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Grid */}
      <div className={styles.gridTwoCol}>
        {/* Recent Posts */}
        <div className="card">
          <div className="card-header">
            <h3 className="heading-4" style={{ marginBottom: 'var(--space-1)' }}>Recent Posts</h3>
            <p className="caption">Latest published blog posts</p>
          </div>
          <div className="card-body">
            <div className="stack-sm">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={styles.listItem}>
                  <p className={`body-base font-medium ${styles.listTitle}`}>
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
                <div key={i} className={styles.listItem}>
                  <p className={`body-base font-medium ${styles.listTitle}`}>
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
