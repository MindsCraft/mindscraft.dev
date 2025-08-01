"use client";

import * as React from "react";
import { FiUpload, FiX } from "react-icons/fi";
import { cn } from "@/lib/utils";

export interface FileInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  onFileChange?: (file: File | null) => void;
  selectedFile?: File | null;
  onRemoveFile?: () => void;
  buttonLabel?: string;
  acceptedFileTypes?: string;
  maxSize?: number;
  error?: string;
}

const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  ({
    className,
    id = "file",
    onFileChange,
    selectedFile,
    onRemoveFile,
    buttonLabel = "Choose File",
    acceptedFileTypes = ".pdf,.doc,.docx",
    maxSize,
    error,
    ...props
  }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null;
      if (onFileChange) {
        onFileChange(file);
      }
    };

    return (
      <div className={cn("space-y-2", className)}>
        <div className="flex items-center">
          <label
            htmlFor={id}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
          >
            <FiUpload className="h-4 w-4 mr-2" />
            {buttonLabel}
          </label>
          <input
            id={id}
            type="file"
            className="sr-only"
            accept={acceptedFileTypes}
            onChange={handleChange}
            ref={ref}
            {...props}
          />
          <span className="ml-3 text-sm text-gray-500">
            {selectedFile ? selectedFile.name : 'No file chosen'}
          </span>
          {selectedFile && onRemoveFile && (
            <button
              type="button"
              onClick={onRemoveFile}
              className="ml-2 text-gray-400 hover:text-gray-600"
            >
              <FiX className="h-4 w-4" />
            </button>
          )}
        </div>
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  }
);
FileInput.displayName = "FileInput";

export { FileInput };
