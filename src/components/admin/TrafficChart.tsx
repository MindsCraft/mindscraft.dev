'use client'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { TrafficDataPoint } from '@/lib/dashboard-data'

interface TrafficChartProps {
    data: TrafficDataPoint[]
}

// Custom Tooltip matching Snow UI
const CustomTooltip = ({ active, payload, label }: any) => {
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
                <p
                    className="snow-body-75"
                    style={{
                        marginBottom: 'var(--snow-space-1)',
                        color: 'var(--snow-color-text-primary)',
                        fontWeight: 'var(--snow-font-weight-semibold)'
                    }}
                >
                    {label}
                </p>
                {payload.map((entry: any, index: number) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: 'var(--snow-space-2)' }}>
                        <div
                            style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: 'var(--snow-border-radius-circle)',
                                background: entry.stroke
                            }}
                        />
                        <span className="snow-body-75" style={{ color: 'var(--snow-color-text-secondary)' }}>
                            {entry.name}: <strong>{entry.value.toLocaleString()}</strong>
                        </span>
                    </div>
                ))}
            </div>
        )
    }
    return null
}

export default function TrafficChart({ data }: TrafficChartProps) {
    return (
        <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0C66E4" stopOpacity={0.12} />
                        <stop offset="95%" stopColor="#0C66E4" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPageViews" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#5E6C84" stopOpacity={0.12} />
                        <stop offset="95%" stopColor="#5E6C84" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid
                    strokeDasharray="0"
                    stroke="#DFE1E6"
                    vertical={false}
                    strokeWidth={1}
                />
                <XAxis
                    dataKey="date"
                    stroke="#8590A2"
                    style={{
                        fontSize: '11px',
                        fontWeight: 400,
                        fontFamily: 'var(--snow-font-family)'
                    }}
                    tick={{ fill: '#6B778C' }}
                    tickLine={{ stroke: '#DFE1E6' }}
                    axisLine={{ stroke: '#DFE1E6' }}
                />
                <YAxis
                    stroke="#8590A2"
                    style={{
                        fontSize: '11px',
                        fontWeight: 400,
                        fontFamily: 'var(--snow-font-family)'
                    }}
                    tick={{ fill: '#6B778C' }}
                    tickLine={{ stroke: '#DFE1E6' }}
                    axisLine={{ stroke: '#DFE1E6' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                    type="monotone"
                    dataKey="visitors"
                    stroke="#0C66E4"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorVisitors)"
                    name="Visitors"
                />
                <Area
                    type="monotone"
                    dataKey="pageViews"
                    stroke="#5E6C84"
                    strokeWidth={2}
                    strokeDasharray="0"
                    fillOpacity={1}
                    fill="url(#colorPageViews)"
                    name="Page Views"
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}
