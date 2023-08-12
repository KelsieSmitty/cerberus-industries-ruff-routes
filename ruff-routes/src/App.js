import Explore from './pages/explore';
import Home from './pages/home';
import Test from './pages/test'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />}/>
          <Route path="/test" element={<Test />}/>
        </Routes>
      </Router>
  )
}

export default App;
