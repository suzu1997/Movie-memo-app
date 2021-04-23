import Link from 'next/link';

export const AddButton = (props) => {
  const { children } = props;
  return (
    <>
      <Link href='/edit'>
        <button className='leading-10 text-white bg-green-700 text-4xl font-bold rounded-full outline-none w-14 h-14 fixed right-6 bottom-6 hover:bg-green-800 '>  
          {children}
        </button>
      </Link>
    </>
  );
};
