import { forwardRef } from 'react';
import './textfield.css';
type TextFieldType = {
  onInput: (value: string) => void;
  value: string;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldType>(
  ({ onInput, value }, ref) => {
    return (
      <input
        ref={ref}
        value={value}
        onChange={(e) => onInput(e.target.value)}
        className='TextField'
        type='text'
      />
    );
  }
);

export default TextField;
