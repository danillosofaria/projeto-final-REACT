import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TVshow from "./pages/Tvshow";
import MediaDetail from "./pages/MediaDetail";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<HomePage />} />
          <Route path="/tv" element={<TVshow />} />
          <Route path="/details/:type/:id" element={<MediaDetail />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
