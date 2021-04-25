import { useContext } from 'react';

import { MovieContext } from 'src/providers/SelectedMovieProvider';

//コンテキストの値を参照していくためのカスタムフック
export const useSelectMovie = () => useContext(MovieContext);