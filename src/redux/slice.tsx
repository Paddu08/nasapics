import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Apod {
  date: string
  explanation: string
  hdurl?: string
  media_type: string
  service_version: string
  title: string
  url: string
}

// Create the API slice
export const nasaApi = createApi({
  reducerPath: 'nasaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.nasa.gov/planetary/' }),
  endpoints: (builder) => ({
    getApod: builder.query<Apod, { apiKey: string; date?: string }>({
      query: ({ apiKey, date }) => {
        let url = `apod?api_key=${apiKey}`
        if (date) url += `&date=${date}`
        return url
      },
    }),
  }),
})

// Export hook
export const { useGetApodQuery } = nasaApi
