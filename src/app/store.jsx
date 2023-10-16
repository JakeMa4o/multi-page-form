import { configureStore } from "@reduxjs/toolkit";
import plansReducer from "../features/plans/plansSlice";
import formInfoReducer from "../features/formInfo/formInfoSlice";
import addOnsReducer from "../features/add-ons/addOnsSlice";
import globalReducer from "../features/global/globalSlice";

export const store = configureStore({
    reducer: {
        plans: plansReducer,
        formInfo: formInfoReducer,
        addOns: addOnsReducer,
        global: globalReducer
    },
})