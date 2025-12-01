'use client'

import { ContentPerformanceItem } from '@/lib/dashboard-data'
import { FileText, Briefcase, Eye } from 'lucide-react'

interface ContentPerformanceProps {
    data: ContentPerformanceItem[]
}

export default function ContentPerformance({ data }: ContentPerformanceProps) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--snow-space-2)' }}>
            {data.map((item, index) => (
                <div
                    key={index}
                    className="snow-list-item"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--snow-space-3)', flex: '1', minWidth: 0 }}>
                        {/* Icon */}
                        <div
                            style={{
                                width: '28px',
                                height: '28px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid var(--snow-color-border-primary)',
                                borderRadius: 'var(--snow-border-radius-100)',
                                background: 'var(--snow-color-background-secondary)',
                                flexShrink: 0
                            }}
                        >
                            {item.type === 'post' ? (
                                <FileText style={{ width: '14px', height: '14px', color: 'var(--snow-color-text-tertiary)' }} />
                            ) : (
                                <Briefcase style={{ width: '14px', height: '14px', color: 'var(--snow-color-text-tertiary)' }} />
                            )}
                        </div>

                        {/* Content */}
                        <div style={{ flex: '1', minWidth: 0 }}>
                            <p
                                className="snow-body-100"
                                style={{
                                    fontWeight: 'var(--snow-font-weight-medium)',
                                    color: 'var(--snow-color-text-primary)',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    marginBottom: '2px'
                                }}
                            >
                                {item.title}
                            </p>
                            <p
                                className="snow-label"
                                style={{
                                    fontSize: 'var(--snow-font-size-50)',
                                    color: 'var(--snow-color-text-tertiary)'
                                }}
                            >
                                {item.type}
                            </p>
                        </div>
                    </div>

                    {/* Views */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--snow-space-1)',
                            flexShrink: 0,
                            marginLeft: 'var(--snow-space-4)'
                        }}
                    >
                        <Eye style={{ width: '14px', height: '14px', color: 'var(--snow-color-text-tertiary)' }} />
                        <span
                            className="snow-body-75"
                            style={{
                                fontWeight: 'var(--snow-font-weight-semibold)',
                                color: 'var(--snow-color-text-primary)',
                                fontVariantNumeric: 'tabular-nums'
                            }}
                        >
                            {item.views.toLocaleString()}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}
