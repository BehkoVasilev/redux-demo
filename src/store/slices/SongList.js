import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong(state, action) {
            // State is not the big state object
            // in the store
            // it is the piece of state managed
            //by this reducer
            state.push(action.payload);
        },
        removeSong(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            // state.splice(0, state.length);
            return [];
        });
    }
});

export const {addSong, removeSong} = songsSlice.actions;
export const songReducer = songsSlice.reducer;


