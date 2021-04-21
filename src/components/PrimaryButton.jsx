import classes from '../styles/components/Button.module.css';

export const PrimaryButton = (props) => {
  const { children } = props;
  return <button className={classes.primaryButton}>{props.children}</button>;
};
