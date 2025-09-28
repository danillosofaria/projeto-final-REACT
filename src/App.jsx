import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TVshow from "./pages/TVshow";
import MediaDetail from "./pages/MediaDetail";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MoviePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/tv" element={<TVshow />} />
          <Route path="/details/:type/:id" element={<MediaDetail />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
