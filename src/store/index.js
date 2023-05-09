import { configureStore, createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload);
        },
        removeSong(state, action) {
            //
        }
    }
});

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer
    }
});

store.dispatch({
    type: 'song/addSong',
    payload: 'New song!!!'
});

console.log(store.getState());
console.log(songsSlice.actions.addSong("One song!!!"))

store.dispatch(
    songsSlice.actions.addSong("One song!!!")
)
console.log(store.getState())