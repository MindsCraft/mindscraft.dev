'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// Navigation items for the admin panel
const navigationItems = [
  {
    category: 'Main',
    items: [{ name: 'Dashboard', href: '/admin/dashboard' }],
  },
  {
    category: 'Content',
    items: [
      { name: 'Posts', href: '/admin/posts' },
      { name: 'Projects', href: '/admin/projects' },
      { name: 'Team', href: '/admin/team' },
      { name: 'Media', href: '/admin/media' },
    ],
  },
  {
    category: 'System',
    items: [
      { name: 'Settings', href: '/admin/settings' },
      { name: 'API', href: '/admin/api' },
    ],
  },
];

const MobileHeader = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const pathname = usePathname();
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const getPageTitle = () => {
    const path = pathname.split('/').filter(Boolean);
    if (path.length > 1) {
      const pageName = path[path.length - 1];
      return pageName.charAt(0).toUpperCase() + pageName.slice(1);
    }
    return 'Dashboard';
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setProfileMenuOpen(false);
      }
    };
    if (profileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [profileMenuOpen]);

  const getUserInitials = () => 'AU';

  return (
    <>
      {/* Mobile Header Bar */}
      <div
        className="admin-mobile-header"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-6)',
          backgroundColor: 'var(--color-background)',
          padding: 'var(--space-4) var(--space-6)',
          boxShadow: 'var(--shadow-sm)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        {/* Menu Button */}
        <button
          type="button"
          style={{
            padding: 'var(--space-2)',
            color: 'var(--color-text-primary)',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: 'var(--text-lg)',
          }}
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <span>☰</span>
        </button>

        {/* Page Title */}
        <div className="heading-4" style={{ marginBottom: 0 }}>
          {getPageTitle()}
        </div>

        {/* Profile Menu */}
        <div style={{ position: 'relative' }} ref={profileMenuRef}>
          <button
            type="button"
            style={{
              padding: 'var(--space-2)',
              color: 'var(--color-text-primary)',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: 'var(--text-lg)',
            }}
            onClick={() => setProfileMenuOpen(!profileMenuOpen)}
          >
            <span className="sr-only">Open user menu</span>
            <span>👤</span>
          </button>

          {profileMenuOpen && (
            <div
              style={{
                position: 'absolute',
                right: 0,
                marginTop: 'var(--space-2)',
                width: '192px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-background)',
                padding: 'var(--space-2)',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--color-border)',
              }}
            >
              <Link
                href="/admin/settings"
                className="body-sm"
                style={{
                  display: 'block',
                  padding: 'var(--space-2) var(--space-3)',
                  color: 'var(--color-text-primary)',
                  textDecoration: 'none',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'all var(--transition-fast)',
                }}
                onClick={() => setProfileMenuOpen(false)}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-surface)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                Settings
              </Link>
              <Link
                href="/"
                className="body-sm"
                style={{
                  display: 'block',
                  padding: 'var(--space-2) var(--space-3)',
                  color: 'var(--color-text-primary)',
                  textDecoration: 'none',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'all var(--transition-fast)',
                }}
                onClick={() => setProfileMenuOpen(false)}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-surface)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                Back to Website
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 50 }} className="lg:hidden">
          {/* Backdrop */}
          <div
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
            onClick={() => setSidebarOpen(false)}
          />

          {/* Sidebar Panel */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              bottom: 0,
              width: '280px',
              backgroundColor: 'var(--color-background)',
              boxShadow: 'var(--shadow-xl)',
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto',
            }}
          >
            <div style={{ display: 'flex', flexGrow: 1, flexDirection: 'column', gap: 'var(--space-5)', padding: 'var(--space-6)', paddingBottom: 'var(--space-4)' }}>
              {/* Logo Header */}
              <div style={{ display: 'flex', height: '64px', flexShrink: 0, alignItems: 'center', borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
                <Image src="/logo/png/mindscraft-logo.png" alt="Mindscraft" width={140} height={40} className="h-8 w-auto" />
                <button
                  type="button"
                  style={{
                    marginLeft: 'auto',
                    padding: 'var(--space-2)',
                    color: 'var(--color-text-primary)',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 'var(--text-lg)',
                  }}
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <span>✕</span>
                </button>
              </div>

              {/* Navigation */}
              <nav style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                  {navigationItems.map((group) => (
                    <div key={group.category}>
                      <h3 className="label" style={{ paddingLeft: 'var(--space-3)', marginBottom: 'var(--space-2)' }}>
                        {group.category}
                      </h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                        {group.items.map((item) => {
                          const isActive = pathname.startsWith(item.href);
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="body-base"
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: 'var(--space-2) var(--space-3)',
                                fontSize: 'var(--text-sm)',
                                fontWeight: isActive ? 'var(--font-medium)' : 'var(--font-normal)',
                                borderRadius: 'var(--radius-md)',
                                backgroundColor: isActive ? 'var(--color-surface)' : 'transparent',
                                color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                                textDecoration: 'none',
                                transition: 'all var(--transition-fast)',
                              }}
                              onClick={() => setSidebarOpen(false)}
                              onMouseEnter={(e) => {
                                if (!isActive) {
                                  e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                                  e.currentTarget.style.color = 'var(--color-text-primary)';
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (!isActive) {
                                  e.currentTarget.style.backgroundColor = 'transparent';
                                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                                }
                              }}
                            >
                              {item.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </nav>

              {/* User Profile */}
              <div style={{ flexShrink: 0, borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-4)' }}>
                <Link
                  href="/admin/settings/profile"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    transition: 'opacity var(--transition-fast)',
                  }}
                  onClick={() => setSidebarOpen(false)}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--color-text-primary)',
                      color: 'var(--color-background)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 'var(--font-semibold)',
                    }}
                  >
                    {getUserInitials()}
                  </div>
                  <div style={{ marginLeft: 'var(--space-3)' }}>
                    <p className="body-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
                      Admin User
                    </p>
                    <p className="caption">View profile</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
