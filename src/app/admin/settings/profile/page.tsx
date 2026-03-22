'use client'

import { User, Envelope, Lock, Upload } from 'phosphor-react'
import { useState } from 'react'
import styles from '@/styles/admin/pages/profile.module.css'

export default function ProfilePage() {
    const [isSaving, setIsSaving] = useState(false)

    const handleSave = () => {
        setIsSaving(true)
        setTimeout(() => setIsSaving(false), 1000)
    }

    return (
        <div className="admin-container">
            <div className="admin-page-header">
                <h1 className="admin-page-title">Profile Settings</h1>
                <p className="admin-page-desc">Manage your account profile</p>
            </div>

            <div className={styles.sectionCard}>
                <h2 className={styles.sectionTitle}>Personal Information</h2>

                <div style={{ marginBottom: 'var(--space-6)' }}>
                    <label className={styles.label}>Profile Photo</label>
                    <div className={styles.photoWrap}>
                        <div className={styles.photoAvatar}>
                            AU
                        </div>
                        <button className={styles.uploadBtn}>
                            <Upload size={16} />
                            Upload Photo
                        </button>
                    </div>
                </div>

                <div className={styles.gridTwoCol}>
                    <div>
                        <label className={styles.label}>Full Name</label>
                        <div className={styles.inputGroup}>
                            <User size={18} className={styles.inputIcon} />
                            <input
                                type="text"
                                defaultValue="Admin User"
                                className={styles.inputBox}
                            />
                        </div>
                    </div>

                    <div>
                        <label className={styles.label}>Email Address</label>
                        <div className={styles.inputGroup}>
                            <Envelope size={18} className={styles.inputIcon} />
                            <input
                                type="email"
                                defaultValue="admin@mindscraft.dev"
                                className={styles.inputBox}
                            />
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: 'var(--space-5)' }}>
                    <label className={styles.label}>Bio</label>
                    <textarea
                        rows={4}
                        placeholder="Tell us about yourself..."
                        className={styles.textareaBox}
                    />
                </div>
            </div>

            <div className={styles.sectionCard}>
                <h2 className={styles.sectionTitle}>Security</h2>

                <div className={styles.gridTwoCol}>
                    <div>
                        <label className={styles.label}>Current Password</label>
                        <div className={styles.inputGroup}>
                            <Lock size={18} className={styles.inputIcon} />
                            <input
                                type="password"
                                placeholder="••••••••"
                                className={styles.inputBox}
                            />
                        </div>
                    </div>

                    <div>
                        <label className={styles.label}>New Password</label>
                        <div className={styles.inputGroup}>
                            <Lock size={18} className={styles.inputIcon} />
                            <input
                                type="password"
                                placeholder="••••••••"
                                className={styles.inputBox}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.actionFooter}>
                <button className={styles.btnSecondary}>
                    Cancel
                </button>
                <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className={styles.btnPrimary}
                >
                    {isSaving ? 'Saving...' : 'Save Changes'}
                </button>
            </div>
        </div>
    )
}
