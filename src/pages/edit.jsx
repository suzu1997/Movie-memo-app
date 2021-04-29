import { useState } from 'react';
import Router from 'next/router';

import { Footer } from 'src/components/organisms/layout/Footer';
import { Header } from 'src/components/organisms/layout/Header';
import { Input } from 'src/components/atoms/Input';
import { SelectWatchDate } from 'src/components/SelectWatchDate';
import { Textarea } from 'src/components/atoms/Textarea';
import { PrimaryButton } from 'src/components/atoms/button/PrimaryButton';
import { useMyMovies } from 'src/hooks/useMyMovies';

export default function Edit() {
  const { myMovies, setMyMovies } = useMyMovies();

  const [title, setTitle] = useState('');
  const [evaluation, setEvaluation] = useState('');
  const [impression, setImpression] = useState('');

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeEvaluation = (e) => {
    setEvaluation(e.target.value);
  };
  const onChangeImpression = (e) => {
    setImpression(e.target.value);
  };

  const onClickSave = () => {
    
  }

  return (
    <div className='min-h-screen p-0 flex flex-col items-center'>
      <Header />
      <div className='flex-grow w-4/5 max-w-lg mx-auto my-10'>
        <div className='flex justify-end'>
          <button
            className='text-sm block border border-solid border-black px-5 py-3 mr-4 rounded-lg hover:bg-gray-100 focus:outline-none'
            onClick={() => Router.back()}
          >
            戻る
          </button>
          <PrimaryButton onClick={onClickSave}>保存</PrimaryButton>
        </div>
        <Input
          type='search'
          label='タイトル'
          value={title}
          onChange={onChangeTitle}
          placeholder='何を観た？？👀'
        />
        <br />
        <SelectWatchDate />
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
