
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";

// Tipos de datos
interface Viaje {
  id: number;
  titulo: string;
  imagen: string;
  destino: string;
  duracion: string;
  precio: number;
  descripcionCorta: string;
  slug: string;
}

// Datos de viajes para Europa
const viajesEuropa: Viaje[] = [
  {
    id: 1,
    titulo: "Roma, Florencia y Venecia",
    imagen: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
    destino: "italia",
    duracion: "10 días",
    precio: 1599,
    descripcionCorta: "Un recorrido por las tres ciudades más emblemáticas de Italia.",
    slug: "roma-florencia-venecia"
  },
  {
    id: 2,
    titulo: "Toscana: Vinos y cultura",
    imagen: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    destino: "italia",
    duracion: "7 días",
    precio: 1299,
    descripcionCorta: "Descubre la región vinícola más famosa de Italia y su rica cultura.",
    slug: "toscana-vinos-cultura"
  },
  {
    id: 3,
    titulo: "París romántico",
    imagen: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    destino: "francia",
    duracion: "6 días",
    precio: 1399,
    descripcionCorta: "Disfruta de la ciudad del amor y sus rincones más encantadores.",
    slug: "paris-romantico"
  },
  {
    id: 4,
    titulo: "Londres y Edimburgo",
    imagen: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    destino: "reino-unido",
    duracion: "8 días",
    precio: 1499,
    descripcionCorta: "Lo mejor de Inglaterra y Escocia en un solo viaje.",
    slug: "londres-edimburgo"
  },
  {
    id: 5,
    titulo: "Fiordos noruegos: Maravillas naturales",
    imagen: "https://images.unsplash.com/photo-1520769669658-f07657f5a307",
    destino: "noruega",
    duracion: "8 días",
    precio: 1899,
    descripcionCorta: "Navega entre los impresionantes fiordos noruegos y sus paisajes de ensueño.",
    slug: "fiordos-noruegos"
  },
  {
    id: 6,
    titulo: "Ruta por los Balcanes",
    imagen: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    destino: "balcanes",
    duracion: "12 días",
    precio: 1799,
    descripcionCorta: "Explora la fascinante región de los Balcanes y su diversidad cultural.",
    slug: "ruta-balcanes"
  }
];

// Información sobre Europa
const europaInfo = {
  nombre: "Europa",
  continente: "EUROPA",
  imagen: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
  descripcion: "Europa, el segundo continente más pequeño pero con una enorme riqueza cultural e histórica, es uno de los destinos turísticos más visitados del mundo. Con 46 países, ofrece una increíble variedad de paisajes, desde los fiordos noruegos hasta las playas mediterráneas, pasando por los Alpes y las llanuras centroeuropeas. Su patrimonio cultural, con ciudades milenarias, museos de renombre mundial y monumentos históricos únicos, la convierten en un destino fascinante.",
  informacion: {
    clima: "Varía según la región, generalmente templado. El norte tiene inviernos fríos y veranos suaves, mientras que el sur disfruta de un clima mediterráneo con veranos calurosos e inviernos suaves.",
    mejorEpoca: "Primavera (abril-junio) y otoño (septiembre-octubre) son ideales para evitar las multitudes del verano y disfrutar de un clima agradable.",
    idioma: "Más de 24 idiomas oficiales. Inglés es ampliamente hablado en la mayoría de países, especialmente en zonas turísticas.",
    moneda: "Euro (EUR) en la mayoría de países de la Unión Europea. Otros países tienen sus propias monedas.",
    extra: "El espacio Schengen permite viajar entre múltiples países europeos sin controles fronterizos, aunque se requiere visado para ciudadanos de ciertos países."
  }
};

const EuropaPage = () => {
  const [viajes, setViajes] = useState<Viaje[]>(viajesEuropa);
  const [ordenar, setOrdenar] = useState<"relevancia" | "precio-asc" | "precio-desc">("relevancia");

  useEffect(() => {
    // Ordenar viajes según el criterio seleccionado
    let viajesOrdenados = [...viajesEuropa];
    
    if (ordenar === "precio-asc") {
      viajesOrdenados.sort((a, b) => a.precio - b.precio);
    } else if (ordenar === "precio-desc") {
      viajesOrdenados.sort((a, b) => b.precio - a.precio);
    }
    
    setViajes(viajesOrdenados);
  }, [ordenar]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img 
          src={europaInfo.imagen} 
          alt={europaInfo.nombre} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="container mx-auto px-4">
            <span className="text-yellow-400 font-medium mb-2 block">{europaInfo.continente}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Descubre {europaInfo.nombre}
            </h1>
            <p className="text-white text-xl max-w-2xl">
              Explora nuestros viajes a {europaInfo.nombre} y vive experiencias únicas.
            </p>
          </div>
        </div>
      </div>
      
      {/* Información del destino */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold">Sobre {europaInfo.nombre}</h2>
            <p className="text-gray-600 leading-relaxed">
              {europaInfo.descripcion}
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Información práctica</h3>
            <ul className="space-y-4">
              <li>
                <span className="font-medium block">Clima:</span>
                <span className="text-gray-600">{europaInfo.informacion.clima}</span>
              </li>
              <li>
                <span className="font-medium block">Mejor época para visitar:</span>
                <span className="text-gray-600">{europaInfo.informacion.mejorEpoca}</span>
              </li>
              <li>
                <span className="font-medium block">Idioma:</span>
                <span className="text-gray-600">{europaInfo.informacion.idioma}</span>
              </li>
              <li>
                <span className="font-medium block">Moneda:</span>
                <span className="text-gray-600">{europaInfo.informacion.moneda}</span>
              </li>
              <li>
                <span className="font-medium block">Información adicional:</span>
                <span className="text-gray-600">{europaInfo.informacion.extra}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Viajes disponibles */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Viajes a {europaInfo.nombre}</h2>
            
            <div className="mt-4 md:mt-0 flex items-center">
              <span className="mr-3 text-gray-600">Ordenar por:</span>
              <select 
                className="bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                value={ordenar}
                onChange={(e) => setOrdenar(e.target.value as "relevancia" | "precio-asc" | "precio-desc")}
              >
                <option value="relevancia">Relevancia</option>
                <option value="precio-asc">Precio: menor a mayor</option>
                <option value="precio-desc">Precio: mayor a menor</option>
              </select>
            </div>
          </div>
          
          {viajes.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-600">No hay viajes disponibles para este destino en este momento.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {viajes.map((viaje) => (
                <Link key={viaje.id} to={`/viajes/${viaje.slug}`} className="block">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:transform hover:scale-[1.02]">
                    <div className="relative h-56">
                      <img 
                        src={viaje.imagen} 
                        alt={viaje.titulo} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2">{viaje.titulo}</h3>
                      <p className="text-gray-600 mb-4">{viaje.descripcionCorta}</p>
                      <Separator className="my-4" />
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-gray-600">{viaje.duracion}</span>
                        <span className="font-bold text-primary text-xl">{viaje.precio}€</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default EuropaPage;
