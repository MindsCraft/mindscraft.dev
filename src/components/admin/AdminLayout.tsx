'use client'

import { ReactNode } from 'react'
import Sidebar from './Sidebar'
import MobileHeader from './MobileHeader'
import AdminFooter from './AdminFooter'
import '@/styles/admin.css'

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

      {/* Main content area with left margin on desktop to account for sidebar */}
      <div className="flex flex-col lg:ml-64" style={{ minHeight: '100vh' }}>
        <main className="flex-1">
          {children}
        </main>
        <AdminFooter />
      </div>
    </div>
  )
}
