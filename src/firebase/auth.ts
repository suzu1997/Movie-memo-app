import { auth } from 'src/firebase/index';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import toast from 'react-hot-toast';

export const signUpWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<any> => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    if (!user) {
      throw new Error('新規登録に失敗しました');
    }
    toast.success('新規登録が完了しました');
    
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const signinWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<any> => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    toast.success('ログインしました');
    
    return user;
  } catch (error) {
    toast.error('ログインできませんでした');
  }
};

export const signout = async (): Promise<void> => {
  try {
    await signOut(auth);
    toast.success('ログアウトしました'); 
  } catch (error) {
    toast.error('ログアウトできませんでした');
    console.log(error);
  }
};
