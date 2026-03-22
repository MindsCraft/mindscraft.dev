'use client'

import { Plus, Pencil, Trash, ArrowUpRight } from 'phosphor-react'
import Link from 'next/link'
import styles from '@/styles/admin/pages/projects.module.css'

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
    <div className="admin-container">
      {/* Page Header */}
      <div className="admin-page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="admin-page-title">Projects</h1>
          <p className="admin-page-desc">Manage your portfolio projects and client work</p>
        </div>
        <Link href="/admin/projects/new">
          <button className={styles.headerBtn}>
            <Plus size={18} weight="bold" />
            New Project
          </button>
        </Link>
      </div>

      {/* Projects Grid */}
      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            {/* Project Header */}
            <div className={styles.cardHeader}>
              <div>
                <h3 className={styles.title}>{project.name}</h3>
                <p className={styles.client}>{project.client}</p>
              </div>
              <span className={styles.statusBadge} style={{ color: getStatusColor(project.status), backgroundColor: `${getStatusColor(project.status)}15` }}>
                {project.status}
              </span>
            </div>

            {/* Progress Bar */}
            <div className={styles.progressWrap}>
              <div className={styles.progressHeader}>
                <span className={styles.progressLabel}>Progress</span>
                <span className={styles.progressValue}>{project.progress}%</span>
              </div>
              <div className={styles.progressBarBg}>
                <div className={styles.progressBarFill} style={{ width: `${project.progress}%`, backgroundColor: getStatusColor(project.status) }} />
              </div>
            </div>

            {/* Footer */}
            <div className={styles.footer}>
              <span className={styles.dueDate}>Due: {project.dueDate}</span>
              <div className={styles.actionWrap}>
                <button className={styles.actionBtn}>
                  <ArrowUpRight size={16} />
                </button>
                <button className={styles.actionBtn}>
                  <Pencil size={16} />
                </button>
                <button className={styles.actionBtnDanger}>
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
