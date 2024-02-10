import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CountryState {
    name: string
}

const initialState = { name: '' } as CountryState

const CountryStateSlice = createSlice({
    name: 'countryState',
    initialState,
    reducers: {
        // CountryIndexIncrement(state) {
        //     state.index++;
        //     console.log(123);
        // },
        // CountryIndexDecrement(state) {
        //     state.index--;
        // },
        setCountryName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
    },
})

export const { setCountryName } = CountryStateSlice.actions
export default CountryStateSlice.reducer