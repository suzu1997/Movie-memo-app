import { auth } from 'src/firebase/index';

export const signUpWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<any> => {
  try {
    const user = await auth.createUserWithEmailAndPassword(email, password);
    if (!user) {
      throw new Error('新規登録に失敗しました');
    }
    alert('新規登録に成功しました');
    
    return user;
  } catch (error) {
    alert(error.message);
  }
};

export const signinWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<any> => {
  try {
    const user = await auth.signInWithEmailAndPassword(email, password);
    if (!user) {
      throw new Error('ログインに失敗しました');
    }
    alert('ログイン成功');
    
    return user;
  } catch (error) {
    alert(error.message);
  }
};

export const signOut = async (): Promise<void> => {
  try {
    await auth.signOut();
    alert('サインアウト成功'); 
  } catch (error) {
    alert('サインアウト失敗');
    console.log(error);
  }
};
