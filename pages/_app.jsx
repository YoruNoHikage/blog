import React from 'react';
import Head from 'next/head';

import '../styles/reset.css';
import '../styles/typography.css';
import '../styles/base.css';
import '../styles/highlight.css';
import '../styles/blog-post.css';

import '../components/Sidebar/style.css';
import '../components/Nav/style.css';
import '../components/SiteLinks/style.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="google-site-verification"
          content="agg-_LnRFJMMGBybCnFKLeLAisX9Mwv9v0aD4p_Byrw"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 maximum-scale=5.0"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="manifest" href="/site.webmanifest" />

        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,400italic,500,700&subset=latin"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Inconsolata:400,700&subset=latin-ext"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/fonts/fontawesome/style.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
