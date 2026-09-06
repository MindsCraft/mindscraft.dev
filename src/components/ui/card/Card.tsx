import React from "react";
import "./card.css";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "subtle" | "stone" | "dark";
  padding?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  variant = "default",
  padding = "md",
  children,
  className = "",
  ...props
}) => {
  const classes = [
    "card",
    variant !== "default" ? `card--${variant}` : "",
    padding !== "md" ? `card--${padding}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
