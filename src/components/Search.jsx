import axios from 'axios';
import { memo } from 'react';

import { SearchButton } from 'src/components/atoms/button/SearchButton';

export const Search = memo((props) => {
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

  const searchMovies = () => {
    setLoading(true);
    axios.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded';
    axios
      .get(apiUrl)
      .then((res) => {
        const movies = res.data.results; //映画の情報が入ったオブジェクトの配列
        setSearchResult(movies);
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const seachTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const onClickSearch = () => {
    //検索結果をsearchResultに入れ、SearchResultを開く
    searchMovies();
    handleClickOpen();
  };

  return (
    <div className='w-full py-4 flex justify-center items-center bg-green-600 bg-opacity-10'>
      <input
        className='p-2 w-56 mr-3 focus:outline-black'
        type='text'
        value={searchText}
        onChange={seachTextChange}
        placeholder='タイトルから映画を検索'
      />
      <SearchButton onClickSearch={onClickSearch} isSearchable={isSearchable}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 mx-auto'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      </SearchButton>
    </div>
  );
});
