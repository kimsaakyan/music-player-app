import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SongList } from './components/SongList';
import { useSelector } from 'react-redux';
import FavouriteButton from './components/favouriteSongs/FavouriteButton';
import FavouriteSongsList from './components/favouriteSongs/FavouriteSongsList';
import FavApp from './components/favouriteSongs/FavApp';
function App() {
    const favouriteSongsList = useSelector(
        (state) => state.favouriteSongs.favouriteSongsList
    );

    return (
        <div className="">
            <SongList />
            {/* <FavouriteSongsList/> */}
            {/* <FavouriteButton /> */}
            <FavApp />
            <ToastContainer />
        </div>
    );
}

export default App;
