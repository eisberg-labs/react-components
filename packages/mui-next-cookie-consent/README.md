[![Downloads](http://img.shields.io/npm/dm/@eisberg-labs/mui-next-cookie-consent.svg)](https://npmjs.org/package/@eisberg-labs/mui-next-cookie-consent)

# Mui Next Cookie Consent

> React Material Ui cookie consent dialog, compatible with Nextjs cookies.

## Installation

Prerequisites are:

- @mui/base
- tailwindcss configured

```bash
npm i --save @eisberg-labs/mui-next-cookie-consent
```

## Usage

Just import the template with defaults:

```jsx
<CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
```

I use it in a nextjs app like this:

```jsx

const CookieConsent = dynamic(() => import('@eisberg-labs/mui-next-cookie-consent'), {suspense: true});

export default function Layout({children}) {
  return (
    <>
      <AppHeader/>
      <div className={styles.wrapper}>{children}</div>
      <Suspense><CookieConsent
        cookieOptions={{
          expires: moment().add(1, 'years').toDate()
        }}
        confirmText="I agree"
      >This website uses cookies to enhance the user experience.</CookieConsent></Suspense>
      <Footer/>
    </>
  );
}

```

You can change the default styling, cookie key, set expires, register callback on Accept.

## Api

| Name          | Type                                                                                                             | Default                                            | Description                                                    |
|---------------|------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|----------------------------------------------------------------|
| defaultName   | string                                                                                                           | 'CookieConsent'                                    | Cookie key name for cookie consent                             |
| confirmText   | React.ReactNode                                                                                                  | 'I understand'                                     | Confirm button text                                            |
| snackbarClassName | string                                                                                                           | 'fixed p-3 z-50 bottom-0'                          | snackbar class name                                            |
| rootClassName| string| 'rounded-lg bg-white shadow-2xl p-3'               ||
|buttonClassName | string | 'bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'                                                   ||
| cookieOptions | [CookieSerializeOptions](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/cookie/index.d.ts) | e.g. `{expires: moment().add(1, 'days').toDate()}` |                                                                |
| onAccept      | ()=>void                                                                                                         |                                                    | Optional function that triggers after cookie consent accepted. |

## License

MIT © [Eisberg Labs](http://www.eisberg-labs.com)
