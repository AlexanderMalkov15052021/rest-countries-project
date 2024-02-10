import { Country } from 'shared';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CountryState {
    name: string,
    countries: Country[],
}

const initialState = { name: '', countries: [] } as CountryState

const CountryStateSlice = createSlice({
    name: 'countryState',
    initialState,
    reducers: {
        setCountryName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
        toggleCountryFavourite(state, action: PayloadAction<Country>) {
            state.countries.some(country => country.name.official === action.payload.name.official)
                ? (state.countries = state.countries.filter(obj => obj.name.official !== action.payload.name.official))
                : state.countries.push(action.payload)
        },
    },
})

export const { setCountryName, toggleCountryFavourite } = CountryStateSlice.actions
export default CountryStateSlice.reducer