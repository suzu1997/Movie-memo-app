import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import firebaseConfig from 'src/firebase/config'; //config.jsでexportした設定値

// -------firestoreを使う準備--------//
export const firebaseApp = initializeApp(firebaseConfig); //プロジェクトの設定値で初期化

export const db = getFirestore(firebaseApp);;
export const auth = getAuth();
