'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BellIconOutline, UserCircleIconOutline, Cog6ToothIconOutline } from '@/components/ui/icons'
import { usePathname } from 'next/navigation'

export default function AdminHeader() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
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
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <div className="flex flex-1 items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{getPageTitle()}</h1>
        </div>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          {/* Notification button */}
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-500 hover:text-gray-900"
          >
            <span className="sr-only">View notifications</span>
            <BellIconOutline className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Profile dropdown */}
          <div className="relative">
            <button
              type="button"
              className="-m-1.5 flex items-center p-1.5"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            >
              <span className="sr-only">Open user menu</span>
              <UserCircleIconOutline className="h-8 w-8 text-gray-400" aria-hidden="true" />
              <span className="hidden lg:flex lg:items-center">
                <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                  Admin User
                </span>
              </span>
            </button>

            {/* Profile dropdown menu */}
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Link
                  href="/admin/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsProfileMenuOpen(false)}
                >
                  Settings
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsProfileMenuOpen(false)}
                >
                  Back to Website
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
