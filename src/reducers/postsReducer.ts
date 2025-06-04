import { createSlice } from "@reduxjs/toolkit";

interface IPosts {
    posts: any[]
}

const initialState:IPosts = {
    posts: [ { name: 'Elijai' }] 
}


export const postReducer = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    }
})


export const {} = postReducer.actions
export default postReducer.reducer