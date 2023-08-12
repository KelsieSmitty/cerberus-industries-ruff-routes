import Explore from "./pages/explore";
// import Home from './pages/home';
import Landing from "./pages/landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </Router>
  );
}

export default App;
