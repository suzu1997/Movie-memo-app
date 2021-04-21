import TextareaAutosize from 'react-textarea-autosize';

import classes from '../styles/components/Textarea.module.css';

export const Textarea = (props) => {
  const { label, placeholder } = props;
  return (
    <div>
      <label>{`${label}: `}</label>
      <br />
      <TextareaAutosize
        className={classes.textarea}
        placeholder={placeholder}
        minRows={13}
      />
    </div>
  );
  Ï;
};
