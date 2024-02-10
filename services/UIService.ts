import { createSlice } from '@reduxjs/toolkit'

interface UIState {
    theme: 'dark' | 'light';
}

const initialState = { theme: 'light' } as UIState

const UIServiceSlice = createSlice({
    name: 'UISlice',
    initialState,
    reducers: {
        toggleUITheme(state) {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
        },
    },
})

export const { toggleUITheme } = UIServiceSlice.actions
export default UIServiceSlice.reducer