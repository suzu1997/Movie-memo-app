import { useState } from 'react';
import Router from 'next/router';

import { Footer } from 'src/components/organisms/layout/Footer';
import { Header } from 'src/components/organisms/layout/Header';
import { Input } from 'src/components/atoms/Input';
import { SelectWatchDate } from 'src/components/SelectWatchDate';
import { Textarea } from 'src/components/atoms/Textarea';
import { PrimaryButton } from 'src/components/atoms/button/PrimaryButton';
import { DeleteConfirmDialog } from 'src/components/DeleteConfirmDialog';
import { db } from 'src/firebase/index';

export default function MovieNote({ movieNote }) {
  const [year, setYear] = useState(movieNote.year);
  const [month, setMonth] = useState(movieNote.month);
  const [day, setDay] = useState(movieNote.day);
  const [evaluation, setEvaluation] = useState(movieNote.evaluation);
  const [impression, setImpression] = useState(movieNote.impression);

  //DeleteComfirmDialog の開閉に関するstate
  const [dialogOpen, setDialogOpen] = useState(false);

  //テキストフィールドのvalueの変更のための関数
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

  //DeleteComfirmDialog の開閉に関する関数
  const handleClickDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  //映画メモのデータを変更する関数
  const onClickUpdate = async () => {
    const data = {
      title: `${movieNote.title}`,
      src: `${movieNote.src}`,
      year: `${year}`,
      month: `${month}`,
      day: `${day}`,
      watchDate: `${year}${month}${day}`,
      evaluation: `${evaluation}`,
      impression: `${impression}`,
    };
    await db
      .collection('movieNotes')
      .doc(movieNote.id)
      .set(data)
      .then(() => {
        alert('更新しました')
        Router.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //映画メモを削除するための関数
  const onClickDelete = async () => {
    await db
      .collection('movieNotes')
      .doc(movieNote.id)
      .delete()
      .then(() => {
        alert('削除しました');
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
          <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
          <button
            className='rounded-full bg-red-400 bg-opacity-50 w-11 h-11 text-center ml-4 hover:bg-opacity-80 focus:outline-none'
            onClick={handleClickDialogOpen}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 mx-auto'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
              />
            </svg>
          </button>
        </div>
        <Input
          type='text'
          label='タイトル'
          value={movieNote.title}
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
      <DeleteConfirmDialog
        open={dialogOpen}
        handleClose={handleDialogClose}
        onClickDelete={onClickDelete}
      />
      <Footer />
    </div>
  );
}

//titleの一覧を取得するための関数
async function getMovieNotesTitles() {
  const movieNotes = [];
  await db
    .collection('movieNotes')
    .get()
    //movieNotesの中身が全てsnapshotsとして取得される(ドキュメント)
    .then((snapshots) => {
      snapshots.forEach((doc) => {
        console.log(doc);
        const data = doc.data();
        //中身のデータ  それぞれのオブジェクト
        movieNotes.push(data);
      });
    })
    .catch((err) => {
      console.log(err);
    });
  return movieNotes.map((movieNote) => {
    return {
      params: {
        title: String(movieNote.title),
      },
    };
  });
}

//特定のtitleを使って、データベースからビルド時にデータを取得するための関数
async function getMovieNoteData(title) {
  let movieNote;
  let id;
  await db
    .collection('movieNotes')
    .where('title', '==', title)
    .get()
    .then((snapshots) => {
      snapshots.forEach((doc) => {
        const data = doc.data();
        id = doc.id;
        //中身のデータ  それぞれのオブジェクト
        movieNote = data;
        console.log(data);
      });
    })
    .catch((err) => {
      console.log(err);
    });

  return { ...movieNote, id: String(id) };
}

//titleのとりうる値のリストを返す
export async function getStaticPaths() {
  const paths = await getMovieNotesTitles();
  return {
    paths,
    fallback: false,
  };
}

//titleに基づいて必要なデータを取得
export async function getStaticProps({ params }) {
  const movieNote = await getMovieNoteData(params.title);
  return {
    props: {
      movieNote,
    },
  };
}
