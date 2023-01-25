[![Downloads](http://img.shields.io/npm/dm/@eisberg-labs/next-image-section.svg)](https://npmjs.org/package/@eisberg-labs/next-image-section)
# Next Image as Background Section
> React Section with lazy loaded nextjs image as background and tailwind, server component compatible.
> Img tag can be used as a background, it's usable for SEO, due to lazy loading and use of alt tags (speed and semantics).

![Example](/packages/next-image-section/docs/demo.png)

If you 👍 or use this project, consider giving it a ★, thanks! 🙌

## Installation
Package uses Nextjs Image component, so having next.js installed is required.
Don't forget to add [allowed domains](https://nextjs.org/docs/messages/next-image-unconfigured-host) in next.config.js.

Component is compatible with server only components.

```bash
npm i --save @eisberg-labs/next-image-section
```

## Usage
```jsx
import ImageSection from '@eisberg-labs/next-image-section';

<ImageSection
  src={"https://pixabay.com/images/id-2748776"}
  alt={"Pixabay Milna Croatia photo and picture by k9arteu"}
  childClassName={"container bg-white"}
>
  <p className={"text-xl"}>You can see in this example that img tag can work as a background.</p>
</ImageSection>
```

## Api

## License
MIT © [Eisberg Labs](http://www.eisberg-labs.com)
