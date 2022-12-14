[![Downloads](http://img.shields.io/npm/dm/@eisberg-labs/google-maps-leaflet-tile-layer.svg)](https://npmjs.org/package/@eisberg-labs/google-maps-leaflet-tile-layer)
# Google Maps Leaflet Tile Layer
> Google Maps tile layer for react leaflet.

![Example](https://raw.githubusercontent.com/eisberg-labs/react-components/main/packages/google-maps-leaflet-tile-layer/docs/demo.gif)

If you 👍 or use this project, consider giving it a ★, thanks! 🙌

# Installation
Prerequisite is to have material library already installed.
```sh
npm i --save leaflet@1.9.3 react-leaflet@^4.2.0
```
As for the google-maps-leaflet-tile-layer:
```sh
npm i --save @eisberg-labs/google-maps-leaflet-tile-layer
```

# Usage
Take a look at [Storybook examples](https://www.amarjanica.com/projects/react-components) for example usage.

```jsx
<MapContainer id="map" zoom={15} center={[0, 0]}>
  <GoogleLayer maxZoom={20}/>
</MapContainer>
```

# Api 

Name | Type | Default | Description
----------|------|-----------|----------
subdomains | `string[]` | `['mt0', 'mt1', 'mt2']` | If one subdomain is down, try another.

# Demo
[Try the Demo](https://www.amarjanica.com/projects/react-components)

# License
MIT © [Eisberg Labs](http://www.eisberg-labs.com)
