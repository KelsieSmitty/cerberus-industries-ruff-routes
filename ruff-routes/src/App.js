import Explore from './pages/explore';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />}/>
        </Routes>
      </Router>
  )
}

export default App;
