
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gray-100 border-t">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4">
        <img 
          src="/lovable-uploads/0088c1eb-fcbf-4e6b-8c81-543e932a2398.png" 
          alt="Muchoviaje Logo" 
          className="h-8 object-contain"
        />
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span>© 2024 Muchoviaje</span>
          <Link to="/ayuda" className="hover:underline">Ayuda</Link>
          <Link to="/terminos" className="hover:underline">Términos de servicio</Link>
          <Link to="/aviso-legal" className="hover:underline">Aviso legal</Link>
          <Link to="/privacidad" className="hover:underline">Política de Privacidad</Link>
          <Link to="/cookies" className="hover:underline">Política de Cookies</Link>
        </div>
      </div>
    </footer>
  );
};
