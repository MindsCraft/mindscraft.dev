'use client'

import { useState } from 'react'
import { PlusCircle, SearchIcon, MailIcon, Clock, Filter, Trash, Eye } from '@/components/ui/icons'
import styles from '@/styles/admin/pages/leads.module.css'

interface Lead {
  id: string
  name: string
  email: string
  subject: string
  status: 'New' | 'Contacted' | 'Proposal' | 'Lost'
  date: string
}

export default function LeadsPage() {
  const [leads] = useState<Lead[]>([
    { id: '1', name: 'John Peterson', email: 'john@abc.com', subject: 'Custom App Redesign', status: 'New', date: '2 hours ago' },
    { id: '2', name: 'Sarah Miller', email: 'sarah@startwell.io', subject: 'Next.js Dev Inquiry', status: 'Contacted', date: '5 hours ago' },
    { id: '3', name: 'James Wilson', email: 'james@techcorp.io', subject: 'Staff Augmentation', status: 'Proposal', date: '1 day ago' },
    { id: '4', name: 'Elena G', email: 'elena@elena.com', subject: 'Consulting Proposal', status: 'Lost', date: '3 days ago' },
  ])

  const getStatusClass = (status: Lead['status']) => {
    switch (status) {
      case 'New': return styles.statusNew
      case 'Contacted': return styles.statusContacted
      case 'Proposal': return styles.statusProposal
      case 'Lost': return styles.statusLost
      default: return ''
    }
  }

  return (
    <div className="admin-container">
      {/* Header */}
      <div className="admin-page-header">
        <h1 className="admin-page-title">Lead Management</h1>
        <p className="admin-page-desc">
          Monitor and track incoming work enquiries from your website.
        </p>
      </div>

      <div className="section">
        <div className="card">
          <div className="card-header">
             <div className={styles.tableHeader}>
                <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                   <input 
                      type="text" 
                      placeholder="Search leads..." 
                      className={styles.searchBar} 
                   />
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                   <button className={styles.actionBtn}>
                      <Filter size={16} /> Filter
                   </button>
                   <button className="button button-sm">
                      <PlusCircle size={16} /> Manual Lead
                   </button>
                </div>
             </div>
          </div>
          
          <div className="card-body" style={{ padding: 0 }}>
             <div className={styles.tableContainer}>
                <table className={styles.leadsTable}>
                   <thead>
                      <tr>
                         <th>Client Information</th>
                         <th>Subject</th>
                         <th>Date Received</th>
                         <th>Status</th>
                         <th style={{ textAlign: 'right' }}>Actions</th>
                      </tr>
                   </thead>
                   <tbody>
                      {leads.map((lead) => (
                         <tr key={lead.id}>
                            <td>
                               <p className={styles.leadName}>{lead.name}</p>
                               <span className={styles.leadEmail}>{lead.email}</span>
                            </td>
                            <td className="caption" style={{ color: 'var(--color-text)' }}>
                               {lead.subject}
                            </td>
                            <td className="caption">
                               <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                  <Clock size={12} /> {lead.date}
                               </div>
                            </td>
                            <td>
                               <span className={`${styles.statusBadge} ${getStatusClass(lead.status)}`}>
                                  {lead.status}
                               </span>
                            </td>
                            <td style={{ textAlign: 'right' }}>
                               <div style={{ display: 'flex', gap: '4px', justifyContent: 'flex-end' }}>
                                  <button className={styles.actionBtn} title="View Details">
                                     <Eye size={12} />
                                  </button>
                                  <button className={styles.actionBtn} title="Delete Lead">
                                     <Trash size={12} />
                                  </button>
                               </div>
                            </td>
                         </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
