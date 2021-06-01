import { ChangeEventHandler, memo, VFC } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

type Props = {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder: string;
};

export const Textarea: VFC<Props> = memo((props) => {
  const { label, value, onChange, placeholder } = props;

  return (
    <div>
      <label>{`${label}: `}</label>
      <br />
      <TextareaAutosize
        className='w-full p-2 text-lg border-2 rounded-md border-gray-400 border-solid focus:outline-none focus:border-black'
        minRows={13}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
});
