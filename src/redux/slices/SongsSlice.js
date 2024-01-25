import { createSlice } from '@reduxjs/toolkit';

// Initial list of songs.
const songsList = [
    // Each song has an id, name, artist name, track number, and playing status.
    {
        id: 1,
        songName: 'Song 1',
        artistName: 'Artist 1',
        trackNumber: 1,
        isPlaying: false,
    },
    {
        id: 2,
        songName: 'Song 2',
        artistName: 'Artist 2',
        trackNumber: 2,
        isPlaying: false,
    },
    {
        id: 3,
        songName: 'Song 3',
        artistName: 'Artist 3',
        trackNumber: 3,
        isPlaying: false,
    },
    {
        id: 4,
        songName: 'Song 4',
        artistName: 'Artist 4',
        trackNumber: 4,
        isPlaying: false,
    },
];

export const songsSlice = createSlice({
    name: 'songs',
    initialState: {
        songsList,
        filteredSongsList: songsList,
    },
    reducers: {
        // Reducer to add a new song to the list.
        addSong: (state, action) => {
            // Adding a new song to the songs list and updating the track number.
            const updatedState = (state.songsList = [
                ...state.songsList,
                { ...action.payload, trackNumber: state.songsList.length + 1 },
            ]);

            // Updating both songs list and filtered songs list.
            state.filteredSongsList = updatedState;
        },
        // Reducer to toggle the playing status of a song.
        togglePlaying: (state, action) => {
            //Update the playing status
            state.filteredSongsList.filter((song) => {
                if (song.id === action.payload.songID) {
                    song.isPlaying = !song.isPlaying;
                } else {
                    song.isPlaying = false;
                }
            });
        },
        // Reducer to filter the songs list based on a search term.
        filterSongsList: (state, action) => {
            if (action.payload) {
                // Filtering songs based on the search term.
                const filteredSongs = state.songsList.filter((song) =>
                    song.songName
                        .toLowerCase()
                        .includes(action.payload.toLowerCase())
                );

                // Updating the filtered songs list state.
                state.filteredSongsList = filteredSongs;
            } else {
                // Resetting the filtered songs list to the original list.
                state.filteredSongsList = state.songsList;
            }
        },
    },
});

export const { addSong, togglePlaying, filterSongsList } = songsSlice.actions;

export default songsSlice.reducer;
