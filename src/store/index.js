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
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
    },
    extraReducers(builder) {
        //instead 'movie/reset' using of 
        //movieSlice.actions.reset.toString() protects against typo
        //short way movieSlice.actions.reset
        builder.addCase(movieSlice.actions.reset, (state, action) => {
            return [];
        });
    }
});

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
        reset(state, action) {
            // state.splice(0, state.length);
            return [];
        }
    }
})

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: movieSlice.reducer
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

export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie, reset } = movieSlice.actions