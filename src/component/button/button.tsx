import { MouseEventHandler, ReactNode } from 'react';
import './button.css';

type ButtonType = {
  children: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  transparent?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit';
};
export const Button = ({
  children,
  primary,
  transparent,
  secondary,
  onClick,
  type = 'button',
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

  return (
    <button type={type} onClick={onClick} className={classNames.join(' ')}>
      {children}
    </button>
  );
};

export default Button;
