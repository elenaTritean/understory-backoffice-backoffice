export interface InputProps {
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'number';
  /** Placeholder text */
  placeholder?: string;
  /** Input value */
  value?: string;
  /** Label for the input */
  label?: string;
  /** Is the input disabled? */
  disabled?: boolean;
  /** Error message to display */
  error?: string;
  /** Optional change handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/** Input field component with theming support */
export const Input = ({
  type = 'text',
  placeholder,
  value,
  label,
  disabled = false,
  error,
  onChange,
  ...props
}: InputProps) => {
  const errorClass = error ? 'input--error' : '';

  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        className={['input', errorClass].filter(Boolean).join(' ')}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
};
