"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  useFormContext,
  Controller,
  FieldValues,
  FieldPath,
} from "react-hook-form";

interface FormProps<TFieldValues extends FieldValues = FieldValues>
  extends React.FormHTMLAttributes<HTMLFormElement> {
  form?: ReturnType<typeof useFormContext>;
}

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <form
        ref={ref}
        className={cn("space-y-6", className)}
        {...props}
      >
        {children}
      </form>
    );
  }
);
Form.displayName = "Form";

interface FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  name: TName;
  children: React.ReactNode;
}

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  name,
  children,
}: FormFieldProps<TFieldValues, TName>) => {
  return (
    <div>
      {children}
    </div>
  );
};

export { Form, FormField };
