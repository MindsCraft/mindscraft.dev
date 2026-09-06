import React from "react";
import "./badge.css";

export interface BadgeProps {
  variant?: "industry" | "service" | "accent" | "dark";
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "industry",
  children,
  className = "",
}) => {
  return (
    <span className={`badge badge--${variant} ${className}`}>
      {children}
    </span>
  );
};
