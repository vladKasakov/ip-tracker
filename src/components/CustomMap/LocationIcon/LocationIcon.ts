import { Icon } from 'leaflet';
import location from '../../../assets/icon-location.svg';
import './LocationIcon.scss';

export const locationIcon = new Icon({
  iconUrl: location,
  iconRetinaUrl: location,
  iconSize: [50, 60],
  iconAnchor: [25, 59],
  className: 'leaflet-div-icon',
});
