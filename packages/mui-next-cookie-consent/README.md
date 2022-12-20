# Mui Next Cookie Consent

> React Material Ui cookie consent dialog, compatible with Nextjs cookies.

## Installation

Since this is an extension of mui components, prerequisite is to have material library already installed.

```bash
npm i --save @mui/material
```

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

export default function Layout({ children }) {
  return (
    <>
      <AppHeader />
      <div className={styles.wrapper}>{children}</div>
      <Suspense><CookieConsent
        cookieOptions={{
          expires: moment().add(1, 'years').toDate()
        }}
        confirmText="I agree"
      >This website uses cookies to enhance the user experience.</CookieConsent></Suspense>
      <Footer />
    </>
  );
}

```
You can change the default styling, cookie key, set expires, register callback on Accept.

## Api

| Name          | Type                            | Default                                            | Description                                   |
|---------------|---------------------------------|----------------------------------------------------|-----------------------------------------------|
| defaultName   | string                          | 'CookieConsent'                                    | Cookie key name for cookie consent            |
| confirmText   | React.ReactNode                 | 'I understand'                                     | Confirm button text                           |
| buttonVariant | 'text', 'outlined', 'contained' | 'text'                                             | Button variant                                |
| cookieOptions | [CookieSerializeOptions](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/cookie/index.d.ts)      | e.g. `{expires: moment().add(1, 'days').toDate()}` |                                               |
| onAccept      | ()=>void                        |                                                    | Optional function that triggers after cookie consent accepted. |
| sx            | SxProps<Theme>                  |                                                    | Define styling of the cookie consent container                                              |
| butttonSx     | SxProps<Theme>                  |                                                    | Define styling of the button.                                              |


## License

MIT © [Eisberg Labs](http://www.eisberg-labs.com)
