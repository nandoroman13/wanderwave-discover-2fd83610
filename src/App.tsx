
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import TripDetails from "@/pages/TripDetails";
import { WaverProfile } from "@/pages/WaverProfile";
import ViajesCatalogo from "@/pages/ViajesCatalogo";
import Checkout from "@/pages/Checkout";
import Perfil from "@/pages/Perfil";
import Agencias from "@/pages/Agencias";
import Inspirate from "@/pages/Inspirate";
import Ayuda from "@/pages/Ayuda";
import Login from "@/pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Index />} />
        
        {/* Rutas de viajes */}
        <Route path="/viajes" element={<ViajesCatalogo />} />
        <Route path="/viajes/:destino" element={<TripDetails />} />
        <Route path="/viajes/:destino/:slugWaver-:id" element={<TripDetails />} />
        
        {/* Rutas de usuario */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/login" element={<Login />} />
        
        {/* Otras rutas principales */}
        <Route path="/agencias" element={<Agencias />} />
        <Route path="/inspirate" element={<Inspirate />} />
        <Route path="/ayuda" element={<Ayuda />} />
        
        {/* Rutas para wavers (prescriptores) */}
        <Route path="/wavers/:slug" element={<WaverProfile />} />
        
        {/* Ruta 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
