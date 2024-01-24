import { useState } from 'react';
import { useSelector } from 'react-redux';
import FavouriteButton from './FavouriteButton';
import FavouriteSongsList from './FavouriteSongsList';

const FavApp = () => {
    const favouriteSongsList = useSelector(
        (state) => state.favouriteSongs.favouriteSongsList
    );

    const [favListIsVisible, setFavListIsVisible] = useState(false);

    return (
        <>
            {favListIsVisible ? (
                <FavouriteSongsList
                    closeFavList={setFavListIsVisible}
                    favouriteSongsList={favouriteSongsList}
                />
            ) : (
                <FavouriteButton
                    openFavList={setFavListIsVisible}
                    amountOfFavSongs={favouriteSongsList.length}
                />
            )}
        </>
    );
};

export default FavApp;
