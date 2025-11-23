'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { BellIconOutline, UserCircleIconOutline, Cog6ToothIconOutline } from '@/components/ui/icons';
import { usePathname } from 'next/navigation';

export default function AdminHeader() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
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
        setIsProfileMenuOpen(false);
      }
    };
    if (isProfileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isProfileMenuOpen]);

  return (
    <header
      className="admin-desktop-header"
      style={{
        position: 'fixed',
        top: 0,
        left: '256px',
        right: 0,
        zIndex: 50,
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-6)',
        borderBottom: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-background)',
        padding: '0 var(--space-6)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="heading-3" style={{ marginBottom: 0 }}>{getPageTitle()}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          {/* Notification button */}
          <button
            type="button"
            style={{
              padding: 'var(--space-2)',
              color: 'var(--color-text-tertiary)',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-text-primary)';
              e.currentTarget.style.backgroundColor = 'var(--color-surface)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-text-tertiary)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <span className="sr-only">View notifications</span>
            <BellIconOutline style={{ width: '20px', height: '20px' }} aria-hidden="true" />
          </button>

          {/* Profile dropdown */}
          <div style={{ position: 'relative' }} ref={profileMenuRef}>
            <button
              type="button"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                padding: 'var(--space-2)',
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
              }}
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-surface)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <UserCircleIconOutline style={{ width: '28px', height: '28px', color: 'var(--color-text-tertiary)' }} aria-hidden="true" />
              <span className="body-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>Admin User</span>
            </button>
            {isProfileMenuOpen && (
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
                  onClick={() => setIsProfileMenuOpen(false)}
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
                  onClick={() => setIsProfileMenuOpen(false)}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-surface)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  Back to Website
                </Link>
                {/* Sign Out removed */}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
