import { createSlice } from '@reduxjs/toolkit';

export const favouriteSongsSlice = createSlice({
    name: 'favouriteSongs',
    initialState: {
        favouriteSongsList: [],
    },
    reducers: {
        addSongToFavouriteList: (state, action) => {
            state.favouriteSongsList.push(action.payload);
        },
        delSongFromFavouriteList: (state, action) => {
            state.favouriteSongsList = state.favouriteSongsList.filter(
                (song) => song.id !== action.payload.songID
            );
        },
    },
});

export const { addSongToFavouriteList, delSongFromFavouriteList } =
    favouriteSongsSlice.actions;

export default favouriteSongsSlice.reducer;
