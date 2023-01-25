import 'leaflet';
import "leaflet/dist/leaflet.css";
import {MapContainer} from 'react-leaflet';


export default function MapWrapperContainer({children, zoom}) {
  return (
    <MapContainer id="map" zoom={zoom} center={[45, 16]} style={{
      height: '100vh',
      width: '100%',
      position: 'relative', opacity: 1,
    }}>{
      children
    }</MapContainer>
  )
}
