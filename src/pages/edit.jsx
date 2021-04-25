import Head from 'next/head';
import { Footer } from 'src/components/organisms/layout/Footer';
import { Header } from 'src/components/organisms/layout/Header';
import { Input } from 'src/components/atoms/Input';
import { SelectWatchDate } from 'src/components/SelectWatchDate';
import { Textarea } from 'src/components/atoms/Textarea';

export default function Edit() {
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
      <div className='flex-grow w-4/5 max-w-lg mx-auto my-10'>
        <Input label='タイトル' placeholder='何を観た？？👀' />
        <br />
        <SelectWatchDate />
        <br />
        <Input label='評価' />
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
