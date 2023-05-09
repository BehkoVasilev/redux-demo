import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import "./styles.css";

function App() {
    return <div className="container is-fluid">
        <MoviePlaylist />
        <SongPlaylist />
    </div>
};

export default App;