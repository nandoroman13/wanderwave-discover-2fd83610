
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Viajes", href: "/viajes" },
    { name: "Wavers", href: "/wavers" },
    { name: "Agencias", href: "/agencias" },
    { name: "Inspírate", href: "/inspirate" },
    { name: "Ayuda", href: "/ayuda" },
  ];

  return (
    <nav className="bg-white py-5 sticky top-0 z-50 shadow-sm border-b">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
            WanderWave
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              to={link.href}
              key={link.name}
              className="text-gray-600 hover:text-primary text-sm font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-gray-800 font-medium hover:text-primary transition-colors">
            Iniciar sesión
          </Link>
          <Link to="/perfil">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Mi perfil
            </Button>
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="p-2 rounded-md md:hidden text-gray-600"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 pt-16">
          <div className="container py-4 space-y-6">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  to={link.href}
                  key={link.name}
                  className="block py-2 text-lg font-medium border-b"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="space-y-4 pt-4">
              <Link
                to="/login"
                className="block w-full py-3 text-center rounded-md bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Iniciar sesión
              </Link>
              <Link
                to="/perfil"
                className="block w-full py-3 text-center rounded-md bg-primary text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Mi perfil
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
