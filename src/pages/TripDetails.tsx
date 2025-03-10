
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
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
      "https://images.unsplash.com/photo-1551918120-9739cb430c6d"
    ],
    activities: [
      {
        title: "Buceo entre corales",
        description: "Explora los coloridos arrecifes de coral que rodean las islas, hogar de miles de especies marinas.",
        icon: Camera,
        duration: "3-4 horas"
      },
      {
        title: "Excursión a isla local",
        description: "Conoce la cultura maldiva visitando un poblado local donde podrás interactuar con sus habitantes.",
        icon: Map,
        duration: "Medio día"
      },
      {
        title: "Cena romántica en la playa",
        description: "Disfruta de una cena especial bajo las estrellas con el sonido de las olas como música de fondo.",
        icon: Utensils,
        duration: "2 horas"
      },
      {
        title: "Clases de cocina maldiva",
        description: "Aprende a preparar platos típicos de la gastronomía local con chefs profesionales.",
        icon: Utensils,
        duration: "2 horas"
      }
    ],
    accommodations: [
      {
        name: "Water Villa",
        description: "Bungalow sobre el agua con acceso directo al océano, terraza privada y vistas panorámicas.",
        price: "Incluido en el paquete base",
        amenities: ["Cama king size", "Aire acondicionado", "Conexión WiFi", "Minibar", "Bañera de hidromasaje"]
      },
      {
        name: "Beach Villa",
        description: "Villa a pie de playa con acceso directo a la arena blanca, jardín privado y piscina.",
        price: "+500€ sobre el precio base",
        amenities: ["Cama king size", "Aire acondicionado", "Conexión WiFi", "Minibar", "Piscina privada"]
      },
      {
        name: "Garden Villa",
        description: "Villa rodeada de exuberante vegetación tropical, con terraza y ducha exterior.",
        price: "-300€ sobre el precio base",
        amenities: ["Camas twin o king size", "Aire acondicionado", "Conexión WiFi", "Minibar"]
      }
    ],
    faqs: [
      {
        question: "¿Cuál es la mejor época para viajar a Maldivas?",
        answer: "La mejor temporada es de noviembre a abril, cuando hay menos lluvias y el clima es más estable. La temporada de lluvias es de mayo a octubre, aunque suelen ser chaparrones cortos."
      },
      {
        question: "¿Necesito visa para viajar a Maldivas?",
        answer: "Los ciudadanos españoles reciben un visado gratuito de 30 días a la llegada. Solo necesitas tener el pasaporte con validez mínima de 6 meses y el billete de regreso."
      },
      {
        question: "¿Qué moneda se usa en Maldivas?",
        answer: "La moneda oficial es la Rufiyaa maldiva, pero en los resorts se acepta ampliamente el dólar estadounidense y las tarjetas de crédito."
      },
      {
        question: "¿Es seguro beber agua del grifo?",
        answer: "No es recomendable. En los resorts se proporciona agua embotellada que está incluida en la mayoría de los paquetes."
      }
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
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
      "https://images.unsplash.com/photo-1494522358652-f30e61a60313",
      "https://images.unsplash.com/photo-1507992781348-310259076fe0"
    ],
    activities: [
      {
        title: "Crucero arquitectónico",
        description: "Explora la ciudad desde el río Chicago mientras un guía experto te cuenta la fascinante historia arquitectónica de la ciudad.",
        icon: Landmark,
        duration: "90 minutos"
      },
      {
        title: "Tour gastronómico",
        description: "Degusta la famosa deep dish pizza, los hot dogs estilo Chicago y otros platos emblematicos de la ciudad en un recorrido guiado.",
        icon: Utensils,
        duration: "3 horas"
      },
      {
        title: "Art Institute de Chicago",
        description: "Visita uno de los museos de arte más importantes del mundo, hogar de miles de obras maestras, incluyendo piezas de Monet, Van Gogh y Picasso.",
        icon: Camera,
        duration: "Medio día"
      },
      {
        title: "Experiencia musical de jazz",
        description: "Disfruta de una noche de auténtico jazz de Chicago en un club histórico donde tocaron grandes leyendas del género.",
        icon: Music,
        duration: "2-3 horas"
      }
    ],
    accommodations: [
      {
        name: "Hotel Michigan Avenue",
        description: "Hotel boutique de 4 estrellas ubicado en la famosa Magnificent Mile, a pasos de las principales atracciones.",
        price: "Incluido en el paquete base",
        amenities: ["Desayuno buffet", "WiFi de alta velocidad", "Gimnasio 24h", "Servicio de concierge", "Bar en la azotea"]
      },
      {
        name: "Apartamento en River North",
        description: "Moderno apartamento completo en el trendy barrio de River North, ideal para familias que buscan más espacio y comodidades.",
        price: "+350€ sobre el precio base",
        amenities: ["Cocina completamente equipada", "2 habitaciones", "Lavadora/secadora", "Smart TV", "Vista al río"]
      },
      {
        name: "Hotel Loop District",
        description: "Hotel céntrico en el corazón del Loop, el distrito financiero y cultural de Chicago.",
        price: "-200€ sobre el precio base",
        amenities: ["Desayuno continental", "WiFi gratis", "Business center", "Acceso cercano al metro"]
      }
    ],
    faqs: [
      {
        question: "¿Cuál es la mejor época para visitar Chicago?",
        answer: "La mejor época es entre mayo y septiembre, cuando el clima es más cálido y hay numerosos festivales y eventos al aire libre. Los meses de julio y agosto son los más concurridos. El otoño ofrece colores espectaculares, pero el invierno puede ser extremadamente frío."
      },
      {
        question: "¿Necesito alquilar coche en Chicago?",
        answer: "No es necesario. Chicago tiene un excelente sistema de transporte público (CTA) con trenes elevados ('L') y autobuses que conectan todas las zonas turísticas. Además, la mayoría de las atracciones del centro son accesibles a pie."
      },
      {
        question: "¿Es seguro Chicago para turistas?",
        answer: "Las zonas turísticas como el Loop, Magnificent Mile, Navy Pier y los barrios del norte son generalmente seguras. Como en cualquier gran ciudad, se recomienda estar atento a tus pertenencias y evitar ciertas áreas del sur y oeste, especialmente por la noche."
      },
      {
        question: "¿Qué platos típicos debo probar en Chicago?",
        answer: "No puedes irte sin probar la deep dish pizza, el hot dog estilo Chicago (sin ketchup), el sándwich de carne italiana con jugo (Italian beef), las palomitas Chicago mix (mezcla de caramelo y queso) y los pasteles de Eli's Cheesecake."
      }
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
      "https://images.unsplash.com/photo-1506193503569-d57d2a789331",
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38"
    ],
    activities: [
      {
        title: "Crucero por el fiordo",
        description: "Navega entre las imponentes paredes del Fiordo de Geiranger, admirando cascadas como 'Las Siete Hermanas' y disfrutando de vistas espectaculares.",
        icon: Compass,
        duration: "3-4 horas"
      },
      {
        title: "Caza de auroras boreales",
        description: "Excursión nocturna con guías expertos en busca del espectáculo natural más impresionante: las luces del norte danzando en el cielo ártico.",
        icon: Snowflake,
        duration: "4-5 horas"
      },
      {
        title: "Trekking en Preikestolen",
        description: "Ruta de senderismo hasta el famoso Púlpito o Preikestolen, una impresionante formación rocosa con vistas panorámicas al fiordo Lysefjord.",
        icon: Mountain,
        duration: "Todo el día"
      },
      {
        title: "Tour cultural en Oslo",
        description: "Visita los principales museos y atracciones de la capital noruega, incluyendo el Museo de los Barcos Vikingos y el Parque de Esculturas Vigeland.",
        icon: Landmark,
        duration: "6 horas"
      }
    ],
    accommodations: [
      {
        name: "Hotel Fiordos View",
        description: "Acogedor hotel con vistas panorámicas a los fiordos y decoración típica noruega, ubicado cerca de Geiranger.",
        price: "Incluido en el paquete base",
        amenities: ["Desayuno buffet nórdico", "Sauna", "WiFi gratuito", "Restaurante con comida local", "Habitaciones con vistas"]
      },
      {
        name: "Cabañas Árticas",
        description: "Encantadoras cabañas de madera en la región de Tromsø, ideales para la observación de auroras boreales, con techos transparentes.",
        price: "+450€ sobre el precio base",
        amenities: ["Chimenea", "Cocina equipada", "Techo panorámico", "Equipo para auroras", "Excursiones incluidas"]
      },
      {
        name: "Hotel Céntrico Bergen",
        description: "Hotel urbano situado en el corazón de Bergen, a pocos minutos a pie del barrio histórico de Bryggen.",
        price: "-150€ sobre el precio base",
        amenities: ["Desayuno incluido", "WiFi de alta velocidad", "Bar en la azotea", "Habitaciones modernas"]
      }
    ],
    faqs: [
      {
        question: "¿Cuál es la mejor época para ver auroras boreales en Noruega?",
        answer: "El período óptimo es de septiembre a marzo, siendo los meses de invierno (noviembre a febrero) los que ofrecen más horas de oscuridad y por tanto mayores posibilidades. Las mejores zonas son el norte del país, especialmente alrededor de Tromsø."
      },
      {
        question: "¿Qué ropa debo llevar para un viaje a Noruega?",
        answer: "Independientemente de la temporada, es recomendable vestirse en capas. Para invierno: ropa térmica, jerseys de lana, chaqueta impermeable y cortavientos, botas impermeables, guantes, bufanda y gorro. En verano: ropa ligera pero también alguna capa abrigada y chubasquero, ya que el clima puede cambiar rápidamente."
      },
      {
        question: "¿Es caro viajar por Noruega?",
        answer: "Sí, Noruega es uno de los países más caros de Europa. La comida, el transporte y el alojamiento tienen precios elevados. Sin embargo, con un paquete organizado como este, muchos gastos están incluidos y controlados de antemano."
      },
      {
        question: "¿Necesito visa para viajar a Noruega?",
        answer: "Los ciudadanos de la Unión Europea no necesitan visa para entrar en Noruega, ya que pertenece al Espacio Schengen. Solo se requiere un documento de identidad o pasaporte válido."
      }
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
      "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6",
      "https://images.unsplash.com/photo-1582071007433-3a24cbde3c54",
      "https://images.unsplash.com/photo-1586967440513-612f348591c9"
    ],
    activities: [
      {
        title: "Ruta de calas",
        description: "Recorre las mejores calas de la isla, desde Cala Varques hasta Cala Mesquida, descubriendo arenas blancas y aguas cristalinas.",
        icon: Map,
        duration: "Todo el día"
      },
      {
        title: "Tour por Palma",
        description: "Visita guiada por la capital para descubrir la Catedral, el Castillo de Bellver y los mercados tradicionales.",
        icon: Camera,
        duration: "4 horas"
      }
    ],
    accommodations: [
      {
        name: "Hotel Mediterráneo",
        description: "Hotel de 4 estrellas con vistas al mar y ubicación céntrica en Palma.",
        price: "Incluido en el paquete base",
        amenities: ["Piscina", "Desayuno buffet", "WiFi gratis", "Terraza panorámica"]
      },
      {
        name: "Villa con piscina",
        description: "Villa privada con piscina en la zona de Pollença, ideal para familias.",
        price: "+400€ sobre el precio base",
        amenities: ["Piscina privada", "Jardín", "Cocina equipada", "3 habitaciones"]
      }
    ],
    faqs: [
      {
        question: "¿Cuál es la mejor época para visitar Mallorca?",
        answer: "La mejor época es de mayo a octubre, con los meses de julio y agosto como temporada alta. Para evitar multitudes, se recomienda mayo, junio o septiembre."
      },
      {
        question: "¿Necesito alquilar coche en Mallorca?",
        answer: "Si quieres descubrir las calas y pueblos de interior, es muy recomendable alquilar un coche. Las ciudades principales están bien conectadas por transporte público."
      }
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
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57",
      "https://images.unsplash.com/photo-1517300906457-a05522e7c2cb"
    ],
    activities: [
      {
        title: "Excursión a Isla Saona",
        description: "Visita esta isla paradisíaca dentro del Parque Nacional del Este, con su playa de postal y aguas cristalinas.",
        icon: Map,
        duration: "Todo el día"
      },
      {
        title: "Tour a Santo Domingo",
        description: "Conoce la capital y su zona colonial, la ciudad más antigua del Nuevo Mundo y Patrimonio de la Humanidad.",
        icon: Camera,
        duration: "8 horas"
      }
    ],
    accommodations: [
      {
        name: "Habitación Deluxe",
        description: "Habitación con vistas al jardín tropical y terraza privada.",
        price: "Incluido en el paquete base",
        amenities: ["Cama king size", "Aire acondicionado", "Minibar todo incluido", "TV pantalla plana"]
      },
      {
        name: "Suite Ocean Front",
        description: "Suite de lujo con vistas directas al mar Caribe y acceso privilegiado a la playa.",
        price: "+700€ sobre el precio base",
        amenities: ["Terraza con jacuzzi", "Servicio de mayordomo", "Prioridad en restaurantes", "Área exclusiva en la playa"]
      }
    ],
    faqs: [
      {
        question: "¿Qué incluye el régimen todo incluido?",
        answer: "Incluye todas las comidas, bebidas nacionales e internacionales ilimitadas, actividades deportivas no motorizadas, entretenimiento diurno y nocturno, y acceso a todas las instalaciones del resort."
      },
      {
        question: "¿Es necesario llevar dólares a República Dominicana?",
        answer: "Aunque la moneda local es el peso dominicano, en las zonas turísticas se acepta ampliamente el dólar estadounidense. Las tarjetas de crédito son aceptadas en la mayoría de los establecimientos."
      }
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
                        <img src={video} alt={`Story ${index + 1} de ${tripData.title}`} className="w-full h-full object-cover" />
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
                          <div className="text-white text-sm font-medium">
                            Día {index + 1}
                          </div>
                        </div>
                        <button className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white">
                          ←
                        </button>
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white">
                          →
                        </button>
                      </div>
                    </CarouselItem>)}
                </CarouselContent>
              </Carousel>
            </div>

            <div className="mt-8">
              <Tabs defaultValue="descripcion" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-4 mb-6">
                  <TabsTrigger value="descripcion">Descripción</TabsTrigger>
                  <TabsTrigger value="itinerario">Itinerario</TabsTrigger>
                  <TabsTrigger value="alojamiento">Alojamiento</TabsTrigger>
                  <TabsTrigger value="faqs">FAQs</TabsTrigger>
                </TabsList>
                
                <TabsContent value="descripcion" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Descripción del paquete</h3>
                    <p className="text-gray-600 mb-6">
                      {tripData.description || "Disfruta de un viaje perfecto a este increíble destino con todo incluido y actividades personalizadas."}
                    </p>
                    
                    {tripData.highlights && (
                      <div className="mt-6">
                        <h4 className="text-lg font-medium mb-3">Highlights del viaje</h4>
                        <ul className="space-y-2">
                          {tripData.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-gray-700">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  {tripData.activities && (
                    <div className="mt-8">
                      <h4 className="text-lg font-medium mb-4">Actividades destacadas</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {tripData.activities.map((activity, index) => (
                          <div key={index} className="border rounded-lg p-4 hover:border-primary transition-colors">
                            <div className="flex items-start gap-3">
                              {activity.icon && <activity.icon className="w-5 h-5 text-primary mt-1" />}
                              <div>
                                <h5 className="font-medium">{activity.title}</h5>
                                <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                                {activity.duration && (
                                  <p className="text-xs text-gray-500 mt-2">Duración: {activity.duration}</p>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-medium mb-4">Incluidos en tu viaje</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {tripData.included.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-gray-600">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="itinerario" className="space-y-4">
                  <h4 className="text-xl font-bold mb-4">Itinerario día a día</h4>
                  {tripData.itinerary.map((day, index) => (
                    <Collapsible key={index} className="border rounded-lg">
                      <CollapsibleTrigger className="w-full p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-primary font-medium">Día {day.day}</span>
                            <span className="text-gray-900 font-medium">{day.title}</span>
                          </div>
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-4 pb-4 text-gray-600">
                        {day.description}
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </TabsContent>
                
                <TabsContent value="alojamiento" className="space-y-6">
                  <h4 className="text-xl font-bold mb-4">Opciones de alojamiento</h4>
                  {tripData.accommodations ? (
                    <div className="grid gap-6">
                      {tripData.accommodations.map((accommodation, index) => (
                        <div key={index} className="border rounded-lg p-6 hover:border-primary transition-colors">
                          <h5 className="text-lg font-semibold mb-2">{accommodation.name}</h5>
                          <p className="text-gray-600 mb-3">{accommodation.description}</p>
                          <p className="text-primary font-medium mb-4">{accommodation.price}</p>
                          
                          <h6 className="text-sm font-medium mb-2">Amenidades:</h6>
                          <div className="flex flex-wrap gap-2">
                            {accommodation.amenities.map((amenity, i) => (
                              <span key={i} className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                                {amenity}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-gray-600">
                      <p>Alojamiento en hoteles de 4-5 estrellas según el paquete seleccionado.</p>
                      <p className="mt-2">Consulta con nosotros para más detalles sobre opciones de alojamiento específicas.</p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="faqs" className="space-y-6">
                  <h4 className="text-xl font-bold mb-4">Preguntas frecuentes</h4>
                  {tripData.faqs ? (
                    <div className="space-y-4">
                      {tripData.faqs.map((faq, index) => (
                        <Collapsible key={index} className="border rounded-lg">
                          <CollapsibleTrigger className="w-full p-4">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-900 font-medium text-left">{faq.question}</span>
                              <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                            </div>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="px-4 pb-4 text-gray-600">
                            {faq.answer}
                          </CollapsibleContent>
                        </Collapsible>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Collapsible className="border rounded-lg">
                        <CollapsibleTrigger className="w-full p-4">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-900 font-medium">¿Qué está incluido en el precio?</span>
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-4 pb-4 text-gray-600">
                          El precio incluye vuelos, alojamiento, traslados y las actividades indicadas en el itinerario. Consulta la sección "Incluidos en tu viaje" para más detalles.
                        </CollapsibleContent>
                      </Collapsible>
                      
                      <Collapsible className="border rounded-lg">
                        <CollapsibleTrigger className="w-full p-4">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-900 font-medium">¿Puedo modificar el itinerario?</span>
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-4 pb-4 text-gray-600">
                          Sí, nuestros paquetes son flexibles. Puedes personalizar el itinerario según tus preferencias.
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                  )}
                  
                  <div className="mt-6">
                    <h5 className="font-medium mb-4">¿Tienes más preguntas?</h5>
                    <div className="flex items-center gap-3">
                      <MessageCircle className="text-primary w-5 h-5" />
                      <span className="text-primary hover:underline cursor-pointer">Chatea con nuestro equipo</span>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="lg:sticky lg:top-8 space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">
                {tripData.title} como <span className="text-primary">{tripData.username}</span>
                <span className="inline-flex items-center gap-1 ml-2 text-sm font-medium text-primary bg-blue-50 px-2 py-1 rounded-full">
                  Traveltrend
                </span>
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-lg">{tripData.rating}</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-primary fill-primary" />)}
                </div>
                <button onClick={scrollToReviews} className="text-primary hover:underline">
                  Ver reseñas
                </button>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span>+{tripData.purchases} comprados</span>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-sm text-gray-500">Duración recomendada</span>
              <p className="font-medium">{tripData.duration}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {tripData.tags.map(tag => <span key={tag} className="px-3 py-1.5 bg-gray-100 rounded-full text-sm">
                  {tag}
                </span>)}
            </div>

            <div className="bg-white p-6 rounded-xl border space-y-6">
              <h3 className="text-xl font-semibold">Configura tus vuelos</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="origin">Origen</Label>
                  <Select value={selectedOrigin} onValueChange={setSelectedOrigin}>
                    <SelectTrigger className="w-full bg-white">
                      <SelectValue placeholder="Selecciona origen" />
                    </SelectTrigger>
                    <SelectContent sideOffset={4} className="bg-white z-50" side="bottom" position="popper" align="start">
                      {airports.map(airport => <SelectItem key={airport.code} value={airport.name}>
                          {airport.name}
                        </SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Fecha</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={`w-full justify-start text-left font-normal bg-white ${!date && "text-muted-foreground"}`}>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "d 'de' MMMM yyyy", {
                        locale: es
                      }) : "Selecciona fecha"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent sideOffset={4} className="bg-white z-50 shadow-lg border rounded-md" align="start" side="bottom">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus locale={es} className="bg-white" />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="duration">Duración</Label>
                  <Select value={duration} onValueChange={setDuration}>
                    <SelectTrigger className="w-full bg-white">
                      <SelectValue placeholder="Selecciona duración" />
                    </SelectTrigger>
                    <SelectContent sideOffset={4} className="bg-white z-50" side="bottom" position="popper" align="start">
                      <SelectItem value="7 noches">7 noches</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="people">Personas</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start font-normal bg-white">
                        {adults} adultos | {children} niños
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent sideOffset={4} className="w-80 bg-white z-50 p-4 shadow-lg border rounded-md" align="start" side="bottom">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Adultos</p>
                            <p className="text-sm text-gray-500">Mayores de 12 años</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <button onClick={() => handleAdultsChange(false)} className={`p-1.5 rounded-full ${adults > 1 ? 'bg-gray-100 hover:bg-gray-200' : 'bg-gray-50 text-gray-300'}`} disabled={adults <= 1}>
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-6 text-center font-medium">{adults}</span>
                            <button onClick={() => handleAdultsChange(true)} className={`p-1.5 rounded-full ${adults < 8 ? 'bg-gray-100 hover:bg-gray-200' : 'bg-gray-50 text-gray-300'}`} disabled={adults >= 8}>
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Niños</p>
                            <p className="text-sm text-gray-500">De 2 a 12 años</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <button onClick={() => handleChildrenChange(false)} className={`p-1.5 rounded-full ${children > 0 ? 'bg-gray-100 hover:bg-gray-200' : 'bg-gray-50 text-gray-300'}`} disabled={children <= 0}>
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-6 text-center font-medium">{children}</span>
                            <button onClick={() => handleChildrenChange(true)} className={`p-1.5 rounded-full ${children < 6 ? 'bg-gray-100 hover:bg-gray-200' : 'bg-gray-50 text-gray-300'}`} disabled={children >= 6}>
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="flex items-end justify-between pt-4">
                <div>
                  <p className="text-sm text-gray-500">Desde</p>
                  <p className="text-3xl font-semibold">{tripData.price} €</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-primary">
                    Configuración rápida en {tripData.configTime} min
                  </p>
                  <button className="mt-2 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors">
                    Configurar ahora
                  </button>
                </div>
              </div>
            </div>

            <div id="reviews" className="bg-white p-6 rounded-xl border space-y-6">
              <h3 className="text-2xl font-bold">Reseñas</h3>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="bg-black text-white text-xl font-semibold px-3 py-1 rounded-lg">
                    {reviews.average}
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-primary fill-primary" />)}
                  </div>
                </div>
                <span className="text-gray-600">{reviews.total} comentarios</span>
              </div>

              <div className="space-y-6">
                {reviews.items.map(review => <div key={review.id} className="bg-white rounded-2xl p-6 border space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <h4 className="font-bold text-xl">{review.author}</h4>
                        <span className="text-gray-500">{review.date}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-black text-white px-3 py-1 rounded-lg">
                        <span className="font-semibold">{review.rating}</span>
                        <Star className="w-4 h-4 fill-white" />
                      </div>
                    </div>

                    <p className="text-gray-600">{review.comment}</p>

                    <div className="grid grid-cols-2 gap-4">
                      {review.images.map((image, index) => <div key={index} className="aspect-video rounded-xl overflow-hidden">
                          <img src={image} alt={`Review image ${index + 1}`} className="w-full h-full object-cover" />
                        </div>)}
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};

export default TripDetails;
