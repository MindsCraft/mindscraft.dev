'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import {
  LayoutDashboard,
  FileText,
  FolderKanban,
  Users,
  Image as ImageIcon,
  Settings,
  Code2,
  ChevronRight,
  ExternalLink,
  Megaphone,
  Search,
} from 'lucide-react'

const navigationItems = [
  {
    category: 'Main',
    items: [
      { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    ],
  },
  {
    category: 'Content',
    items: [
      { name: 'Blog Posts', href: '/admin/posts',    icon: FileText      },
      { name: 'Marketing',  href: '/admin/marketing',icon: Megaphone     },
      { name: 'Projects',  href: '/admin/projects', icon: FolderKanban  },
      { name: 'Team',      href: '/admin/team',     icon: Users         },
      { name: 'Media',     href: '/admin/media',    icon: ImageIcon     },
      { name: 'SEO & Sharing', href: '/admin/seo',  icon: Search        },
    ],
  },
  {
    category: 'System',
    items: [
      { name: 'Settings', href: '/admin/settings', icon: Settings },
      { name: 'API',      href: '/admin/keys', icon: Code2    },
    ],
  },
]

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <div className="hidden lg:flex lg:shrink-0 fixed top-0 left-0 h-full z-30">
      <div
        className="flex flex-col w-64 h-full"
        style={{
          backgroundColor: 'var(--color-background)',
          borderRight: '1px solid var(--color-border)',
        }}
      >
        {/* ── Logo ─────────────────────────────────── */}
        <div style={{
          padding: 'var(--space-5) var(--space-6)',
          borderBottom: '1px solid var(--color-border)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <Link href="/admin/dashboard" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/logo/new-logo.svg" alt="Mindscraft" width={120} height={32} className="h-7 w-auto" />
          </Link>
          <Link
            href="/"
            target="_blank"
            title="View site"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '28px', height: '28px', borderRadius: 'var(--radius-md)',
              color: 'var(--color-text-tertiary)',
              transition: 'all var(--transition-fast)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'var(--color-surface)'
              e.currentTarget.style.color = 'var(--color-text-primary)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = 'var(--color-text-tertiary)'
            }}
          >
            <ExternalLink size={13} />
          </Link>
        </div>

        {/* ── Nav ──────────────────────────────────── */}
        <nav style={{ flex: 1, overflowY: 'auto', padding: 'var(--space-4) 0' }}>
          {navigationItems.map((group, gi) => (
            <div key={group.category} style={{ marginBottom: gi < navigationItems.length - 1 ? 'var(--space-6)' : 0 }}>
              <p style={{
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--font-semibold)',
                color: 'var(--color-text-tertiary)',
                textTransform: 'uppercase',
                padding: '0 var(--space-5)',
                marginBottom: 'var(--space-2)',
              }}>
                {group.category}
              </p>

              <div style={{ padding: '0 var(--space-3)' }}>
                {group.items.map((item) => {
                  const isActive = pathname.startsWith(item.href)
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-3)',
                        padding: 'var(--space-2) var(--space-3)',
                        marginBottom: '2px',
                        borderRadius: 'var(--radius-md)',
                        textDecoration: 'none',
                        fontSize: 'var(--text-sm)',
                        fontWeight: isActive ? 'var(--font-semibold)' : 'var(--font-normal)',
                        color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                        backgroundColor: isActive ? 'var(--color-surface)' : 'transparent',
                        borderLeft: isActive ? '2px solid var(--color-text-primary)' : '2px solid transparent',
                        transition: 'all var(--transition-fast)',
                        position: 'relative',
                      }}
                      onMouseEnter={e => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = 'var(--color-surface)'
                          e.currentTarget.style.color = 'var(--color-text-primary)'
                        }
                      }}
                      onMouseLeave={e => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = 'transparent'
                          e.currentTarget.style.color = 'var(--color-text-secondary)'
                        }
                      }}
                    >
                      <Icon
                        size={15}
                        style={{
                          flexShrink: 0,
                          opacity: isActive ? 1 : 0.6,
                          transition: 'opacity var(--transition-fast)',
                        }}
                      />
                      <span style={{ flex: 1 }}>{item.name}</span>
                      {isActive && (
                        <ChevronRight size={12} style={{ opacity: 0.4, flexShrink: 0 }} />
                      )}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* ── User profile ─────────────────────────── */}
        <div style={{
          padding: 'var(--space-3) var(--space-4)',
          borderTop: '1px solid var(--color-border)',
        }}>
          <Link
            href="/admin/settings"
            style={{
              display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
              padding: 'var(--space-2) var(--space-3)',
              borderRadius: 'var(--radius-md)',
              textDecoration: 'none',
              transition: 'background-color var(--transition-fast)',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-surface)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            {/* Avatar */}
            <div style={{
              width: '30px', height: '30px', flexShrink: 0,
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--color-text-primary)',
              color: 'var(--color-background)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '11px', fontWeight: 'var(--font-semibold)',
              letterSpacing: '0.02em',
            }}>
              A
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{
                fontSize: 'var(--text-sm)', fontWeight: 'var(--font-semibold)',
                color: 'var(--color-text-primary)', margin: 0,
                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
              }}>
                Admin User
              </p>
              <p style={{
                fontSize: 'var(--text-xs)', color: 'var(--color-text-tertiary)',
                margin: 0,
              }}>
                Administrator
              </p>
            </div>
            <Settings size={13} style={{ flexShrink: 0, color: 'var(--color-text-tertiary)', opacity: 0.6 }} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
