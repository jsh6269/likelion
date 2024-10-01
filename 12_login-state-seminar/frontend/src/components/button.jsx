import { cn } from '../utils/cn';

const sizeClass = {
  small: 'px-3 py-1.5 text-base',
  large: 'px-10 py-3 text-xl',
};

const roundClass = {
  small: 'rounded-[13px]',
  large: 'rounded-[50px]',
};

const variantClass = {
  primary: 'bg-primary text-neutral-100',
  secondary: 'bg-neutral-100 text-neutral-800',
  disabled: 'bg-neutral-400 text-neutral-500',
};

export const Button = ({
  children,
  className,
  disabled = false,
  variant = 'primary',
  size = 'large',
  isRounded = false,
  onButtonClick,
}) => {
  const buttonClass = cn(
    'font-bold',
    className,
    sizeClass[size],
    isRounded ? roundClass['large'] : roundClass['small'],
    variantClass[disabled ? 'disabled' : variant],
  );

  return (
    <button className={buttonClass} onClick={onButtonClick}>
      {children}
    </button>
  );
};
