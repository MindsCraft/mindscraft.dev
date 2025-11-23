'use client'

import { VisitorSource, DeviceBreakdown } from '@/lib/dashboard-data'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

interface VisitorAnalyticsProps {
    sources: VisitorSource[]
    devices: DeviceBreakdown[]
}

// Snow UI chromatic colors for pie chart
const DEVICE_COLORS = ['#0C66E4', '#5E6C84', '#8590A2']

// Custom Tooltip
const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <div
                style={{
                    background: 'var(--snow-chrome-0)',
                    border: '1px solid var(--snow-color-border-primary)',
                    borderRadius: 'var(--snow-border-radius-100)',
                    padding: 'var(--snow-space-2) var(--snow-space-3)',
                    boxShadow: 'var(--snow-elevation-surface-overlay)'
                }}
            >
                <span className="snow-body-75" style={{ color: 'var(--snow-color-text-primary)', fontWeight: 'var(--snow-font-weight-semibold)' }}>
                    {payload[0].name}: {payload[0].value}%
                </span>
            </div>
        )
    }
    return null
}

export default function VisitorAnalytics({ sources, devices }: VisitorAnalyticsProps) {
    const deviceData = devices.map((device, index) => ({
        ...device,
        color: DEVICE_COLORS[index]
    }))

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--snow-space-6)' }}>
            {/* Traffic Sources */}
            <div>
                <h4 className="snow-label" style={{ marginBottom: 'var(--snow-space-3)' }}>
                    Traffic Sources
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--snow-space-3)' }}>
                    {sources.map((source, index) => (
                        <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--snow-space-1)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <span
                                    className="snow-body-75"
                                    style={{
                                        fontWeight: 'var(--snow-font-weight-medium)',
                                        color: 'var(--snow-color-text-secondary)'
                                    }}
                                >
                                    {source.source}
                                </span>
                                <span
                                    className="snow-body-75"
                                    style={{
                                        fontWeight: 'var(--snow-font-weight-semibold)',
                                        color: 'var(--snow-color-text-primary)',
                                        fontVariantNumeric: 'tabular-nums'
                                    }}
                                >
                                    {source.percentage}%
                                </span>
                            </div>
                            <div
                                style={{
                                    width: '100%',
                                    height: '6px',
                                    background: 'var(--snow-chrome-200)',
                                    borderRadius: '2px',
                                    overflow: 'hidden'
                                }}
                            >
                                <div
                                    style={{
                                        width: `${source.percentage}%`,
                                        height: '100%',
                                        background: 'var(--snow-interactive-600)',
                                        borderRadius: '2px',
                                        transition: 'width 400ms var(--snow-motion-ease-out)'
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Device Breakdown */}
            <div>
                <h4 className="snow-label" style={{ marginBottom: 'var(--snow-space-3)' }}>
                    Device Breakdown
                </h4>
                <ResponsiveContainer width="100%" height={180}>
                    <PieChart>
                        <Pie
                            data={deviceData}
                            cx="50%"
                            cy="50%"
                            innerRadius={42}
                            outerRadius={68}
                            paddingAngle={0}
                            dataKey="percentage"
                            nameKey="device"
                        >
                            {deviceData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.color}
                                    stroke="var(--snow-chrome-0)"
                                    strokeWidth={2}
                                />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend
                            verticalAlign="bottom"
                            height={32}
                            iconType="circle"
                            wrapperStyle={{
                                fontSize: '11px',
                                color: 'var(--snow-color-text-secondary)',
                                fontFamily: 'var(--snow-font-family)'
                            }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
