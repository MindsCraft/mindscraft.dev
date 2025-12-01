"use client";

import React from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// MindsCraft design system button variants
const buttonVariants = cva(
  "btn",
  {
    variants: {
      variant: {
        primary: "btn-primary",
        secondary: "btn-secondary",
        accent: "btn-accent",
        ghost: "btn-ghost",
        destructive: "btn-destructive",
      },
      size: {
        xs: "btn-xs",
        sm: "btn-sm",
        md: "btn-md",
        lg: "btn-lg",
        xl: "btn-xl",
      },
      fullWidth: {
        true: "btn-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'href'>,
  VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant, size, fullWidth, children, icon, href, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size, fullWidth, className }));

    const content = (
      <>
        <span className="button-text">{children}</span>
        {icon && <span className="button-icon">{icon}</span>}
      </>
    );

    // Render as Link if href is provided
    if (href) {
      return (
        <Link
          href={href}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {content}
        </Link>
      );
    }

    // Otherwise render as button
    return (
      <button
        className={classes}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
