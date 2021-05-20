import { useCallback, useState } from 'react';

import { Footer } from 'src/components/layout/Footer';
import { Header } from 'src/components/layout/Header';
import { MovieNotesList } from 'src/components/movie-note/MovieNotesList';
import { SearchArea } from 'src/components/movie-search/SearchArea';
import { SearchResult } from 'src/components/movie-search/SearchResult';

export default function Home() {
  //Search, SearchResult のstateはindex.jsxで管理
  const [open, setOpen] = useState(false); //SearchResultを開くState
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  //映画の検索結果を開く関数
  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <div className='min-h-screen p-0 flex flex-col items-center'>
      <Header />
      <SearchArea
        handleClickOpen={handleClickOpen}
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
}
