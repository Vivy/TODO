import './textfield.css';
type TextFieldType = {
  onInput: (value: string) => void;
  value: string;
};

export const TextField = ({ onInput, value }: TextFieldType) => {
  return (
    <input
      value={value}
      onChange={(e) => onInput(e.target.value)}
      className='TextField'
      type='text'
    />
  );
};

export default TextField;
