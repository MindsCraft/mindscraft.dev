'use client'

import { User, Envelope, Lock, Upload } from 'phosphor-react'
import { useState } from 'react'

export default function ProfilePage() {
    const [isSaving, setIsSaving] = useState(false)

    const handleSave = () => {
        setIsSaving(true)
        setTimeout(() => setIsSaving(false), 1000)
    }

    return (
        <div style={{
            padding: 'var(--space-8)',
            maxWidth: '1000px',
            margin: '0 auto'
        }}>
            <h1 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#171717',
                marginBottom: 'var(--space-2)'
            }}>
                Profile Settings
            </h1>
            <p style={{ fontSize: '14px', color: '#525252', marginBottom: 'var(--space-8)' }}>
                Manage your account profile
            </p>

            <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                border: '1px solid #e5e5e5',
                padding: 'var(--space-6)',
                marginBottom: 'var(--space-6)'
            }}>
                <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#171717', marginBottom: 'var(--space-5)' }}>
                    Personal Information
                </h2>

                <div style={{ marginBottom: 'var(--space-6)' }}>
                    <label style={{ fontSize: '13px', fontWeight: '500', color: '#525252', display: 'block', marginBottom: 'var(--space-3)' }}>
                        Profile Photo
                    </label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                        <div style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            backgroundColor: '#171717',
                            color: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '32px',
                            fontWeight: '600'
                        }}>
                            AU
                        </div>
                        <button style={{
                            padding: '10px 20px',
                            borderRadius: '8px',
                            border: '1px solid #e5e5e5',
                            backgroundColor: '#ffffff',
                            color: '#171717',
                            fontSize: '14px',
                            fontWeight: '500',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--space-2)'
                        }}>
                            <Upload size={16} />
                            Upload Photo
                        </button>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
                    <div>
                        <label style={{ fontSize: '13px', fontWeight: '500', color: '#525252', display: 'block', marginBottom: 'var(--space-2)' }}>
                            Full Name
                        </label>
                        <div style={{ position: 'relative' }}>
                            <User size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#a3a3a3' }} />
                            <input
                                type="text"
                                defaultValue="Admin User"
                                style={{
                                    width: '100%',
                                    padding: '12px 12px 12px 40px',
                                    borderRadius: '8px',
                                    border: '1px solid #e5e5e5',
                                    fontSize: '14px'
                                }}
                            />
                        </div>
                    </div>

                    <div>
                        <label style={{ fontSize: '13px', fontWeight: '500', color: '#525252', display: 'block', marginBottom: 'var(--space-2)' }}>
                            Email Address
                        </label>
                        <div style={{ position: 'relative' }}>
                            <Envelope size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#a3a3a3' }} />
                            <input
                                type="email"
                                defaultValue="admin@mindscraft.dev"
                                style={{
                                    width: '100%',
                                    padding: '12px 12px 12px 40px',
                                    borderRadius: '8px',
                                    border: '1px solid #e5e5e5',
                                    fontSize: '14px'
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: 'var(--space-5)' }}>
                    <label style={{ fontSize: '13px', fontWeight: '500', color: '#525252', display: 'block', marginBottom: 'var(--space-2)' }}>
                        Bio
                    </label>
                    <textarea
                        rows={4}
                        placeholder="Tell us about yourself..."
                        style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: '8px',
                            border: '1px solid #e5e5e5',
                            fontSize: '14px',
                            resize: 'vertical',
                            fontFamily: 'inherit'
                        }}
                    />
                </div>
            </div>

            <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                border: '1px solid #e5e5e5',
                padding: 'var(--space-6)',
                marginBottom: 'var(--space-6)'
            }}>
                <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#171717', marginBottom: 'var(--space-5)' }}>
                    Security
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
                    <div>
                        <label style={{ fontSize: '13px', fontWeight: '500', color: '#525252', display: 'block', marginBottom: 'var(--space-2)' }}>
                            Current Password
                        </label>
                        <div style={{ position: 'relative' }}>
                            <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#a3a3a3' }} />
                            <input
                                type="password"
                                placeholder="••••••••"
                                style={{
                                    width: '100%',
                                    padding: '12px 12px 12px 40px',
                                    borderRadius: '8px',
                                    border: '1px solid #e5e5e5',
                                    fontSize: '14px'
                                }}
                            />
                        </div>
                    </div>

                    <div>
                        <label style={{ fontSize: '13px', fontWeight: '500', color: '#525252', display: 'block', marginBottom: 'var(--space-2)' }}>
                            New Password
                        </label>
                        <div style={{ position: 'relative' }}>
                            <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#a3a3a3' }} />
                            <input
                                type="password"
                                placeholder="••••••••"
                                style={{
                                    width: '100%',
                                    padding: '12px 12px 12px 40px',
                                    borderRadius: '8px',
                                    border: '1px solid #e5e5e5',
                                    fontSize: '14px'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end' }}>
                <button style={{
                    padding: '12px 24px',
                    borderRadius: '8px',
                    border: '1px solid #e5e5e5',
                    backgroundColor: '#ffffff',
                    color: '#171717',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer'
                }}>
                    Cancel
                </button>
                <button
                    onClick={handleSave}
                    disabled={isSaving}
                    style={{
                        padding: '12px 24px',
                        borderRadius: '8px',
                        border: 'none',
                        backgroundColor: '#171717',
                        color: '#ffffff',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: isSaving ? 'not-allowed' : 'pointer',
                        opacity: isSaving ? 0.6 : 1
                    }}
                >
                    {isSaving ? 'Saving...' : 'Save Changes'}
                </button>
            </div>
        </div>
    )
}
