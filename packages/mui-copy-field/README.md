[![Downloads](http://img.shields.io/npm/dm/@eisberg-labs/mui-copy-field.svg)](https://npmjs.org/package/@eisberg-labs/mui-copy-field)
# Mui Copy Field
> Material UI TextField with copy to clipboard functionality.

![Example](https://raw.githubusercontent.com/eisberg-labs/react-components/main/packages/mui-copy-field/docs/demo.gif)

If you 👍 or use this project, consider giving it a ★, thanks! 🙌

# Installation
Since this is an extension of mui components, prerequisite is to have material library already installed.
```sh
npm i --save @mui/material @emotion/react @emotion/styled @mui/icons-material
```
As for the mui-copy-field:
```sh
npm i --save @eisberg-labs/mui-copy-field
```

# Usage
Take a look at [Storybook examples](https://www.amarjanica.com/projects/react-components/?path=/docs/react-components-copyfield--docs) for example usage.

```jsx
import {DefaultCopyField} from '@eisberg-labs/mui-copy-field';

<DefaultCopyField
  label="Click on copy Button"
  value={"Enter text"} />
```

or like `TextField` with extra props:
```jsx
import {CopyField} from '@eisberg-labs/mui-copy-field';

<CopyField
  label="Click on copy Button"
  value={"Enter text"}
  onCopySuccess={console.log}
  onCopyError={console.log}
  copyTooltip={"Some copy tooltip. Default is Copy"}
/>
```

# Api

Name | Type | Default | Description
----------|------|-----------|----------
copyTooltip | string | "Copy" | Copy button tooltip
onCopySuccess | Function | undefined | If defined, fired on copy to clipboard
onCopyError | Function | undefined | If defined, fired on copy to clipboard error


# Demo
[Try the Demo](https://www.amarjanica.com/projects/react-components/?path=/docs/react-components-copyfield--docs)

# License
MIT © [Eisberg Labs](http://www.eisberg-labs.com)
