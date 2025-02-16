
import { Share2, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const waverTrips = [
  {
    id: 1,
    title: "Viaja a Maldivas",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
    price: "3,999",
    rating: "5,0",
    purchases: 361,
    tags: ["Tendencia", "Surf", "Buceo", "Con amigos"],
  },
  {
    id: 2,
    title: "Viaja a Mallorca",
    image: "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6",
    price: "899",
    rating: "4,9",
    purchases: 245,
    tags: ["Playa", "Mediterráneo", "Gastronomía", "Relax"],
  },
  {
    id: 3,
    title: "Viaja a Punta Cana",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    price: "2,499",
    rating: "4,8",
    purchases: 183,
    tags: ["Caribe", "Todo incluido", "Playas paradisíacas", "Con amigos"],
  },
];

export const WaverProfile = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen pt-16">
        {/* Hero Section */}
        <div className="bg-muted py-16">
          <div className="container">
            <div className="flex items-start gap-8">
              <div className="w-48 h-48 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
                  alt="Paula Díez"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-4xl font-semibold">Paula Díez</h1>
                  <div className="flex items-center gap-4">
                    <button className="border border-black text-black hover:bg-black hover:text-white px-6 py-2 rounded-full transition-colors flex items-center gap-2">
                      Seguir <span className="text-lg">+</span>
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Share2 size={24} className="text-gray-600" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 mb-6 text-gray-600">
                  <span className="text-lg">678 seguidores</span>
                  <div className="flex items-center gap-1 bg-black text-white px-3 py-1 rounded-md">
                    <span className="text-lg">5,0</span>
                    <Star className="fill-current" size={18} />
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Tendencia", "Con amigos", "Europa", "Playas paradisiacas", "Deportes aventura"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 bg-gray-100 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-600 max-w-2xl">
                  Viajera apasionada y creadora de contenido. Me encanta descubrir nuevos destinos y compartir experiencias únicas. Especializada en viajes de aventura y experiencias con amigos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Viajes Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-semibold mb-8">Viajes de Paula</h2>
            
            <Carousel className="w-full">
              <CarouselContent className="-ml-4">
                {waverTrips.map((trip) => (
                  <CarouselItem key={trip.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-up aspect-[3/5]">
                      <div className="relative h-full rounded-2xl overflow-hidden">
                        <img
                          src={trip.image}
                          alt={trip.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 transition-colors hover:bg-black/40" />
                        
                        <div className="absolute inset-x-0 top-0 p-8 text-white">
                          <span className="text-sm font-medium tracking-wider">
                            PAULA DÍEZ
                          </span>
                          <h3 className="text-2xl font-semibold mt-2">
                            {trip.title}
                          </h3>
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
                          <Link 
                            to={`/viajes/${trip.title.toLowerCase().replace(/ /g, '-').replace(/á/g, 'a')}`}
                            className="bg-[#FFD233] hover:bg-[#FFD233]/90 text-black px-4 py-2 rounded-full transition-colors"
                          >
                            Configura paquete
                          </Link>
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
      </div>
      <Footer />
    </>
  );
};
