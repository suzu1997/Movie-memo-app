import { MyMovieItem } from 'src/components/MyMovieItem';
import { AddButton } from 'src/components/atoms/button/AddButton';
import { memo } from 'react';

export const MyMovieList = memo(() => {
  return (
    <div className='w-11/12 max-w-screen-sm mx-auto my-8 p-0 flex-grow'>
      <div>
        <h2 className='w-44 p-2 mb-0 text-center border border-solid border-black border-b-0 rounded-b-none rounded-t-lg font-normal'>
          My Movie
          <div>
            <a href=''>+</a>
          </div>
        </h2>
      </div>
      <div className='border border-solid border-black pb-16'>
        <MyMovieItem />
        <MyMovieItem />
        <MyMovieItem />
        <MyMovieItem />
        <MyMovieItem />
        <MyMovieItem />
        <MyMovieItem />
        <MyMovieItem />
        <MyMovieItem />
        <MyMovieItem />
        <MyMovieItem />
        <MyMovieItem />
        <MyMovieItem />
      </div>
      <AddButton>+</AddButton>
    </div>
  );
});
