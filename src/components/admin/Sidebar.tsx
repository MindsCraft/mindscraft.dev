'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

// Group navigation items by category
const navigationItems = [
  {
    category: 'Main',
    items: [
      { name: 'Dashboard', href: '/admin/dashboard', description: 'Overview of your site' }
    ]
  },
  {
    category: 'Content',
    items: [
      { name: 'Posts', href: '/admin/posts', description: 'Manage blog posts' },
      { name: 'Projects', href: '/admin/projects', description: 'Manage portfolio projects' },
      { name: 'Team', href: '/admin/team', description: 'Manage team members' },
      { name: 'Media', href: '/admin/media', description: 'Manage media files' }
    ]
  },
  {
    category: 'System',
    items: [
      { name: 'Settings', href: '/admin/settings', description: 'Site configuration' },
      { name: 'API', href: '/admin/api', description: 'API endpoints' }
    ]
  }
]

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <div className="hidden lg:flex lg:flex-shrink-0 fixed top-0 left-0 h-full z-30">
      <div
        className="flex flex-col w-64 h-full"
        style={{
          backgroundColor: 'var(--color-background)',
          borderRight: '1px solid var(--color-border)'
        }}
      >
        <div className="flex-1 flex flex-col overflow-y-auto">
          {/* Logo - Design System Spacing */}
          <div style={{
            padding: 'var(--space-6)',
            borderBottom: '1px solid var(--color-border)'
          }}>
            <Link href="/admin/dashboard">
              <Image
                src="/logo/new-logo.svg"
                alt="Mindscraft"
                width={140}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Navigation - Design System Typography & Spacing */}
          <nav style={{ padding: 'var(--space-6) 0' }}>
            {navigationItems.map((group) => (
              <div key={group.category} style={{ marginBottom: 'var(--space-8)' }}>
                {/* Category Label */}
                <h3
                  className="label"
                  style={{
                    paddingLeft: 'var(--space-6)',
                    paddingRight: 'var(--space-6)',
                    marginBottom: 'var(--space-3)'
                  }}
                >
                  {group.category}
                </h3>

                {/* Navigation Items */}
                <div style={{ paddingLeft: 'var(--space-4)', paddingRight: 'var(--space-4)' }}>
                  {group.items.map((item) => {
                    const isActive = pathname.startsWith(item.href)
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="body-base"
                        style={{
                          display: 'block',
                          padding: 'var(--space-3) var(--space-4)',
                          marginBottom: 'var(--space-1)',
                          borderRadius: 'var(--radius-md)',
                          fontWeight: isActive ? 'var(--font-medium)' : 'var(--font-normal)',
                          color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                          backgroundColor: isActive ? 'var(--color-surface)' : 'transparent',
                          transition: 'all var(--transition-fast)',
                          textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.backgroundColor = 'var(--color-surface)'
                            e.currentTarget.style.color = 'var(--color-text-primary)'
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.backgroundColor = 'transparent'
                            e.currentTarget.style.color = 'var(--color-text-secondary)'
                          }
                        }}
                        title={item.description}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>

        {/* User Profile - Design System */}
        <div
          style={{
            padding: 'var(--space-4)',
            borderTop: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-surface)'
          }}
        >
          <Link
            href="/admin/settings/profile"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              transition: 'opacity var(--transition-fast)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--color-text-primary)',
                color: 'var(--color-background)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-semibold)',
                flexShrink: 0
              }}
            >
              A
            </div>
            <div style={{ marginLeft: 'var(--space-3)', flex: 1 }}>
              <p
                className="body-sm font-medium"
                style={{ color: 'var(--color-text-primary)', marginBottom: '2px' }}
              >
                Admin User
              </p>
              <p className="caption">View profile</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
