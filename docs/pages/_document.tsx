import * as React from 'react';
import {Html, Head, Main, NextScript} from 'next/document';
import {defaultTheme} from 'theme';

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content={defaultTheme.palette.primary.main}/>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <link rel="apple-touch-icon" sizes="180x180" href="https://www.eisberg-labs.com/assets/img/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="https://www.eisberg-labs.com/assets/img/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16"
              href="https://www.eisberg-labs.com/assets/img/favicon-16x16.png"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600&display=swap" rel="stylesheet"/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  );
}
