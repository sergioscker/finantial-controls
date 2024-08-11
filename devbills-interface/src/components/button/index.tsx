import { ComponentProps, forwardRef } from 'react';

import { Button } from './styles';

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'default' | 'outline';
};

export const Buttons = forwardRef<HTMLButtonElement, ButtonProps>(function (
  { children, variant = 'default', ...props },
  ref,
) {
  return (
    <Button ref={ref} {...props} $variant={variant}>
      {children}
    </Button>
  );
});
