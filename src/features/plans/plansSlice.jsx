import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    plan: "arcade",
    yearly: false,
    arcade: 9,
    advanced: 12,
    pro: 15
}

export const plansSlice = createSlice({
    name: "plans",
    initialState,
    reducers: {
        setPlan: (state, action) => {
            state.plan = action.payload;
        },
        setYearly: (state) => {
            state.yearly = !state.yearly;
        }
    }
})


export const { setPlan, setYearly } = plansSlice.actions;

export default plansSlice.reducer;