import { memo } from 'react';

export const MovieNoteItem = memo((props) => {
  const { movieNote } = props;

  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center'>
        <img
          src={movieNote.src}
          alt='映画のサムネイル'
          className='w-10 h-10 sm:w-12 sm:h-12'
        />
        <p className='text-sm ml-2 mr-1 break-words sm:ml-4 sm:text-base'>{movieNote.title}</p>
      </div>
      <div className='flex items-center'>
        <div className='text-xs sm:text-sm sm:mr-4 whitespace-nowrap'>
          <div>鑑賞日:</div>
          <div>{`${movieNote.year}年${movieNote.month}月${movieNote.day}日`}</div>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-4 w-4 sm:h-6 sm:w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M9 5l7 7-7 7'
          />
        </svg>
      </div>
    </div>
  );
});
