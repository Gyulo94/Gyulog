import { ComponentPropsWithoutRef, FC } from 'react';
import { cn } from '../utils/style';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

const Button: FC<ButtonProps> = ({ className, children, ...rest }) => {
  return (
    <button
      className={cn(
        'w-full mt-4 bg-gray-800 py-2 text-white rounded-md hover:bg-gray-900',
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
