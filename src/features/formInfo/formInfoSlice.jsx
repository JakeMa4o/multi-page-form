import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    phone: "",
    isFilled: false
}


export const formInfoSlice = createSlice({
    name: 'formInfo',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPhone: (state, action) => {
            state.phone = action.payload;
        },
        setIsFilled: (state) => {
            state.isFilled = true;
        }
    },
})

export const { setName, setEmail, setPhone, setIsFilled } = formInfoSlice.actions;

export default formInfoSlice.reducer;