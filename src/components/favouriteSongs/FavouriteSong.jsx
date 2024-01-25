import React, { useState } from 'react';
import CheckIcon from '../../images/icons/CheckIcon';
import ShareIcon from '../../images/icons/ShareIcon';
import PlayIcon from '../../images/icons/PlayIcon';
import LoadingIcon from '../../images/icons/LoadingIcon';
import PauseIcon from '../../images/icons/PauseIcon';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { togglePlaying } from '../../redux/slices/SongsSlice';
import DelIcon from '../../images/icons/DelIcon';
import { delSongFromFavouriteList } from '../../redux/slices/FavouriteSongsSlice';

// The FavouriteSong component is responsible for rendering each individual song in the favourite songs list
const FavouriteSong = ({ song }) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    // handleTogglePlaying is a function to play or pause the song.
    const handleTogglePlaying = (id) => {
        setIsLoading(true); // Sets isLoading state to true, showing loading icon.
        setTimeout(() => {
            // Dispatches the togglePlaying action to play/pause the song.
            dispatch(
                togglePlaying({
                    songID: id,
                })
            );

            // Toast notification for play/pause status.
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

    // onClickHandler function to remove a song from the favourite list.
    const onClickHandler = (id) => {
        dispatch(
            delSongFromFavouriteList({
                songID: id,
            })
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
            <td className="px-6 py-4 flex flex-col md:flex-row items-center justify-center gap-2">
                <button>
                    <CheckIcon />
                </button>
                <button>
                    <ShareIcon />
                </button>
                <button onClick={() => onClickHandler(song.id)}>
                    <DelIcon />
                </button>
            </td>
        </tr>
    );
};

export default FavouriteSong;
