// import axios from "axios";


// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': process.env('RAPID_API_KEY'),
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headeers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'crypto',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/exchanges')
        })
    })
});