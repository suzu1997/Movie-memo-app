import classes from '../styles/components/MyMovieItem.module.css'

export const MyMovieItem = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <img src='prada.jpg' alt="映画のサムネイル" style={{width: "70px" ,height: "70px"}}/>
        <p className={classes.title}>プラダを着た悪魔</p>
      </div>
      <div className={classes.right}>
        <div className={classes.watchDate}>
          <div >鑑賞日</div>
          <div>○○○○年○月○○日</div>
        </div>
        <i className="fas fa-caret-right fa-2x"></i>
      </div>
    </div>
  );
}