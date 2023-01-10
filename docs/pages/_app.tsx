import React, {Suspense} from 'react';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import GoogleAnalytics from '@eisberg-labs/next-google-analytics';
import GoogleAdsense from '@eisberg-labs/next-google-adsense';
import {defaultTheme} from 'theme';
import '@styles/global.scss';
import dynamic from 'next/dynamic';
import moment from 'moment';

const CookieConsent = dynamic(()=>import('@eisberg-labs/mui-next-cookie-consent'), {suspense: true});

export default function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0"/>
      </Head>
      {process.env.NEXT_PUBLIC_ANALYTICS_ID && <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_ANALYTICS_ID}/>}
      {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID &&
        <GoogleAdsense client_id={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}/>}
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>
      <Suspense><CookieConsent
        cookieOptions={{
          expires: moment().add(1, 'years').toDate()
        }}
        confirmText="I agree"
      >This website uses cookie consent from <a href={`${process.env.NEXT_PUBLIC_BASE}/mui-next-cookie-consent`}>mui-next-cookie-consent</a> to enhance the user experience.</CookieConsent></Suspense>
    </>
  );
}
