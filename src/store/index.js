import { configureStore } from '@reduxjs/toolkit';
import { songReducer, addSong, removeSong } from './slices/SongList';
import { movieReducer, addMovie, removeMovie } from './slices/MoviesList';
import { reset } from './actions';

const store = configureStore({
    reducer: {
        songs: songReducer,
        movies: movieReducer
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

export { store, reset, addSong, removeSong, addMovie, removeMovie };