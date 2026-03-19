'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, LockKeyhole, Loader2 } from 'lucide-react'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        // Success! Secure cookie is now set. Route to the dashboard.
        router.push('/admin/dashboard')
        router.refresh() // Force refresh layout to pick up authenticated state if needed
      } else {
        setError(data.error || 'Invalid credentials')
      }
    } catch (err) {
      setError('Connection failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50/50 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl -z-10 animate-pulse pointer-events-none" />

      <div className="w-full max-w-md p-8 relative">
        <div className="absolute top-8 left-8 hidden sm:block">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            <ArrowLeft className="mr-2 w-4 h-4" /> Return to Site
          </Link>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 sm:p-10 relative z-10">
          <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center shadow-lg shadow-gray-900/20 mb-8">
            <LockKeyhole className="w-6 h-6 text-white" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">MindsCraft Admin</h1>
          <p className="text-sm text-gray-500 mb-8 font-medium">Please authenticate to access the secure dashboard.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                Secret Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="•••••••••••••"
                className="w-full text-lg px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all outline-none bg-gray-50/50 focus:bg-white"
                required
                autoFocus
              />
            </div>

            {error && (
              <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse" />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || !password}
              className="w-full py-4 bg-gray-900 hover:bg-black text-white rounded-xl font-semibold shadow-xl shadow-gray-900/20 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-3" /> Verifying...
                </>
              ) : (
                'Unlock Dashboard'
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-xs font-medium text-gray-400 mt-8">
          Protected by Vercel Edge Middleware. No Database Required.
        </p>
      </div>
    </div>
  )
}
