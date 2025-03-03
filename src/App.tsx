
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import TripDetails from "@/pages/TripDetails";
import { WaverProfile } from "@/pages/WaverProfile";
import QuienesSomos from "@/pages/QuienesSomos";
import DestinoPage from "@/pages/DestinoPage";
import ContinentPage from "@/pages/ContinentPage";

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
        
        {/* Rutas para destinos específicos (debe ir antes de continentes) */}
        <Route path="/italia" element={<DestinoPage />} />
        <Route path="/baleares" element={<DestinoPage />} />
        <Route path="/noruega" element={<DestinoPage />} />
        <Route path="/grecia" element={<DestinoPage />} />
        <Route path="/francia" element={<DestinoPage />} />
        <Route path="/tanzania" element={<DestinoPage />} />
        <Route path="/marruecos" element={<DestinoPage />} />
        <Route path="/sudafrica" element={<DestinoPage />} />
        <Route path="/egipto" element={<DestinoPage />} />
        <Route path="/japon" element={<DestinoPage />} />
        <Route path="/tailandia" element={<DestinoPage />} />
        <Route path="/maldivas" element={<DestinoPage />} />
        <Route path="/india" element={<DestinoPage />} />
        <Route path="/nueva-york" element={<DestinoPage />} />
        <Route path="/peru" element={<DestinoPage />} />
        <Route path="/chicago" element={<DestinoPage />} />
        <Route path="/caribe" element={<DestinoPage />} />
        <Route path="/nueva-zelanda" element={<DestinoPage />} />
        
        {/* Rutas para continentes */}
        <Route path="/europa" element={<ContinentPage />} />
        <Route path="/africa" element={<ContinentPage />} />
        <Route path="/asia" element={<ContinentPage />} />
        <Route path="/america" element={<ContinentPage />} />
        
        {/* Ruta genérica para destinos (como fallback) */}
        <Route path="/:slug" element={<DestinoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
