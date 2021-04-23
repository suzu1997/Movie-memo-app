import Head from 'next/head';

import 'src/styles/globals.css';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
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
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
