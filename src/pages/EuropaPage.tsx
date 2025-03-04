
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";

// Tipos de datos
interface Viaje {
  id: number;
  titulo: {
    es: string;
    en: string;
  };
  imagen: string;
  destino: string;
  duracion: {
    es: string;
    en: string;
  };
  precio: number;
  descripcionCorta: {
    es: string;
    en: string;
  };
  slug: string;
}

// Datos de viajes para Europa
const viajesEuropa: Viaje[] = [
  {
    id: 1,
    titulo: {
      es: "Roma, Florencia y Venecia",
      en: "Rome, Florence, and Venice"
    },
    imagen: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
    destino: "italia",
    duracion: {
      es: "10 días",
      en: "10 days"
    },
    precio: 1599,
    descripcionCorta: {
      es: "Un recorrido por las tres ciudades más emblemáticas de Italia.",
      en: "A tour through the three most iconic cities in Italy."
    },
    slug: "roma-florencia-venecia"
  },
  {
    id: 2,
    titulo: {
      es: "Toscana: Vinos y cultura",
      en: "Tuscany: Wines and culture"
    },
    imagen: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    destino: "italia",
    duracion: {
      es: "7 días",
      en: "7 days"
    },
    precio: 1299,
    descripcionCorta: {
      es: "Descubre la región vinícola más famosa de Italia y su rica cultura.",
      en: "Discover Italy's most famous wine region and its rich culture."
    },
    slug: "toscana-vinos-cultura"
  },
  {
    id: 3,
    titulo: {
      es: "París romántico",
      en: "Romantic Paris"
    },
    imagen: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    destino: "francia",
    duracion: {
      es: "6 días",
      en: "6 days"
    },
    precio: 1399,
    descripcionCorta: {
      es: "Disfruta de la ciudad del amor y sus rincones más encantadores.",
      en: "Enjoy the city of love and its most charming corners."
    },
    slug: "paris-romantico"
  },
  {
    id: 4,
    titulo: {
      es: "Londres y Edimburgo",
      en: "London and Edinburgh"
    },
    imagen: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    destino: "reino-unido",
    duracion: {
      es: "8 días",
      en: "8 days"
    },
    precio: 1499,
    descripcionCorta: {
      es: "Lo mejor de Inglaterra y Escocia en un solo viaje.",
      en: "The best of England and Scotland in a single trip."
    },
    slug: "londres-edimburgo"
  },
  {
    id: 5,
    titulo: {
      es: "Fiordos noruegos: Maravillas naturales",
      en: "Norwegian Fjords: Natural Wonders"
    },
    imagen: "https://images.unsplash.com/photo-1520769669658-f07657f5a307",
    destino: "noruega",
    duracion: {
      es: "8 días",
      en: "8 days"
    },
    precio: 1899,
    descripcionCorta: {
      es: "Navega entre los impresionantes fiordos noruegos y sus paisajes de ensueño.",
      en: "Navigate among the impressive Norwegian fjords and their dreamlike landscapes."
    },
    slug: "fiordos-noruegos"
  },
  {
    id: 6,
    titulo: {
      es: "Ruta por los Balcanes",
      en: "Balkan Route"
    },
    imagen: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    destino: "balcanes",
    duracion: {
      es: "12 días",
      en: "12 days"
    },
    precio: 1799,
    descripcionCorta: {
      es: "Explora la fascinante región de los Balcanes y su diversidad cultural.",
      en: "Explore the fascinating Balkan region and its cultural diversity."
    },
    slug: "ruta-balcanes"
  }
];

// Información sobre Europa
const europaInfo = {
  nombre: {
    es: "Europa",
    en: "Europe"
  },
  continente: {
    es: "EUROPA",
    en: "EUROPE"
  },
  imagen: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
  descripcion: {
    es: "Europa, el segundo continente más pequeño pero con una enorme riqueza cultural e histórica, es uno de los destinos turísticos más visitados del mundo. Con 46 países, ofrece una increíble variedad de paisajes, desde los fiordos noruegos hasta las playas mediterráneas, pasando por los Alpes y las llanuras centroeuropeas. Su patrimonio cultural, con ciudades milenarias, museos de renombre mundial y monumentos históricos únicos, la convierten en un destino fascinante.",
    en: "Europe, the second smallest continent but with an enormous cultural and historical wealth, is one of the most visited tourist destinations in the world. With 46 countries, it offers an incredible variety of landscapes, from the Norwegian fjords to the Mediterranean beaches, through the Alps and the Central European plains. Its cultural heritage, with millenary cities, world-renowned museums and unique historical monuments, make it a fascinating destination."
  },
  informacion: {
    clima: {
      es: "Varía según la región, generalmente templado. El norte tiene inviernos fríos y veranos suaves, mientras que el sur disfruta de un clima mediterráneo con veranos calurosos e inviernos suaves.",
      en: "Varies by region, generally temperate. The north has cold winters and mild summers, while the south enjoys a Mediterranean climate with hot summers and mild winters."
    },
    mejorEpoca: {
      es: "Primavera (abril-junio) y otoño (septiembre-octubre) son ideales para evitar las multitudes del verano y disfrutar de un clima agradable.",
      en: "Spring (April-June) and autumn (September-October) are ideal to avoid summer crowds and enjoy pleasant weather."
    },
    idioma: {
      es: "Más de 24 idiomas oficiales. Inglés es ampliamente hablado en la mayoría de países, especialmente en zonas turísticas.",
      en: "More than 24 official languages. English is widely spoken in most countries, especially in tourist areas."
    },
    moneda: {
      es: "Euro (EUR) en la mayoría de países de la Unión Europea. Otros países tienen sus propias monedas.",
      en: "Euro (EUR) in most European Union countries. Other countries have their own currencies."
    },
    extra: {
      es: "El espacio Schengen permite viajar entre múltiples países europeos sin controles fronterizos, aunque se requiere visado para ciudadanos de ciertos países.",
      en: "The Schengen area allows travel between multiple European countries without border controls, although a visa is required for citizens of certain countries."
    }
  }
};

const EuropaPage = () => {
  const [viajes, setViajes] = useState<Viaje[]>(viajesEuropa);
  const [ordenar, setOrdenar] = useState<"relevancia" | "precio-asc" | "precio-desc">("relevancia");
  const { language, t } = useLanguage();

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
          alt={europaInfo.nombre[language]} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="container mx-auto px-4">
            <span className="text-yellow-400 font-medium mb-2 block">{europaInfo.continente[language]}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("descubre")} {europaInfo.nombre[language]}
            </h1>
            <p className="text-white text-xl max-w-2xl">
              {t("exploraNuestrosViajes")} {europaInfo.nombre[language]} {t("viveExperiencias")}.
            </p>
          </div>
        </div>
      </div>
      
      {/* Información del destino */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold">{t("sobre")} {europaInfo.nombre[language]}</h2>
            <p className="text-gray-600 leading-relaxed">
              {europaInfo.descripcion[language]}
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">{t("informacionPractica")}</h3>
            <ul className="space-y-4">
              <li>
                <span className="font-medium block">{t("clima")}</span>
                <span className="text-gray-600">{europaInfo.informacion.clima[language]}</span>
              </li>
              <li>
                <span className="font-medium block">{t("mejorEpoca")}</span>
                <span className="text-gray-600">{europaInfo.informacion.mejorEpoca[language]}</span>
              </li>
              <li>
                <span className="font-medium block">{t("idioma")}</span>
                <span className="text-gray-600">{europaInfo.informacion.idioma[language]}</span>
              </li>
              <li>
                <span className="font-medium block">{t("moneda")}</span>
                <span className="text-gray-600">{europaInfo.informacion.moneda[language]}</span>
              </li>
              <li>
                <span className="font-medium block">{t("infoAdicional")}</span>
                <span className="text-gray-600">{europaInfo.informacion.extra[language]}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Viajes disponibles */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">{t("viajesA")} {europaInfo.nombre[language]}</h2>
            
            <div className="mt-4 md:mt-0 flex items-center">
              <span className="mr-3 text-gray-600">{t("ordenarPor")}</span>
              <select 
                className="bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                value={ordenar}
                onChange={(e) => setOrdenar(e.target.value as "relevancia" | "precio-asc" | "precio-desc")}
              >
                <option value="relevancia">{t("relevancia")}</option>
                <option value="precio-asc">{t("precioMenorMayor")}</option>
                <option value="precio-desc">{t("precioMayorMenor")}</option>
              </select>
            </div>
          </div>
          
          {viajes.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-600">{t("noHayViajes")}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {viajes.map((viaje) => (
                <Link key={viaje.id} to={`/viajes/${viaje.slug}`} className="block">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:transform hover:scale-[1.02]">
                    <div className="relative h-56">
                      <img 
                        src={viaje.imagen} 
                        alt={viaje.titulo[language]} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2">{viaje.titulo[language]}</h3>
                      <p className="text-gray-600 mb-4">{viaje.descripcionCorta[language]}</p>
                      <Separator className="my-4" />
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-gray-600">{viaje.duracion[language]}</span>
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
