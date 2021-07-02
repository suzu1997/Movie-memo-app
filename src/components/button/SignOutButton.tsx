import { memo, MouseEventHandler, ReactNode, VFC } from 'react';

type Props = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const SignOutButton: VFC<Props> = memo((props) => {
  const { children, onClick } = props;
  return (
    <button
      className='text-blue-700 bg-white border-blue-700 border text-bold text-xs sm:text-sm p-2 focus:outline-none rounded-lg hover:bg-blue-700 hover:text-white'
      onClick={onClick}
    >
      {children}
    </button>
  );
});
