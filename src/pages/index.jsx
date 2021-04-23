import { Footer } from 'src/components/organisms/layout/Footer';
import { Header } from 'src/components/organisms/layout/Header';
import { MyMovieList } from 'src/components/MyMovieList';
import { Search } from 'src/components/Search';
import { SearchResult } from 'src/pages/SearchResult';

export default function Home() {
  return (
    <div className='min-h-screen p-0 flex flex-col items-center flex-grow'>
      <Header />
      <Search />
      <MyMovieList />
      <SearchResult />
      <Footer />
    </div>
  );
}
