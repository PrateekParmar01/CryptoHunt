import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders={
    'X-RapidAPI-Key': '1481d5cfddmshc721521aafc508bp174eecjsnd8d4ad2dba00',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl='https://coinranking1.p.rapidapi.com';

const createRequest=(url)=>({url,headers:cryptoApiHeaders})

export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`)
        }),
        getCryptoExchanges:builder.query({
            query:()=>createRequest(`/exchanges`)
        }),
        getCryptoDetails: builder.query({
            query:(coinId)=>createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            
            // query:({coinId,timePeriod})=>createRequest(`/coin/${coinId}/history/${timePeriod}`),
            query: ({ coinId, timePeriod }) => {
                // console.log(`${baseUrl}/coin/${coinId}/history`); // Add console.log here
                return createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`);
              },
            // console.log(`${baseUrl}/coin/${coinId}/history/${timePeriod}`)
        })
    })
})

export const{ useGetCryptosQuery,useGetCryptoExchangesQuery,useGetCryptoDetailsQuery, useGetCryptoHistoryQuery}=cryptoApi;