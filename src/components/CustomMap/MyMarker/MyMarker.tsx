import { LatLngExpression } from 'leaflet';
import { useEffect } from 'react';
import { Marker, useMap } from 'react-leaflet';

import { useMatchMedia } from '../../../hooks';
import { locationIcon } from '../LocationIcon';

type Props = {
  position: number[];
};

export const MyMarker = ({ position }: Props) => {
  const [lat, lng] = position;

  const map = useMap();
  const isMobile = useMatchMedia('(max-width: 549px)');

  useEffect(() => {
    map.flyTo([isMobile ? lat + 0.0007 : lat, lng], 17);
  }, [map, lat, lng, isMobile]);

  return <Marker position={position as LatLngExpression} icon={locationIcon} />;
};
