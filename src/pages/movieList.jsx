import { Footer } from '../components/organisms/layout/Footer';
import { Header } from 'src/components/organisms/layout/Header';
import classes from 'src/styles/Home.module.css';
import { getMoviesData } from 'src/api/movies';

export default function Movies() {
  const apiUrl = 'https://api.themoviedb.org/3/search/movie?api_key=ad57d2dd7d865020bf69b242c5fa7428&language=ja&query=%E3%83%8F%E3%83%AA%E3%83%BC';

  getMoviesData(apiUrl);

  return (
    <div className={classes.container}>
      <Header />
      <div>{/* <p>{`title: ${}`}</p> */}</div>
      <Footer />
    </div>
  );
}

//SSGのための関数、getStaticProps() でgetAllPostsData()を実行
// export async function getStaticProps() {
//   const movies = await getMoviesData();
//   console.log(movies);
//   return {
//     props: { movies },
//   };
// }
