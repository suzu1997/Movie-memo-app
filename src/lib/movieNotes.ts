import { db } from 'src/firebase/index';
import { MovieNoteData } from 'src/types/movieNoteData';
import toast from 'react-hot-toast';
import { auth } from 'src/firebase/index';

//firestoreからmovieNotesのデータを取得する関数
export const getMovieNotesData: (
  currentUserUid
) => Promise<Array<MovieNoteData>> = async (currentUserUid) => {
  const movieNotes = [];
  //非同期処理
  const snapshots = await db
    .collection('movieNotes')
    .where('userId', '==', currentUserUid)
    .orderBy('watchDate')
    .get();
  //movieNotesの中身が全てsnapshotsとして取得される(ドキュメント)
  snapshots.forEach((doc) => {
    //ドキュメントを一つずつ取り出す
    const id = doc.id; //それぞれのドキュメントキー(id)
    const data = doc.data(); //中身のデータ  それぞのオブジェクト
    movieNotes.push({...data, id: String(id)});
  });
  return movieNotes;
};

//idの一覧を取得するための関数
export const getMovieNotesIds: () => Promise<
{
  params: {
    id: string;
  };
}[]
> = async () => {
  const ids = []; 
  const snapshots = await db
    .collection('movieNotes')
    .get();
  snapshots.forEach((doc) => {
    const id = doc.id;
    ids.push(id);
  });
  return ids.map((id) => {
    return {
      params: {
        id: String(id),
      },
    };
  });
};

//特定のidを使って、データベースからデータを取得するための関数
export const getMovieNoteData: (id) => Promise<any> = async (id) => {
  const doc = await db.collection('movieNotes').doc(id).get();
  const movieNote = doc.data();

  return { ...movieNote, id: String(id) };
};

//映画メモを作成するための関数
export const createMovieNote: (data: MovieNoteData) => Promise<void> = async (
  data
) => {
  await db
    .collection('movieNotes')
    .add(data)
    .then(() => {
      toast.success('映画メモを作成しました！');
    })
    .catch((err) => {
      console.log(err);
      toast.error('映画メモの作成に失敗しました');
    });
};

//映画メモのデータを変更する関数
export const updateMovieNote: (
  data: MovieNoteData,
  id: string
) => Promise<void> = async (data, id) => {
  await db
    .collection('movieNotes')
    .doc(id)
    .set(data)
    .then(() => {
      toast.success('映画メモを更新しました！');
    })
    .catch((err) => {
      console.log(err);
      toast.error('映画メモの更新に失敗しました');
    });
};

//映画メモを削除するための関数
export const deleteMovieNote: (id: string) => Promise<void> = async (id) => {
  await db
    .collection('movieNotes')
    .doc(id)
    .delete()
    .then(() => {
      toast.success('映画メモを削除しました！');
    })
    .catch((err) => {
      console.log(err);
      toast.error('映画メモの削除に失敗しました');
    });
};

export const searchMovieNote: (title: string) => Promise<Array<MovieNoteData>> =
  async (title) => {
    const movieNote = [];
    const snapshots = await db
      .collection('movieNotes')
      .where('userId', '==', auth.currentUser.uid)
      .where('title', '==', title)
      .get();
      snapshots.forEach((doc) => {
        const data = doc.data();
        movieNote.push(data);
      });
    return movieNote;
  };
