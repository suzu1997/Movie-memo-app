import classes from '../styles/components/Header.module.css'

export const Header = () => {
  return (
    <header className={classes.header}>
      <i className="fas fa-film"></i>{' '}
      <p>ムビラブ！！</p>
    </ header>
  );
};