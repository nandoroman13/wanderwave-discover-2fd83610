import { Link } from "react-router-dom";
export const Footer = () => {
  return <footer className="w-full py-6 bg-gray-100 border-t">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4">
        
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span>© 2025 WanderWave</span>
          <Link to="/ayuda" className="hover:underline">Ayuda</Link>
          <Link to="/terminos" className="hover:underline">Términos de servicio</Link>
          <Link to="/aviso-legal" className="hover:underline">Aviso legal</Link>
          <Link to="/privacidad" className="hover:underline">Política de Privacidad</Link>
          <Link to="/cookies" className="hover:underline">Política de Cookies</Link>
        </div>
      </div>
    </footer>;
};