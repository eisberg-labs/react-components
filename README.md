[![CI](https://github.com/eisberg-labs/react-components/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/eisberg-labs/react-components/actions/workflows/ci.yml)
# React Components

Welcome to Eisberg Labs React Components, 
repository contains custom react components that we use in our projects.

[CopyField](./packages/mui-copy-field)  
[Google Maps Leaflet Layer](./packages/google-maps-leaflet-tile-layer)  
[Mui Next Cookie Consent](./packages/mui-next-cookie-consent)  
[Next Google Adsense](./packages/next-google-adsense)  
[Next Google Analytics](./packages/next-google-analytics)  
[Use Google Charts](./packages/use-google-charts)    

## Demo and Documentation
[Visit for examples and documentation](https://www.amarjanica.com/projects/react-components).

## Development 

React components are handled by Lerna. Common commands:
- `lerna run test`
- `lerna run lint`
- `lerna run prettier`

## Publishing  

```
lerna run build
lerna version --no-private
lerna publish from-git --no-private
lerna publish from-package --registry https://npm.pkg.github.com
```

## License
MIT © [Eisberg Labs](http://www.eisberg-labs.com)
