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
  // eslint-disable-next-line no-undef
  const apiUrl = `${process.env.NEXT_PUBLIC_MOVIE_API_URL}query=${searchText}`;

  const seachTextChange = useCallback(
    (e) => {
      setSearchText(e.target.value);
    },
    [setSearchText]
  );

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
