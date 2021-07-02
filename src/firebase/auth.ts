import { auth } from 'src/firebase/index';

export const signUpWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<any> => {
  try {
    const user = await auth.createUserWithEmailAndPassword(email, password);
    alert('新規登録に成功しました');
    console.log('user: ', user);

    await auth.currentUser.sendEmailVerification();

    return user;
  } catch (error) {
    console.error(error);
    alert('新規登録に失敗しました');
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
    alert('サインイン失敗');
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
