import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import DevisPage from './pages/devis/DevisPage';
import Clients from './pages/clients/Clients';
import Articles from './pages/articles/Articles';
import Map from './pages/map/Map';
import Stock from './pages/stock/Stock';
import Settings from './pages/settings/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/devis" element={<DevisPage />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/map" element={<Map />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/setting" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
