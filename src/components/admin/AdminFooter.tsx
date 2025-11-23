'use client'

export default function AdminFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{
      borderTop: '1px solid #e5e5e5',
      padding: 'var(--space-6) var(--space-8)',
      backgroundColor: '#fafafa'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 'var(--space-4)'
      }}>
        <div style={{ fontSize: '12px', color: '#a3a3a3' }}>
          © {currentYear} MindsCraft Design System
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-6)' }}>
          <a
            href="/about"
            style={{
              fontSize: '12px',
              color: '#a3a3a3',
              textDecoration: 'none',
              transition: 'color 150ms ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#171717'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#a3a3a3'}
          >
            About
          </a>
          <a
            href="/support"
            style={{
              fontSize: '12px',
              color: '#a3a3a3',
              textDecoration: 'none',
              transition: 'color 150ms ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#171717'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#a3a3a3'}
          >
            Support
          </a>
          <a
            href="/contact"
            style={{
              fontSize: '12px',
              color: '#a3a3a3',
              textDecoration: 'none',
              transition: 'color 150ms ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#171717'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#a3a3a3'}
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  )
}
