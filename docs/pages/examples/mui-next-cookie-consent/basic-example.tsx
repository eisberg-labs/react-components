import CookieConsent from '@eisberg-labs/mui-next-cookie-consent';
import moment from 'moment';
import Head from 'next/head';

export default function BasicExample () {
  return (
    <>
      <Head>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <h2>Simple cookie consent example</h2>
      <div style={{position: 'relative', display: 'block'}}>
      <CookieConsent
        cookieOptions={{
          expires: moment().add(1, 'years').toDate(),
        }}
        defaultName={`Cookie-${Math.random()}`}
        confirmText="I agree"
      >This website uses cookies to enhance the user experience.</CookieConsent></div>
      </>
  )
}
