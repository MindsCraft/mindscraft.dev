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
      { name: 'Analytics', href: '/admin/analytics', description: 'Site traffic and metrics' },
      { name: 'Settings', href: '/admin/settings', description: 'Site configuration' },
      { name: 'API', href: '/admin/api', description: 'API endpoints' }
    ]
  }
]

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <div className="hidden lg:flex lg:flex-shrink-0 fixed top-0 left-0 h-full z-30">
      <div className="flex flex-col w-64 border-r border-gray-200 bg-white h-full">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          {/* Logo and title */}
          <div className="flex items-center flex-shrink-0 px-4 mb-5">
            <div className="h-8 w-8 mr-3 relative">
              <div className="absolute inset-0 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold text-lg">
                M
              </div>
            </div>
            <h1 className="text-xl font-bold text-gray-900">Mindscraft</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 bg-white space-y-6">
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

        {/* User section */}
        <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
          <Link href="/admin/settings/profile" className="flex-shrink-0 w-full group block">
            <div className="flex items-center">
              <div className="inline-block h-9 w-9 rounded-full bg-gray-100 overflow-hidden">
                <div className="h-full w-full flex items-center justify-center bg-blue-100 text-blue-600 font-medium">
                  A
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  Admin User
                </p>
                <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                  View profile
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
