import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "search",
    initialState : {
        searchResultVideos : [],
    },
    reducers : {
        cacheResults : (state,action)=>{
            state = Object.assign(state, action.payload);
        },
        getSearchResultVideos : (state,action)=>{
            state.searchResultVideos = action.payload
        },
        removeResultVideos : (state,action)=>{
            state.searchResultVideos = action.payload;
        }
    }
});

export const {cacheResults, getSearchResultVideos, removeResultVideos} = searchSlice.actions
export default searchSlice.reducer;