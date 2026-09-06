import React from "react";
import "./button.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "subtle" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  href?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  href,
  children,
  icon,
  className = "",
  ...props
}) => {
  const classes = [
    "btn",
    `btn--${variant}`,
    size !== "md" ? `btn--${size}` : "",
    fullWidth ? "btn--full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={classes}>
        <span>{children}</span>
        {icon && <span className="btn__icon">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      <span>{children}</span>
      {icon && <span className="btn__icon">{icon}</span>}
    </button>
  );
};
