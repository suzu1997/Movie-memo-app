import Head from 'next/head';
import { Footer } from 'src/components/organisms/layout/Footer';
import { Header } from 'src/components/organisms/layout/Header';
import { Input } from 'src/components/atoms/Input';
import { SelectWatchDate } from 'src/components/SelectWatchDate';
import { Textarea } from 'src/components/atoms/Textarea';
import classes from 'src/styles/Edit.module.css';

export default function Edit() {
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
        <Input label='タイトル' placeholder='何を観た？？👀' />
        <br />
        <br />
        <SelectWatchDate />
        <br />
        <br />
        <Input label='評価' />
        <br />
        <br />
        <Textarea
          label='感想'
          placeholder='映画に関する感想やメモを記録しておこう！！'
        />
      </div>
      <Footer />
    </div>
  );
}
