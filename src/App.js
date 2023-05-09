import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import "./styles.css";

function App() {
    const handleResetClick = () => {

    }

    return <div className="container is-fluid">
        <button onClick={() => handleResetClick()} className="button is-danger">
            Reset Both Playlists
        </button>
        <MoviePlaylist />
        <SongPlaylist />
    </div>
};

export default App;