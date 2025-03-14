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

type Activity = {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  duration: string;
};

type Accommodation = {
  name: string;
  description: string;
  price: string;
  amenities: string[];
};

type FAQ = {
  question: string;
  answer: string;
};

type ItineraryDay = {
  day: number | string;
  title: string;
  description: string;
};

type IncludedItem = {
  icon: React.ComponentType<any>;
  text: string;
};

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

type TripsDataType = {
  [key: string]: TripData;
};

const tripsData: TripsDataType = {
  maldivas: {
    // ... keep existing data
  },
  chicago: {
    // ... keep existing data
  },
  noruega: {
    // ... keep existing data
  },
  mallorca: {
    // ... keep existing data
  },
  "punta-cana": {
    // ... keep existing data
  }
};

const TripDetails = () => {
  const { slug } = useParams();
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedOrigin, setSelectedOrigin] = useState("Madrid (MAD)");
  const [date, setDate] = useState<Date>();
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [duration, setDuration] = useState("7 noches");
  const [activeTab, setActiveTab] = useState("descripcion");

  console.log("Slug de destino:", slug);

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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container py-8">
        <div className="grid lg:grid-cols-2 gap-8 my-[50px]">
          <div className="space-y-6">
            <div className="w-full max-w-[400px] mx-auto">
              <Carousel className="w-full">
                <CarouselContent>
                  {tripData.videos.map((video, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gray-900">
                        <div className="absolute top-0 left-0 right-0 z-20 p-4 bg-gradient-to-b from-black/50 to-transparent">
                          <div className="flex items-center gap-3">
                            <img src={tripData.userImage} alt={tripData.username} className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                            <span className="text-white font-medium text-sm">
                              {tripData.title} como {tripData.username}
                            </span>
                          </div>
                        </div>
                        <video 
                          src={video} 
                          controls 
                          muted={isMuted} 
                          autoPlay={isPlaying} 
                          loop 
                          className="w-full h-full object-cover"
                        />
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
                            {tripData.videos.map((_, i) => (
                              <div key={i} className={`h-1 flex-1 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`} />
                            ))}
                          </div>
                          <div className="text-white text-sm font-medium">
                            Día {index + 1}
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
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
    </div>
  );
};

export default TripDetails;

