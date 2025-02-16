import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Star, ChevronDown, ChevronUp, Share2, Volume2, VolumeX, Play, Pause, CalendarIcon, Plus, Minus } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Bed, Plane, Bus, FileCheck, Receipt } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Button } from "@/components/ui/button";

const tripsData = {
  chicago: {
    title: "Viaja a Chicago",
    username: "@familiacarameluchi",
    userImage: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc",
    rating: 5.0,
    duration: "7 días, 5 noches",
    purchases: 750,
    price: "5,500",
    tags: ["En familia", "Aventura en familia", "Tendencia"],
    configTime: "5",
    videos: ["https://images.unsplash.com/photo-1477959858617-67f85cf4f1df", "https://images.unsplash.com/photo-1494522358652-f30e61a60313", "https://images.unsplash.com/photo-1507992781348-310259076fe0"],
    itinerary: [{
      day: 1,
      title: "Madrid - Chicago",
      description: "¡Empieza tu aventura! Vuelo directo desde Madrid hacia la Ciudad de los Vientos. A tu llegada, traslado al hotel y tiempo libre para empezar a explorar los alrededores."
    }, {
      day: 2,
      title: "Millennium Park y The Loop",
      description: "Descubre el corazón de Chicago. Visita el famoso 'Bean' en Millennium Park, disfruta de un paseo por The Loop y admira la impresionante arquitectura de la ciudad."
    }, {
      day: 3,
      title: "Navy Pier y Magnificent Mile",
      description: "Día para disfrutar del Navy Pier, perfecto para familias. Por la tarde, shopping en la Magnificent Mile."
    }, {
      day: 4,
      title: "Museos y Lagos",
      description: "Visita al Field Museum o al Shedd Aquarium. Paseo en barco por el Lago Michigan si el tiempo lo permite."
    }, {
      day: 5,
      title: "Willis Tower y Arte Urbano",
      description: "Sube al mirador Skydeck de la Willis Tower. Explora los barrios artísticos de Wicker Park y Bucktown."
    }, {
      day: 6,
      title: "Día libre en Chicago",
      description: "Día libre para actividades opcionales: partidos deportivos, compras adicionales o visitas a lugares de interés pendientes."
    }, {
      day: 7,
      title: "Chicago - Madrid",
      description: "Última mañana libre en la ciudad. Traslado al aeropuerto para tomar el vuelo de regreso a Madrid."
    }],
    included: [{
      icon: Bed,
      text: "5 noches en hotel seleccionado"
    }, {
      icon: Plane,
      text: "Vuelos directos ida y vuelta"
    }, {
      icon: Bus,
      text: "Traslados aeropuerto - hotel"
    }, {
      icon: FileCheck,
      text: "Seguro de viaje básico"
    }, {
      icon: Receipt,
      text: "Tasas aéreas incluidas"
    }]
  },
  maldivas: {
    title: "Viaja a Maldivas",
    username: "@pauladiez",
    userImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    rating: 5.0,
    duration: "9 días, 7 noches",
    purchases: 361,
    price: "3,999",
    tags: ["Tendencia", "Surf", "Buceo", "Con amigos", "Experiencia local"],
    configTime: "7",
    videos: ["https://images.unsplash.com/photo-1514282401047-d79a71a590e8", "https://images.unsplash.com/photo-1573843981267-be1999ff37cd", "https://images.unsplash.com/photo-1551918120-9739cb430c6d"],
    itinerary: [{
      day: 1,
      title: "Madrid - Maldivas",
      description: "¡Hoy es el día que tanto has esperado! Finalmente, te embarcarás en un emocionante viaje hacia las asombrosas Islas Maldivas. Prepárate para empacar con entusiasmo y dirígete al aeropuerto con tiempo de sobra para completar cualquier trámite necesario."
    }, {
      day: 2,
      title: "Llegada a Maldivas",
      description: "Llegada al aeropuerto de Male. Traslado en lancha rápida o hidroavión a tu resort. Resto del día libre para disfrutar del paraíso."
    }, {
      day: 3,
      title: "Actividades acuáticas",
      description: "Día dedicado a actividades acuáticas: snorkel, buceo o simplemente relax en la playa paradisíaca."
    }, {
      day: 4,
      title: "Crucero al atardecer",
      description: "Mañana libre y por la tarde, crucero para ver delfines y el espectacular atardecer maldivo."
    }, {
      day: 5,
      title: "Isla local",
      description: "Excursión opcional a una isla local para conocer la cultura maldiva y su gente."
    }, {
      day: 6,
      title: "Spa y relax",
      description: "Día dedicado al relax con tratamientos de spa y actividades tranquilas."
    }, {
      day: 7,
      title: "Día libre",
      description: "Último día completo para disfrutar de las instalaciones del resort y el entorno paradisíaco."
    }, {
      day: 8,
      title: "Regreso",
      description: "Traslado al aeropuerto de Male para tomar el vuelo de regreso."
    }, {
      day: 9,
      title: "Llegada",
      description: "Llegada a Madrid. Fin del viaje y de nuestros servicios."
    }],
    included: [{
      icon: Bed,
      text: "7 noches en el régimen elegido"
    }, {
      icon: Plane,
      text: "Avión ida y vuelta"
    }, {
      icon: Bus,
      text: "Traslados aeropuerto - hotel - aeropuerto"
    }, {
      icon: FileCheck,
      text: "Seguro de viajes básico"
    }, {
      icon: Receipt,
      text: "Tasas aéreas incluidas"
    }]
  },
  noruega: {
    title: "Viaja a Noruega",
    username: "@mikelboisset",
    userImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    rating: 5.0,
    duration: "8 días, 6 noches",
    purchases: 602,
    price: "4,000",
    tags: ["Tendencia", "Fiordos", "Naturaleza", "Aventura"],
    configTime: "6",
    videos: ["https://images.unsplash.com/photo-1520769669658-f07657f5a307", "https://images.unsplash.com/photo-1506967554329-2626e0f7d9e4", "https://images.unsplash.com/photo-1513519245088-0e12902e5a38"],
    itinerary: [{
      day: 1,
      title: "Madrid - Oslo",
      description: "Vuelo a Oslo. Llegada y traslado al hotel. Primera toma de contacto con la capital noruega."
    }, {
      day: 2,
      title: "Oslo",
      description: "Visita del Parque Vigeland, Museo de los Barcos Vikingos y el Ayuntamiento de Oslo."
    }, {
      day: 3,
      title: "Oslo - Bergen",
      description: "Viaje escénico en tren de Oslo a Bergen, considerado uno de los más bonitos de Europa."
    }, {
      day: 4,
      title: "Bergen y Fiordos",
      description: "Exploración de Bergen y crucero por el Fiordo de los Sueños."
    }, {
      day: 5,
      title: "Fiordos Noruegos",
      description: "Día completo explorando los majestuosos fiordos noruegos."
    }, {
      day: 6,
      title: "Ålesund",
      description: "Visita a la bella ciudad de Ålesund, famosa por su arquitectura Art Nouveau."
    }, {
      day: 7,
      title: "Tromsø - Aurora Boreal",
      description: "Vuelo a Tromsø. Por la noche, excursión para intentar ver la aurora boreal (según temporada)."
    }, {
      day: 8,
      title: "Tromsø - Madrid",
      description: "Mañana libre y vuelo de regreso a Madrid."
    }],
    included: [{
      icon: Bed,
      text: "6 noches en hoteles seleccionados"
    }, {
      icon: Plane,
      text: "Vuelos internacionales"
    }, {
      icon: Bus,
      text: "Todos los traslados terrestres"
    }, {
      icon: FileCheck,
      text: "Seguro de viaje con cobertura de actividades"
    }, {
      icon: Receipt,
      text: "Tasas e impuestos locales"
    }]
  },
  tanzania: {
    title: "Viaja a Tanzania",
    username: "@carlacortes",
    userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    rating: 5.0,
    duration: "10 días, 8 noches",
    purchases: 425,
    price: "4,800",
    tags: ["Safari", "Aventura", "Naturaleza", "Fotografía", "Tendencia"],
    configTime: "8",
    videos: ["https://images.unsplash.com/photo-1516426122078-c23e76319801", "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e", "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36"],
    itinerary: [{
      day: 1,
      title: "Madrid - Kilimanjaro",
      description: "Vuelo desde Madrid hacia el Aeropuerto Internacional de Kilimanjaro. Llegada y traslado al hotel en Arusha."
    }, {
      day: 2,
      title: "Parque Nacional del Tarangire",
      description: "Safari en el Parque Nacional del Tarangire, famoso por sus manadas de elefantes y icónicos baobabs."
    }, {
      day: 3,
      title: "Cráter del Ngorongoro",
      description: "Día completo explorando el famoso cráter, un paraíso de vida salvaje y hogar de los 'Big Five'."
    }, {
      day: 4,
      title: "Serengeti (Norte)",
      description: "Traslado al norte del Serengeti. Safari por la tarde buscando la gran migración."
    }, {
      day: 5,
      title: "Serengeti (Safari)",
      description: "Día completo de safari en el Serengeti, observando leones, leopardos, jirafas y más."
    }, {
      day: 6,
      title: "Serengeti - Zanzibar",
      description: "Vuelo a Zanzibar. Tarde libre para disfrutar de las playas paradisíacas."
    }, {
      day: 7,
      title: "Stone Town",
      description: "Visita guiada por Stone Town, Patrimonio de la Humanidad, y sus mercados de especias."
    }, {
      day: 8,
      title: "Playas de Zanzibar",
      description: "Día libre para actividades opcionales: snorkel, buceo o simplemente relax en la playa."
    }, {
      day: 9,
      title: "Último día en Tanzania",
      description: "Mañana libre en Zanzibar. Por la tarde, traslado al aeropuerto."
    }, {
      day: 10,
      title: "Regreso a Madrid",
      description: "Vuelo de regreso a Madrid. Fin de nuestros servicios."
    }],
    included: [{
      icon: Bed,
      text: "8 noches en lodges y hoteles"
    }, {
      icon: Plane,
      text: "Vuelos internacionales y domésticos"
    }, {
      icon: Bus,
      text: "Vehículo 4x4 con conductor-guía"
    }, {
      icon: FileCheck,
      text: "Seguro de viaje premium"
    }, {
      icon: Receipt,
      text: "Entradas a parques nacionales"
    }]
  },
  japon: {
    title: "Viaja a Japón",
    username: "@mariasanchez",
    userImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    rating: 5.0,
    duration: "12 días, 10 noches",
    purchases: 892,
    price: "6,200",
    tags: ["Cultura", "Gastronomía", "Historia", "Tendencia"],
    configTime: "10",
    videos: ["https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e", "https://images.unsplash.com/photo-1545569341-9eb8b30979d9", "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36"],
    itinerary: [{
      day: 1,
      title: "Madrid - Tokyo",
      description: "Vuelo desde Madrid a Tokyo. Noche a bordo."
    }, {
      day: 2,
      title: "Llegada a Tokyo",
      description: "Llegada al aeropuerto de Narita. Traslado al hotel y primera toma de contacto con la ciudad."
    }, {
      day: 3,
      title: "Tokyo Tradicional",
      description: "Visita al Templo Senso-ji, jardines del Palacio Imperial y mercado de Tsukiji."
    }, {
      day: 4,
      title: "Tokyo Moderno",
      description: "Exploración de Shibuya, Harajuku y Akihabara. Cena en un Robot Restaurant."
    }, {
      day: 5,
      title: "Hakone y Monte Fuji",
      description: "Excursión a Hakone, crucero por el lago Ashi y vistas del Monte Fuji."
    }, {
      day: 6,
      title: "Kyoto",
      description: "Viaje en tren bala a Kyoto. Visita al Templo Dorado y al barrio de Gion."
    }, {
      day: 7,
      title: "Arashiyama",
      description: "Visita al bosque de bambú, templo Tenryu-ji y puente Togetsukyo."
    }, {
      day: 8,
      title: "Nara y Osaka",
      description: "Excursión a Nara. Por la tarde, exploración gastronómica en Osaka."
    }, {
      day: 9,
      title: "Hiroshima y Miyajima",
      description: "Visita a Hiroshima y la isla de Miyajima con su famoso torii flotante."
    }, {
      day: 10,
      title: "Kyoto - Tokyo",
      description: "Último día en Kyoto. Regreso a Tokyo en tren bala."
    }, {
      day: 11,
      title: "Tokyo libre",
      description: "Día libre para compras y últimas visitas."
    }, {
      day: 12,
      title: "Tokyo - Madrid",
      description: "Traslado al aeropuerto y vuelo de regreso a Madrid."
    }],
    included: [{
      icon: Bed,
      text: "10 noches en hoteles categoría superior"
    }, {
      icon: Plane,
      text: "Vuelos internacionales"
    }, {
      icon: Bus,
      text: "Japan Rail Pass 7 días"
    }, {
      icon: FileCheck,
      text: "Seguro de viaje internacional"
    }, {
      icon: Receipt,
      text: "Tasas y cargos turísticos"
    }]
  },
  "nueva-zelanda": {
    title: "Viaja a Nueva Zelanda",
    username: "@davidlopez",
    userImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    rating: 5.0,
    duration: "15 días, 13 noches",
    purchases: 317,
    price: "7,100",
    tags: ["Aventura", "Naturaleza", "Trekking", "Tendencia"],
    configTime: "12",
    videos: ["https://images.unsplash.com/photo-1469854523086-cc02fe5d8800", "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb", "https://images.unsplash.com/photo-1530789253388-582c481c54b0"],
    itinerary: [{
      day: 1,
      title: "Madrid - Auckland",
      description: "Vuelo desde Madrid hacia Auckland. Noche a bordo."
    }, {
      day: 2,
      title: "Llegada a Auckland",
      description: "Llegada a Auckland. Traslado al hotel y descanso."
    }, {
      day: 3,
      title: "Auckland",
      description: "Tour por Auckland, incluyendo Sky Tower y puerto Viaduct."
    }, {
      day: 4,
      title: "Rotorua",
      description: "Viaje a Rotorua. Visita a un pueblo maorí y cena hangi tradicional."
    }, {
      day: 5,
      title: "Hobbiton y Waitomo",
      description: "Visita al set de Hobbiton y las cuevas brillantes de Waitomo."
    }, {
      day: 6,
      title: "Wellington",
      description: "Viaje a Wellington. Visita al museo Te Papa y teleférico."
    }, {
      day: 7,
      title: "Kaikoura",
      description: "Cruce en ferry a la Isla Sur. Viaje a Kaikoura para avistamiento de ballenas."
    }, {
      day: 8,
      title: "Christchurch",
      description: "Exploración de Christchurch y sus jardines botánicos."
    }, {
      day: 9,
      title: "Monte Cook",
      description: "Viaje al Parque Nacional del Monte Cook. Trekking por glaciares."
    }, {
      day: 10,
      title: "Queenstown",
      description: "Llegada a Queenstown. Tarde de actividades de aventura."
    }, {
      day: 11,
      title: "Milford Sound",
      description: "Excursión al fiordo Milford Sound. Crucero por el fiordo."
    }, {
      day: 12,
      title: "Wanaka",
      description: "Día en Wanaka. Trekking y actividades al aire libre."
    }, {
      day: 13,
      title: "Franz Josef",
      description: "Visita al Glaciar Franz Josef. Vuelo en helicóptero opcional."
    }, {
      day: 14,
      title: "Auckland",
      description: "Vuelo de regreso a Auckland. Últimas compras."
    }, {
      day: 15,
      title: "Auckland - Madrid",
      description: "Vuelo de regreso a Madrid. Fin del viaje."
    }],
    included: [{
      icon: Bed,
      text: "13 noches en hoteles seleccionados"
    }, {
      icon: Plane,
      text: "Vuelos internacionales"
    }, {
      icon: Bus,
      text: "Coche de alquiler con seguro"
    }, {
      icon: FileCheck,
      text: "Seguro de viaje completo"
    }, {
      icon: Receipt,
      text: "Tasas y cargos locales"
    }]
  }
};

const TripDetails = () => {
  const {
    destination
  } = useParams();
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedOrigin, setSelectedOrigin] = useState("Madrid (MAD)");
  const [date, setDate] = useState<Date>();
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [duration, setDuration] = useState("7 noches");
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
  const airports = [{
    code: "MAD",
    city: "Madrid",
    name: "Madrid (MAD)"
  }, {
    code: "BCN",
    city: "Barcelona",
    name: "Barcelona (BCN)"
  }, {
    code: "PMI",
    city: "Palma de Mallorca",
    name: "Palma de Mallorca (PMI)"
  }, {
    code: "AGP",
    city: "Málaga",
    name: "Málaga (AGP)"
  }, {
    code: "ALC",
    city: "Alicante",
    name: "Alicante (ALC)"
  }, {
    code: "VLC",
    city: "Valencia",
    name: "Valencia (VLC)"
  }, {
    code: "SVQ",
    city: "Sevilla",
    name: "Sevilla (SVQ)"
  }, {
    code: "BIO",
    city: "Bilbao",
    name: "Bilbao (BIO)"
  }, {
    code: "TFN",
    city: "Tenerife Norte",
    name: "Tenerife Norte (TFN)"
  }, {
    code: "TFS",
    city: "Tenerife Sur",
    name: "Tenerife Sur (TFS)"
  }];
  const tripData = destination ? tripsData[destination as keyof typeof tripsData] : tripsData.maldivas;
  const reviews = {
    average: 5.0,
    total: 1234,
    items: [{
      id: 1,
      author: "María",
      date: "15/02/2024",
      rating: 5.0,
      comment: "¡Increíble viaje! Todo perfectamente organizado y las experiencias fueron inolvidables.",
      images: [tripData.videos[0], tripData.videos[1]]
    }, {
      id: 2,
      author: "Carlos",
      date: "10/02/2024",
      rating: 5.0,
      comment: "Una experiencia única. El itinerario estaba muy bien planificado y pudimos disfrutar de todo sin prisas.",
      images: [tripData.videos[1], tripData.videos[2]]
    }]
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
              <h3 className="text-xl font-semibold mb-4">Descripción del paquete</h3>
              <div className="space-y-4">
                <h4 className="text-xl font-bold mb-4">Itinerario</h4>
                {tripData.itinerary.map((day, index) => <Collapsible key={index} className="border rounded-lg">
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
                  </Collapsible>)}

                <div className="mt-8">
                  <h4 className="text-xl font-bold mb-4">Incluidos en tu viaje</h4>
                  <div className="space-y-4">
                    {tripData.included.map((item, index) => <div key={index} className="flex items-start gap-3">
                        <item.icon className="w-6 h-6 text-gray-500 flex-shrink-0" />
                        <span className="text-gray-600">{item.text}</span>
                      </div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-8 space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">
                {tripData.title} como <span className="text-primary">Paula Diez</span>
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

            <div className="bg-white p-6 rounded-xl border space-y-6">
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
