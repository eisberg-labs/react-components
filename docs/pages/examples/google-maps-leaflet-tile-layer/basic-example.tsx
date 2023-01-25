'use client';

import {useState} from 'react';
import dynamic from 'next/dynamic';

const GoogleLayer = dynamic(() => import('@eisberg-labs/google-maps-leaflet-tile-layer'), {ssr: false})
const MapContainer = dynamic(()=>import('../../../src/map-wrapper'), {ssr: false})

export default function BasicExample () {
  const [zoom, setZoom] = useState(10);

  return <MapContainer zoom={zoom}><GoogleLayer maxZoom={zoom}/></MapContainer>
}
