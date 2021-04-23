import Link from 'next/link';
import classes from 'src/styles/components/Button.module.css';

export const SearchButton = (props) => {
  const { children, onClick } = props;
  return (
    <div>
      {/* <Link href='/edit'> */}
        <button className={classes.searchButton} onClick={onClick}>{children}</button>
      {/* </Link> */}
    </div>
  );
};
