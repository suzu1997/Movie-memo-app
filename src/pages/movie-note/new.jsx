import { useState } from 'react';
import Router from 'next/router';

import { Footer } from 'src/components/organisms/layout/Footer';
import { Header } from 'src/components/organisms/layout/Header';
import { Input } from 'src/components/atoms/Input';
import { SelectWatchDate } from 'src/components/SelectWatchDate';
import { Textarea } from 'src/components/atoms/Textarea';
import { PrimaryButton } from 'src/components/atoms/button/PrimaryButton';
import { useSelectMovie } from 'src/hooks/useSelectMovie';
import { db } from 'src/firebase/index';

export default function MovieNote() {
  const { selectedMovie } = useSelectMovie();

  const [evaluation, setEvaluation] = useState('');
  const [impression, setImpression] = useState('');

  const today = new Date();

  const [year, setYear] = useState(today.getFullYear().toString());
  const [month, setMonth] = useState(('0' + (today.getMonth() + 1)).slice(-2));
  const [day, setDay] = useState(('0'+today.getDate()).slice(-2));

  const onChangeYear = (e) => {
    setYear(e.target.value);
  };

  const onChangeMonth = (e) => {
    setMonth(e.target.value);
  };

  const onChangeDay = (e) => {
    setDay(e.target.value);
  };

  const onChangeEvaluation = (e) => {
    setEvaluation(e.target.value);
  };
  const onChangeImpression = (e) => {
    setImpression(e.target.value);
  };
  
  //映画メモを作成するための関数
  const onClickSave = async () => {
    const data = {
      title: `${selectedMovie.title}`,
      src: `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${selectedMovie.poster_path}`,
      year: `${year}`,
      month: `${month}`,
      day: `${day}`,
      watchDate: `${year}${month}${day}`,
      evaluation: `${evaluation}`,
      impression: `${impression}`,
    };
    await db
      .collection('movieNotes')
      .add(data)
      .then(() => {
        alert('メモを作成');
        Router.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='min-h-screen p-0 flex flex-col items-center'>
      <Header />
      <div className='flex-grow w-4/5 max-w-lg mx-auto my-10'>
        <div className='flex justify-end'>
          <button
            className='text-xs sm:text-sm block border border-solid border-black px-5 py-3 mr-4 rounded-lg hover:bg-gray-100 focus:outline-none'
            onClick={() => Router.back()}
          >
            戻る
          </button>
          <PrimaryButton onClick={onClickSave}>保存</PrimaryButton>
        </div>
        <Input
          type='text'
          label='タイトル'
          value={selectedMovie.title}
          readOnly={true}
        />
        <br />
        <SelectWatchDate
          year={year}
          month={month}
          day={day}
          onChangeYear={onChangeYear}
          onChangeMonth={onChangeMonth}
          onChangeDay={onChangeDay}
        />
        <br />
        <Input
          label='評価'
          value={evaluation}
          onChange={onChangeEvaluation}
          placeholder='10点中何点？⭐️'
        />
        <br />
        <Textarea
          type='text'
          label='感想'
          value={impression}
          onChange={onChangeImpression}
          placeholder='映画に関する感想やメモを記録しておこう！！'
        />
      </div>
      <Footer />
    </div>
  );
}
