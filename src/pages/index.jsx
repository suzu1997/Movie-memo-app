import { useCallback, useState } from 'react';

import { Footer } from 'src/components/organisms/layout/Footer';
import { Header } from 'src/components/organisms/layout/Header';
import { MyMovieList } from 'src/components/MyMovieList';
import { Search } from 'src/components/Search';
import { SearchResult } from 'src/components/SearchResult';

export default function Home() {
  //Search, SearchResult のstateはindex.jsxで管理
  const [open, setOpen] = useState(false);  //SearchResultを開くState
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  //映画の検索結果を開く関数
  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  return (
    <div className='min-h-screen p-0 flex flex-col items-center'>
      <Header />
      <Search
        handleClickOpen={handleClickOpen}
        searchText={searchText}
        setSearchText={setSearchText}
        setSearchResult={setSearchResult}
        setLoading={setLoading}
      />
      <MyMovieList />
      <SearchResult open={open} setOpen={setOpen} searchResult={searchResult} loading={loading}/>
      <Footer />
    </div>
  );
}
