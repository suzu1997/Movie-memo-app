import classes from '../styles/components/Button.module.css'

export const FavoriteButton = (props) => {
  const { children } = props;
  return (
    <button className={classes.favoriteButton}>{props.children}</button>
  );
};