'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, LockKeyhole, Loader2 } from 'lucide-react'
import '@/styles/components/login.css'

export function LoginPageComponent() {
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
    <div className="lg-page">
      {/* Decorative Blob */}
      <div className="lg-blob" />

      <div className="lg-container">
        <div className="lg-back-link-wrap">
          <Link href="/" className="lg-back-link">
            <ArrowLeft /> Return to Site
          </Link>
        </div>

        <div className="lg-card">
          <div className="lg-icon-tile">
            <LockKeyhole />
          </div>

          <h1 className="lg-title">MindsCraft Admin</h1>
          <p className="lg-subtitle">Please authenticate to access the secure dashboard.</p>

          <form onSubmit={handleSubmit} className="lg-form">
            <div>
              <label htmlFor="password" className="lg-field-label">
                Secret Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="•••••••••••••"
                className="lg-input"
                required
                autoFocus
              />
            </div>

            {error && (
              <div className="lg-error">
                <span className="lg-error-dot" />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || !password}
              className="lg-submit"
            >
              {isLoading ? (
                <>
                  <Loader2 /> Verifying...
                </>
              ) : (
                'Unlock Dashboard'
              )}
            </button>
          </form>
        </div>

        <p className="lg-footer">
          Protected by MindsCraft Proxy. No Database Required.
        </p>
      </div>
    </div>
  )
}
