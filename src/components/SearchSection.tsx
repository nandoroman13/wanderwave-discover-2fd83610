
import { useState, useEffect, useRef } from "react";
import { SearchIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";

// Importamos los datos de destinos
const destinos = [
  {
    id: 1,
    continent: "EUROPA",
    title: "Descubre Italia como nunca antes.",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
    trips: 714,
    highlight: "Italia",
    slug: "italia",
  },
  {
    id: 2,
    continent: "ÁFRICA",
    title: "Viajes y circuitos a África.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    trips: 101,
    highlight: "África",
    slug: "africa",
  },
  {
    id: 3,
    continent: "ASIA",
    title: "Conoce Asia, el continente de contrastes.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    trips: 174,
    highlight: "Asia",
    slug: "asia",
  },
  {
    id: 4,
    continent: "AMÉRICA",
    title: "Déjate sorprender por América",
    image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722",
    trips: 264,
    highlight: "América",
    slug: "america",
  },
];

// Añadimos destinos específicos
const destinosEspecificos = [
  {
    id: 101,
    continent: "ASIA",
    title: "Paraíso en Maldivas",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
    trips: 361,
    highlight: "Maldivas",
    slug: "maldivas",
  },
  {
    id: 102,
    continent: "AMÉRICA",
    title: "Descubre la ciudad del viento",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
    trips: 750,
    highlight: "Chicago",
    slug: "chicago",
  },
  {
    id: 103,
    continent: "EUROPA",
    title: "Fiordos y auroras boreales",
    image: "https://images.unsplash.com/photo-1520769669658-f07657f5a307",
    trips: 602,
    highlight: "Noruega",
    slug: "noruega",
  },
  {
    id: 104,
    continent: "ÁFRICA",
    title: "Safari en Tanzania",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    trips: 283,
    highlight: "Tanzania",
    slug: "tanzania",
  },
  {
    id: 105,
    continent: "ASIA",
    title: "Tierra del sol naciente",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    trips: 892,
    highlight: "Japón",
    slug: "japon",
  },
  {
    id: 106,
    continent: "OCEANÍA",
    title: "Naturaleza y aventura",
    image: "https://images.unsplash.com/photo-1469521669194-babb45599def",
    trips: 447,
    highlight: "Nueva Zelanda",
    slug: "nueva-zelanda",
  },
];

// Combinamos todos los destinos
const todosLosDestinos = [...destinos, ...destinosEspecificos];

export const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDestinos, setFilteredDestinos] = useState<typeof todosLosDestinos>([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Filtrar destinos cuando cambia el término de búsqueda
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredDestinos([]);
      return;
    }

    const filtered = todosLosDestinos.filter(
      destino =>
        destino.highlight.toLowerCase().includes(searchTerm.toLowerCase()) ||
        destino.continent.toLowerCase().includes(searchTerm.toLowerCase()) ||
        destino.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredDestinos(filtered);
  }, [searchTerm]);

  // Cerrar resultados cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearching(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim() === "") return;
    
    // Si hay resultados filtrados, navegar al primero
    if (filteredDestinos.length > 0) {
      const destino = filteredDestinos[0];
      // Determinar si es un destino continental o específico
      if (destino.id <= 100) {
        navigate(`/destinos/${destino.id}`);
      } else {
        navigate(`/viajes/${destino.slug}`);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative h-[600px] flex items-center justify-center text-white">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8"
          alt="Maldivas paradise beach"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">
          Una nueva manera de viajar
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Encuentra tu próximo destino
        </p>
        
        <div 
          ref={searchRef}
          className="bg-white rounded-full shadow-lg p-2 flex items-center animate-fade-up relative" 
          style={{ animationDelay: "0.2s" }}
        >
          <Input
            type="text"
            placeholder="¿A dónde quieres ir?"
            className="flex-1 px-4 py-2 outline-none text-gray-800 border-none rounded-full"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setIsSearching(true);
            }}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsSearching(true)}
          />
          <button 
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-colors"
            onClick={handleSearch}
          >
            <SearchIcon size={20} />
            <span>Buscar</span>
          </button>
          
          {/* Resultados de búsqueda */}
          {isSearching && filteredDestinos.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden z-50">
              <ul className="max-h-60 overflow-y-auto">
                {filteredDestinos.map((destino) => (
                  <li key={destino.id}>
                    <button
                      className="w-full px-4 py-3 text-left hover:bg-gray-100 flex items-center gap-3 text-gray-800"
                      onClick={() => {
                        // Determinar la ruta según el tipo de destino
                        if (destino.id <= 100) {
                          navigate(`/destinos/${destino.id}`);
                        } else {
                          navigate(`/viajes/${destino.slug}`);
                        }
                        setIsSearching(false);
                      }}
                    >
                      <img 
                        src={destino.image} 
                        alt={destino.highlight} 
                        className="w-10 h-10 object-cover rounded"
                      />
                      <div>
                        <div className="font-medium">{destino.highlight}</div>
                        <div className="text-sm text-gray-500">{destino.continent}</div>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
