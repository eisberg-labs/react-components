import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import 'leaflet'

const UseGoogleChartsExample = dynamic(() => import('./use-google-charts-example'), {suspense: true});
const GoogleMapsLeafletTileLayerExample = dynamic(() => import('./google-maps-leaflet-tile-layer-example'), {suspense: true});

export default function Examples({project}: {project: string}) {
  const Inner = ()=> {
    switch (project) {
      case 'use-google-charts': {
        return <Suspense><UseGoogleChartsExample/></Suspense>
      }
      case 'google-maps-leaflet-tile-layer': {
        return <Suspense><GoogleMapsLeafletTileLayerExample/></Suspense>
      }
      default:
        return <></>
    }
  }

  return (
    <>
      <h2>Demo Examples</h2>
      <Inner/>
    </>
  )
}
