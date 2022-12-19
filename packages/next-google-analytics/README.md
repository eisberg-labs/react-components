# Next Google Analytics

> NextJS React Component for Google universal analytics.

## Installation

```bash
npm i --save @eisberg-labs/next-google-analytics
```

## Usage
Add this on your page, I'd recommend a `pages/_app.tsx` for global access.  

```jsx

export default function MyApp({Component, pageProps}) {
  return (
    <>
      {process.env.NEXT_PUBLIC_ANALYTICS_ID && <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_ANALYTICS_ID}/>}
      <Component {...pageProps} />
    </>
  );
}

```



## License

MIT © [Eisberg Labs](http://www.eisberg-labs.com)
