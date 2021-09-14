import { getMovieNoteData } from 'src/lib/movieNotes';
import { MovieNoteData } from 'src/types/movieNoteData';
import useSWR from 'swr';

export const useMovieNote = (
  initialData: MovieNoteData
): { movieNote: MovieNoteData; mutate: any; error: boolean } => {
  const {
    data: movieNote,
    mutate,
    error,
  } = useSWR(
    ['movieNotes', initialData.id],
    () => getMovieNoteData(initialData.id),
    {
      fallbackData: initialData,
      revalidateOnMount: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return { movieNote, mutate, error };
};
