import { countryAPI } from "services/CountryService";
import { RequestParams } from "shared/types/RequestParams";



export const getCurrentCountryData = (params: RequestParams) => {
    const data = countryAPI.useFetchAllCountriesQuery(params);

    // тут логика по взаимодейсьвию с данными

    return data;
}