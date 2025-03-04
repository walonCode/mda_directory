import { configureStore } from "@reduxjs/toolkit";
import mdaReducer from './features/mda'
import searchReducer from "./features/search";

export const store = configureStore({
    reducer:{
        mda:mdaReducer,
        search:searchReducer
    }
})

export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;