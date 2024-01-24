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
    },
});

export const { addSongToFavouriteList } = favouriteSongsSlice.actions;

export default favouriteSongsSlice.reducer;
