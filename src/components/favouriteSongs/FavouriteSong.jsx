import React, { useState } from 'react';
import CheckIcon from '../../images/icons/CheckIcon';
import ShareIcon from '../../images/icons/ShareIcon';
import PlayIcon from '../../images/icons/PlayIcon';
import LoadingIcon from '../../images/icons/LoadingIcon';
import PauseIcon from '../../images/icons/PauseIcon';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { togglePlaying } from '../../redux/slices/SongsSlice';

const FavouriteSong = ({ song }) => {
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
            </td>
        </tr>
    );
};

export default FavouriteSong;
