
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import TripDetails from "@/pages/TripDetails";
import { WaverProfile } from "@/pages/WaverProfile";
import QuienesSomos from "@/pages/QuienesSomos";
import MaldivasPage from "@/pages/destinos/Maldivas";
import ChicagoPage from "@/pages/destinos/Chicago";
import NoruegaPage from "@/pages/destinos/Noruega";
import CaribePage from "@/pages/destinos/Caribe";
import BalearesPage from "@/pages/destinos/Baleares";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/viajes/:slug" element={<TripDetails />} />
        <Route path="/wavers/:slug" element={<WaverProfile />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        
        {/* Rutas de destinos específicos */}
        <Route path="/viajes/maldivas" element={<MaldivasPage />} />
        <Route path="/viajes/chicago" element={<ChicagoPage />} />
        <Route path="/viajes/noruega" element={<NoruegaPage />} />
        <Route path="/viajes/caribe" element={<CaribePage />} />
        <Route path="/viajes/baleares" element={<BalearesPage />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
