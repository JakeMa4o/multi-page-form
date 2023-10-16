import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    total: 0,
    section: 0,
    isCompleted: false
}

export const globalSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setTotal: (state, action) => {
            state.total = action.payload;
        },
        setSection: (state, action) => {
            state.section = action.payload;
        },
        goNextSection: (state) => {
            state.section += 1;
        },
        goPrevSection: (state) => {
            state.section -= 1;
        },
        setIsCompleted: (state) => {
            state.isCompleted = true;
        }
    },
})

export const { setTotal, setSection, goNextSection, goPrevSection, setIsCompleted } = globalSlice.actions;

export default globalSlice.reducer;