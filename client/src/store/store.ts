import { configureStore } from "@reduxjs/toolkit";
import mdaReducer from './features/mda'

export const store = configureStore({
    reducer:{
        mda:mdaReducer
    }
})

export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;