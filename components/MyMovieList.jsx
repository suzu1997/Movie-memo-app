import { MyMovieItem } from "./MyMovieItem";
import classes from '../styles/components/MyMovieList.module.css';

export const MyMovieList = () => {
  return (
    <div className={classes.container}> 
      <div>
        <h2 className={classes.title}>My Movie
          <div><a href="">+</a></div>
        </h2>
      </div>
      <MyMovieItem />
      <MyMovieItem />
      <MyMovieItem />
      <MyMovieItem />
      <MyMovieItem />
      <MyMovieItem />
      <MyMovieItem />
      <MyMovieItem />
    </div> 
  );
};