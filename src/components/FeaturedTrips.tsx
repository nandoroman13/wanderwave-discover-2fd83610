
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
    image: "/lovable-uploads/642b528a-fea7-4ed7-93f5-5f796e87b02a.png",
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
              <CarouselItem key={trip.id} className="pl-4 md:basis-1/2">
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-up">
                  {/* Header con avatar y username */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full pl-1 pr-4 py-1">
                    <img
                      src={trip.userImage}
                      alt={trip.username}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="text-sm">
                      <span className="text-gray-900">{trip.title}</span>
                      <span className="text-gray-600"> como {trip.username}</span>
                    </div>
                  </div>
                  
                  {/* Imagen principal */}
                  <div className="relative aspect-[16/9]">
                    <img
                      src={trip.image}
                      alt={trip.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Contenido superpuesto */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 rounded-t-3xl">
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
