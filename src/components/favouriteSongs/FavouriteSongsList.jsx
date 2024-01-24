import FavouriteSong from './FavouriteSong';

const FavouriteSongsList = ({ closeFavList, favouriteSongsList }) => {
    const onClickHandler = () => {
        closeFavList(false);
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full z-10 flex items-center justify-center bg-black/50">
            <div className="overflow-x-auto max-w-screen-sm bg-white flex flex-col p-8 gap-2 m-4">
                <table className="text-sm text-left text-gray-500 bg-white mx-2 border">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th className="px-6 py-3"></th>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Actor</th>
                            <th className="px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {favouriteSongsList?.map((song) => {
                            return <FavouriteSong key={song.id} song={song} />;
                        })}
                    </tbody>
                </table>
                <button
                    className=" px-8 py-4 bg-gradient-to-r from-rose-500 via-red-400 to-red-500 text-white font-semibold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
                    onClick={onClickHandler}
                >
                    CLOSE
                </button>
            </div>
        </div>
    );
};

export default FavouriteSongsList;
