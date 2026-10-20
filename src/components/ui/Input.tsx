import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, leftIcon, className = '', id, ...props }, ref) => {
    const inputId = id || props.name;
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cream-muted"
          >
            {label}
            {props.required && <span className="ml-1 text-accent-400">*</span>}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <div className="pointer-events-none absolute left-3.5 flex items-center text-cream-muted/70">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={`w-full rounded-xl border border-neutral-700 bg-neutral-950/60 px-4 py-2.5 text-sm text-cream placeholder-cream-muted/40 transition-all focus:border-primary-400 focus:bg-neutral-900/60 focus:outline-none focus:ring-2 focus:ring-primary-500/20 disabled:cursor-not-allowed disabled:opacity-50 ${
              leftIcon ? 'pl-10' : ''
            } ${error ? 'border-error/80 focus:border-error focus:ring-error/20' : ''} ${className}`}
            {...props}
          />
        </div>
        {error && <p className="mt-1.5 text-xs font-medium text-error">{error}</p>}
        {hint && !error && <p className="mt-1.5 text-xs text-cream-muted/70">{hint}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, className = '', id, ...props }, ref) => {
    const inputId = id || props.name;
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cream-muted"
          >
            {label}
            {props.required && <span className="ml-1 text-accent-400">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          className={`w-full rounded-xl border border-neutral-700 bg-neutral-950/60 p-4 text-sm text-cream placeholder-cream-muted/40 transition-all resize-none focus:border-primary-400 focus:bg-neutral-900/60 focus:outline-none focus:ring-2 focus:ring-primary-500/20 disabled:cursor-not-allowed disabled:opacity-50 ${
            error ? 'border-error/80 focus:border-error focus:ring-error/20' : ''
          } ${className}`}
          {...props}
        />
        {error && <p className="mt-1.5 text-xs font-medium text-error">{error}</p>}
        {hint && !error && <p className="mt-1.5 text-xs text-cream-muted/70">{hint}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';