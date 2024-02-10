import { Country } from "shared";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { RequestParams } from "shared/types/RequestParams";

export const countryAPI = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com' }),  // https://restcountries.com/v3.1/all?fields=name,flags`
    tagTypes: ['Date'],
    endpoints: (build) => ({
        fetchAllCountries: build.query<Country[], RequestParams>({
            query: (data: RequestParams) => {

                // const datesLimit = 10;

                return {
                    // url: '/v3.1/all',   // https://restcountries.com/v3.1/alpha/rus
                    // url: '/v3.1/subregion/Eastern Europe',
                    url: `/v3.1${data.urlParams}`,
                    // params: {
                    //     name: data.,
                    //     // dataId: currentIndex + 1,
                    //     // _limit: datesLimit,
                    // }
                }
            },
            providesTags: result => ['Date']
        }),
    })
});