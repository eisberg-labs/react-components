[![Downloads](http://img.shields.io/npm/dm/@eisberg-labs/google-maps-leaflet-tile-layer.svg)](https://npmjs.org/package/@eisberg-labs/google-maps-leaflet-tile-layer)

# Google Maps Leaflet Tile Layer

> Google Maps tile layer for react leaflet.

![Example](/packages/google-maps-leaflet-tile-layer/docs/demo.gif)

If you 👍 or use this project, consider giving it a ★, thanks! 🙌

## Installation

Prerequisite is to have leaflet library already installed.

```bash
npm i --save leaflet@1.9.3 react-leaflet@^4.2.0
```

As for the google-maps-leaflet-tile-layer:

```bash
npm i --save @eisberg-labs/google-maps-leaflet-tile-layer
```

## Usage

```jsx
import {MapContainer, Marker} from 'react-leaflet';
import * as L from 'leaflet';
import "leaflet/dist/leaflet.css";

export const Basic = () => {

  return (
    <MapContainer id="map" zoom={10} center={[45, 16]} style={{
      height: 300,
      width: '100%',
      position: 'relative', opacity: 1,
    }}>
      <GoogleLayer maxZoom={20}/>
    </MapContainer>
  )
}
```

## Api

| Name        | Type | Default | Description|
|-------------|------|-----------|----------|
|  subdomains | `string[]` | `['mt0', 'mt1', 'mt2']` | If one subdomain is down, try another.|

## License

MIT © [Eisberg Labs](http://www.eisberg-labs.com)
