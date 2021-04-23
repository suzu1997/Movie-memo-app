import classes from 'src/styles/components/Input.module.css';

export const Input = (props) => {
  const { label, placeholder } = props;
  return (
    <div>
      {label ? <label>{`${label}: `}</label> : null}
      <br />
      <input className={classes.input} placeholder={placeholder} />
    </div>
  );
};
