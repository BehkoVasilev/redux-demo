import { useDispatch } from "react-redux";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import "./styles.css";
import { reset } from "./store";

function App() {
    const dispatch = useDispatch();

    const handleResetClick = () => {
        dispatch(reset());
    }

    return <div className="container is-fluid">
        <button onClick={handleResetClick} className="button is-danger">
            Reset Both Playlists
        </button>
        <MoviePlaylist />
        <SongPlaylist />
    </div>
};

export default App;