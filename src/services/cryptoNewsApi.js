import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeader={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '1481d5cfddmshc721521aafc508bp174eecjsnd8d4ad2dba00',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl='https://bing-news-search1.p.rapidapi.com';

const createRequest=(url)=>({url,headers:cryptoNewsHeader})

export const cryptoNewsApi=createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query:(newsCategory,count)=>createRequest(`/news?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&limit=${count}`)
        })
    })
})
// /search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}
export const{ useGetCryptoNewsQuery }=cryptoNewsApi;