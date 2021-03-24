import classes from '../styles/components/Input.module.css'

export const Input = (props) => {
  const { label, placeholder } = props;
  return (
    <div>
      <label>{`${label}: `}</label>
        <br />
      <input className={classes.input} placeholder={placeholder}/>
    </div>
  );
};