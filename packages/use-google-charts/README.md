[![Downloads](http://img.shields.io/npm/dm/@eisberg-labs/use-google-charts.svg)](https://npmjs.org/package/@eisberg-labs/use-google-charts)

# Use Google Charts
> Google charts context loader for React components, loosely typed.
Simplifies loading of google charts in a React component, you only need to write the callback part.
For more info on google charts, visit <https://developers.google.com/chart/interactive/docs>.

If you 👍 or use this project, consider giving it a ★, thanks! 🙌

## Installation

```bash
npm i --save @eisberg-labs/use-google-charts
```

## Usage
This example shows how to render a geo chart <https://developers.google.com/chart/interactive/docs/gallery/geochart>
```jsx
export default function BasicExample(){
  const exampleRef = useRef<HTMLDivElement>();
  useGoogleCharts(() => {
    const data = google.visualization.arrayToDataTable([
      ['Country', 'Popularity'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700]
    ]);

    const chart = new google.visualization.GeoChart(exampleRef.current);

    chart.draw(data, {});}, {
    'packages':['geochart'],
  })

  return (
    <>
      <h4>GeoChart Example</h4>
      <div ref={exampleRef}></div>
    </>
  )
}

```

## Api

Function `useGoogleCharts` takes `loadCallback: Function`, `props: google.LoadOptions` and optional `version: string | number`.
- loadCallback - function without arguments and void result.
- LoadOptions - defined in `@types/google.visualization`, e.g. `{
  'packages':['geochart'],
  }`.
- version - 'current' if not specified.
## License

MIT © [Eisberg Labs](http://www.eisberg-labs.com)
