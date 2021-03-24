import classes from '../styles/components/Button.module.css'

export const AddButton = (props) => {
  const { children } = props;
  return (
    <button className={classes.addButton}>{props.children}</button>
  );
};