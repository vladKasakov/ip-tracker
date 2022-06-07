import { MapContainer, TileLayer } from 'react-leaflet';

import { ILocation } from '../../models';
import { MyMarker } from './MyMarker';

import './CustomMap.scss';

type Props = {
  location: ILocation;
};
export const CustomMap = ({ location }: Props) => {
  return (
    <MapContainer
      center={[location.lat, location.lng]}
      zoom={17}
      minZoom={3}
      scrollWheelZoom={true}
      zoomControl={false}
      keyboard={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {location && <MyMarker position={[location.lat, location.lng]} />}
    </MapContainer>
  );
};
