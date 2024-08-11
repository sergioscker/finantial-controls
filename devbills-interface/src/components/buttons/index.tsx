import { ComponentProps, forwardRef } from 'react';

import { Buttons } from './styles';

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'default' | 'outline';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function (
  { children, variant = 'default', ...props },
  ref,
) {
  return (
    <Buttons ref={ref} {...props} $variant={variant}>
      {children}
    </Buttons>
  );
});
