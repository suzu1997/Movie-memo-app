import Head from 'next/head'

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
      <Head>
        <title>movilove!!</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"/> 
      </Head>
      <Header />
      <Search />
      <MyMovieList />
      
      <Footer />
    </div>
  )
}
