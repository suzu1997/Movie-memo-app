import { MyMovieItem } from "./MyMovieItem";
import classes from '../styles/components/MyMovieList.module.css';
import { AddButton } from "./AddButton";

export const MyMovieList = () => {
  return (
    <div className={classes.container}> 
      <div>
        <h2 className={classes.title}>My Movie
          <div><a href="">+</a></div>
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