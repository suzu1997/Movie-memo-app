import { memo, useEffect, useState } from 'react';
import Link from 'next/link';

import { MyMovieItem } from 'src/components/MyMovieItem';
import { SkeletonLoading } from 'src/components/SkeletonLoading';
import { db } from 'src/firebase/index';

export const MyMovieList = memo(() => {
  const [myMovies, setMyMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  //マウント（ページ初期化）が終わった時の処理
  useEffect(() => {
    (async () => {
      setLoading(true);
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
      setLoading(false);
      setMyMovies(movieNotes);
    })();
  }, []); //第二引数に空の配列⇨マウント時のみレンダー

  console.log(loading);
  return (
    <div className='flex flex-col w-11/12 max-w-screen-sm mx-auto my-8 p-0 min-h-full flex-grow'>
      <div>
        <h2 className='w-44 p-4 mb-0 text-center border border-solid border-black border-b-0 rounded-b-none rounded-t-lg font-normal'>
          My Movie
        </h2>
      </div>
      <ul className='border border-solid border-black flex-grow pb-16'>
        {loading ? (
          <div>
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
          </div>
        ) : (
          myMovies.map((myMovie) => {
            return (
              <li key={myMovie.title}>
                <Link href={`/movie-note/${myMovie.title}`}>
                  <a className='block p-2 border-b border-solid border-black cursor-pointer hover:bg-gray-100'>
                    <MyMovieItem myMovie={myMovie} />
                  </a>
                </Link>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
});
