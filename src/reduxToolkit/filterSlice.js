import {createSlice }from "@reduxjs/toolkit";

const filterInititalState = '';
const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInititalState,
    reducers: {
        addFilter(state, action) {
            if(state !== action.payload) return state = action.payload;
        },
           
    }

});

export const { addFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;