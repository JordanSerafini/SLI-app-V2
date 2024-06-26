import { configureStore } from "@reduxjs/toolkit";
import { itemSlice } from "./features/itemSlice";
import { customerSlice } from "./features/customerSlice";

export const store = configureStore({
    reducer: {
        items: itemSlice.reducer,
        customers: customerSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;