import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/homepage";
import TVshow from "./pages/Tvshow";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<Homepage />} />
          <Route path="/tv" element={<TVshow />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
