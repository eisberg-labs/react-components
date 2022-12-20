# Next Google Adsense

> NextJS React Component for Google Adsense.

## Installation

```bash
npm i --save @eisberg-labs/next-google-adsense
```

## Usage

Follow the instructions on Google Adsense and create `ads.txt` in the `public` directory.
Format of `ads.txt` should be something like:  
`google.com, pub-0000000, DIRECT, 00000000`  
If you just want to run autoads, adding `<Adsense client_id="...">` on your page should be enough:

```jsx
export default function Page(){
    return (
        <>
          <Adsense client_id="myClientId"/>
        </>
    )
}
```

To include an ad block:  

```jsx
import {Adblock} from "@eisberg-labs/next-google-adsense";

export default function Page() {
  return (
    <>
      <Adsense client_id="myClientId"/>
      <Adblock className="adsbygoogle block"
                data-ad-client="..."
                data-ad-slot="..."
                data-ad-format="auto"
                data-full-width-responsive="true"/>
      </>);
}
```

## License

MIT © [Eisberg Labs](http://www.eisberg-labs.com)
