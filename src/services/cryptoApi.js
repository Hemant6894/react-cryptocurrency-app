import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoAPiHeaders = {
    'X-RapidAPI-Key': 'dc8664d0damsh8295f1bff891992p105603jsn05085ba0585a',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoAPiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
})

export const { useGetCryptosQuery } = cryptoApi;

