
import { Menu, Globe, UserCircle, Navigation, Users, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          <div className="flex-1 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center">
                {/* Espacio reservado para el futuro logo */}
              </div>
              <span className="text-xl font-semibold text-primary">
                WanderWave
              </span>
            </Link>
          </div>

          <div className="flex-1 flex items-center justify-center gap-12">
            <Link 
              to="/quienes-somos" 
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <Users size={20} />
              <span>Quiénes somos</span>
            </Link>
            <Link 
              to="/explora" 
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <Navigation size={20} />
              <span>Explora</span>
            </Link>
          </div>
          
          <div className="flex-1 flex items-center justify-end gap-4">
            <Link 
              to="/crear-viaje"
              className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
            >
              <PlusCircle size={20} />
              <span>Crea tu viaje</span>
            </Link>

            <button className="text-gray-600 hover:text-primary transition-colors">
              <Globe size={20} />
            </button>
            
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 gap-3">
              <Popover>
                <PopoverTrigger asChild>
                  <button className="text-gray-600 hover:text-primary transition-colors">
                    <Menu size={20} />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-0 rounded-lg shadow-lg border border-gray-200">
                  <div className="flex flex-col divide-y divide-gray-100">
                    <Link 
                      to="/ayuda"
                      className="px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Todos los temas de ayuda
                    </Link>
                    <Link 
                      to="/recursos"
                      className="px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Recursos para anfitriones
                    </Link>
                    <Link 
                      to="/iniciar-sesion"
                      className="px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Inicia sesión
                    </Link>
                    <Link 
                      to="/registro"
                      className="px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Regístrate
                    </Link>
                  </div>
                </PopoverContent>
              </Popover>
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
