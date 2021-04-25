import { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieContextProvider = (props) => {
  const { children } = props;
  const [ selectedMovie, setSelectedMovie ] = useState(null);
  return (
    <MovieContext.Provider value={{selectedMovie, setSelectedMovie}}>
      {children}
    </MovieContext.Provider>
  )
}