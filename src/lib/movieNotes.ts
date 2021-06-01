import { db } from 'src/firebase/index';
import { MovieNoteData } from 'src/types/movieNoteData';

//firestoreからmovieNotesのデータを取得する関数
export const getMovieNotesData: () => Promise<Array<MovieNoteData>> = async () => {
  const movieNotes = [];
  //非同期処理
  await db
    .collection('movieNotes')
    .orderBy('watchDate')
    .get()
    //movieNotesの中身が全てsnapshotsとして取得される(ドキュメント)
    .then((snapshots) => {
      snapshots.forEach((doc) => {
        //ドキュメントを一つずつ取り出す
        // const id = doc.id; //それぞれのドキュメントキー(id)
        const data = doc.data(); //中身のデータ  それぞのオブジェクト
        movieNotes.push(data);
      });
    });
  return movieNotes;
};

//titleの一覧を取得するための関数
export const getMovieNotesTitles: () => Promise<
  {
    params: {
      title: string;
    };
  }[]
> = async () => {
  const movieNotes = [];
  await db
    .collection('movieNotes')
    .get()
    //movieNotesの中身が全てsnapshotsとして取得される(ドキュメント)
    .then((snapshots) => {
      snapshots.forEach((doc) => {
        const data = doc.data();
        //中身のデータ  それぞれのオブジェクト
        movieNotes.push(data);
      });
    });
  return movieNotes.map((movieNote) => {
    return {
      params: {
        title: String(movieNote.title),
      },
    };
  });
};

//特定のtitleを使って、データベースからデータを取得するための関数
export const getMovieNoteData: (title: string | string[]) => Promise<any> =
  async (title) => {
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
        });
      });

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
      alert('映画メモを作成しました。');
    })
    .catch((err) => {
      console.log(err);
    });
};

//映画メモのデータを変更する関数
export const updateMovieNote: (data: MovieNoteData, id: string) => Promise<void> =
  async (data, id) => {
    await db
      .collection('movieNotes')
      .doc(id)
      .set(data)
      .then(() => {
        alert('映画メモを更新しました。');
      })
      .catch((err) => {
        console.log(err);
      });
  };

//映画メモを削除するための関数
export const deleteMovieNote: (id: string) => Promise<void> = async (id) => {
  await db
    .collection('movieNotes')
    .doc(id)
    .delete()
    .then(() => {
      alert('映画メモを削除しました。');
    })
    .catch((err) => {
      console.log(err);
    });
};

export const searchMovieNote: (title: string) => Promise<Array<MovieNoteData>> =
  async (title) => {
    const movieNote = [];
    await db
      .collection('movieNotes')
      .where('title', '==', title)
      .get()
      .then((snapshots) => {
        snapshots.forEach((doc) => {
          const data = doc.data();
          movieNote.push(data);
        });
      });
    return movieNote;
  };
