import { memo, useCallback, VFC } from 'react';

import { SearchButton } from 'src/components/button/SearchButton';
import { searchMovies } from 'src/lib/searchMovies';
import { MovieInfo } from 'src/types/movieInfo';

type Props = {
  setOpen: (boolean: boolean) => void;
  searchText: string;
  setSearchText: (value: string) => void;
  setSearchResult: (movies: Array<MovieInfo>) => void;
  setLoading: (boolean: boolean) => void;
};

export const SearchArea: VFC<Props> = memo((props) => {
  const { setOpen, searchText, setSearchText, setSearchResult, setLoading } =
    props;

  let isSearchable: boolean;
  if (searchText) {
    isSearchable = true;
  } else {
    isSearchable = false;
  }
  // eslint-disable-next-line no-undef

  const seachTextChange = useCallback(
    (e): void => {
      setSearchText(e.target.value);
    },
    [setSearchText]
  );

  const createMovieList: (searchText: string) => Promise<void> = async (
    searchText
  ) => {
    const apiUrl = `${process.env.NEXT_PUBLIC_MOVIE_API_URL}query=${searchText}`;
    const movies = await searchMovies(apiUrl);
    setSearchResult(movies);
    setLoading(false);
    setSearchText('');
  };

  const onClickSearch: () => void = useCallback(() => {
    setLoading(true);
    setOpen(true);
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
