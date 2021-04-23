import Head from 'next/head';
import Link from 'next/link';
import { FavoriteButton } from 'src/components/atoms/button/FavoriteButton';
import { Footer } from 'src/components/organisms/layout/Footer';
import { Header } from 'src/components/organisms/layout/Header';
import { PrimaryButton } from 'src/components/atoms/button/PrimaryButton';

export default function MovieWork() {
  return (
    <div className='min-h-screen p-0 flex flex-col items-center'>
      <Head>
        <title>movilove!!</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://use.fontawesome.com/releases/v5.6.1/css/all.css'
          rel='stylesheet'
        />
      </Head>
      <Header />
      <div className='flex-grow w-4/5 max-w-lg pt-10'>
        <div className='flex justify-center'>
          <img className='w-52 h-52 block border-2 border-solid border-gray-800' src='prada.jpg' />
          <div className='flex flex-col justify-center ml-10'>
            <Link href='/edit' passHref>
              <a>
                <PrimaryButton>
                  My Movieに登録
                </PrimaryButton>
              </a>
            </Link>
            <FavoriteButton>お気に入り</FavoriteButton>
          </div>
        </div>
        <p className='mt-10'>タイトル: プラダを着た悪魔</p>
        <p>制作年: 〇〇〇〇年</p>
        <p>ジャンル: ヒューマンドラマ</p>
        <p>
          あらすじ:
          <br />
          あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
        </p>
      </div>
      <Footer />
    </div>
  );
}
