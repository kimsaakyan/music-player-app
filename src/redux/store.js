import { configureStore } from '@reduxjs/toolkit';
import songsReducer from './slices/SongsSlice';
import favouriteSongsReducer from './slices/FavouriteSongsSlice';

export const store = configureStore({
    reducer: {
        songs: songsReducer,
        favouriteSongs: favouriteSongsReducer,
    },
});
