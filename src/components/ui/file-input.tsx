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
      <div className={cn("form-file", className)}>
        <div className="form-file-row">
          <label htmlFor={id} className="form-file-trigger">
            <FiUpload className="form-file-icon" />
            {buttonLabel}
          </label>
          <input
            id={id}
            type="file"
            className="form-file-native"
            accept={acceptedFileTypes}
            onChange={handleChange}
            ref={ref}
            {...props}
          />
          <span className="form-file-name">
            {selectedFile ? selectedFile.name : "No file chosen"}
          </span>
          {selectedFile && onRemoveFile && (
            <button
              type="button"
              onClick={onRemoveFile}
              className="form-file-clear"
              aria-label="Remove file"
            >
              <FiX />
            </button>
          )}
        </div>
        {error && <p className="form-error">{error}</p>}
      </div>
    );
  }
);
FileInput.displayName = "FileInput";

export { FileInput };
