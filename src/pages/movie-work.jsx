import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';

import { FavoriteButton } from 'src/components/atoms/button/FavoriteButton';
import { Footer } from 'src/components/organisms/layout/Footer';
import { Header } from 'src/components/organisms/layout/Header';
import { PrimaryButton } from 'src/components/atoms/button/PrimaryButton';
import { useSelectMovie } from 'src/hooks/useSelectMovie';

export default function MovieWork() {
  const { selectedMovie } = useSelectMovie();
  console.log(selectedMovie);

  return (
    <div className='min-h-screen p-0 flex flex-col items-center'>
      <Head>
        <title>movilove!!</title>
      </Head>
      <Header />
      <div className='flex-grow w-4/5 max-w-lg pt-10'>
        <div className='flex justify-center'>
          <img
            className='w-52 h-52 block border-2 border-solid border-gray-800'
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${selectedMovie.poster_path}`}
          />
          <div className='flex flex-col justify-center ml-10'>
            <Link href='/edit' passHref>
              <a>
                <PrimaryButton>My Movieに登録</PrimaryButton>
              </a>
            </Link>
            <FavoriteButton>お気に入り</FavoriteButton>
          </div>
        </div>
        <p className='mt-10'>{`タイトル: ${selectedMovie.title}`} </p>
        <br />
        <p>{`制作年: ${selectedMovie.release_date.slice(0, 4)}年`}</p>
        <br />
        {/* <p>ジャンル: ヒューマンドラマ</p> */}
        <p>
          あらすじ:
          <br />
          {`${selectedMovie.overview}`}
        </p>
        <button
          className='text-sm my-6 mx-auto block border border-solid border-black px-4 py-2 rounded-lg hover:bg-gray-100 focus:outline-none'
          onClick={() => Router.back()}
        >
          戻る
        </button>
      </div>
      <Footer />
    </div>
  );
}
