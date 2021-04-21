import Link from 'next/link';
import classes from '../styles/components/Button.module.css';

export const AddButton = (props) => {
  const { children } = props;
  return (
    <div>
      <Link href='/edit'>
        <button className={classes.addButton}>{props.children}</button>
      </Link>
    </div>
  );
};
