import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Star, ChevronDown, ChevronUp, Share2 } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const TripDetails = () => {
  const { destination } = useParams();

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
      description: "Vuelo desde Madrid hacia Maldivas con escalas."
    }, {
      day: 2,
      title: "Llegada a Maldivas",
      description: "Llegada al aeropuerto y traslado al hotel."
    }]
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container py-8">
        <div className="grid lg:grid-cols-2 gap-8 my-[50px]">
          <div className="space-y-6">
            <Carousel className="w-full max-w-[400px] mx-auto">
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

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Descripción del paquete</h3>
              <div className="space-y-4">
                <h4 className="font-medium">Itinerario</h4>
                {tripData.itinerary.map(day => (
                  <div key={day.day} className="border rounded-lg p-4">
                    <button className="w-full flex items-center justify-between">
                      <span className="font-medium">Día {day.day}: {day.title}</span>
                      <ChevronDown className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-8 space-y-6 bg-white p-6 rounded-xl border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <span className="font-semibold">{tripData.rating}</span>
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <button className="text-primary hover:underline">Ver reseñas</button>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">+{tripData.purchases} comprados</span>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div>
              <span className="text-sm text-gray-600">Duración recomendada</span>
              <p>{tripData.duration}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {tripData.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Configura tus vuelos</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="origin">Origen</Label>
                  <Input id="origin" defaultValue="Madrid" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Fecha</Label>
                  <Input id="date" placeholder="Selecciona fecha" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="duration">Duración</Label>
                  <Input id="duration" defaultValue="7 noches" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="people">Personas</Label>
                  <Input id="people" defaultValue="2 adultos | 0 niños | 1 habitación" />
                </div>
              </div>

              <div className="flex items-end justify-between pt-4">
                <div>
                  <p className="text-sm text-gray-600">Desde</p>
                  <p className="text-3xl font-semibold">{tripData.price} €</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-primary">Configuración rápida en {tripData.configTime} min</p>
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
