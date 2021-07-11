import { auth } from 'src/firebase/index';
import toast from 'react-hot-toast';

export const signUpWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<any> => {
  try {
    const user = await auth.createUserWithEmailAndPassword(email, password);
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
    const user = await auth.signInWithEmailAndPassword(email, password);
    if (!user) {
      throw new Error('ログインできませんでした');
    }
    toast.success('ログインしました');
    
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const signOut = async (): Promise<void> => {
  try {
    await auth.signOut();
    toast.success('ログアウトしました'); 
  } catch (error) {
    toast.error('ログアウトできませんでした');
    console.log(error);
  }
};
