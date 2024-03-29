import React from 'react';
import { useState } from 'react';
import LoadingSpinner from '../spinners/LoadingSpinner';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addSong } from '../../redux/slices/SongsSlice';

// The MusicUpload component allows the user to upload music files.
const MusicUpload = () => {
    const dispatch = useDispatch();

    // Local state for storing the selected file and upload status.
    const [selectedFile, setSelectedFile] = useState({
        file: null,
        isUpload: false,
    });

    // Handler for file input changes to load the music file.
    const onChangeHandler = (data) => {
        if (data) {
            const nameWithoutExtension = data.name.replace(/\.mp3/g, ''); // Song name without file extension

            const newMusic = {
                id: Math.random(), // Generating a unique ID for the new song
                songName: nameWithoutExtension,
                artistName: 'Unknown Artist',
                trackNumber: 0,
                isPlaying: false, // Playback status
            };
            setSelectedFile({ ...selectedFile, file: newMusic });
        } else {
            toast('Please, choose a music'); // Display a notification if no file is selected
        }
    };

    // Form submission handler to start file upload.
    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            if (selectedFile.file) {
                setSelectedFile({ ...selectedFile, isUpload: true });
                setTimeout(() => {
                    dispatch(addSong(selectedFile.file)); // Adding the song to the store
                    setSelectedFile({ file: null, isUpload: false }); // Resetting state after upload
                }, 2000);
            } else {
                // Error handling can be added here if no file is selected
            }
        } catch (error) {
            // Error handling for upload failures can be added here
        }
    };

    return (
        <div className="">
            <form
                action=""
                onSubmit={handleSubmit}
                className="flex flex-wrap gap-2"
            >
                <input
                    type="file"
                    accept=".mp3, .wav"
                    onChange={(event) => {
                        onChangeHandler(event.target.files[0]);
                    }}
                    className="bg-white p-8 rounded-lg"
                />

                {selectedFile.isUpload ? (
                    <LoadingSpinner />
                ) : (
                    <button
                        type="submit"
                        disabled={!selectedFile.file}
                        className="bg-white p-8 rounded-lg transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg flex gap-2 items-center"
                    >
                        <p>Upload</p>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                                />
                            </svg>
                        </div>
                    </button>
                )}
            </form>
        </div>
    );
};

export default MusicUpload;

