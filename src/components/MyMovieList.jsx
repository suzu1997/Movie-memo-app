import { MyMovieItem } from 'src/components/MyMovieItem';
import classes from 'src/styles/components/MyMovieList.module.css';
import { AddButton } from 'src/components/atoms/button/AddButton';

export const MyMovieList = () => {
  return (
    <div className={classes.container}>
      <div>
        <h2 className={classes.title}>
          My Movie
          <div>
            <a href=''>+</a>
          </div>
        </h2>
      </div>
      <div className={classes.movieItems}>
        <MyMovieItem />
        <MyMovieItem />
        <MyMovieItem />
        <MyMovieItem />
        <MyMovieItem />
        <MyMovieItem />
        <MyMovieItem />
        <MyMovieItem />
        <MyMovieItem />
        <MyMovieItem />
        <MyMovieItem />
        <MyMovieItem />
        <MyMovieItem />
      </div>
      <AddButton>+</AddButton>
    </div>
  );
};
