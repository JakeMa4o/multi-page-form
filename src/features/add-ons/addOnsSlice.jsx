import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    online: {bool: true, price: 1},
    storage: {bool: false, price: 2},
    profile: {bool: false, price: 2}
}

export const addOnsfoSlice = createSlice({
    name: 'addOns',
    initialState,
    reducers: {
        setOnline: (state, action) => {
            state.online.bool = action.payload;
        },
        setStorage: (state, action) => {
            state.storage.bool = action.payload;
        },
        setProfile: (state, action) => {
            state.profile.bool = action.payload;
        },
    },
})

export const { setOnline, setStorage, setProfile } = addOnsfoSlice.actions;

export default addOnsfoSlice.reducer;