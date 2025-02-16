import { Share2, Star, Volume2, VolumeX, Play, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const trips = [{
  id: 1,
  title: "Viaja a Maldivas",
  username: "@pauladiez",
  userImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
  price: "3,999",
  rating: 5.0,
  purchases: 361,
  tags: ["Tendencia", "Surf", "Buceo", "Con amigos"],
  slug: "maldivas",
  duration: "9 días, 7 noches",
  configTime: "7",
  videos: ["https://images.unsplash.com/photo-1514282401047-d79a71a590e8", "https://images.unsplash.com/photo-1573843981267-be1999ff37cd", "https://images.unsplash.com/photo-1551918120-9739cb430c6d"],
  itinerary: [{
    day: 1,
    title: "Madrid - Maldivas",
    description: "¡Hoy es el día que tanto has esperado! Finalmente, te embarcarás en un emocionante viaje hacia las asombrosas Islas Maldivas."
  }, {
    day: "2-7",
    title: "Maldivas",
    description: "Días libres en Maldivas"
  }, {
    day: 8,
    title: "Maldivas - Madrid",
    description: "Vuelo de regreso a Madrid"
  }]
}, {
  id: 2,
  title: "Viaja a Chicago",
  username: "@familiacarameluchi",
  userImage: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc",
  image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
  price: "5,500",
  rating: 5.0,
  purchases: 750,
  tags: ["En familia", "Aventura en familia", "Tendencia"],
  slug: "chicago",
  duration: "7 días, 5 noches",
  configTime: "5",
  videos: ["https://images.unsplash.com/photo-1477959858617-67f85cf4f1df", "https://images.unsplash.com/photo-1494522358652-f30e61a60313", "https://images.unsplash.com/photo-1507992781348-310259076fe0"],
  itinerary: [{
    day: 1,
    title: "Madrid - Chicago",
    description: "Vuelo directo a la Ciudad del Viento"
  }, {
    day: "2-6",
    title: "Chicago",
    description: "Días para explorar la ciudad"
  }, {
    day: 7,
    title: "Chicago - Madrid",
    description: "Vuelo de regreso"
  }]
}, {
  id: 3,
  title: "Viaja a Noruega",
  username: "@Mikelboisset",
  userImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  image: "https://images.unsplash.com/photo-1520769669658-f07657f5a307",
  price: "4,000",
  rating: 5.0,
  purchases: 602,
  tags: ["Tendencia", "Surf", "Buceo", "Con amigos"],
  slug: "noruega",
  duration: "8 días, 6 noches",
  configTime: "6",
  videos: ["https://images.unsplash.com/photo-1520769669658-f07657f5a307", "https://images.unsplash.com/photo-1506967554329-2626e0f7d9e4", "https://images.unsplash.com/photo-1513519245088-0e12902e5a38"],
  itinerary: [{
    day: 1,
    title: "Madrid - Oslo",
    description: "Vuelo hacia la capital noruega"
  }, {
    day: "2-7",
    title: "Noruega",
    description: "Días de exploración por los fiordos"
  }, {
    day: 8,
    title: "Oslo - Madrid",
    description: "Regreso a Madrid"
  }]
}, {
  id: 4,
  title: "Viaja a Tanzania",
  username: "@olympussafaris",
  userImage: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
  image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
  price: "6,999",
  rating: 5.0,
  purchases: 283,
  tags: ["Safari", "Naturaleza", "Aventura", "Fotografía"],
  slug: "tanzania",
  duration: "10 días, 8 noches",
  configTime: "8",
  videos: ["https://images.unsplash.com/photo-1516426122078-c23e76319801", "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e", "https://images.unsplash.com/photo-1528485238486-507cca6f992c"],
  itinerary: [{
    day: 1,
    title: "Madrid - Tanzania",
    description: "Inicio de la aventura africana"
  }, {
    day: "2-9",
    title: "Safari en Tanzania",
    description: "Experiencia única en la sabana africana"
  }, {
    day: 10,
    title: "Tanzania - Madrid",
    description: "Vuelo de regreso"
  }]
}, {
  id: 5,
  title: "Viaja a Japón",
  username: "@asiatraveller",
  userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
  price: "4,599",
  rating: 4.9,
  purchases: 892,
  tags: ["Cultural", "Gastronomía", "Templos", "Historia"],
  slug: "japon",
  duration: "12 días, 10 noches",
  configTime: "9",
  videos: ["https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e", "https://images.unsplash.com/photo-1545569341-9eb8b30979d9", "https://images.unsplash.com/photo-1528360983277-13d401cdc186"],
  itinerary: [{
    day: 1,
    title: "Madrid - Tokio",
    description: "Vuelo al país del sol naciente"
  }, {
    day: "2-11",
    title: "Japón",
    description: "Recorrido por las principales ciudades"
  }, {
    day: 12,
    title: "Tokio - Madrid",
    description: "Regreso a España"
  }]
}, {
  id: 6,
  title: "Viaja a Nueva Zelanda",
  username: "@adventurenomad",
  userImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  image: "https://images.unsplash.com/photo-1469521669194-babb45599def",
  price: "5,299",
  rating: 4.9,
  purchases: 447,
  tags: ["Aventura", "Naturaleza", "Senderismo", "Fotografía"],
  slug: "nueva-zelanda",
  duration: "15 días, 13 noches",
  configTime: "10",
  videos: ["https://images.unsplash.com/photo-1469521669194-babb45599def", "https://images.unsplash.com/photo-1507699622108-4be3abd695ad", "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5"],
  itinerary: [{
    day: 1,
    title: "Madrid - Auckland",
    description: "Inicio del viaje a las antípodas"
  }, {
    day: "2-14",
    title: "Nueva Zelanda",
    description: "Aventura por las dos islas"
  }, {
    day: 15,
    title: "Auckland - Madrid",
    description: "Vuelo de regreso"
  }]
}];

export const FeaturedTrips = () => {
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState<typeof trips[0] | null>(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const openFullscreenCarousel = (trip: typeof trips[0]) => {
    setSelectedTrip(trip);
    setIsPlaying(true);
  };

  const closeFullscreenCarousel = () => {
    setSelectedTrip(null);
    setIsPlaying(false);
  };

  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">Top viajes</h2>
          <button className="text-primary hover:underline">Ver más viajes →</button>
        </div>
        
        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {trips.map((trip) => (
              <CarouselItem key={trip.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-up aspect-[3/5] p-4">
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full pl-1 pr-3 py-0.5 whitespace-nowrap max-w-[90%] overflow-hidden">
                    <img
                      src={trip.userImage}
                      alt={trip.username}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <div className="text-xs overflow-hidden">
                      <span className="text-gray-900">{trip.title}</span>
                      <span className="text-gray-600"> como {trip.username}</span>
                    </div>
                  </div>
                  
                  <div className="relative h-full rounded-2xl overflow-hidden">
                    <img
                      src={trip.image}
                      alt={trip.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    
                    <div className="absolute bottom-28 inset-x-4 flex justify-between z-10 my-[130px]">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMute();
                        }}
                        className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          openFullscreenCarousel(trip);
                        }}
                        className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
                      >
                        <Play className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-4 rounded-2xl">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-black text-white text-sm px-2 py-1 rounded-full flex items-center gap-1">
                          <span>{trip.rating}</span>
                          <Star className="fill-current" size={14} />
                        </div>
                        <span className="text-sm text-gray-600">+{trip.purchases} comprados</span>
                      </div>
                      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <Share2 size={20} className="text-gray-600" />
                      </button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {trip.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-sm px-3 py-1 bg-gray-100 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-gray-600">Desde</span>
                        <p className="text-xl font-semibold">{trip.price} €</p>
                      </div>
                      <button 
                        onClick={() => navigate(`/viajes/${trip.slug}`)}
                        className="bg-[#FFD233] hover:bg-[#FFD233]/90 text-black px-4 py-2 rounded-full transition-colors"
                      >
                        Configura paquete
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Overlay Modal */}
        {selectedTrip && (
          <>
            <div className="fixed inset-0 bg-black/60 z-40" onClick={closeFullscreenCarousel} />
            
            <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[520px] z-50 rounded-3xl overflow-hidden bg-black">
              <div className="absolute top-4 left-4 z-50 flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full pl-1 pr-4 py-1">
                <img 
                  src={selectedTrip.userImage} 
                  alt={selectedTrip.username} 
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="text-white text-sm">
                  <span className="font-medium">{selectedTrip.title}</span>
                  <span className="opacity-80"> con {selectedTrip.username}</span>
                </div>
              </div>

              <button 
                onClick={closeFullscreenCarousel}
                className="absolute top-4 right-4 z-50 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X size={20} />
              </button>
              
              <Carousel className="h-full">
                <CarouselContent className="h-full">
                  {selectedTrip.videos.map((video, index) => (
                    <CarouselItem key={index} className="h-full">
                      <div className="absolute inset-0">
                        <img 
                          src={video} 
                          alt={`${selectedTrip.title} - Imagen ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex gap-2 mb-2">
                            {selectedTrip.videos.map((_, i) => (
                              <div 
                                key={i}
                                className={`h-1 rounded-full flex-1 ${i === index ? 'bg-white' : 'bg-white/30'}`}
                              />
                            ))}
                          </div>
                          <h3 className="text-white text-sm font-medium">
                            Día {index + 1} - {selectedTrip.title}
                          </h3>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
