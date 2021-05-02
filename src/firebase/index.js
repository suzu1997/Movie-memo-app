import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from 'src/firebase/config'; //config.jsでexportした設定値

// -------firestoreを使う準備--------//

//firebaseの初期化
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig); //プロジェクトの設定値で初期化
}
//export
export const db = firebase.firestore();
