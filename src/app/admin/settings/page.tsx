'use client'

import { Bell, Lock, Globe, Palette } from 'phosphor-react'
import styles from '@/styles/admin/pages/settings.module.css'

export default function SettingsPage() {
  return (
    <div className="admin-container">
      {/* Page Header */}
      <div className="admin-page-header">
        <h1 className="admin-page-title">Settings</h1>
        <p className="admin-page-desc">Manage your application settings and preferences</p>
      </div>

      {/* General Settings */}
      <div className={styles.sectionCard}>
        <div className={styles.sectionHeader}>
          <Globe size={24} weight="duotone" className={styles.sectionIcon} />
          <h2 className={styles.sectionTitle}>General</h2>
        </div>

        <div className={styles.formGroup}>
          <div>
            <label className={styles.label}>Site Name</label>
            <input
              type="text"
              defaultValue="MindsCraft"
              className={styles.inputBox}
            />
          </div>

          <div>
            <label className={styles.label}>Site Description</label>
            <textarea
              rows={3}
              defaultValue="A modern design agency creating beautiful digital experiences"
              className={styles.textareaBox}
            />
          </div>
        </div>
      </div>

      {/* Appearance Settings */}
      <div className={styles.sectionCard}>
        <div className={styles.sectionHeader}>
          <Palette size={24} weight="duotone" className={styles.sectionIcon} />
          <h2 className={styles.sectionTitle}>Appearance</h2>
        </div>

        <div>
          <label className={styles.label}>Theme</label>
          <div className={styles.themeGrid}>
            {['Light', 'Dark', 'System'].map((theme) => (
              <button
                key={theme}
                className={`${styles.themeBtn} ${theme === 'Light' ? styles.themeBtnActive : ''}`}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications Settings */}
      <div className={styles.sectionCard}>
        <div className={styles.sectionHeader}>
          <Bell size={24} weight="duotone" className={styles.sectionIcon} />
          <h2 className={styles.sectionTitle}>Notifications</h2>
        </div>

        <div className={styles.formGroup}>
          {[
            { label: 'Email notifications', description: 'Receive email updates about your account' },
            { label: 'Push notifications', description: 'Receive push notifications in your browser' },
            { label: 'Weekly digest', description: 'Get a weekly summary of your activity' },
          ].map((item) => (
            <div key={item.label} className={styles.notificationRow}>
              <div>
                <p className={styles.notifTitle}>{item.label}</p>
                <p className={styles.notifDesc}>{item.description}</p>
              </div>
              <label className={styles.toggleSwitchWrap}>
                <input type="checkbox" defaultChecked className={styles.toggleSwitchInput} />
                <span className={styles.toggleSwitchTrack}>
                  <span className={styles.toggleSwitchThumb} />
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Security Settings */}
      <div className={styles.sectionCard}>
        <div className={styles.sectionHeader}>
          <Lock size={24} weight="duotone" className={styles.sectionIcon} />
          <h2 className={styles.sectionTitle}>Security</h2>
        </div>

        <div className={styles.securityList}>
          <button className={styles.securityBtn}>
            Enable two-factor authentication
          </button>
          <button className={styles.securityBtn}>
            View active sessions
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className={styles.actionFooter}>
        <button className={styles.btnSecondary}>Cancel</button>
        <button className={styles.btnPrimary}>Save Changes</button>
      </div>
    </div>
  )
}
