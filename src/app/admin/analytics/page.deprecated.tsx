// This file is a deprecated version of the analytics page.
// The analytics page is now located at src/app/admin/(protected)/analytics/page.tsx.
// This file is kept for reference only and is not used in the application.

'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function DeprecatedAnalyticsPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
          <p className="mt-2 text-sm text-gray-700">
            View website traffic and performance metrics.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Overview Stats */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Visitors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12,543</div>
            <p className="text-xs text-green-600 mt-1">+12.3% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Page Views</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">48,271</div>
            <p className="text-xs text-green-600 mt-1">+8.7% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Avg. Session Duration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2m 45s</div>
            <p className="text-xs text-red-600 mt-1">-1.2% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Bounce Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">42.8%</div>
            <p className="text-xs text-green-600 mt-1">-3.5% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Traffic Chart */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Traffic Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center bg-gray-50 rounded-md">
              <div className="text-center">
                <p className="text-gray-500 mb-2">Traffic chart will be displayed here</p>
                <p className="text-sm text-gray-400">Integration with Google Analytics or other analytics providers required</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Top Pages */}
        <Card>
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { page: 'Home', views: '12,345', percentage: '28%' },
                { page: 'About Us', views: '8,765', percentage: '20%' },
                { page: 'Services', views: '6,543', percentage: '15%' },
                { page: 'Blog', views: '4,321', percentage: '10%' },
                { page: 'Contact', views: '3,210', percentage: '7%' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium">{item.page}</p>
                    <div className="mt-1 w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: item.percentage }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{item.views}</p>
                    <p className="text-xs text-gray-500">{item.percentage}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { source: 'Direct', visits: '5,432', percentage: '32%' },
                { source: 'Organic Search', visits: '4,321', percentage: '25%' },
                { source: 'Social Media', visits: '3,456', percentage: '20%' },
                { source: 'Referral', visits: '2,345', percentage: '14%' },
                { source: 'Email', visits: '1,543', percentage: '9%' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium">{item.source}</p>
                    <div className="mt-1 w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-green-600 h-2.5 rounded-full"
                        style={{ width: item.percentage }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{item.visits}</p>
                    <p className="text-xs text-gray-500">{item.percentage}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Note about analytics integration */}
      <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              Note: This is a placeholder page with dummy data. To implement real analytics, you'll need to integrate with Google Analytics or another analytics provider.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
