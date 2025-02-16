
import { Share2, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const trips = [
  {
    id: 1,
    title: "Viaja a Maldivas",
    username: "@pauladiez",
    userImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
    price: "3,999",
    rating: 5.0,
    purchases: 361,
    tags: ["Tendencia", "Surf", "Buceo", "Con amigos"],
  },
  {
    id: 2,
    title: "Viaja a Chicago",
    username: "@familiacarameluchi",
    userImage: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
    price: "5,500",
    rating: 5.0,
    purchases: 750,
    tags: ["En familia", "Aventura en familia", "Tendencia"],
  },
  {
    id: 3,
    title: "Viaja a Noruega",
    username: "@Mikelboisset",
    userImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    image: "https://images.unsplash.com/photo-1520769669658-f07657f5a307",
    price: "4,000",
    rating: 5.0,
    purchases: 602,
    tags: ["Tendencia", "Surf", "Buceo", "Con amigos"],
  },
  {
    id: 4,
    title: "Viaja a Tanzania",
    username: "@olympussafaris",
    userImage: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    price: "6,999",
    rating: 5.0,
    purchases: 283,
    tags: ["Safari", "Naturaleza", "Aventura", "Fotografía"],
  },
  {
    id: 5,
    title: "Viaja a Japón",
    username: "@asiatraveller",
    userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    price: "4,599",
    rating: 4.9,
    purchases: 892,
    tags: ["Cultural", "Gastronomía", "Tendencia", "Templos", "Historia"],
  },
  {
    id: 6,
    title: "Viaja a Nueva Zelanda",
    username: "@adventurenomad",
    userImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    image: "https://images.unsplash.com/photo-1469521669194-babb45599def",
    price: "5,299",
    rating: 4.9,
    purchases: 447,
    tags: ["Aventura", "Naturaleza", "Senderismo"],
  },
];

export const FeaturedTrips = () => {
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
                  {/* Header con avatar y username */}
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
                  
                  {/* Imagen principal */}
                  <div className="relative h-full rounded-2xl overflow-hidden">
                    <img
                      src={trip.image}
                      alt={trip.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Contenido superpuesto */}
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
                      <button className="bg-[#FFD233] hover:bg-[#FFD233]/90 text-black px-4 py-2 rounded-full transition-colors">
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
      </div>
    </section>
  );
};
