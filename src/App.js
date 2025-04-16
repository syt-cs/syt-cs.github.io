import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CV from './pages/CV';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CV" element={<CV />} />
      </Routes>
    </Router>
  );
}

export default App;
