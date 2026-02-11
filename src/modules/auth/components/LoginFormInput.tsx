import { inputLoginProps } from '@/types/validate';
import { useEffect } from 'react';

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

  const isAllValid = requirement(String(value));

  console.log(isAllValid);

  useEffect(() => {
    onValidationChange?.(isAllValid);
  }, [isAllValid, onValidationChange]);

  console.log(requirement(String(value)));

  return (
    <input
      name={props.name}
      value={value}
      type={props.type}
      placeholder={props.placeholder}
      maxLength={props.maxLength}
      className={`${props.className}`}
      onChange={onChange}
    />
  );
};

export default LoginFormInput;
