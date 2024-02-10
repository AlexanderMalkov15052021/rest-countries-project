import { RequestParams } from "shared/types/RequestParams";
import { countryAPI } from "services/CountryService";

export const getCountryData = (params: RequestParams) => {
    const data = countryAPI.useFetchAllCountriesQuery(params);

    // тут логика по взаимодейсьвию с данными

    return data;
}