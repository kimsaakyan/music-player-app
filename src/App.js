import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SongList } from './components/SongList';
import FavApp from './components/favouriteSongs/FavApp';

function App() {
    return (
        <div className="">
            <SongList />
            <FavApp />
            <ToastContainer />
        </div>
    );
}

export default App;
