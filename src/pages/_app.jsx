import Head from 'next/head';
import 'tailwindcss/tailwind.css';

import 'src/styles/globals.css';
import { MovieContextProvider } from 'src/providers/SelectedMovieProvider';

const MyApp = ({ Component, pageProps }) => {
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
      </MovieContextProvider>
    </div>
  );
};

export default MyApp;
