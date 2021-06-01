import { Fragment, memo, useRef, VFC } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { MovieItem } from 'src/components/movie-search/MovieItem';
import { MovieInfo } from 'src/types/movieInfo';

type Props = {
  open: boolean;
  setOpen: (boolean: boolean) => void;
  searchResult: Array<MovieInfo>;
  loading: boolean;
};

export const SearchResult: VFC<Props> = memo((props) => {
  const { open, setOpen, searchResult, loading } = props;
  const cancelButtonRef = useRef();

  let resultExist: boolean;
  if (searchResult.length > 0) {
    resultExist = true;
  } else {
    resultExist = false;
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        static
        className='fixed z-10 inset-0 overflow-y-auto'
        initialFocus={cancelButtonRef}
        open={open}
        onClose={setOpen}
      >
        <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-full sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
              <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                <div>
                  <div className='mt-3 text-center sm:mt-0 sm:ml-4'>
                    <Dialog.Title
                      as='h3'
                      className='text-lg leading-6 font-medium text-gray-900 pb-7'
                    >
                      検索結果
                    </Dialog.Title>
                    <div>
                      {loading ? (
                        <div className='py-5'>
                          <CircularProgress />
                        </div>
                      ) : resultExist ? (
                        searchResult.map((movie) => {
                          return <MovieItem key={movie.id} movie={movie} />;
                        })
                      ) : (
                        <p>検索結果が見つかりませんでした。</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                <button
                  type='button'
                  className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 outline-none hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  TOPへ戻る
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
});
