import { useRouter } from 'next/router';
import { PrimaryButton } from 'src/components/button/PrimaryButton';

export const MovieNoteButton = (props) => {
  const router = useRouter();
  const { onClickSave, onClickUpdate, handleClickDialogOpen } = props;

  return (
    <div>
      <div className='flex justify-end'>
        <button
          className='text-xs sm:text-sm block border border-solid border-black px-4 py-3 mr-4 rounded-lg hover:bg-gray-100 focus:outline-none'
          onClick={() => router.back()}
        >
          戻る
        </button>
        {onClickSave ? (
          <PrimaryButton onClick={onClickSave}>保存</PrimaryButton>
        ) : (
          <div>
            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
            <button
              className='rounded-full bg-red-400 bg-opacity-50 w-11 h-11 text-center ml-4 hover:bg-opacity-80 focus:outline-none'
              onClick={handleClickDialogOpen}
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
                  d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
