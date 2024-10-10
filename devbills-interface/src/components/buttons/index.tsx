import { ComponentProps, forwardRef } from 'react';

import { ButtonsContainer } from './styles';

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'default' | 'outline';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function (
  { children, variant = 'default', ...props },
  ref,
) {
  return (
    <ButtonsContainer ref={ref} {...props} $variant={variant}>
      {children}
    </ButtonsContainer>
  );
});
