import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Star, ChevronDown, ChevronUp, Share2, Volume2, VolumeX, Play, Pause, CalendarIcon, Plus, Minus } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Bed, Plane, Bus, FileCheck, Receipt, Utensils, Wifi, Map, Camera, MessageCircle, Coffee, Landmark, Film, Music, Snowflake, Mountain, Compass, Car } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Definimos un tipo para las actividades
type Activity = {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  duration: string;
};

// Definimos un tipo para las opciones de alojamiento
type Accommodation = {
  name: string;
  description: string;
  price: string;
  amenities: string[];
};

// Definimos un tipo para las FAQs
type FAQ = {
  question: string;
  answer: string;
};

// Definimos un tipo para los días del itinerario
type ItineraryDay = {
  day: number | string;
  title: string;
  description: string;
};

// Definimos un tipo para los elementos incluidos
type IncludedItem = {
  icon: React.ComponentType<any>;
  text: string;
};

// Definimos el tipo principal para los datos de un viaje
type TripData = {
  title: string;
  username: string;
  userImage: string;
  rating: number;
  duration: string;
  purchases: number;
  price: string;
  tags: string[];
  configTime: string;
  description?: string;
  highlights?: string[];
  videos: string[];
  activities?: Activity[];
  accommodations?: Accommodation[];
  faqs?: FAQ[];
  itinerary: ItineraryDay[];
  included: IncludedItem[];
};

// Definimos el tipo para el objeto que contiene todos los viajes
type TripsDataType = {
  [key: string]: TripData;
};

const tripsData: TripsDataType = {
  maldivas: {
    title: "Viaja a Maldivas",
    username: "@pauladiez",
    userImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    rating: 5.0,
    duration: "9 días, 7 noches",
    purchases: 361,
    price: "3,999",
    tags: ["Tendencia", "Surf", "Buceo", "Con amigos"],
    configTime: "7",
    description: "Disfruta de unas vacaciones inolvidables en las paradisíacas Islas Maldivas, conocidas por sus aguas cristalinas de color turquesa, playas de arena blanca y una biodiversidad marina espectacular. Este archipiélago ubicado en el Océano Índico es el destino perfecto para los amantes del sol, el mar y las actividades acuáticas.",
    highlights: [
      "Alojamiento en resort 5 estrellas con bungalows sobre el agua",
      "Experiencia de snorkel y buceo entre arrecifes de coral vibrantes",
      "Excursiones a islas deshabitadas y poblados locales",
      "Gastronomía internacional y local de primera categoría",
      "Tratamientos de spa con vistas al océano"
    ],
    videos: [
      "https://player.vimeo.com/external/321805508.sd.mp4?s=95abff35c7322d1f70e2708631181585e3926fd8&profile_id=164&oauth2_token_id=57447761",
      "https://player.vimeo.com/external/363625327.sd.mp4?s=12ab3b2f56e703ca2216adeb9ea528c7cbf35467&profile_id=164&oauth2_token_id=57447761",
      "https://player.vimeo.com/external/339240136.sd.mp4?s=99e733f8fa8b2d5ca499d45d6e20767fee1be47f&profile_id=164&oauth2_token_id=57447761"
    ],
    itinerary: [
      {
        day: 1,
        title: "Madrid - Maldivas",
        description: "¡Hoy es el día que tanto has esperado! Finalmente, te embarcarás en un emocionante viaje hacia las asombrosas Islas Maldivas. Prepárate para empacar con entusiasmo y dirígete al aeropuerto con tiempo de sobra para completar cualquier trámite necesario."
      },
      {
        day: 2,
        title: "Llegada a Maldivas",
        description: "Llegada al aeropuerto de Male. Traslado en lancha rápida o hidroavión a tu resort. Resto del día libre para disfrutar del paraíso."
      },
      {
        day: 3,
        title: "Actividades acuáticas",
        description: "Día dedicado a actividades acuáticas: snorkel, buceo o simplemente relax en la playa paradisíaca."
      },
      {
        day: 4,
        title: "Crucero al atardecer",
        description: "Mañana libre y por la tarde, crucero para ver delfines y el espectacular atardecer maldivo."
      },
      {
        day: 5,
        title: "Isla local",
        description: "Excursión opcional a una isla local para conocer la cultura maldiva y su gente."
      },
      {
        day: 6,
        title: "Spa y relax",
        description: "Día dedicado al relax con tratamientos de spa y actividades tranquilas."
      },
      {
        day: 7,
        title: "Día libre",
        description: "Último día completo para disfrutar de las instalaciones del resort y el entorno paradisíaco."
      },
      {
        day: 8,
        title: "Regreso",
        description: "Traslado al aeropuerto de Male para tomar el vuelo de regreso."
      },
      {
        day: 9,
        title: "Llegada",
        description: "Llegada a Madrid. Fin del viaje y de nuestros servicios."
      }
    ],
    included: [
      {
        icon: Bed,
        text: "7 noches en el régimen elegido"
      },
      {
        icon: Plane,
        text: "Avión ida y vuelta"
      },
      {
        icon: Bus,
        text: "Traslados aeropuerto - hotel - aeropuerto"
      },
      {
        icon: FileCheck,
        text: "Seguro de viajes básico"
      },
      {
        icon: Receipt,
        text: "Tasas aéreas incluidas"
      },
      {
        icon: Utensils,
        text: "Media pensión (desayuno y cena)"
      },
      {
        icon: Wifi,
        text: "WiFi gratuito en todo el resort"
      }
    ]
  },
  chicago: {
    title: "Viaja a Chicago",
    username: "@familiacarameluchi",
    userImage: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc",
    rating: 5.0,
    duration: "7 días, 5 noches",
    purchases: 750,
    price: "2,499",
    tags: ["En familia", "Urbano", "Cultura", "Gastronomía"],
    configTime: "5",
    description: "Descubre la majestuosa Ciudad de los Vientos, cuna de los rascacielos y capital cultural del Medio Oeste americano. Chicago ofrece una experiencia urbana completa con impresionante arquitectura, museos de clase mundial, una escena gastronómica diversa y las hermosas orillas del Lago Michigan.",
    highlights: [
      "Visitas guiadas a los rascacielos y joyas arquitectónicas de la ciudad",
      "Crucero arquitectónico por el río Chicago",
      "Experiencia gastronómica con la auténtica deep dish pizza",
      "Exploración de los museos de fama mundial",
      "Paseos por el Navy Pier y las orillas del Lago Michigan"
    ],
    videos: [
      "https://player.vimeo.com/external/408412129.sd.mp4?s=dacb9e82fcd98823ada100eb84c82703806f215f&profile_id=164&oauth2_token_id=57447761",
      "https://player.vimeo.com/external/295482071.sd.mp4?s=49c9384b25c73fb5007d9a2a0e9a6e40ca6fe666&profile_id=164&oauth2_token_id=57447761",
      "https://player.vimeo.com/external/209264345.sd.mp4?s=481acf3e78f5a66acee29595d9e52077fbe7cc8f&profile_id=164&oauth2_token_id=57447761"
    ],
    itinerary: [
      {
        day: 1,
        title: "Madrid - Chicago",
        description: "Vuelo directo desde Madrid a Chicago O'Hare. Traslado al hotel y breve paseo de orientación por los alrededores. Cena de bienvenida con degustación de la famosa deep dish pizza."
      },
      {
        day: 2,
        title: "Magnificent Mile y Loop",
        description: "Recorrido por la icónica avenida Michigan (Magnificent Mile) y sus tiendas de lujo. Por la tarde, visita al Loop con sus edificios históricos, el Art Institute y Millennium Park para ver la famosa escultura 'Cloud Gate' (The Bean)."
      },
      {
        day: 3,
        title: "Arquitectura y río",
        description: "Crucero arquitectónico por el río Chicago, seguido de la subida al mirador de la Willis Tower (antiguo Sears Tower). Tarde libre para explorar el Navy Pier y posible paseo en la noria con vistas al lago Michigan."
      },
      {
        day: 4,
        title: "Museos y cultura",
        description: "Visita al Field Museum de Historia Natural o al Museo de Ciencia e Industria. Por la tarde, paseo por el campus de la Universidad de Chicago y tiempo para explorar Hyde Park."
      },
      {
        day: 5,
        title: "Barrios de Chicago",
        description: "Tour por los diversos barrios de la ciudad: Chinatown, Little Italy, Pilsen (con su arte callejero mexicano) y Wicker Park. Por la noche, experiencia de jazz en un club tradicional."
      },
      {
        day: 6,
        title: "Compras y tiempo libre",
        description: "Mañana dedicada a compras o a revisitar lugares favoritos. Por la tarde, posible excursión al histórico barrio de Oak Park para ver las casas diseñadas por Frank Lloyd Wright. Cena de despedida con especialidades locales."
      },
      {
        day: 7,
        title: "Chicago - Madrid",
        description: "Tiempo libre para últimas compras. Traslado al aeropuerto para tomar el vuelo de regreso a Madrid."
      }
    ],
    included: [
      {
        icon: Bed,
        text: "5 noches en hotel seleccionado"
      },
      {
        icon: Plane,
        text: "Vuelos directos ida y vuelta"
      },
      {
        icon: Bus,
        text: "Traslados aeropuerto - hotel - aeropuerto"
      },
      {
        icon: FileCheck,
        text: "Seguro de viaje completo"
      },
      {
        icon: Coffee,
        text: "Desayunos incluidos"
      },
      {
        icon: Map,
        text: "CityPASS para principales atracciones"
      },
      {
        icon: Landmark,
        text: "Crucero arquitectónico por el río"
      },
      {
        icon: Film,
        text: "Tour guiado por localizaciones de películas"
      }
    ]
  },
  noruega: {
    title: "Viaja a Noruega",
    username: "@viajandoconnenos",
    userImage: "https://images.unsplash.com/photo-1590086782957-93c06ef21604",
    rating: 4.9,
    duration: "8 días, 7 noches",
    purchases: 428,
    price: "2,899",
    tags: ["Aventura", "Naturaleza", "Fiordos", "Aurora Boreal"],
    configTime: "6",
    description: "Descubre la magia del país de los fiordos y las auroras boreales. Noruega te ofrece un viaje fascinante a través de paisajes impresionantes, ciudades encantadoras y una rica herencia cultural vikinga. Desde los espectaculares fiordos y montañas hasta sus modernas ciudades como Oslo y Bergen, este destino nórdico es perfecto para los amantes de la naturaleza y la aventura.",
    highlights: [
      "Crucero por el espectacular Fiordo de Geiranger, Patrimonio de la UNESCO",
      "Experiencia de avistamiento de auroras boreales (entre septiembre y marzo)",
      "Trekking y actividades al aire libre en paisajes naturales impresionantes",
      "Recorrido por la pintoresca ciudad de Bergen y su histórico barrio Bryggen",
      "Excursión en tren panorámico por la ruta Flåm, considerada una de las más bellas del mundo"
    ],
    videos: [
      "https://player.vimeo.com/external/270245628.sd.mp4?s=6c344454bedd85b49ff9dc4ce8919332cea69645&profile_id=164&oauth2_token_id=57447761",
      "https://player.vimeo.com/external/493174780.sd.mp4?s=e08a4be71e4a40c50a3a8d5b1e4aed4ded6af98d&profile_id=164&oauth2_token_id=57447761",
      "https://player.vimeo.com/external/514370080.sd.mp4?s=ab5cb7ac0952f3f6f0f0d8ee9ede6a7fdab84ab5&profile_id=164&oauth2_token_id=57447761"
    ],
    itinerary: [
      {
        day: 1,
        title: "Madrid - Oslo",
        description: "Vuelo desde Madrid a Oslo. Traslado al hotel y tiempo libre para un primer contacto con la capital noruega. Reunión de bienvenida con el guía."
      },
      {
        day: 2,
        title: "Oslo - Explorando la capital",
        description: "Tour completo por Oslo visitando el Parque Vigeland, el Museo de los Barcos Vikingos, el Museo Fram y la Ópera. Tarde libre para explorar el moderno barrio de Aker Brygge."
      },
      {
        day: 3,
        title: "Oslo - Bergen en tren panorámico",
        description: "Viaje en el tren panorámico de Oslo a Bergen, considerado uno de los recorridos ferroviarios más bellos del mundo, atravesando montañas y valles espectaculares."
      },
      {
        day: 4,
        title: "Bergen - Ciudad de la UNESCO",
        description: "Visita guiada por Bergen, incluyendo el mercado de pescado, el barrio hanseático de Bryggen (Patrimonio Mundial), y subida en funicular al monte Fløyen para disfrutar de vistas panorámicas."
      },
      {
        day: 5,
        title: "Crucero por los fiordos",
        description: "Travesía en barco por el Sognefjord y el espectacular Nærøyfjord, Patrimonio Mundial de la UNESCO. Continuación hacia la región de Flåm para disfrutar del famoso tren panorámico de Flåm."
      },
      {
        day: 6,
        title: "Región de Geiranger",
        description: "Viaje a la región de Geiranger para explorar el majestuoso fiordo, con paradas en miradores estratégicos. Por la tarde, crucero por el Geirangerfjord para admirar sus cascadas y formaciones rocosas."
      },
      {
        day: 7,
        title: "Ålesund",
        description: "Traslado a la hermosa ciudad de Ålesund, famosa por su arquitectura Art Nouveau. Tour por la ciudad y tiempo libre. Por la noche, cena de despedida con platos tradicionales noruegos."
      },
      {
        day: 8,
        title: "Regreso a Madrid",
        description: "Traslado al aeropuerto de Ålesund para tomar el vuelo de regreso a Madrid, con conexión en Oslo."
      }
    ],
    included: [
      {
        icon: Bed,
        text: "7 noches en hoteles seleccionados"
      },
      {
        icon: Plane,
        text: "Vuelos ida y vuelta con tasas incluidas"
      },
      {
        icon: Bus,
        text: "Todos los traslados en moderno autocar"
      },
      {
        icon: FileCheck,
        text: "Seguro de viaje con cobertura especial"
      },
      {
        icon: Utensils,
        text: "Desayunos y 3 cenas incluidas"
      },
      {
        icon: Compass,
        text: "Cruceros por los fiordos"
      },
      {
        icon: Car,
        text: "Tren panorámico Oslo-Bergen y Flåm"
      },
      {
        icon: Map,
        text: "Guía acompañante de habla hispana"
      }
    ]
  },
  mallorca: {
    title: "Viaja a Mallorca",
    username: "@pauladiez",
    userImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    rating: 4.9,
    duration: "5 días, 4 noches",
    purchases: 245,
    price: "899",
    tags: ["Playa", "Mediterráneo", "Gastronomía", "Relax"],
    configTime: "5",
    description: "Descubre la isla más grande de las Baleares, un paraíso mediterráneo con playas de ensueño, calas escondidas y una rica cultura gastronómica. Mallorca combina naturaleza, historia y modernidad en un entorno idílico.",
    highlights: [
      "Alojamiento en hotel boutique cerca de las mejores playas",
      "Ruta en coche de alquiler para descubrir las calas secretas",
      "Tour gastronómico por Palma con degustación de tapas",
      "Excursión a la Sierra de Tramuntana, Patrimonio de la Humanidad",
      "Actividades acuáticas como paddleboarding y kayak"
    ],
    videos: [
      "https://player.vimeo.com/external/400197112.sd.mp4?s=d9e6c693bc34322029587da895fb03406c5c3a29&profile_id=164&oauth2_token_id=57447761",
      "https://player.vimeo.com/external/350623292.sd.mp4?s=ee7e1ff1d7469f85dbd33adbf0de0df2cff34128&profile_id=164&oauth2_token_id=57447761",
      "https://player.vimeo.com/external/430198225.sd.mp4?s=d30978eb36c738b59a299d81cc9bf0c94cc1db5e&profile_id=164&oauth2_token_id=57447761"
    ],
    itinerary: [
      {
        day: 1,
        title: "Madrid - Mallorca",
        description: "Vuelo desde Madrid a Palma de Mallorca. Traslado al hotel y tiempo libre para explorar la zona."
      },
      {
        day: 2,
        title: "Calas y Playas",
        description: "Ruta por las mejores calas de Mallorca. Visita a Cala Varques y Cala Mesquida."
      },
      {
        day: 3,
        title: "Sierra de Tramuntana",
        description: "Excursión a la Sierra de Tramuntana, Patrimonio de la Humanidad. Visita a Valldemossa y Deià."
      },
      {
        day: 4,
        title: "Palma y Gastronomía",
        description: "Tour por Palma: Catedral, Castillo de Bellver y mercados locales. Cena gastronómica."
      },
      {
        day: 5,
        title: "Regreso a Madrid",
        description: "Mañana libre y vuelo de regreso a Madrid."
      }
    ],
    included: [
      {
        icon: Bed,
        text: "4 noches en hotel seleccionado"
      },
      {
        icon: Plane,
        text: "Vuelos ida y vuelta"
      },
      {
        icon: Bus,
        text: "Traslados aeropuerto - hotel"
      },
      {
        icon: FileCheck,
        text: "Seguro de viaje básico"
      },
      {
        icon: Receipt,
        text: "Tasas incluidas"
      }
    ]
  },
  "punta-cana": {
    title: "Viaja a Punta Cana",
    username: "@pauladiez",
    userImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    rating: 4.8,
    duration: "7 días, 6 noches",
    purchases: 183,
    price: "2,499",
    tags: ["Caribe", "Todo incluido", "Playas paradisíacas", "Con amigos"],
    configTime: "6",
    description: "Disfruta del auténtico paraíso caribeño en Punta Cana, República Dominicana. Con sus playas de arena blanca, aguas turquesas y un clima perfecto durante todo el año, este destino ofrece la combinación ideal de relax y diversión.",
    highlights: [
      "Alojamiento en resort todo incluido 5 estrellas frente al mar",
      "Excursión a Isla Saona con almuerzo típico dominicano",
      "Actividades acuáticas ilimitadas: snorkel, kayak, windsurf",
      "Shows nocturnos con música y bailes tradicionales",
      "Spa con tratamientos inspirados en ingredientes locales"
    ],
    videos: [
      "https://player.vimeo.com/external/349775864.sd.mp4?s=c69f22f2ad5f15e26093672aa8a98614e5b7add9&profile_id=164&oauth2_token_id=57447761",
      "https://player.vimeo.com/external/317154844.sd.mp4?s=95e95db5fcefc6fe403c74ef0f402b28e01d01b6&profile_id=164&oauth2_token_id=57447761",
      "https://player.vimeo.com/external/347956585.sd.mp4?s=54d8b887092f87d7ad93c7a7bd65a3f7c27c4ccb&profile_id=164&oauth2_token_id=57447761"
    ],
    itinerary: [
      {
        day: 1,
        title: "Madrid - Punta Cana",
        description: "Vuelo directo Madrid - Punta Cana. Traslado al resort todo incluido."
      },
      {
        day: 2,
        title: "Playa y Actividades",
        description: "Día libre para disfrutar de la playa y actividades del resort."
      },
      {
        day: 3,
        title: "Isla Saona",
        description: "Excursión a Isla Saona, paraíso natural del Caribe."
      },
      {
        day: 4,
        title: "Deportes acuáticos",
        description: "Día dedicado a deportes acuáticos y actividades en la playa."
      },
      {
        day: 5,
        title: "Santo Domingo",
        description: "Tour opcional a Santo Domingo, la capital colonial."
      },
      {
        day: 6,
        title: "Relax en el Caribe",
        description: "Último día completo para disfrutar del resort."
      },
      {
        day: 7,
        title: "Regreso a Madrid",
        description: "Vuelo de regreso a Madrid."
      }
    ],
    included: [
      {
        icon: Bed,
        text: "6 noches en resort todo incluido"
      },
      {
        icon: Plane,
        text: "Vuelos directos ida y vuelta"
      },
      {
        icon: Bus,
        text: "Traslados aeropuerto - resort"
      },
      {
        icon: FileCheck,
        text: "Seguro de viaje premium"
      },
      {
        icon: Receipt,
        text: "Tasas aéreas incluidas"
      }
    ]
  }
};

const TripDetails = () => {
  // Cambiamos de 'destination' a 'slug' para que coincida con la definición de la ruta
  const { slug } = useParams();
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedOrigin, setSelectedOrigin] = useState("Madrid (MAD)");
  const [date, setDate] = useState<Date>();
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [duration, setDuration] = useState("7 noches");
  const [activeTab, setActiveTab] = useState("descripcion");

  console.log("Slug de destino:", slug); // Añadimos log para depuración

  // Usamos 'slug' en lugar de 'destination'
  const tripData = slug ? tripsData[slug as keyof typeof tripsData] : null;

  if (!tripData) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="container py-8">
          <h1 className="text-2xl font-bold">Destino no encontrado</h1>
          <p className="mt-4">Lo sentimos, el destino que buscas no está disponible.</p>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAdultsChange = (increment: boolean) => {
    if (increment && adults < 8) {
      setAdults(adults + 1);
    } else if (!increment && adults > 1) {
      setAdults(adults - 1);
    }
  };

  const handleChildrenChange = (increment: boolean) => {
    if (increment && children < 6) {
      setChildren(children + 1);
    } else if (!increment && children > 0) {
      setChildren(children - 1);
    }
  };

  const airports = [
    { code: "MAD", city: "Madrid", name: "Madrid (MAD)" },
    { code: "BCN", city: "Barcelona", name: "Barcelona (BCN)" },
    { code: "PMI", city: "Palma de Mallorca", name: "Palma de Mallorca (PMI)" },
    { code: "AGP", city: "Málaga", name: "Málaga (AGP)" },
    { code: "ALC", city: "Alicante", name: "Alicante (ALC)" },
    { code: "VLC", city: "Valencia", name: "Valencia (VLC)" },
    { code: "SVQ", city: "Sevilla", name: "Sevilla (SVQ)" },
    { code: "BIO", city: "Bilbao", name: "Bilbao (BIO)" },
    { code: "TFN", city: "Tenerife Norte", name: "Tenerife Norte (TFN)" },
    { code: "TFS", city: "Tenerife Sur", name: "Tenerife Sur (TFS)" }
  ];

  const reviews = {
    average: 5.0,
    total: 1234,
    items: [
      {
        id: 1,
        author: "María",
        date: "15/02/2024",
        rating: 5.0,
        comment: "¡Increíble viaje! Todo perfectamente organizado y las experiencias fueron inolvidables.",
        images: [
          tripData.videos[0],
          tripData.videos[1]
        ]
      },
      {
        id: 2,
        author: "Carlos",
        date: "10/02/2024",
        rating: 5.0,
        comment: "Una experiencia única. El itinerario estaba muy bien planificado y pudimos disfrutar de todo sin prisas.",
        images: [
          tripData.videos[1],
          tripData.videos[2]
        ]
      }
    ]
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const scrollToReviews = () => {
    const reviewsSection = document.getElementById('reviews');
    reviewsSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container py-8">
        <div className="grid lg:grid-cols-2 gap-8 my-[50px]">
          <div className="space-y-6">
            <div className="w-full max-w-[400px] mx-auto">
              <Carousel className="w-full">
                <CarouselContent>
                  {tripData.videos.map((video, index) => <CarouselItem key={index}>
                      <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gray-900">
                        <div className="absolute top-0 left-0 right-0 z-20 p-4 bg-gradient-to-b from-black/50 to-transparent">
                          <div className="flex items-center gap-3">
                            <img src={tripData.userImage} alt={tripData.username} className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                            <span className="text-white font-medium text-sm">
                              {tripData.title} como {tripData.username}
                            </span>
                          </div>
                        </div>
                        <video src={video} controls muted={isMuted} autoPlay={isPlaying} loop className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                          <div className="flex justify-between items-center mb-3">
                            <button onClick={toggleMute} className="w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/30 transition-colors">
                              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                            </button>
                            <button onClick={togglePlay} className="w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/30 transition-colors">
                              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                            </button>
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            {tripData.videos.map((_, i) => <div key={i} className={`h-1 flex-1 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`} />)}
                          </div>
                          <div className="text
