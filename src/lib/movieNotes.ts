import {
  doc,
  collection,
  query,
  where,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  deleteDoc,
  orderBy,
} from 'firebase/firestore';
import toast from 'react-hot-toast';
import { MovieNoteData } from 'src/types/movieNoteData';
import { db } from 'src/firebase/index';
import { auth } from 'src/firebase/index';

//firestoreからmovieNotesのデータを取得する関数
export const getMovieNotesData: (
  currentUserUid
) => Promise<Array<MovieNoteData>> = async (currentUserUid) => {
  const movieNotes = [];
  const q = query(
    collection(db, 'movieNotes'),
    where('userId', '==', currentUserUid),
    orderBy('watchDate')
  );

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const id = doc.id; //それぞれのドキュメントキー(id)
    const data = doc.data(); //中身のデータ  それぞのオブジェクト
    movieNotes.push({ ...data, id: String(id) });
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
  const q = query(collection(db, 'movieNotes'));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
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
  const docRef = doc(db, 'movieNotes', id);
  const docSnap = await getDoc(docRef);

  const movieNote = docSnap.data();

  return { ...movieNote, id: String(id) };
};

//映画メモを作成するための関数
export const createMovieNote: (data: MovieNoteData) => Promise<void> = async (
  data
) => {
  try {
    await addDoc(collection(db, 'movieNotes'),  {
      ...data,
    });
    toast.success('映画メモを作成しました！');
  } catch (err) {
    console.log(err);
    toast.error('映画メモの作成に失敗しました');
  }
};

//映画メモのデータを変更する関数
export const updateMovieNote: (
  data: MovieNoteData,
  id: string
) => Promise<void> = async (data, id) => {
  try {
    await setDoc(doc(db, 'movieNotes', id), {
      ...data,
    });
    toast.success('映画メモを更新しました！');
  } catch (err) {
    console.log(err);
    toast.error('映画メモの更新に失敗しました');
  }
};

//映画メモを削除するための関数
export const deleteMovieNote: (id: string) => Promise<void> = async (id) => {
  const docRef = doc(db, 'movieNotes', id);
  try {
    await deleteDoc(docRef);
    toast.success('映画メモを削除しました！');
  } catch (error) {
    toast.error('映画メモの削除に失敗しました');
  }
};

export const searchMovieNote: (title: string) => Promise<Array<MovieNoteData>> =
  async (title) => {
    const movieNote = [];
    const q = query(
      collection(db, 'movieNotes'),
      where('userId', '==', auth.currentUser.uid),
      where('title', '==', title)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const id = doc.id; //それぞれのドキュメントキー(id)
      const data = doc.data(); //中身のデータ  それぞのオブジェクト
      movieNote.push({ ...data, id: String(id) });
    });
    return movieNote;
  };
