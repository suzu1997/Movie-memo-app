import { Input } from '@material-ui/core';
import axios from 'axios';
import { memo } from 'react';

// import { getMoviesData } from 'src/api/movies';
// import { PrimaryButton } from 'src/components/atoms/button/PrimaryButton';
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
        console.log(movies);
        setSearchResult(movies);
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        setLoading(false);
      })
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
        <i className='fas fa-search'></i>
      </SearchButton>
      {/* <PrimaryButton type='submit'>ジャンル検索</PrimaryButton> */}
    </div>
  );
});
