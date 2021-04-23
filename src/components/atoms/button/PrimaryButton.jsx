import classes from 'src/styles/components/Button.module.css';

export const PrimaryButton = (props) => {
  const { children, type } = props;
  return (
    <button className={classes.primaryButton} type={type}>
      {children}
    </button>
  );
};
