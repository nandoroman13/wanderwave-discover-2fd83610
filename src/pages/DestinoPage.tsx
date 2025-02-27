
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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

// Datos de ejemplo para diferentes destinos
const viajesPorDestino: Record<string, Viaje[]> = {
  maldivas: [
    {
      id: 1,
      titulo: "Escapada romántica a Maldivas",
      imagen: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
      destino: "maldivas",
      duracion: "7 días",
      precio: 2499,
      descripcionCorta: "Disfruta de una experiencia única en los resort más exclusivos de Maldivas.",
      slug: "escapada-romantica-maldivas"
    },
    {
      id: 2,
      titulo: "Maldivas: Inmersión en paraísos coralinos",
      imagen: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
      destino: "maldivas",
      duracion: "10 días",
      precio: 3599,
      descripcionCorta: "Explora los arrecifes de coral más espectaculares del planeta.",
      slug: "inmersion-paraiso-coralino-maldivas"
    },
    {
      id: 3,
      titulo: "Maldivas exclusivo: Islas privadas",
      imagen: "https://images.unsplash.com/photo-1540202404-a2f29016b523",
      destino: "maldivas",
      duracion: "12 días",
      precio: 4999,
      descripcionCorta: "Alójate en islas privadas con todas las comodidades y servicios exclusivos.",
      slug: "islas-privadas-maldivas"
    }
  ],
  chicago: [
    {
      id: 4,
      titulo: "Chicago: La ciudad del viento",
      imagen: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
      destino: "chicago",
      duracion: "5 días",
      precio: 1299,
      descripcionCorta: "Descubre la impresionante arquitectura y cultura de la ciudad del viento.",
      slug: "chicago-ciudad-viento"
    },
    {
      id: 5,
      titulo: "Chicago arquitectónico",
      imagen: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f",
      destino: "chicago",
      duracion: "4 días",
      precio: 1199,
      descripcionCorta: "Un recorrido por los rascacielos más emblemáticos de Chicago.",
      slug: "chicago-arquitectonico"
    },
    {
      id: 6,
      titulo: "Chicago: Jazz y Blues",
      imagen: "https://images.unsplash.com/photo-1566086786808-baf97b0dd311",
      destino: "chicago",
      duracion: "6 días",
      precio: 1499,
      descripcionCorta: "Sumérgete en la rica escena musical de Chicago y su historia.",
      slug: "chicago-jazz-blues"
    }
  ],
  noruega: [
    {
      id: 7,
      titulo: "Fiordos noruegos: Maravillas naturales",
      imagen: "https://images.unsplash.com/photo-1520769669658-f07657f5a307",
      destino: "noruega",
      duracion: "8 días",
      precio: 1899,
      descripcionCorta: "Navega entre los impresionantes fiordos noruegos y sus paisajes de ensueño.",
      slug: "fiordos-noruegos"
    },
    {
      id: 8,
      titulo: "Aurora boreal en Tromsø",
      imagen: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7",
      destino: "noruega",
      duracion: "6 días",
      precio: 1699,
      descripcionCorta: "Vive la experiencia mágica de contemplar las auroras boreales en el Ártico.",
      slug: "aurora-boreal-tromso"
    },
    {
      id: 9,
      titulo: "Oslo y Bergen: Historia y naturaleza",
      imagen: "https://images.unsplash.com/photo-1513799022979-1dff15548e36",
      destino: "noruega",
      duracion: "7 días",
      precio: 1599,
      descripcionCorta: "Un recorrido por las ciudades históricas y los paisajes naturales más impresionantes.",
      slug: "oslo-bergen"
    }
  ],
  caribe: [
    {
      id: 10,
      titulo: "Punta Cana: Paraíso tropical",
      imagen: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      destino: "caribe",
      duracion: "7 días",
      precio: 1499,
      descripcionCorta: "Disfruta de las playas de arena blanca y aguas turquesas de Punta Cana.",
      slug: "punta-cana-paraiso"
    },
    {
      id: 11,
      titulo: "Jamaica: Cultura y playas",
      imagen: "https://images.unsplash.com/photo-1557129603-0ab327850de7",
      destino: "caribe",
      duracion: "8 días",
      precio: 1699,
      descripcionCorta: "Descubre la vibrante cultura jamaicana y sus impresionantes playas.",
      slug: "jamaica-cultura-playas"
    },
    {
      id: 12,
      titulo: "Crucero por el Caribe",
      imagen: "https://images.unsplash.com/photo-1548574505-5e239809ee19",
      destino: "caribe",
      duracion: "10 días",
      precio: 2399,
      descripcionCorta: "Un viaje inolvidable por las mejores islas del Caribe en crucero de lujo.",
      slug: "crucero-caribe"
    }
  ],
  baleares: [
    {
      id: 13,
      titulo: "Mallorca: Calas y montañas",
      imagen: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      destino: "baleares",
      duracion: "5 días",
      precio: 899,
      descripcionCorta: "Descubre las calas secretas y la sierra de Tramuntana en Mallorca.",
      slug: "mallorca-calas-montanas"
    },
    {
      id: 14,
      titulo: "Ibiza: Ocio y relax",
      imagen: "https://images.unsplash.com/photo-1433603306838-9cd2746aa780",
      destino: "baleares",
      duracion: "6 días",
      precio: 999,
      descripcionCorta: "Combina la mejor vida nocturna con días de relax en calas paradisíacas.",
      slug: "ibiza-ocio-relax"
    },
    {
      id: 15,
      titulo: "Menorca tranquila",
      imagen: "https://images.unsplash.com/photo-1533799446025-97de7c6a3635",
      destino: "baleares",
      duracion: "4 días",
      precio: 799,
      descripcionCorta: "Disfruta de la tranquilidad de Menorca, sus playas y su gastronomía.",
      slug: "menorca-tranquila"
    }
  ],
  italia: [
    {
      id: 16,
      titulo: "Roma, Florencia y Venecia",
      imagen: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
      destino: "italia",
      duracion: "10 días",
      precio: 1599,
      descripcionCorta: "Un recorrido por las tres ciudades más emblemáticas de Italia.",
      slug: "roma-florencia-venecia"
    },
    {
      id: 17,
      titulo: "Toscana: Vinos y cultura",
      imagen: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
      destino: "italia",
      duracion: "7 días",
      precio: 1299,
      descripcionCorta: "Descubre la región vinícola más famosa de Italia y su rica cultura.",
      slug: "toscana-vinos-cultura"
    }
  ],
  africa: [
    {
      id: 18,
      titulo: "Safari en Kenia",
      imagen: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      destino: "africa",
      duracion: "8 días",
      precio: 2499,
      descripcionCorta: "Vive la experiencia de un safari en la sabana africana.",
      slug: "safari-kenia"
    },
    {
      id: 19,
      titulo: "Marruecos: Desierto y medinas",
      imagen: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3",
      destino: "africa",
      duracion: "7 días",
      precio: 1199,
      descripcionCorta: "De las medinas imperiales al desierto del Sahara.",
      slug: "marruecos-desierto-medinas"
    }
  ],
  asia: [
    {
      id: 20,
      titulo: "Tailandia completa",
      imagen: "https://images.unsplash.com/photo-1528181304800-259b08848526",
      destino: "asia",
      duracion: "12 días",
      precio: 1899,
      descripcionCorta: "De Bangkok a las playas del sur, pasando por el norte cultural.",
      slug: "tailandia-completa"
    },
    {
      id: 21,
      titulo: "Japón: Tradición y modernidad",
      imagen: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
      destino: "asia",
      duracion: "14 días",
      precio: 2899,
      descripcionCorta: "Un viaje por los contrastes del país del sol naciente.",
      slug: "japon-tradicion-modernidad"
    }
  ],
  america: [
    {
      id: 22,
      titulo: "Nueva York en profundidad",
      imagen: "https://images.unsplash.com/photo-1532960401447-7dd05bef20b0",
      destino: "america",
      duracion: "7 días",
      precio: 1599,
      descripcionCorta: "Descubre todos los secretos de la Gran Manzana.",
      slug: "nueva-york-profundidad"
    },
    {
      id: 23,
      titulo: "Perú: Cultura Inca",
      imagen: "https://images.unsplash.com/photo-1526392060635-9d6019884377",
      destino: "america",
      duracion: "10 días",
      precio: 1899,
      descripcionCorta: "De Lima a Cuzco, descubriendo el legado inca y Machu Picchu.",
      slug: "peru-cultura-inca"
    }
  ],
  tanzania: [
    {
      id: 24,
      titulo: "Safari en Tanzania",
      imagen: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      destino: "tanzania",
      duracion: "9 días",
      precio: 2799,
      descripcionCorta: "Observa la gran migración en el Serengeti y el cráter del Ngorongoro.",
      slug: "safari-tanzania"
    }
  ],
  japon: [
    {
      id: 25,
      titulo: "Ruta del Cerezo en Flor",
      imagen: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
      destino: "japon",
      duracion: "12 días",
      precio: 3299,
      descripcionCorta: "Recorre Japón durante la temporada del sakura.",
      slug: "ruta-cerezo-flor"
    }
  ],
  "nueva-zelanda": [
    {
      id: 26,
      titulo: "Nueva Zelanda: Naturaleza Extrema",
      imagen: "https://images.unsplash.com/photo-1469521669194-babb45599def",
      destino: "nueva-zelanda",
      duracion: "15 días",
      precio: 3499,
      descripcionCorta: "Un viaje por los paisajes más impresionantes de las dos islas.",
      slug: "naturaleza-extrema-nueva-zelanda"
    }
  ]
};

// Información de los destinos
const infoDestino: Record<string, {
  nombre: string;
  continente: string;
  imagen: string;
  descripcion: string;
  informacion: {
    clima: string;
    mejorEpoca: string;
    idioma: string;
    moneda: string;
    extra: string;
  }
}> = {
  maldivas: {
    nombre: "Maldivas",
    continente: "ASIA",
    imagen: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
    descripcion: "Maldivas es un país insular ubicado en el océano Índico, famoso por sus playas de arena blanca, aguas cristalinas y una rica vida marina. Este archipiélago está compuesto por 26 atolones con más de 1.000 islas coralinas, creando uno de los destinos más exclusivos y paradisíacos del mundo.",
    informacion: {
      clima: "Tropical con temperaturas entre 24°C y 33°C durante todo el año.",
      mejorEpoca: "De noviembre a abril (temporada seca).",
      idioma: "Dhivehi (oficial), inglés (ampliamente hablado).",
      moneda: "Rufiyaa maldiva (MVR), aunque el dólar es ampliamente aceptado.",
      extra: "Se otorga visa de 30 días a la llegada para la mayoría de nacionalidades."
    }
  },
  chicago: {
    nombre: "Chicago",
    continente: "AMÉRICA",
    imagen: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
    descripcion: "Chicago, conocida como 'La Ciudad de los Vientos', es una de las metrópolis más importantes de Estados Unidos. Ubicada a orillas del lago Michigan, esta ciudad es famosa por su impresionante arquitectura, sus rascacielos pioneros y su rica historia cultural.",
    informacion: {
      clima: "Continental con cuatro estaciones bien definidas. Veranos cálidos e inviernos fríos.",
      mejorEpoca: "De mayo a octubre (primavera a otoño).",
      idioma: "Inglés.",
      moneda: "Dólar estadounidense (USD).",
      extra: "Excelente sistema de transporte público con 'El' (metro elevado) y autobuses."
    }
  },
  noruega: {
    nombre: "Noruega",
    continente: "EUROPA",
    imagen: "https://images.unsplash.com/photo-1520769669658-f07657f5a307",
    descripcion: "Noruega, ubicada en el norte de Europa, es un país conocido por sus impresionantes paisajes naturales: fiordos profundos, montañas escarpadas, glaciares y la espectacular aurora boreal. Su geografía única la convierte en uno de los destinos más impresionantes para los amantes de la naturaleza.",
    informacion: {
      clima: "Varía según la región. Inviernos fríos (especialmente en el norte) y veranos suaves.",
      mejorEpoca: "Mayo a septiembre para actividades al aire libre; noviembre a marzo para auroras boreales.",
      idioma: "Noruego (bokmål y nynorsk), inglés ampliamente hablado.",
      moneda: "Corona noruega (NOK).",
      extra: "De mayo a julio en el norte del país, cuando el sol no se pone (sol de medianoche)."
    }
  },
  caribe: {
    nombre: "Caribe",
    continente: "AMÉRICA",
    imagen: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    descripcion: "El Caribe es una región compuesta por el Mar Caribe, sus islas y las costas que lo rodean. Una zona del mundo conocida por sus paradisíacas playas de arena blanca, aguas cristalinas de tonos turquesa y un clima tropical que invita a disfrutar del sol durante todo el año.",
    informacion: {
      clima: "Tropical con temperaturas entre 24°C y 32°C durante todo el año.",
      mejorEpoca: "De diciembre a abril (temporada seca), evitando la temporada de huracanes (junio a noviembre).",
      idioma: "Español, inglés, francés, holandés y diversos dialectos según la isla.",
      moneda: "Varía según el país, aunque el dólar estadounidense es ampliamente aceptado.",
      extra: "Requisitos de entrada varían según nacionalidad e isla a visitar."
    }
  },
  baleares: {
    nombre: "Islas Baleares",
    continente: "EUROPA",
    imagen: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    descripcion: "Las Islas Baleares son un archipiélago español situado en el Mediterráneo, compuesto principalmente por Mallorca, Menorca, Ibiza y Formentera. Cada isla tiene su propio carácter y encanto particular, pero todas comparten la belleza del paisaje mediterráneo.",
    informacion: {
      clima: "Mediterráneo con veranos cálidos y secos e inviernos suaves.",
      mejorEpoca: "De mayo a octubre, siendo junio y septiembre los meses ideales (menos masificados y buen clima).",
      idioma: "Español y catalán (balear), inglés en zonas turísticas.",
      moneda: "Euro (EUR).",
      extra: "Conexiones aéreas desde principales ciudades europeas y ferries desde la península."
    }
  },
  italia: {
    nombre: "Italia",
    continente: "EUROPA",
    imagen: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
    descripcion: "Italia, cuna del Imperio Romano y el Renacimiento, es uno de los países más fascinantes de Europa. Con un patrimonio artístico y cultural inigualable, Italia ofrece desde ciudades históricas hasta paisajes impresionantes, pasando por una de las gastronomías más reconocidas del mundo.",
    informacion: {
      clima: "Mediterráneo en el sur y continental en el norte. Veranos cálidos e inviernos moderados a fríos.",
      mejorEpoca: "Primavera (abril-junio) y otoño (septiembre-octubre) para evitar el calor y las multitudes.",
      idioma: "Italiano, inglés en zonas turísticas.",
      moneda: "Euro (EUR).",
      extra: "El transporte público es excelente, especialmente los trenes de alta velocidad entre ciudades."
    }
  },
  africa: {
    nombre: "África",
    continente: "ÁFRICA",
    imagen: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    descripcion: "África, el segundo continente más grande del mundo, ofrece una increíble diversidad de paisajes, culturas y experiencias. Desde los desiertos del Sahara hasta las selvas tropicales, pasando por la sabana africana con su espectacular fauna, África es un continente lleno de contrastes y belleza natural.",
    informacion: {
      clima: "Varía enormemente según la región, desde desértico hasta tropical.",
      mejorEpoca: "Depende de la región. Para safaris, la estación seca (mayo-octubre) suele ser ideal.",
      idioma: "Más de 1.500 lenguas diferentes. Inglés, francés, árabe y portugués son comunes dependiendo del país.",
      moneda: "Varía según el país.",
      extra: "Los requisitos de visado y vacunación varían según el país a visitar."
    }
  },
  asia: {
    nombre: "Asia",
    continente: "ASIA",
    imagen: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    descripcion: "Asia, el continente más grande y poblado del mundo, ofrece una extraordinaria diversidad cultural, histórica y natural. Desde las modernas metrópolis como Tokio o Singapur hasta los templos milenarios de Angkor Wat o Bagan, Asia es un continente de contrastes fascinantes.",
    informacion: {
      clima: "Extremadamente variado, desde ártico en el norte hasta tropical en el sureste.",
      mejorEpoca: "Varía según la región. En general, evitar el monzón en el sureste asiático (junio-septiembre).",
      idioma: "Cientos de idiomas. El inglés es común en muchas zonas turísticas.",
      moneda: "Varía según el país.",
      extra: "Los requisitos de visado varían considerablemente según el país a visitar."
    }
  },
  america: {
    nombre: "América",
    continente: "AMÉRICA",
    imagen: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722",
    descripcion: "América, un continente que abarca desde el Ártico hasta casi la Antártida, ofrece una diversidad geográfica y cultural impresionante. Desde las modernas ciudades norteamericanas hasta las antiguas civilizaciones precolombinas de Latinoamérica, pasando por paisajes naturales espectaculares como la Amazonía o el Gran Cañón.",
    informacion: {
      clima: "Extremadamente variado, desde polar hasta tropical.",
      mejorEpoca: "Varía según la región y el tipo de experiencia buscada.",
      idioma: "Principalmente inglés, español y portugués, además de lenguas indígenas.",
      moneda: "Varía según el país, siendo el dólar estadounidense la moneda más influyente.",
      extra: "Los requisitos de visado varían considerablemente según el país a visitar y la nacionalidad."
    }
  },
  tanzania: {
    nombre: "Tanzania",
    continente: "ÁFRICA",
    imagen: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    descripcion: "Tanzania, país del este de África, es famoso por sus impresionantes parques nacionales, donde se puede observar la gran migración en el Serengeti, así como por el Monte Kilimanjaro, la montaña más alta de África. Sus playas en Zanzíbar y su rica cultura Swahili complementan un destino fascinante.",
    informacion: {
      clima: "Tropical, con temperaturas cálidas durante todo el año y dos temporadas de lluvias.",
      mejorEpoca: "Estación seca (junio-octubre) para safaris y ver la gran migración.",
      idioma: "Swahili e inglés (oficiales).",
      moneda: "Chelín tanzano (TZS).",
      extra: "Se requiere visado para la mayoría de nacionalidades y vacunación contra la fiebre amarilla."
    }
  },
  japon: {
    nombre: "Japón",
    continente: "ASIA",
    imagen: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    descripcion: "Japón, un archipiélago en el este de Asia, es un país donde la tradición milenaria convive con la tecnología más avanzada. Desde los templos antiguos de Kioto hasta los rascacielos de Tokio, Japón ofrece una fascinante mezcla cultural, una gastronomía exquisita y paisajes naturales impresionantes.",
    informacion: {
      clima: "Cuatro estaciones bien definidas, con inviernos fríos y veranos cálidos y húmedos.",
      mejorEpoca: "Primavera (marzo-mayo) para los cerezos en flor y otoño (octubre-noviembre) para los colores otoñales.",
      idioma: "Japonés, con inglés limitado en zonas turísticas.",
      moneda: "Yen japonés (JPY).",
      extra: "El transporte público es extremadamente eficiente, especialmente los trenes de alta velocidad (Shinkansen)."
    }
  },
  "nueva-zelanda": {
    nombre: "Nueva Zelanda",
    continente: "OCEANÍA",
    imagen: "https://images.unsplash.com/photo-1469521669194-babb45599def",
    descripcion: "Nueva Zelanda, país de Oceanía formado por dos islas principales, es famoso por sus impresionantes paisajes naturales, desde montañas nevadas y fiordos hasta playas y bosques autóctonos. El país ofrece infinitas posibilidades para los amantes de la aventura y la naturaleza.",
    informacion: {
      clima: "Templado marítimo, con cuatro estaciones bien definidas pero suaves.",
      mejorEpoca: "Verano austral (diciembre-febrero) para actividades al aire libre.",
      idioma: "Inglés y maorí (oficiales).",
      moneda: "Dólar neozelandés (NZD).",
      extra: "La mayoría de turistas necesitan solicitar un visado electrónico (NZeTA) antes de viajar."
    }
  }
};

// Componente principal para la página de destino
const DestinoPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [viajes, setViajes] = useState<Viaje[]>([]);
  const [destInfo, setDestInfo] = useState<typeof infoDestino[keyof typeof infoDestino] | null>(null);
  const [ordenar, setOrdenar] = useState<"relevancia" | "precio-asc" | "precio-desc">("relevancia");

  useEffect(() => {
    if (slug && viajesPorDestino[slug]) {
      // Ordenar viajes según el criterio seleccionado
      let viajesOrdenados = [...viajesPorDestino[slug]];
      
      if (ordenar === "precio-asc") {
        viajesOrdenados.sort((a, b) => a.precio - b.precio);
      } else if (ordenar === "precio-desc") {
        viajesOrdenados.sort((a, b) => b.precio - a.precio);
      }
      
      setViajes(viajesOrdenados);
      
      // Establecer la información del destino
      if (infoDestino[slug]) {
        setDestInfo(infoDestino[slug]);
      }
    }
  }, [slug, ordenar]);

  if (!slug || !destInfo) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Destino no encontrado</h1>
          <p className="text-gray-600 mb-8">Lo sentimos, no hemos podido encontrar información sobre este destino.</p>
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
      <div className="relative h-[500px]">
        <img 
          src={destInfo.imagen} 
          alt={destInfo.nombre} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="container mx-auto px-4">
            <span className="text-yellow-400 font-medium mb-2 block">{destInfo.continente}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Descubre {destInfo.nombre}
            </h1>
            <p className="text-white text-xl max-w-2xl">
              Explora nuestros viajes a {destInfo.nombre} y vive experiencias únicas.
            </p>
          </div>
        </div>
      </div>
      
      {/* Información del destino */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold">Sobre {destInfo.nombre}</h2>
            <p className="text-gray-600 leading-relaxed">
              {destInfo.descripcion}
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Información práctica</h3>
            <ul className="space-y-4">
              <li>
                <span className="font-medium block">Clima:</span>
                <span className="text-gray-600">{destInfo.informacion.clima}</span>
              </li>
              <li>
                <span className="font-medium block">Mejor época para visitar:</span>
                <span className="text-gray-600">{destInfo.informacion.mejorEpoca}</span>
              </li>
              <li>
                <span className="font-medium block">Idioma:</span>
                <span className="text-gray-600">{destInfo.informacion.idioma}</span>
              </li>
              <li>
                <span className="font-medium block">Moneda:</span>
                <span className="text-gray-600">{destInfo.informacion.moneda}</span>
              </li>
              <li>
                <span className="font-medium block">Información adicional:</span>
                <span className="text-gray-600">{destInfo.informacion.extra}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Viajes disponibles */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Viajes a {destInfo.nombre}</h2>
            
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

export default DestinoPage;
