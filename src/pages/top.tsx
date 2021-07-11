import { useContext, useEffect, VFC } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';

import { Header } from 'src/components/layout/Header';
import { Footer } from 'src/components/layout/Footer';
import { SignUp } from 'src/components/auth/SignUp';
import { SignIn } from 'src/components/auth/SignIn';
import { AuthContext } from 'src/providers/AuthProvider';
import { signinWithEmailAndPassword } from 'src/firebase/auth';

const Top: VFC = () => {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);

  const onClickGuestButton = async () => {
    try {
      const user = await signinWithEmailAndPassword(
        'guest@example.com',
        'password'
      );
      if (!user) {
        throw new Error('ゲストログインに失敗しました');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    currentUser && router.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  return (
    <div className='min-h-screen p-0 flex flex-col items-center'>
      <Header />
      <main className='min-h-full flex-grow flex flex-col justify-center bg-green-600 bg-opacity-10 w-full'>
        {isLogin ? (
          <SignIn setIsLogin={setIsLogin} />
        ) : (
          <SignUp setIsLogin={setIsLogin} />
        )}
        <button
          className='text-blue-600 underline mt-4 focus:outline-none hover:text-gray-600'
          onClick={onClickGuestButton}
        >
          ゲストユーザーとしてログイン
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default Top;
