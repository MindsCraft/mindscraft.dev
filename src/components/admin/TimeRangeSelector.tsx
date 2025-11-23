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
        <div className="snow-segmented-control">
            {ranges.map((range) => (
                <button
                    key={range.value}
                    onClick={() => onChange(range.value)}
                    className={`snow-segmented-control-item ${selected === range.value ? 'snow-segmented-control-item-active' : ''
                        }`}
                >
                    {range.label}
                </button>
            ))}
        </div>
    )
}
