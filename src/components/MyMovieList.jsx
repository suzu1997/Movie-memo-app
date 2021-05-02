import { MyMovieItem } from 'src/components/MyMovieItem';
import { memo, useEffect, useState } from 'react';

import { db } from 'src/firebase/index';

export const MyMovieList = memo(() => {
  const [myMovies, setMyMovies] = useState([]);

  //マウント（ページ初期化）が終わった時の処理
  useEffect(() => {
    (async () => {
      const movieNotes = [];
      //非同期処理
      await db
        .collection('movieNotes')
        .orderBy('watchDate')
        .get()
        //movieNotesの中身が全てsnapshotsとして取得される(ドキュメント)
        .then((snapshots) => {
          snapshots.forEach((doc) => {
            //ドキュメントを一つずつ取り出す
            // const id = doc.id; //それぞれのドキュメントのキー(id)
            const data = doc.data(); //中身のデータ  それぞれのオブジェクト
            movieNotes.push(data);
          });
        })
        .catch((err) => {
          console.log(err);
        });
      setMyMovies(movieNotes);
    })();
  }, []); //第二引数に空の配列⇨マウント時のみレンダー

  return (
    <div className='w-11/12 max-w-screen-sm mx-auto my-8 p-0 flex-grow'>
      <div>
        <h2 className='w-44 p-4 mb-0 text-center border border-solid border-black border-b-0 rounded-b-none rounded-t-lg font-normal'>
          My Movie
        </h2>
      </div>
      <div className='border border-solid border-black pb-16'>
        {myMovies.map((myMovie) => {
          return <MyMovieItem key={myMovie.title} myMovie={myMovie} />;
        })}
      </div>
    </div>
  );
});
