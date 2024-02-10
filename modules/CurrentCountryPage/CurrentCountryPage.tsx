'use client';

import { CountryCode } from "shared/types/RequestParams";
import { CurrentCountryView } from "features";
import { FC } from "react";

export const CurrentCountryPage: FC<CountryCode> = (data: CountryCode) => {
    return <CurrentCountryView code={data.code} />
}