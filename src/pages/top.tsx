import { VFC } from 'react';

import { Header } from 'src/components/layout/Header';
import { Footer } from 'src/components/layout/Footer';
import { SignUp } from 'src/components/SignUp';

const Top: VFC = () => {
  return (
    <div className='min-h-screen p-0 flex flex-col items-center'>
      <Header />
      <main className='min-h-full flex-grow flex flex-col justify-center bg-green-50 w-full'>
        <SignUp />
      </main>
      <Footer />
    </div>
  );
};

export default Top;

