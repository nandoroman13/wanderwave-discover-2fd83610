
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import TripDetails from "@/pages/TripDetails";
import { WaverProfile } from "@/pages/WaverProfile";
import QuienesSomos from "@/pages/QuienesSomos";
import DestinoPage from "@/pages/DestinoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/viajes/:slug" element={<TripDetails />} />
        <Route path="/wavers/:slug" element={<WaverProfile />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/registro" element={<NotFound />} /> {/* Placeholder para registro */}
        <Route path="/ayuda" element={<NotFound />} /> {/* Placeholder para ayuda */}
        <Route path="/recursos" element={<NotFound />} /> {/* Placeholder para recursos */}
        {/* Ruta para páginas de destino */}
        <Route path="/:slug" element={<DestinoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
