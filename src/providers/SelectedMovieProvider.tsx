import { createContext, ReactNode, useState, VFC } from 'react';

export const MovieContext = createContext(null);

type Props = {
  children: ReactNode;
}

export const MovieContextProvider: VFC<Props>= (props) => {
  const { children } = props;
  const [selectedMovie, setSelectedMovie] = useState({
    poster_path: '',
    title: '',
    release_date: '',
    overview: '',
  });
  return (
    <MovieContext.Provider value={{ selectedMovie, setSelectedMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
