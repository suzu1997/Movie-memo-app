import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MyMovieList } from '../components/MyMovieList'
import { Search } from '../components/Search'
import classes from '../styles/Home.module.css'
import { getMovieList } from '../api/movies';

export default function Home() {

  getMovieList();

  return (
    <div className={classes.container}>
      <Header />
      
      
      <Footer />
    </div>
  )
}
