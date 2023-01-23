import { ReactNode } from 'react';
import './button.css';

type ButtonType = {
  children: ReactNode;
};
export const Button = ({ children }: ButtonType) => {
  return <button className='Button'>{children}</button>;
};

export default Button;
