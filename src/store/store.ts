import { configureStore, ReducerType } from "@reduxjs/toolkit";
import postReducer  from "../reducers/postsReducer";

export const store = configureStore({
    reducer : {
        // all the reducers will be here 
        posts : postReducer
    }
})
export type StoreState = ReturnType<typeof store.getState>
export const AppDispatch = typeof store.dispatch