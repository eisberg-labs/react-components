import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

export interface Props {
  /**
   * Google Adsense client id
   */
  client_id: string;
}

export default function GoogleAdsense({ client_id }: Props) {
  return (
    <>
      <Head>
        <link rel="dns-prefetch" href="//stats.g.doubleclick.net" />
        <link rel="dns-prefetch" href="//pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="//www.googletagservices.com" />
        <link rel="dns-prefetch" href="//adservice.google.com" />
      </Head>
      <Script
        async
        defer
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client_id}`}
        crossOrigin="anonymous"
      />
    </>
  );
}
