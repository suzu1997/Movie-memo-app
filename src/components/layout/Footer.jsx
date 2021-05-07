import { memo } from 'react';

export const Footer = memo(() => {
  return (
    <footer className='text-blue-700 bg-blue-500 bg-opacity-30 w-full h-16 flex justify-center items-center'>
      &copy;Chie Suzuhara 2021
    </footer>
  );
});
