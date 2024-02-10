import { RequestParams } from "shared/types/RequestParams";
import { countryAPI } from "services/CountryService";
import { getSortedArr } from "shared";

export const getCountryData = (params: RequestParams, selectedSorting: string) => {
    const data = countryAPI.useFetchAllCountriesQuery(params);

    const arr = data?.data ? [...data?.data] : [];

    return { ...data, data: getSortedArr(selectedSorting, arr, 'area') };
}