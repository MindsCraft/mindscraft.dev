'use client'

import { TimeRange } from '@/lib/dashboard-data'

interface TimeRangeSelectorProps {
    selected: TimeRange
    onChange: (range: TimeRange) => void
}

export default function TimeRangeSelector({ selected, onChange }: TimeRangeSelectorProps) {
    const ranges: { value: TimeRange; label: string }[] = [
        { value: 'today', label: 'Today' },
        { value: 'week', label: 'Week' },
        { value: 'month', label: 'Month' },
        { value: 'year', label: 'Year' },
    ]

    return (
        <div style={{
            display: 'inline-flex',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden'
        }}>
            {ranges.map((range, index) => (
                <button
                    key={range.value}
                    onClick={() => onChange(range.value)}
                    className="body-sm"
                    style={{
                        padding: 'var(--space-2) var(--space-4)',
                        fontWeight: 'var(--font-medium)',
                        borderRight: index < ranges.length - 1 ? '1px solid var(--color-border)' : 'none',
                        backgroundColor: selected === range.value ? 'var(--color-text-primary)' : 'var(--color-background)',
                        color: selected === range.value ? 'var(--color-background)' : 'var(--color-text-secondary)',
                        cursor: 'pointer',
                        border: 'none',
                        outline: 'none',
                        transition: 'all var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => {
                        if (selected !== range.value) {
                            e.currentTarget.style.backgroundColor = 'var(--color-surface)'
                            e.currentTarget.style.color = 'var(--color-text-primary)'
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (selected !== range.value) {
                            e.currentTarget.style.backgroundColor = 'var(--color-background)'
                            e.currentTarget.style.color = 'var(--color-text-secondary)'
                        }
                    }}
                >
                    {range.label}
                </button>
            ))}
        </div>
    )
}
