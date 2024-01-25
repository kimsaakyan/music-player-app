import SongRow from './SongRow';
import AddAllButton from './buttons/AddAllButton';
import PlayAllButton from './buttons/PlayAllButton';
import SearchForm from './forms/SearchForm';
import MusicUploadForm from './forms/MusicUploadForm';
import { useSelector } from 'react-redux';

export const SongList = () => {
    const songs = useSelector((state) => state.songs.filteredSongsList);

    return (
        <div className="mx-2 my-2">
            <div className="flex flex-col justify-center my-10">
                <div className="bg-white rounded-lg p-4 flex flex-wrap justify-center sm:justify-between items-center">
                    <div className="flex gap-2">
                        <PlayAllButton />
                        <AddAllButton />
                    </div>
                    <div className="p-2">
                        <SearchForm />
                    </div>
                </div>
                <div className="overflow-x-auto shadow-md sm:rounded-lg mt-2">
                    <table className="w-full text-sm text-left text-gray-500 bg-white">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th className="px-6 py-3"></th>
                                <th className="px-6 py-3">Name</th>
                                <th className="px-6 py-3">Actor</th>
                                <th className="px-6 py-3">Track</th>
                                <th className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {songs.map((song) => {
                                return <SongRow key={song.id} song={song} />;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <MusicUploadForm />
            </div>
        </div>
    );
};

/*
Component SongList - responsible for table with song list.
We save list of songs in global state with the help of redux/toolkit.
Then We get list from global state in SongList component and draw these songs in table with array's method - map
*/
