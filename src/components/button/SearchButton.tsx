import { memo, MouseEventHandler, VFC } from 'react';

type Props = {
  onClickSearch: MouseEventHandler<HTMLButtonElement>;
  isSearchable: boolean;
}

export const SearchButton:VFC<Props> = memo((props) => {
  const { onClickSearch, isSearchable } = props;
  return (
    <div>
      <button
        className={`rounded-full bg-gray-400 bg-opacity-50 w-11 h-11 mr-3 focus:outline-none 
        ${isSearchable ? 'hover:bg-opacity-80' : 'cursor-not-allowed'}`}
        onClick={onClickSearch}
        disabled={isSearchable ? false : true}
      >
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
      </button>
    </div>
  );
});
