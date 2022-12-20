import Script from 'next/script';
import React from 'react';
import Head from 'next/head';

export interface Props {
  /**
   * Google Universal Analytics id
   */
  ga_id: string;
}

export default function GoogleAnalytics({ ga_id }: Props) {
  return (
    <Head>
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="preconnect" href="//www.google-analytics.com" />
      <link rel="preconnect" href="//www.googletagmanager.com" />
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ga_id}');
        `}</Script>
    </Head>
  );
}
