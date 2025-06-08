'use client'

import { ReactNode } from 'react'
import Sidebar from './Sidebar'
import MobileHeader from './MobileHeader'
import AdminHeader from './AdminHeader'
import AdminFooter from './AdminFooter'
import '@/styles/admin.css'

type AdminLayoutProps = {
  children: ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 lg:ml-64">
        <MobileHeader />
        <AdminHeader />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
        <AdminFooter />
      </div>
    </div>
  )
}
