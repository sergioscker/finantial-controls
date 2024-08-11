import { ComponentProps, forwardRef } from 'react';

import { ButtonSource } from './styles';
import { MagnifyingGlass } from '@phosphor-icons/react';

type ButtonIconProps = ComponentProps<'button'>;

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  function ({ ...props }, ref) {
    return (
      <ButtonSource {...props} ref={ref}>
        <MagnifyingGlass />
      </ButtonSource>
    );
  },
);
