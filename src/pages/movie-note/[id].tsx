import { useCallback, useContext, useEffect, useState, VFC } from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { Footer } from 'src/components/layout/Footer';
import { Header } from 'src/components/layout/Header';
import { DeleteConfirmDialog } from 'src/components/DeleteConfirmDialog';
import {
  deleteMovieNote,
  getMovieNoteData,
  getMovieNotesIds,
  updateMovieNote,
} from 'src/lib/movieNotes';
import { MovieNoteForm } from 'src/components/movie-note/MovieNoteForm';
import { useMovieNote } from 'src/hooks/useMovieNote';
import { MovieNoteButton } from 'src/components/movie-note/MovieNoteButton';
import { MovieNoteData } from 'src/types/movieNoteData';
import { AuthContext } from 'src/providers/AuthProvider';

const MovieNote: VFC = ({
  initialData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { currentUserUid } = useContext(AuthContext);
  
  const { movieNote, mutate, error } = useMovieNote(initialData);

  const [year, setYear] = useState(movieNote.year);
  const [month, setMonth] = useState(movieNote.month);
  const [day, setDay] = useState(movieNote.day);
  const [evaluation, setEvaluation] = useState(movieNote.evaluation);
  const [impression, setImpression] = useState(movieNote.impression);

  //DeleteComfirmDialog の開閉に関するstate
  const [dialogOpen, setDialogOpen] = useState(false);

  //DeleteComfirmDialog の開閉に関する関数
  const onClickDialogOpen: () => void = useCallback(() => {
    setDialogOpen(true);
  }, []);

  const onClickDialogClose: () => void = useCallback(() => {
    setDialogOpen(false);
  }, []);

  const data: MovieNoteData = {
    userId: `${currentUserUid}`,
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
  const onClickUpdate: () => void = useCallback(async () => {
    const id = initialData.id;
    await updateMovieNote(data, id);
    mutate(['movieNotes', initialData.id]);
    router.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  //映画メモを削除
  const onClickDelete: () => void = useCallback(async () => {
    const id = initialData.id;
    await deleteMovieNote(id);
    mutate(['movieNotes', initialData.id]);
    router.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    mutate(['movieNotes', initialData.id]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    console.log(error);
    return <div>failed to load</div>;
  }
  return (
    <div className='min-h-screen p-0 flex flex-col items-center'>
      <Header />
      <div className='flex-grow w-4/5 max-w-lg mx-auto my-10'>
        <MovieNoteButton
          onClickUpdate={onClickUpdate}
          onClickDialogOpen={onClickDialogOpen}
        />
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
        handleClose={onClickDialogClose}
        onClickDelete={onClickDelete}
      />
      <Footer />
    </div>
  );
};

//idのとりうる値のリストを返す
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getMovieNotesIds();
  return {
    paths,
    fallback: 'blocking',
  };
};

//idに基づいて必要なデータを取得
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const initialData = await getMovieNoteData(params.id);
  return {
    props: {
      initialData
    },
    revalidate: 5,
  };
};

export default MovieNote;
