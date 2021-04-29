import { memo } from 'react';

export const Input = memo((props) => {
  const { type, label, value, onChange, placeholder } = props;
  return (
    <div>
      {label ? <label>{`${label}: `}</label> : null}
      <br />
      <input
        className='w-full p-2 border-2 rounded-md border-gray-400 border-solid focus:outline-none focus:border-black'
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
});
