import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Star, ChevronDown, ChevronUp, Share2, Volume2, VolumeX, Play, Pause } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Bed, Plane, Bus, FileCheck, Receipt } from "lucide-react";

const TripDetails = () => {
  const { destination } = useParams();
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const tripData = {
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
      description: "¡Hoy es el día que tanto has esperado! Finalmente, te embarcarás en un emocionante viaje hacia las asombrosas Islas Maldivas. Prepárate para empacar con entusiasmo y dirígete al aeropuerto con tiempo de sobra para completar cualquier trámite necesario. Después, simplemente acomódate y relájate en el avión, deleitándote con un vuelo directo hacia el paraíso absoluto!"
    }, {
      day: "2-7",
      title: "Maldivas",
      description: "Días libres en Maldivas"
    }, {
      day: 8,
      title: "Maldivas - Madrid",
      description: "Vuelo de regreso a Madrid"
    }, {
      day: 9,
      title: "Origen",
      description: "Llegada a origen"
    }],
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
        text: "Traslado aeropuerto - hotel y viceversa a la llegada y salida"
      },
      {
        icon: FileCheck,
        text: "Seguro de viajes obligatorio"
      },
      {
        icon: Receipt,
        text: "Tasas aéreas"
      }
    ]
  };

  const reviews = {
    average: 5.0,
    total: 1234,
    items: [
      {
        id: 1,
        author: "Hector",
        date: "08/11/2023",
        rating: 5.0,
        comment: "Faucibus facilisis consequat nunc feugiat lacinia. Proin vulputate euismod a quis semper ultricies vulputate. Ipsum ut quis tincidunt nibh eu scelerisque lacus tincidunt. Massa vel varius",
        images: [
          "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
          "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
        ]
      },
      {
        id: 2,
        author: "Hector",
        date: "08/11/2023",
        rating: 5.0,
        comment: "Faucibus facilisis consequat nunc feugiat lacinia. Proin vulputate euismod a quis semper ultricies vulputate. Ipsum ut quis tincidunt nibh eu scelerisque lacus tincidunt. Massa vel varius",
        images: [
          "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
          "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
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
                            <img
                              src={tripData.userImage}
                              alt={tripData.username}
                              className="w-8 h-8 rounded-full border-2 border-white object-cover"
                            />
                            <span className="text-white font-medium text-sm">
                              {tripData.title} como {tripData.username}
                            </span>
                          </div>
                        </div>
                        <img
                          src={video}
                          alt={`Story ${index + 1} de ${tripData.title}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                          <div className="flex justify-between items-center mb-3">
                            <button
                              onClick={toggleMute}
                              className="w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/30 transition-colors"
                            >
                              {isMuted ? (
                                <VolumeX className="w-5 h-5" />
                              ) : (
                                <Volume2 className="w-5 h-5" />
                              )}
                            </button>
                            <button
                              onClick={togglePlay}
                              className="w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/30 transition-colors"
                            >
                              {isPlaying ? (
                                <Pause className="w-5 h-5" />
                              ) : (
                                <Play className="w-5 h-5" />
                              )}
                            </button>
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            {tripData.videos.map((_, i) => (
                              <div
                                key={i}
                                className={`h-1 flex-1 rounded-full ${
                                  i === index ? "bg-white" : "bg-white/40"
                                }`}
                              />
                            ))}
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
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Descripción del paquete</h3>
              <div className="space-y-4">
                <h4 className="text-xl font-bold mb-4">Itinerario</h4>
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

                <div className="mt-8">
                  <h4 className="text-xl font-bold mb-4">Incluidos en tu viaje</h4>
                  <div className="space-y-4">
                    {tripData.included.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <item.icon className="w-6 h-6 text-gray-500 flex-shrink-0" />
                        <span className="text-gray-600">{item.text}</span>
                      </div>
                    ))}
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
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <button className="text-primary hover:underline">
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
              {tripData.tags.map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-gray-100 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            <div className="bg-white p-6 rounded-xl border space-y-6">
              <h3 className="text-xl font-semibold">Configura tus vuelos</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="origin">Origen</Label>
                  <Input id="origin" defaultValue="Madrid" className="bg-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Fecha</Label>
                  <Input id="date" placeholder="Selecciona fecha" className="bg-white" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="duration">Duración</Label>
                  <Input id="duration" defaultValue="7 noches" className="bg-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="people">Personas</Label>
                  <Input 
                    id="people" 
                    defaultValue="2 adultos | 0 niños | 1 habitación" 
                    className="bg-white"
                  />
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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TripDetails;
