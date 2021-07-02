import { VFC } from 'react';
import { useState } from 'react';

import { Header } from 'src/components/layout/Header';
import { Footer } from 'src/components/layout/Footer';
import { SignUp } from 'src/components/auth/SignUp';
import { SignIn } from 'src/components/auth/SignIn';

const Top: VFC = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className='min-h-screen p-0 flex flex-col items-center'>
      <Header />
      <main className='min-h-full flex-grow flex flex-col justify-center bg-green-600 bg-opacity-10 w-full'>
        {isLogin ? <SignIn setIsLogin={setIsLogin}/> : <SignUp setIsLogin={setIsLogin}/>}
      </main>
      <Footer />
    </div>
  );
};

export default Top;
