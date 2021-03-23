import classes from '../styles/components/Search.module.css'
import { PrimaryButton } from './PrimaryButton'

export const Search = () => {
  return (
    <div className={classes.searchArea}>
      <input className={classes.input} type="text" placeholder='タイトルから映画を検索'/>
      <div className={classes.searchIcon}>
        <i className="fas fa-search"></i>
      </div>
      <PrimaryButton>ジャンル検索</ PrimaryButton>
    </div>
  );
};
