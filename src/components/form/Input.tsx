import { ChangeEventHandler, memo, VFC } from 'react';

type Props = {
  type: string;
  label: string;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  readOnly?: boolean;
};

export const Input: VFC<Props> = memo((props) => {
  const { type, label, value, onChange, placeholder, readOnly = false } = props;
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
        readOnly={readOnly}
      />
    </div>
  );
});
