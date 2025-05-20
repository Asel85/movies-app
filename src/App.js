import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import SearchResults from "./components/SearchResults";


function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/movie/:id" element={<MovieDetails />}/>
          <Route path="/search/:query" element={<SearchResults />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
