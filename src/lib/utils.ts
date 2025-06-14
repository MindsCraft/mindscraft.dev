'use client';

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Function to merge Tailwind classes with proper specificity
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
