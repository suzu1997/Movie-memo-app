import { memo, VFC } from 'react';

export const FavoriteButton: VFC = memo(() => {
  return (
    <button className='text-gray-700 bg-yellow-200 text-sm p-3 rounded-lg mt-3 hover:bg-opacity-80 focus:outline-none'>
      お気に入り
    </button>
  );
});
