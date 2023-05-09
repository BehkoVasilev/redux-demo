import { configureStore, createSlice } from '@reduxjs/toolkit';

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
            //
        }
    }
});

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer
    }
});

// store.dispatch({
//     type: 'song/addSong',
//     payload: 'New song!!!'
// });

// console.log(store.getState());
// console.log(songsSlice.actions.addSong("One song!!!"))

// store.dispatch(
//     songsSlice.actions.addSong("One song!!!")
// )
// console.log(store.getState())

export { store };

export const { addSong } = songsSlice.actions;