'use client'

import { Plus, Envelope, DotsThree } from 'phosphor-react'
import styles from '@/styles/admin/pages/team.module.css'

export default function TeamPage() {
  const members = [
    { id: 1, name: 'John Doe', role: 'Developer', email: 'john@mindscraft.dev', status: 'Active', avatar: 'JD' },
    { id: 2, name: 'Jane Smith', role: 'Designer', email: 'jane@mindscraft.dev', status: 'Active', avatar: 'JS' },
    { id: 3, name: 'Mike Johnson', role: 'Project Manager', email: 'mike@mindscraft.dev', status: 'Active', avatar: 'MJ' },
    { id: 4, name: 'Sarah Williams', role: 'Developer', email: 'sarah@mindscraft.dev', status: 'Away', avatar: 'SW' },
    { id: 5, name: 'Tom Brown', role: 'Marketing', email: 'tom@mindscraft.dev', status: 'Active', avatar: 'TB' },
  ]

  return (
    <div className="admin-container">
      {/* Page Header */}
      <div className="admin-page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="admin-page-title">Team</h1>
          <p className="admin-page-desc">Manage team members and permissions</p>
        </div>
        <button className={styles.headerBtn}>
          <Plus size={18} weight="bold" />
          Add Member
        </button>
      </div>

      {/* Team Grid */}
      <div className={styles.grid}>
        {members.map((member) => (
          <div key={member.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.userInfo}>
                <div className={styles.avatar}>
                  {member.avatar}
                </div>
                <div>
                  <h3 className={styles.name}>{member.name}</h3>
                  <p className={styles.role}>{member.role}</p>
                </div>
              </div>
              <button className={styles.menuBtn}>
                <DotsThree size={20} weight="bold" />
              </button>
            </div>

            <div className={styles.contactInfo}>
              <Envelope size={16} className={styles.emailIcon} />
              <span className={styles.emailText}>{member.email}</span>
            </div>

            <div className={styles.footer}>
              <span 
                className={styles.statusBadge}
                style={{
                  color: member.status === 'Active' ? '#10b981' : '#f59e0b',
                  backgroundColor: member.status === 'Active' ? '#10b98115' : '#f59e0b15'
                }}
              >
                {member.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
