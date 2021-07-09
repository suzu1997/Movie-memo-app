import { auth } from 'src/firebase/index';

export const signUpWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<any> => {
  try {
    const user = await auth.createUserWithEmailAndPassword(email, password);
    alert('新規登録に成功しました');
    
    return user;
  } catch (error) {
    console.error(error);
  }
};

export const signinWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<any> => {
  try {
    const user = await auth.signInWithEmailAndPassword(email, password);
    alert('サインイン成功');
    
    return user;
  } catch (error) {
    console.log(error);
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
