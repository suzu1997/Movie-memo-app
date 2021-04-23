import classes from 'src/styles/components/Button.module.css';

export const FavoriteButton = (props) => {
  const { children } = props;
  return <button className={classes.favoriteButton}>{props.children}</button>;
};
