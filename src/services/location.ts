import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ILocationResponse } from '../models';

export const locationApi = createApi({
  reducerPath: 'locationApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://geo.ipify.org/api/v2',
  }),
  endpoints: (builder) => ({
    getLocationByIP: builder.query<ILocationResponse, string>({
      query: (ip) => ({
        url: `country,city`,
        params: {
          apiKey: process.env.REACT_APP_API_KEY,
          ipAddress: ip,
        },
      }),
    }),
  }),
});

export const { useGetLocationByIPQuery } = locationApi;
