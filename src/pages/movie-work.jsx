import Head from 'next/head';
import Link from 'next/link';
import { FavoriteButton } from '../components/FavoriteButton';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { PrimaryButton } from '../components/PrimaryButton';
import classes from '../styles/Work.module.css';

export default function MovieWork() {
  return (
    <div className={classes.container}>
      <Head>
        <title>movilove!!</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://use.fontawesome.com/releases/v5.6.1/css/all.css'
          rel='stylesheet'
        />
      </Head>
      <Header />
      <div className={classes.main}>
        <div className={classes.workTop}>
          <img className={classes.img} src='prada.jpg' />
          <div className={classes.btn}>
            <Link href='/edit' passHref>
              <a>
                <PrimaryButton className={classes.registerBtn}>
                  My Movieに登録
                </PrimaryButton>
              </a>
            </Link>
            <FavoriteButton>お気に入り</FavoriteButton>
          </div>
        </div>
        <p className={classes.title}>タイトル: プラダを着た悪魔</p>
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
