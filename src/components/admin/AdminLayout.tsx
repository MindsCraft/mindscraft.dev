'use client'

import { ReactNode } from 'react'
import Sidebar from './Sidebar'
import MobileHeader from './MobileHeader'
import AdminFooter from './AdminFooter'
import '@/styles/admin/index.css'

interface AdminLayoutProps {
  children: ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Mobile Header - only shown on mobile */}
      <MobileHeader />

      {/* Sidebar - only shown on desktop, starts from top */}
      <Sidebar />

      {/* Main content area dynamically accounting for sidebar offset via native CSS */}
      <div className="admin-content-area">
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {children}
        </main>
        <AdminFooter />
      </div>
    </div>
  )
}
