import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import  { Toaster } from 'react-hot-toast';


import 'src/styles/globals.css';
import { MovieContextProvider } from 'src/providers/SelectedMovieProvider';
import { VFC } from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';

const MyApp: VFC = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Head>
        <title>movilove!!</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://use.fontawesome.com/releases/v5.6.1/css/all.css'
          rel='stylesheet'
        />
      </Head>
      <MovieContextProvider>
        <Component {...pageProps} />
        <Toaster 
          position="top-center"
          toastOptions={{
            duration: 3000,
          }}
        />
      </MovieContextProvider>
    </div>
  );
};

export default MyApp;
