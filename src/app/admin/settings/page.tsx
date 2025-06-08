'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function SettingsPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage your website settings and configurations.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-8">
        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div>
                <label htmlFor="site-title" className="block text-sm font-medium text-gray-700">
                  Site Title
                </label>
                <input
                  type="text"
                  name="site-title"
                  id="site-title"
                  defaultValue="Mindscraft - UX-Focused Web Development Agency"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="site-description" className="block text-sm font-medium text-gray-700">
                  Site Description
                </label>
                <textarea
                  name="site-description"
                  id="site-description"
                  rows={3}
                  defaultValue="We help startups and product teams launch faster with our AI-powered web development and UX design services. Transform your ideas into reality with our expert team."
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="site-url" className="block text-sm font-medium text-gray-700">
                  Site URL
                </label>
                <input
                  type="url"
                  name="site-url"
                  id="site-url"
                  defaultValue="https://mindscraft.dev"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* SEO Settings */}
        <Card>
          <CardHeader>
            <CardTitle>SEO Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div>
                <label htmlFor="meta-title" className="block text-sm font-medium text-gray-700">
                  Default Meta Title
                </label>
                <input
                  type="text"
                  name="meta-title"
                  id="meta-title"
                  defaultValue="Mindscraft - UX-Focused Web Development Agency"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="meta-description" className="block text-sm font-medium text-gray-700">
                  Default Meta Description
                </label>
                <textarea
                  name="meta-description"
                  id="meta-description"
                  rows={3}
                  defaultValue="We help startups and product teams launch faster with our AI-powered web development and UX design services. Transform your ideas into reality with our expert team."
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="google-analytics" className="block text-sm font-medium text-gray-700">
                  Google Analytics ID
                </label>
                <input
                  type="text"
                  name="google-analytics"
                  id="google-analytics"
                  defaultValue="G-YVGX6Q8GXE"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Social Media Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Social Media</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div>
                <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">
                  Twitter URL
                </label>
                <input
                  type="url"
                  name="twitter"
                  id="twitter"
                  defaultValue="https://twitter.com/mindscraft"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  name="linkedin"
                  id="linkedin"
                  defaultValue="https://linkedin.com/company/mindscraft"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="github" className="block text-sm font-medium text-gray-700">
                  GitHub URL
                </label>
                <input
                  type="url"
                  name="github"
                  id="github"
                  defaultValue="https://github.com/mindscraft"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Note about settings storage */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              {/* Icon removed for SSR issue isolation */}
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                Note: This is a placeholder page. To fully implement settings management, you'll need to add a Settings model to your database schema or use environment variables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
