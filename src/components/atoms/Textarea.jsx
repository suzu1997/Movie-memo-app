import TextareaAutosize from 'react-textarea-autosize';

export const Textarea = (props) => {
  const { label, placeholder } = props;
  return (
    <div>
      <label>{`${label}: `}</label>
      <br />
      <TextareaAutosize
        className='w-full p-2 text-lg border rounded-sm border-gray-500 border-solid '
        placeholder={placeholder}
        minRows={13}
      />
    </div>
  );
  Ï;
};
