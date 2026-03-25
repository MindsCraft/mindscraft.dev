'use client'

import Link from 'next/link'
import { BarChart, FileText, Users, Briefcase, PlusCircle, Server, MailIcon } from '@/components/ui/icons'
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
    { title: 'AI Marketing', icon: BarChart, href: '/admin/marketing' },
  ]

  return (
    <div className="admin-container">
      {/* Page Header */}
      <div className="admin-page-header">
        <h1 className="admin-page-title">Dashboard</h1>
        <p className="admin-page-desc">
          Welcome to the admin dashboard! Here&apos;s what&apos;s happening with your agency.
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

      {/* Google Analytics Widget */}
      <div className="section">
        <GAAnalyticsWidget />
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
                    <p className={styles.listTitle}>Sample Blog Post Title {i}</p>
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
                    <p className={styles.listTitle}>New Project Inquiry - Client {i}</p>
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

// ─── Google Analytics Widget ──────────────────────────────────────────────────
function GAAnalyticsWidget() {
  const reports = [
    { label: 'Realtime', desc: 'Users active right now', icon: '🟢', href: 'https://analytics.google.com/analytics/web/#/realtime' },
    { label: 'Audience', desc: 'Users, sessions & demographics', icon: '👥', href: 'https://analytics.google.com/analytics/web/' },
    { label: 'Acquisition', desc: 'Traffic sources & channels', icon: '📈', href: 'https://analytics.google.com/analytics/web/' },
    { label: 'Top Pages', desc: 'Most visited content', icon: '📄', href: 'https://analytics.google.com/analytics/web/' },
  ]

  return (
    <div className={`card ${styles.gaCard}`}>
      <div className="card-header">
        <div className={styles.cardHeaderFlex}>
          <div>
            <h2 className={`heading-3 ${styles.cardTitleBase}`}>
              <span className={styles.gaIconDot} />
              Google Analytics
            </h2>
            <p className="caption">View traffic and performance data for your site</p>
          </div>
          <a
            href="https://analytics.google.com/analytics/web/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.gaOpenBtn}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Open GA4
          </a>
        </div>
      </div>
      <div className="card-body">
        <div className={styles.gaGrid}>
          {reports.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.gaReportCard}
            >
              <span className={styles.gaReportIcon}>{item.icon}</span>
              <div>
                <p className={styles.gaReportLabel}>{item.label}</p>
                <p className="caption">{item.desc}</p>
              </div>
              <svg className={styles.gaReportArrow} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </a>
          ))}
        </div>

        <div className={styles.gaSetupNote}>
          <div className={styles.gaSetupIcon}>
            <BarChart className={styles.gaSetupBarIcon} />
          </div>
          <div>
            <p className={styles.gaSetupTitle}>Connect Google Analytics 4</p>
            <p className="caption">
              Add your GA4 Measurement ID in{' '}
              <Link href="/admin/seo" className={styles.gaSetupLink}>
                SEO &amp; Sharing settings
              </Link>{' '}
              to enable full analytics tracking on your site.
            </p>
          </div>
          <Link href="/admin/seo" className={styles.gaSetupBtn}>
            Configure →
          </Link>
        </div>
      </div>
    </div>
  )
}
