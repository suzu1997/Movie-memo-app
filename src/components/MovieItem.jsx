import classes from 'src/styles/components/MyMovieItem.module.css';

export const MovieItem = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <img
          src='prada.jpg'
          alt='映画のサムネイル'
          style={{ width: '50px', height: '50px' }}
        />
        <p className={classes.title}>プラダを着た悪魔</p>
      </div>
      <div className={classes.right}>
        <i className='fas fa-caret-right fa-2x'></i>
      </div>
    </div>
  );
};
