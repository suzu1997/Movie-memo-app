import { useCallback, useEffect, useState } from 'react';
import Router from 'next/router';
import useSWR from 'swr';

import { Footer } from 'src/components/layout/Footer';
import { Header } from 'src/components/layout/Header';
import { PrimaryButton } from 'src/components/button/PrimaryButton';
import { DeleteConfirmDialog } from 'src/components/DeleteConfirmDialog';
import {
  deleteMovieNote,
  getMovieNoteData,
  getMovieNotesTitles,
  updateMovieNote,
} from 'src/lib/movieNotes';
import { MovieNoteForm } from 'src/components/movie-note/MovieNoteForm';

export default function MovieNote({ movieNote }) {
  // const { data: movieNote, mutate } = useSWR(
  //   'firestore/movieNotes',
  //   getMovieNoteData(initialData.title),
  //   {
  //     initialData,
  //     revalidateOnMount: true,
  //     revalidateOnFocus: false,
  //     revalidateOnReconnect: false,
  //   }
  // );

  // useEffect(() => {
  //   mutate();
  // }, []);

  const [year, setYear] = useState(movieNote.year);
  const [month, setMonth] = useState(movieNote.month);
  const [day, setDay] = useState(movieNote.day);
  const [evaluation, setEvaluation] = useState(movieNote.evaluation);
  const [impression, setImpression] = useState(movieNote.impression);

  //DeleteComfirmDialog の開閉に関するstate
  const [dialogOpen, setDialogOpen] = useState(false);

  //DeleteComfirmDialog の開閉に関する関数
  const handleClickDialogOpen = useCallback(() => {
    setDialogOpen(true);
  }, []);

  const handleDialogClose = useCallback(() => {
    setDialogOpen(false);
  }, []);

  const data = {
    title: `${movieNote.title}`,
    src: `${movieNote.src}`,
    year: `${year}`,
    month: `${month}`,
    day: `${day}`,
    watchDate: `${year}${month}${day}`,
    evaluation: `${evaluation}`,
    impression: `${impression}`,
  };

  //映画メモのデータを変更
  const onClickUpdate = useCallback(async () => {
    const id = movieNote.id;
    await updateMovieNote(data, id);
    Router.push('/');
  }, [data]);

  //映画メモを削除
  const onClickDelete = useCallback(async () => {
    const id = movieNote.id;
    await deleteMovieNote(id);
    Router.push('/');
  }, [data]);

  return (
    <div className='min-h-screen p-0 flex flex-col items-center'>
      <Header />
      <div className='flex-grow w-4/5 max-w-lg mx-auto my-10'>
        <div className='flex justify-end'>
          <button
            className='text-xs sm:text-sm block border border-solid border-black px-4 py-3 mr-4 rounded-lg hover:bg-gray-100 focus:outline-none'
            onClick={() => Router.back()}
          >
            戻る
          </button>
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
        <MovieNoteForm
          value={movieNote.title}
          year={year}
          month={month}
          day={day}
          evaluation={evaluation}
          impression={impression}
          setYear={setYear}
          setMonth={setMonth}
          setDay={setDay}
          setEvaluation={setEvaluation}
          setImpression={setImpression}
        />
      </div>
      <DeleteConfirmDialog
        open={dialogOpen}
        handleClose={handleDialogClose}
        onClickDelete={onClickDelete}
      />
      <Footer />
    </div>
  );
}

//titleのとりうる値のリストを返す
export async function getStaticPaths() {
  const paths = await getMovieNotesTitles();
  return {
    paths,
    fallback: 'blocking',
  };
}
//titleに基づいて必要なデータを取得
export async function getStaticProps({ params }) {
  const movieNote = await getMovieNoteData(params.title);
  return {
    props: {
      movieNote,
    },
    revalidate: 3,
  };
}
