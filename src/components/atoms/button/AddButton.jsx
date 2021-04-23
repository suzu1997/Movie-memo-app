import Link from 'next/link';
import classes from 'src/styles/components/Button.module.css';

export const AddButton = (props) => {
  const { children } = props;
  return (
    <div>
      <Link href='/edit'>
        <button className={classes.addButton}>{children}</button>
      </Link>
    </div>
  );
};
