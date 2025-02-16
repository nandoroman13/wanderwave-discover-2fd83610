
import { Menu, Globe, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              {/* Espacio reservado para el futuro logo */}
            </div>
            <span className="text-xl font-semibold text-primary">
              WanderWave
            </span>
          </Link>
          
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-primary transition-colors">
              <Globe size={20} />
            </button>
            
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 gap-3">
              <button className="text-gray-600 hover:text-primary transition-colors">
                <Menu size={20} />
              </button>
              <button className="text-gray-600 hover:text-primary transition-colors">
                <UserCircle size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
