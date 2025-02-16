
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
              <CarouselItem key={trip.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="relative bg-gradient-to-b from-blue-100/50 to-white/50 rounded-[32px] overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-up aspect-[4/5]">
                  {/* Header con título y username */}
                  <div className="absolute top-4 left-4 right-4 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full p-2 pr-6">
                    <img
                      src={trip.userImage}
                      alt={trip.username}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="text-base font-medium">
                      <span>{trip.title}</span>
                      <span className="text-gray-600"> como {trip.username}</span>
                    </div>
                  </div>
                  
                  {/* Imagen principal */}
                  <div className="w-full h-full">
                    <img
                      src={trip.image}
                      alt={trip.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Contenido superpuesto */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-black text-white px-2 py-1 rounded-lg flex items-center gap-1">
                          <span className="font-medium">{trip.rating}</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="fill-current" size={14} />
                            ))}
                          </div>
                        </div>
                        <span className="text-gray-600">+{trip.purchases} comprados</span>
                      </div>
                      <Share2 size={20} className="text-gray-600 cursor-pointer" />
                    </div>
                    
                    <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                      {trip.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-sm px-4 py-1.5 bg-gray-100 rounded-full whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <p className="text-gray-600 text-sm">Desde</p>
                        <p className="text-2xl font-semibold">{trip.price} €</p>
                      </div>
                      <button className="bg-[#FFD233] hover:bg-[#FFD233]/90 text-black px-6 py-2.5 rounded-full font-medium transition-colors">
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
