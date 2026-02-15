import { inputLoginProps } from '@/types/validate';
import { Eye, EyeOff } from 'lucide-react';
import { useEffect, useState } from 'react';

const LoginFormInput = ({
  value,
  onChange,
  onValidationChange,
  ...props
}: inputLoginProps) => {
  const requirement = (value: string) => {
    if (value.length < 5) return false;
    return true;
  };

  // --- Local State ---
  const [showPassword, setShowPassword] = useState(false);

  // --- Computed ---
  const isPasswordType = props.type === 'password';

  const isAllValid = requirement(String(value));

  useEffect(() => {
    onValidationChange?.(isAllValid);
  }, [isAllValid, onValidationChange]);

  return (
    <div className=' relative'>
      <input
        name={props.name}
        value={value}
        type={isPasswordType && showPassword ? 'text' : props.type}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        className={`${props.className}`}
        onChange={onChange}
      />

      {/* Toggle Password */}
      {isPasswordType && (
        <button
          type='button'
          onClick={() => setShowPassword(!showPassword)}
          className='absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-200 focus:outline-none'
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
  );
};

export default LoginFormInput;
