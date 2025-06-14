'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Group navigation items by category - same as in Sidebar
const navigationItems = [
  {
    category: 'Main',
    items: [
      { name: 'Dashboard', href: '/admin/dashboard' }
    ]
  },
  {
    category: 'Content',
    items: [
      { name: 'Posts', href: '/admin/posts' },
      { name: 'Projects', href: '/admin/projects' },
      { name: 'Team', href: '/admin/team' },
      { name: 'Media', href: '/admin/media' }
    ]
  },
  {
    category: 'System',
    items: [
      { name: 'Analytics', href: '/admin/analytics' },
      { name: 'Settings', href: '/admin/settings' },
      { name: 'API', href: '/admin/api' }
    ]
  }
]

const MobileHeader = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [profileMenuOpen, setProfileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Extract the current page name from the pathname
  const getPageTitle = () => {
    const path = pathname.split('/').filter(Boolean)
    if (path.length > 1) {
      // Capitalize the first letter of the last path segment
      const pageName = path[path.length - 1]
      return pageName.charAt(0).toUpperCase() + pageName.slice(1)
    }
    return 'Dashboard'
  }

  return (
    <div className="sticky top-0 z-40 flex items-center justify-between gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <span className="h-6 w-6">☰</span>
      </button>

      <div className="text-sm font-semibold leading-6 text-gray-900">{getPageTitle()}</div>

      <div className="relative">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-700"
          onClick={() => setProfileMenuOpen(!profileMenuOpen)}
        >
          <span className="sr-only">Open user menu</span>
          <span className="h-6 w-6">👤</span>
        </button>

        {/* Profile dropdown menu */}
        {profileMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Link
              href="/admin/settings"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setProfileMenuOpen(false)}
            >
              Settings
            </Link>
            <Link
              href="/"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setProfileMenuOpen(false)}
            >
              Back to Website
            </Link>
          </div>
        )}
      </div>

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}
      >
        <div className="fixed inset-0 bg-gray-900/80" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-64 flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <div className="h-8 w-8 mr-3 relative">
                <div className="absolute inset-0 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
              </div>
              <h1 className="text-xl font-bold text-gray-900">Mindscraft</h1>
              <button
                type="button"
                className="ml-auto -mr-2.5 p-2.5 text-gray-700"
                onClick={() => setSidebarOpen(false)}
              >
                <span className="sr-only">Close sidebar</span>
                <span className="h-6 w-6">✕</span>
              </button>
            </div>

            <nav className="flex flex-1 flex-col">
              <div className="space-y-6">
                {navigationItems.map((group) => (
                  <div key={group.category}>
                    <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {group.category}
                    </h3>
                    <div className="mt-2 space-y-1">
                      {group.items.map((item) => {
                        const isActive = pathname.startsWith(item.href)
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                              isActive
                                ? 'bg-blue-50 text-blue-600'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                            }`}
                            onClick={() => setSidebarOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </nav>

            {/* User section */}
            <div className="flex-shrink-0 border-t border-gray-200 pt-4">
              <Link href="/admin/settings/profile" className="flex items-center" onClick={() => setSidebarOpen(false)}>
                <div className="inline-block h-9 w-9 rounded-full bg-gray-100 overflow-hidden">
                  <div className="h-full w-full flex items-center justify-center bg-blue-100 text-blue-600 font-medium">
                    A
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700">
                    Admin User
                  </p>
                  <p className="text-xs font-medium text-gray-500">
                    View profile
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileHeader
