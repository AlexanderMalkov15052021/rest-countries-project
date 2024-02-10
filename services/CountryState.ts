import { Country } from 'shared';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CountryState {
    name: string,
    countries: Country[],
    countriesViewed: Country[],
    selectedSorting: 'increase' | 'decrease' | 'default',
}

const initialState = { name: '', countries: [], countriesViewed: [], selectedSorting: 'default' } as CountryState

const CountryStateSlice = createSlice({
    name: 'countryState',
    initialState,
    reducers: {
        setCountryName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
        setSelectedSorting(state, action: PayloadAction<'increase' | 'decrease' | 'default'>) {
            state.selectedSorting = action.payload;
        },
        toggleCountryFavourite(state, action: PayloadAction<Country>) {
            state.countries.some(country => country.name.official === action.payload.name.official)
                ? (state.countries = state.countries.filter(obj => obj.name.official !== action.payload.name.official))
                : state.countries.push(action.payload)
        },
        setViewedCountry(state, action: PayloadAction<Country>) {
            !state.countriesViewed.some(country => country.name.official === action.payload.name.official)
                && state.countriesViewed.push(action.payload)
        },
    },
})

export const { setCountryName, toggleCountryFavourite, setViewedCountry, setSelectedSorting } = CountryStateSlice.actions
export default CountryStateSlice.reducer