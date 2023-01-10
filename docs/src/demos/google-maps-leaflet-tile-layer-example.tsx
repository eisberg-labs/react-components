import "leaflet/dist/leaflet.css";
import {MapContainer} from 'react-leaflet';
import {useEffect, useState} from 'react';
import {GoogleLayer} from '@eisberg-labs/google-maps-leaflet-tile-layer';


export default function GoogleMapsLeafletTileLayerExample () {
  const [zoom, setZoom] = useState(10);

  return (
    <MapContainer id="map" zoom={zoom} center={[45, 16]} style={{
      height: 300,
      width: '100%',
      position: 'relative', opacity: 1,
    }}>
      <GoogleLayer maxZoom={zoom}/>
    </MapContainer>
  )
}
