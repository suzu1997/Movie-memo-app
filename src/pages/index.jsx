// import Head from 'next/head'

import { Footer } from 'src/components/organisms/layout/Footer';
import { Header } from 'src/components/organisms/layout/Header';
import { MyMovieList } from 'src/components/MyMovieList';
import { Search } from 'src/components/Search';
import classes from 'src/styles/Home.module.css';
import { getMoviesData } from 'src/api/movies';
import { SearchResult } from 'src/pages/SearchResult';

export default function Home() {
  return (
    <div className={classes.container}>
      {/* <Head>
        <title>movilove!!</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"/> 
      </Head> */}
      <Header />
      <Search />
      <MyMovieList />
      <SearchResult />
      <Footer />
    </div>
  );
}
