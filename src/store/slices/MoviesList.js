import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const movieSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload);
        },
        removeMovie(state, action) {
            state.splice(state.indexOf(action.payload), 1);
        },
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            // state.splice(0, state.length);
            return [];
        })
    }
});

export const {addMovie, removeMovie} = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
