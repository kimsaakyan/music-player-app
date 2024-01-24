import { createSlice } from '@reduxjs/toolkit';

const songsList = [
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
        addSong: (state, action) => {
            const updatedState = (state.songsList = [
                ...state.songsList,
                { ...action.payload, trackNumber: state.songsList.length + 1 },
            ]);

            state.filteredSongsList = updatedState;
        },
        togglePlaying: (state, action) => {
            state.filteredSongsList.filter((song) => {
                if (song.id === action.payload.songID) {
                    song.isPlaying = !song.isPlaying;
                } else {
                    song.isPlaying = false;
                }
            });
        },
        filterSongsList: (state, action) => {
            if (action.payload) {
                const filteredSongs = state.filteredSongsList.filter((song) => {
                    if (
                        song.songName
                            .toLowerCase()
                            .includes(action.payload.toLowerCase())
                    ) {
                        return song;
                    }
                });

                state.filteredSongsList = filteredSongs;
            } else {
                state.filteredSongsList = state.songsList;
            }
        },
    },
});

export const { addSong, togglePlaying, filterSongsList } = songsSlice.actions;

export default songsSlice.reducer;
