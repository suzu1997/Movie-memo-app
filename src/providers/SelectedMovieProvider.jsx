import { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieContextProvider = (props) => {
  const { children } = props;
  const [selectedMovie, setSelectedMovie] = useState({
    poster_path: '/n4nXOWVOn3Y2zYqtsMSQusVVxBt.jpg',
    title: 'プラダを着た悪魔',
    release_date: '2006-06-30',
    overview: "恋に仕事にがんばるあなたへ贈る、ゴージャス＆ユーモラスなサクセスストーリー。大学を卒業し、ジャーナリストをめざしてNYにやってきたアンディ。オシャレに興味のない彼女が、一流ファッション誌‘RUNWAY’のカリスマ編集長ミランダ・プリーストリーのアシスタントに。そこは恐怖のポストだった！キャリアのためとはいえ、私生活はめちゃめちゃ。私って、本当は何をしたいんだっけ？"
  });
  return (
    <MovieContext.Provider value={{ selectedMovie, setSelectedMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
