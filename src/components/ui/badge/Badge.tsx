"use client";

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

import './badge.css';

// Badge variants using class-variance-authority
const badgeVariants = cva(
    "badge",
    {
        variants: {
            variant: {
                default: "badge-default",
                outline: "badge-outline",
                solid: "badge-solid",
                accent: "badge-accent",
            },
            size: {
                sm: "badge-sm",
                md: "badge-md",
                lg: "badge-lg",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "md",
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
    children: React.ReactNode;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant, size, children, ...props }, ref) => {
        return (
            <span
                ref={ref}
                className={cn(badgeVariants({ variant, size, className }))}
                {...props}
            >
                {children}
            </span>
        );
    }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
