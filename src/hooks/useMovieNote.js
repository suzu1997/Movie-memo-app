import { getMovieNoteData } from 'src/lib/movieNotes';
import useSWR from 'swr';

export const useMovieNote = (initialData) => {
  const {
    data: movieNote,
    mutate,
    error,
  } = useSWR(
    ['movieNotes', initialData.title],
    () => getMovieNoteData(initialData.title),
    {
      initialData: initialData,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return { movieNote, mutate, error };
};
