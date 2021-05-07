import { memo, useCallback } from 'react';

import { SearchButton } from 'src/components/button/SearchButton';
import { searchMovies } from 'src/lib/searchMovies';

export const SearchArea = memo((props) => {
  const {
    handleClickOpen,
    searchText,
    setSearchText,
    setSearchResult,
    setLoading,
  } = props;

  let isSearchable;
  if (searchText) {
    isSearchable = true;
  } else {
    isSearchable = false;
  }

  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=ad57d2dd7d865020bf69b242c5fa7428&language=ja&query=${searchText}`;

  const seachTextChange = useCallback((e) => {
    setSearchText(e.target.value);
  }, []);

  const createMovieList = async () => {
    const movies = await searchMovies(apiUrl);
    setSearchResult(movies);
    setLoading(false);
    setSearchText('');
  };

  const onClickSearch = useCallback(() => {
    setLoading(true);
    handleClickOpen();
    createMovieList(searchText);
  }, [searchText]);

  return (
    <div className='w-full py-4 flex justify-center items-center bg-green-600 bg-opacity-10'>
      <input
        className='p-2 w-56 mr-3 focus:outline-black'
        type='text'
        value={searchText}
        onChange={seachTextChange}
        placeholder='タイトルから映画を検索'
      />
      <SearchButton onClickSearch={onClickSearch} isSearchable={isSearchable} />
    </div>
  );
});
