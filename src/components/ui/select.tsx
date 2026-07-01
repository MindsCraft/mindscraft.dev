"use client";

import * as React from "react";
import { FiChevronDown } from "react-icons/fi";
import { cn } from "@/lib/utils";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> { }

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className={cn("form-select-wrap", className)}>
        <select className="form-select" ref={ref} {...props}>
          {children}
        </select>
        <span className="form-select-arrow" aria-hidden="true">
          <FiChevronDown />
        </span>
      </div>
    );
  }
);
Select.displayName = "Select";

export interface SelectOptionProps
  extends React.OptionHTMLAttributes<HTMLOptionElement> { }

const SelectOption = React.forwardRef<HTMLOptionElement, SelectOptionProps>(
  ({ className, ...props }, ref) => {
    return <option className={className} ref={ref} {...props} />;
  }
);
SelectOption.displayName = "SelectOption";

export { Select, SelectOption };
