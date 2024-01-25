import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { togglePlaying } from '../redux/slices/SongsSlice';
import { addSongToFavouriteList } from '../redux/slices/FavouriteSongsSlice';
import { toast } from 'react-toastify';
import LoadingIcon from '../images/icons/LoadingIcon';
import PauseIcon from '../images/icons/PauseIcon';
import PlayIcon from '../images/icons/PlayIcon';
import ShareIcon from '../images/icons/ShareIcon';
import CheckIcon from '../images/icons/CheckIcon';
import FavIcon from '../images/icons/FavIcon';

const SongRow = ({ song }) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const handleTogglePlaying = (id) => {
        setIsLoading(true);
        setTimeout(() => {
            dispatch(
                togglePlaying({
                    songID: id,
                })
            );

            if (song.isPlaying === true) {
                toast(`The song has been paused.`, {
                    position: 'bottom-right',
                });
            } else {
                toast(`Playing ${song.songName}`, { position: 'bottom-right' });
            }

            setIsLoading(false);
        }, 2000);
    };

    const handleClick = (song) => {
        dispatch(addSongToFavouriteList(song));
        toast(
            `The song ${song.songName} has been added to the list of favourites`,
            { position: 'bottom-right' }
        );
    };

    return (
        <tr className="bg-white border-b hover:bg-gray-50">
            <td className="w-4 p-4">
                <div className="flex items-center">
                    <button onClick={() => handleTogglePlaying(song.id)}>
                        {song.isPlaying ? (
                            <PauseIcon />
                        ) : isLoading ? (
                            <LoadingIcon />
                        ) : (
                            <PlayIcon />
                        )}
                    </button>
                </div>
            </td>
            <td className="px-6 py-4 font-medium text-gray-900">
                {song.songName}
            </td>
            <td className="px-6 py-4">{song.artistName}</td>
            <td className="px-6 py-4">{song.trackNumber}</td>
            <td className="px-6 py-4 flex flex-col md:flex-row items-center justify-center gap-2">
                <button
                    className=""
                    onClick={() => {
                        handleClick(song);
                    }}
                >
                    <FavIcon />
                </button>
                <button className="">
                    <CheckIcon />
                </button>
                <button>
                    <ShareIcon />
                </button>
            </td>
        </tr>
    );
};

export default SongRow;

/*
SongRow - A subcomponent to render individual song details within.
This component performs two functions:
1. Starting and stopping music:
  1.1 In the handleTogglePlaying function we simulate music playback using setTimeout
  1.2 In the togglePlaying function we start and stop music.
2. Adding a song to the list of favourite songs (addSongToFavouriteList)
*/
