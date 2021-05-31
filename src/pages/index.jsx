import { useState } from 'react';

import { Footer } from 'src/components/layout/Footer';
import { Header } from 'src/components/layout/Header';
import { MovieNotesList } from 'src/components/movie-note/MovieNotesList';
import { SearchArea } from 'src/components/movie-search/SearchArea';
import { SearchResult } from 'src/components/movie-search/SearchResult';

const Home = () => {
  //SearchArea, SearchResult のstateはindex.jsxで管理
  const [open, setOpen] = useState(false); //SearchResultを開くState
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className='min-h-screen p-0 flex flex-col items-center'>
      <Header />
      <SearchArea
        setOpen={setOpen}
        searchText={searchText}
        setSearchText={setSearchText}
        setSearchResult={setSearchResult}
        setLoading={setLoading}
      />
      <MovieNotesList />
      <SearchResult
        open={open}
        setOpen={setOpen}
        searchResult={searchResult}
        loading={loading}
      />
      <Footer />
    </div>
  );
};

export default Home;
