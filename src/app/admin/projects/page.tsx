'use client'

import { Plus, Pencil, Trash, ArrowUpRight } from 'phosphor-react'
import Link from 'next/link'

export default function ProjectsPage() {
  const projects = [
    { id: 1, name: 'E-commerce Platform', client: 'TechCorp', status: 'Active', progress: 75, dueDate: 'Jan 15, 2025' },
    { id: 2, name: 'Mobile App Design', client: 'StartupXYZ', status: 'Active', progress: 60, dueDate: 'Jan 20, 2025' },
    { id: 3, name: 'Brand Identity', client: 'Creative Co', status: 'Completed', progress: 100, dueDate: 'Dec 10, 2024' },
    { id: 4, name: 'Website Redesign', client: 'Agency Inc', status: 'On Hold', progress: 30, dueDate: 'Feb 1, 2025' },
    { id: 5, name: 'Marketing Campaign', client: 'BizCorp', status: 'Active', progress: 45, dueDate: 'Jan 25, 2025' },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return '#06b6d4'
      case 'Completed': return '#10b981'
      case 'On Hold': return '#f59e0b'
      default: return '#525252'
    }
  }

  return (
    <div style={{
      padding: 'var(--space-8)',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      {/* Page Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-8)' }}>
        <div>
          <h1 style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#171717',
            marginBottom: 'var(--space-2)'
          }}>
            Projects
          </h1>
          <p style={{ fontSize: '14px', color: '#525252' }}>
            Manage your portfolio projects and client work
          </p>
        </div>
        <Link href="/admin/projects/new">
          <button style={{
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#171717',
            color: '#ffffff',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            transition: 'all 150ms ease'
          }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#000000'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#171717'}
          >
            <Plus size={18} weight="bold" />
            New Project
          </button>
        </Link>
      </div>

      {/* Projects Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: 'var(--space-5)' }}>
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              border: '1px solid #e5e5e5',
              padding: 'var(--space-5)',
              transition: 'all 150ms ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
          >
            {/* Project Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-4)' }}>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#171717', marginBottom: 'var(--space-1)' }}>
                  {project.name}
                </h3>
                <p style={{ fontSize: '13px', color: '#a3a3a3' }}>
                  {project.client}
                </p>
              </div>
              <span style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: '500',
                color: getStatusColor(project.status),
                backgroundColor: `${getStatusColor(project.status)}15`
              }}>
                {project.status}
              </span>
            </div>

            {/* Progress Bar */}
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-2)' }}>
                <span style={{ fontSize: '12px', color: '#525252', fontWeight: '500' }}>Progress</span>
                <span style={{ fontSize: '12px', color: '#171717', fontWeight: '600' }}>{project.progress}%</span>
              </div>
              <div style={{ width: '100%', height: '6px', backgroundColor: '#f5f5f5', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{
                  width: `${project.progress}%`,
                  height: '100%',
                  backgroundColor: getStatusColor(project.status),
                  transition: ' width 300ms ease'
                }} />
              </div>
            </div>

            {/* Footer */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', color: '#a3a3a3' }}>
                Due: {project.dueDate}
              </span>
              <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                <button style={{
                  padding: '6px',
                  borderRadius: '6px',
                  border: '1px solid #e5e5e5',
                  backgroundColor: '#ffffff',
                  color: '#525252',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'all 150ms ease'
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f5f5f5'; e.currentTarget.style.color = '#171717' }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.color = '#525252' }}
                >
                  <ArrowUpRight size={16} />
                </button>
                <button style={{
                  padding: '6px',
                  borderRadius: '6px',
                  border: '1px solid #e5e5e5',
                  backgroundColor: '#ffffff',
                  color: '#525252',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'all 150ms ease'
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f5f5f5'; e.currentTarget.style.color = '#171717' }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.color = '#525252' }}
                >
                  <Pencil size={16} />
                </button>
                <button style={{
                  padding: '6px',
                  borderRadius: '6px',
                  border: '1px solid #fee2e2',
                  backgroundColor: '#ffffff',
                  color: '#ef4444',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'all 150ms ease'
                }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fef2f2'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
                >
                  <Trash size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
