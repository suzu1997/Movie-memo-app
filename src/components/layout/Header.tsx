import Link from 'next/link';
import { memo, useCallback, useContext, VFC } from 'react';
import { useRouter } from 'next/router';

import { SignOutButton } from 'src/components/button/SignOutButton';
import { signout } from 'src/firebase/auth';
import { AuthContext } from 'src/providers/AuthProvider';

export const Header: VFC = memo(() => {
  const { currentUser } = useContext(AuthContext);

  const router = useRouter();
  const onClickSignOutButton = useCallback(() => {
    signout();
    router.push('/top');
  }, [router]);

  return (
    <header className='text-blue-700 font-bold bg-blue-500 bg-opacity-30 w-full h-12 sm:h-14 flex items-center justify-between pr-4'>
      <Link href={router.pathname === '/top' ? '/top' : '/'} passHref>
        <div className='flex items-center cursor-pointer h-14 pl-4'>
          <i className='fas fa-film'></i> <p className='ml-1'>ムビラブ！！</p>
        </div>
      </Link>
      {currentUser ? (
        <SignOutButton onClick={onClickSignOutButton}>ログアウト</SignOutButton>
      ) : null}
    </header>
  );
});
