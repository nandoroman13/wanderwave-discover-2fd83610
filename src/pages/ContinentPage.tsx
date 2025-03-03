
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";

// Tipos de datos
interface Destino {
  id: number;
  nombre: string;
  imagen: string;
  slug: string;
  descripcion: string;
}

interface Waver {
  id: number;
  name: string;
  image: string;
  followers: string;
  rating: string;
  tags: string[];
}

// Destinos destacados por continente
const destinosDestacados: Record<string, Destino[]> = {
  europa: [
    {
      id: 1,
      nombre: "Italia",
      imagen: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
      slug: "italia",
      descripcion: "Descubre la cuna del Imperio Romano y el Renacimiento."
    },
    {
      id: 2,
      nombre: "Islas Baleares",
      imagen: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      slug: "baleares",
      descripcion: "Relájate en las playas de este archipiélago mediterráneo."
    },
    {
      id: 3,
      nombre: "Noruega",
      imagen: "https://images.unsplash.com/photo-1520769669658-f07657f5a307",
      slug: "noruega",
      descripcion: "Explora los impresionantes fiordos y paisajes nórdicos."
    },
    {
      id: 4,
      nombre: "Grecia",
      imagen: "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
      slug: "grecia",
      descripcion: "Sumérgete en la historia y las paradisíacas islas griegas."
    },
    {
      id: 5,
      nombre: "Francia",
      imagen: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      slug: "francia",
      descripcion: "Enamórate de París y la campiña francesa."
    }
  ],
  africa: [
    {
      id: 6,
      nombre: "Tanzania",
      imagen: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      slug: "tanzania",
      descripcion: "Safaris en el Serengeti y ascenso al Kilimanjaro."
    },
    {
      id: 7,
      nombre: "Marruecos",
      imagen: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3",
      slug: "marruecos",
      descripcion: "Explora las medinas y el desierto del Sahara."
    },
    {
      id: 8,
      nombre: "Sudáfrica",
      imagen: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5",
      slug: "sudafrica",
      descripcion: "Descubre Ciudad del Cabo y los parques nacionales."
    },
    {
      id: 9,
      nombre: "Egipto",
      imagen: "https://images.unsplash.com/photo-1539768942893-daf53e448371",
      slug: "egipto",
      descripcion: "Maravíllate con las pirámides y el valle de los Reyes."
    }
  ],
  asia: [
    {
      id: 10,
      nombre: "Japón",
      imagen: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
      slug: "japon",
      descripcion: "Tradición y modernidad en el país del sol naciente."
    },
    {
      id: 11,
      nombre: "Tailandia",
      imagen: "https://images.unsplash.com/photo-1528181304800-259b08848526",
      slug: "tailandia",
      descripcion: "Templos budistas y playas paradisíacas."
    },
    {
      id: 12,
      nombre: "Maldivas",
      imagen: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
      slug: "maldivas",
      descripcion: "Relájate en los resort más exclusivos sobre el agua."
    },
    {
      id: 13,
      nombre: "India",
      imagen: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
      slug: "india",
      descripcion: "Sumérgete en la cultura milenaria y los coloridos paisajes."
    }
  ],
  america: [
    {
      id: 14,
      nombre: "Nueva York",
      imagen: "https://images.unsplash.com/photo-1532960401447-7dd05bef20b0",
      slug: "nueva-york",
      descripcion: "Descubre todos los secretos de la Gran Manzana."
    },
    {
      id: 15,
      nombre: "Perú",
      imagen: "https://images.unsplash.com/photo-1526392060635-9d6019884377",
      slug: "peru",
      descripcion: "Machu Picchu y la cultura inca te esperan."
    },
    {
      id: 16,
      nombre: "Chicago",
      imagen: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
      slug: "chicago",
      descripcion: "Arquitectura, cultura y música en la Ciudad del Viento."
    },
    {
      id: 17,
      nombre: "Caribe",
      imagen: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      slug: "caribe",
      descripcion: "Playas de arena blanca y aguas cristalinas."
    },
    {
      id: 18,
      nombre: "Nueva Zelanda",
      imagen: "https://images.unsplash.com/photo-1469521669194-babb45599def",
      slug: "nueva-zelanda",
      descripcion: "Paisajes espectaculares para los amantes de la aventura."
    }
  ]
};

// Top wavers por continente (ordenados por valoración)
const topWaversPorContinente: Record<string, Waver[]> = {
  europa: [
    {
      id: 1,
      name: "Familia Carameluchi",
      image: "https://images.unsplash.com/photo-1655185497004-f3018eab9cb8",
      followers: "123",
      rating: "5,0",
      tags: ["Europa", "En familia", "Aventura", "Historia"],
    },
    {
      id: 2,
      name: "Paula Díez",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      followers: "678",
      rating: "4,9",
      tags: ["Europa", "Con amigos", "Playas", "Gastronomía"],
    },
    {
      id: 3,
      name: "Mikel Boisset",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
      followers: "456",
      rating: "4,8",
      tags: ["Europa", "Aventura", "Fotografía", "Ciudades"],
    },
  ],
  africa: [
    {
      id: 4,
      name: "Clara Montero",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb",
      followers: "345",
      rating: "5,0",
      tags: ["África", "Safari", "Naturaleza", "Fotografía"],
    },
    {
      id: 5,
      name: "Marcos Vidal",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857",
      followers: "290",
      rating: "4,9",
      tags: ["África", "Aventura", "Cultura", "Desierto"],
    },
  ],
  asia: [
    {
      id: 6,
      name: "Laura Chen",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      followers: "789",
      rating: "5,0",
      tags: ["Asia", "Gastronomía", "Templos", "Cultura"],
    },
    {
      id: 7,
      name: "Daniel Torres",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
      followers: "567",
      rating: "4,9",
      tags: ["Asia", "Fotografía", "Montaña", "Aventura"],
    },
  ],
  america: [
    {
      id: 8,
      name: "Carlos Mendoza",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      followers: "432",
      rating: "5,0",
      tags: ["América", "Naturaleza", "Ciudades", "Gastronomía"],
    },
    {
      id: 9,
      name: "Ana García",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
      followers: "321",
      rating: "4,9",
      tags: ["América", "Playa", "Aventura", "Cultura"],
    },
  ],
};

// Nombres de continentes en español
const nombresContinentes: Record<string, string> = {
  europa: "Europa",
  africa: "África",
  asia: "Asia",
  america: "América"
};

const ContinentPage = () => {
  const { continente } = useParams<{ continente: string }>();
  const [destinos, setDestinos] = useState<Destino[]>([]);
  const [wavers, setWavers] = useState<Waver[]>([]);
  const [nombreContinente, setNombreContinente] = useState<string>("");

  useEffect(() => {
    if (continente && destinosDestacados[continente]) {
      setDestinos(destinosDestacados[continente]);
      setWavers(topWaversPorContinente[continente] || []);
      setNombreContinente(nombresContinentes[continente] || continente.charAt(0).toUpperCase() + continente.slice(1));
    }
  }, [continente]);

  if (!continente || !destinosDestacados[continente]) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Continente no encontrado</h1>
          <p className="text-gray-600 mb-8">Lo sentimos, no hemos podido encontrar información sobre este continente.</p>
          <Link to="/" className="text-primary hover:underline">Volver a la página principal</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img 
          src={destinos[0]?.imagen} 
          alt={nombreContinente} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Descubre {nombreContinente}
            </h1>
            <p className="text-white text-xl max-w-2xl">
              Explora los destinos más fascinantes de {nombreContinente} y vive experiencias únicas.
            </p>
          </div>
        </div>
      </div>

      {/* Destinos destacados */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Destinos destacados en {nombreContinente}</h2>
        
        <div className="flex flex-wrap gap-6 justify-center">
          {destinos.map((destino) => (
            <Link 
              key={destino.id} 
              to={`/${destino.slug}`} 
              className="group flex flex-col items-center w-48"
            >
              <div className="w-36 h-36 rounded-full overflow-hidden mb-4 group-hover:ring-4 ring-primary transition-all">
                <img 
                  src={destino.imagen} 
                  alt={destino.nombre} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-center mb-1">{destino.nombre}</h3>
              <p className="text-sm text-gray-600 text-center line-clamp-2">{destino.descripcion}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Separator */}
      <div className="container mx-auto px-4">
        <Separator />
      </div>

      {/* Top Wavers */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Top Wavers en {nombreContinente}</h2>
        
        {wavers.length === 0 ? (
          <p className="text-gray-600 text-center py-8">No hay wavers destacados para este continente en este momento.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wavers.map((waver) => (
              <div key={waver.id} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex gap-6">
                  <div className="w-24 h-24 flex-shrink-0">
                    <img
                      src={waver.image}
                      alt={waver.name}
                      className="w-full h-full rounded-2xl object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col min-w-0">
                    <div className="flex items-center justify-between mb-2 gap-4">
                      <Link 
                        to={`/wavers/${waver.name.toLowerCase().replace(/ /g, '-')}`}
                        className="text-lg font-semibold truncate hover:text-primary transition-colors"
                      >
                        {waver.name}
                      </Link>
                      <div className="flex items-center gap-1 bg-black text-white px-2 py-0.5 rounded-md">
                        <span>{waver.rating}</span>
                        <Star className="fill-current" size={14} />
                      </div>
                    </div>
                    
                    <div className="text-gray-600 text-sm mb-3">
                      <span>{waver.followers} seguidores</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {waver.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 bg-gray-100 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to={`/wavers/${waver.name.toLowerCase().replace(/ /g, '-')}`}
                      className="text-primary hover:underline text-sm"
                    >
                      Ver perfil →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ContinentPage;
