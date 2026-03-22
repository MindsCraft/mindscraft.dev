'use client'

import Link from 'next/link'
import { BarChart, Clock, FileText, Users, Briefcase, PlusCircle, Server, MailIcon } from '@/components/ui/icons'
import styles from '@/styles/admin/pages/dashboard.module.css'

export default function DashboardPage() {
  const stats = [
    { name: 'Total Posts', value: '24', icon: FileText, change: '+12%', changeType: 'positive' },
    { name: 'Active Projects', value: '8', icon: Briefcase, change: '+2', changeType: 'positive' },
    { name: 'Team Members', value: '5', icon: Users, change: '+1', changeType: 'positive' },
    { name: 'Unread Leads', value: '14', icon: MailIcon, change: '+5', changeType: 'positive' },
  ]

  const quickActions = [
    { title: 'New Post', icon: PlusCircle, href: '/admin/posts/new' },
    { title: 'Add Project', icon: Briefcase, href: '/admin/projects/new' },
    { title: 'View Leads', icon: MailIcon, href: '/admin/leads' },
    { title: 'Site Analytics', icon: BarChart, href: '/admin/marketing' },
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

      {/* Quick Actions Grid */}
      <div className="section">
        <h2 className={`heading-3 ${styles.cardTitleBase}`}>Quick Actions</h2>
        <div className={styles.quickActionsGrid}>
          {quickActions.map((action) => (
            <Link key={action.title} href={action.href} className={styles.actionCard}>
              <action.icon className={styles.actionIcon} />
              <span className={styles.actionText}>{action.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="section">
        <h2 className={`heading-3 ${styles.cardTitleBase}`}>Overview Metrics</h2>
        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <div key={stat.name} className="card">
              <div className="card-body">
                <div className={styles.statRow}>
                  <span className="caption">{stat.name}</span>
                  <stat.icon className={styles.statIcon} />
                </div>
                <div className="heading-2">{stat.value}</div>
                <p className="caption">
                  <span style={{ color: stat.changeType === 'positive' ? 'var(--color-success)' : 'var(--color-error)' }}>
                    {stat.change}
                  </span>{' '}
                  from last month
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Analytics Chart Card */}
      <div className="section">
        <div className="card">
          <div className="card-header">
            <h2 className={`heading-3 ${styles.cardTitleBase}`}>Analytics Overview</h2>
            <p className="caption">Performance metrics and insights</p>
          </div>
          <div className="card-body">
            <div className={styles.chartPlaceholder}>
              <p className={styles.chartText}>
                Analytics chart will be displayed here (Integrate Google Analytics or Plausible)
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
            <div className={styles.cardHeaderFlex}>
              <div>
                <h3 className={`heading-4 ${styles.cardTitleBase}`}>Recent Posts</h3>
                <p className="caption">Latest published blog posts</p>
              </div>
              <Link href="/admin/posts" className="button-outline button-sm">View All</Link>
            </div>
          </div>
          <div className="card-body">
            <div className="stack-sm">
              {[1, 2, 3].map((i) => (
                <div key={i} className={styles.listItem}>
                  <div>
                    <p className={styles.listTitle}>
                      Sample Blog Post Title {i}
                    </p>
                    <p className="caption">Published 2 days ago</p>
                  </div>
                  <span className={`${styles.badge} ${styles.badgeNew}`}>Published</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Enquiries */}
        <div className="card">
          <div className="card-header">
            <div className={styles.cardHeaderFlex}>
              <div>
                <h3 className={`heading-4 ${styles.cardTitleBase}`}>Recent Enquiries</h3>
                <p className="caption">Latest leads from contact form</p>
              </div>
              <Link href="/admin/leads" className="button-outline button-sm">View All</Link>
            </div>
          </div>
          <div className="card-body">
            <div className="stack-sm">
              {[1, 2, 3].map((i) => (
                <div key={i} className={styles.listItem}>
                  <div>
                    <p className={styles.listTitle}>
                      New Project Inquiry - Client {i}
                    </p>
                    <p className="caption">Received {i} hours ago</p>
                  </div>
                  <span className={`${styles.badge} ${styles.badgePending}`}>Pending</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* System Status */}
      <div className={`${styles.systemStatusCard} section`}>
        <div className="card">
          <div className="card-body">
             <div className={styles.statRow}>
                <div className={styles.systemStatusInfo}>
                  <Server className={styles.systemStatusIcon} />
                  <span className={styles.listTitleNoMargin}>System Status</span>
                </div>
                <div>
                  <span className={`${styles.badge} ${styles.badgeNew}`}>All Systems Operational</span>
                </div>
             </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
