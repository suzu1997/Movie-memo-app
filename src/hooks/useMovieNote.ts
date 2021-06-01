import { getMovieNoteData } from 'src/lib/movieNotes';
import { MovieNoteData } from 'src/types/movieNoteData';
import useSWR from 'swr';

export const useMovieNote = (initialData: MovieNoteData): any => {
  const {
    data: movieNote,
    mutate,
    error,
  } = useSWR(
    ['movieNotes', initialData.title],
    () => getMovieNoteData(initialData.title),
    {
      initialData: initialData,
      revalidateOnMount: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return { movieNote, mutate, error };
};
