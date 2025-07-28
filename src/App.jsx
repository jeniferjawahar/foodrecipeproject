import { Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navbar";
import Details from "./pages/details";
import Favorites from "./pages/favorites";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
