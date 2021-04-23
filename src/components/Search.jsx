import { useState } from 'react';

import { getMoviesData } from 'src/api/movies';
import classes from 'src/styles/components/Search.module.css';
import { PrimaryButton } from 'src/components/atoms/button/PrimaryButton';
import { SearchButton } from 'src/components/atoms/button/SearchButton';

export const Search = () => {
  const [searchText, setSearchText] = useState('');

  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=ad57d2dd7d865020bf69b242c5fa7428&language=ja&query=${searchText}`;

  getMoviesData(apiUrl);

  const seachTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClickOpen = () => {
    
    alert('検索！！');
  }

  return (
    <div className={classes.searchArea}>
      <input
        className={classes.input}
        type='text'
        value={searchText}
        onChange={seachTextChange}
        placeholder='タイトルから映画を検索'
      />
      <SearchButton onClick={handleClickOpen}>
        <i className='fas fa-search'></i>
      </SearchButton>
      <PrimaryButton type='submit'>ジャンル検索</PrimaryButton>
    
    </div>
  );
};
