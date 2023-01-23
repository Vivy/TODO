import { ReactNode } from 'react';
import './button.css';

type ButtonType = {
  children: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  transparent?: boolean;
  disabled?: boolean;
};
export const Button = ({
  children,
  primary,
  transparent,
  secondary,
}: ButtonType) => {
  const classNames = ['Button'];

  if (primary) {
    classNames.push('Primary');
  }

  if (transparent) {
    classNames.push('Transparent');
  }

  if (secondary) {
    classNames.push('Secondary');
  }

  return <button className={classNames.join(' ')}>{children}</button>;
};

export default Button;
