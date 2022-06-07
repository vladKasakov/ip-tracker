export interface ILocationResponse {
  ip: string;
  location: ILocation;
  isp: string;
}

export interface ILocation {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geonameId: number;
}

export interface FormValues {
  ip: string;
}