'use client'

export const dynamic = 'force-dynamic'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PlusCircle, Upload, FolderOpen } from '@/components/ui/icons'
import Link from 'next/link'

export default function MediaPage() {
  // Dummy media items for demonstration
  const mediaItems = [
    { id: '1', name: 'hero-image.jpg', type: 'image/jpeg', size: '1.2 MB', url: 'https://picsum.photos/800/600?random=1' },
    { id: '2', name: 'about-team.jpg', type: 'image/jpeg', size: '0.8 MB', url: 'https://picsum.photos/800/600?random=2' },
    { id: '3', name: 'project-screenshot.png', type: 'image/png', size: '2.4 MB', url: 'https://picsum.photos/800/600?random=3' },
    { id: '4', name: 'company-logo.svg', type: 'image/svg+xml', size: '0.1 MB', url: 'https://picsum.photos/800/600?random=4' },
    { id: '5', name: 'product-demo.mp4', type: 'video/mp4', size: '8.7 MB', url: 'https://picsum.photos/800/600?random=5' },
    { id: '6', name: 'whitepaper.pdf', type: 'application/pdf', size: '3.5 MB', url: 'https://picsum.photos/800/600?random=6' },
  ]

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Media Library</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage your website's images, videos, and other media files.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
          >
            <Upload className="h-4 w-4 mr-2" />
            Upload Files
          </button>
        </div>
      </div>

      {/* Folder navigation */}
      <div className="mt-6 flex space-x-2 text-sm">
        <button className="inline-flex items-center px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
          <FolderOpen className="h-4 w-4 mr-1" />
          All Files
        </button>
        <button className="inline-flex items-center px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
          <FolderOpen className="h-4 w-4 mr-1" />
          Images
        </button>
        <button className="inline-flex items-center px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
          <FolderOpen className="h-4 w-4 mr-1" />
          Videos
        </button>
        <button className="inline-flex items-center px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
          <FolderOpen className="h-4 w-4 mr-1" />
          Documents
        </button>
      </div>

      {/* Media grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {mediaItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="h-40 bg-gray-100 flex items-center justify-center">
              {item.type.startsWith('image/') ? (
                <img src={item.url} alt={item.name} className="h-full w-full object-cover" />
              ) : (
                <div className="text-center p-4">
                  <div className="text-4xl mb-2">📄</div>
                  <p className="text-sm text-gray-500">{item.type}</p>
                </div>
              )}
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium text-gray-900 truncate">{item.name}</h3>
              <div className="mt-1 flex justify-between text-sm text-gray-500">
                <span>{item.size}</span>
                <span>{item.type.split('/')[1]}</span>
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                <button className="text-blue-600 hover:text-blue-800 text-sm">View</button>
                <button className="text-blue-600 hover:text-blue-800 text-sm">Copy URL</button>
                <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Note about implementation */}
      <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              Note: This is a placeholder page. To fully implement media management, you'll need to add file upload functionality and storage integration.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
