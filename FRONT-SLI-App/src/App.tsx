import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import DevisPage from './pages/Devis/DevisPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/devis" element={<DevisPage />} />
      </Routes>
    </Router>
  );
}

export default App;
