'use client'

export default function AdminFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200 py-4 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-500">
          &copy; {currentYear} Mindscraft. All rights reserved.
        </div>
        <div className="mt-4 md:mt-0 flex space-x-6">
          <a href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
            Privacy Policy
          </a>
          <a href="/terms" className="text-sm text-gray-500 hover:text-gray-900">
            Terms of Service
          </a>
          <a href="/help" className="text-sm text-gray-500 hover:text-gray-900">
            Help Center
          </a>
        </div>
      </div>
    </footer>
  )
}
