import { CountryParams } from "shared/types/RequestParams";
import { CurrentCountryPage } from "modules";

export default function CurrentCountry(data: CountryParams) {
    return <CurrentCountryPage code={data.params.code} />
}