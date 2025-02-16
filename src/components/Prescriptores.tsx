
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const prescriptores = [
  {
    id: 1,
    name: "Familia Carameluchi",
    image: "/lovable-uploads/bc56bfef-0711-41bf-a428-0e62ae6e1e36.png",
    followers: "123",
    rating: "5,0",
    tags: ["Tendencia", "En familia", "Aventura en familia", "Deportes aventura"],
  },
  {
    id: 2,
    name: "Paula Díez",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    followers: "678",
    rating: "5,0",
    tags: ["Tendencia", "Con amigos", "Europa", "Playas paradisiacas", "Deportes aventura"],
  },
];

export const Prescriptores = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold">Prescriptores</h2>
            <p className="text-gray-600 max-w-2xl">
              Viaja como tu prescriptor favorito. Descubre destinos tops, actividades, hoteles y
              vuelos incluidos en tu paquete.
            </p>
          </div>
          <Link to="/prescriptores" className="text-primary hover:underline flex items-center gap-2">
            Ver todos los prescriptores
            <span className="text-xl">→</span>
          </Link>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {prescriptores.map((prescriptor) => (
              <CarouselItem key={prescriptor.id} className="pl-4 md:basis-1/2">
                <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow h-[280px]">
                  <div className="flex gap-6 h-full">
                    <div className="w-48 h-48 flex-shrink-0">
                      <img
                        src={prescriptor.image}
                        alt={prescriptor.name}
                        className="w-full h-full rounded-2xl object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 flex flex-col min-w-0">
                      <div className="flex items-center justify-between mb-4 gap-4">
                        <h3 className="text-xl font-semibold truncate">{prescriptor.name}</h3>
                        <button className="border border-black text-black hover:bg-black hover:text-white px-4 py-1.5 rounded-full transition-colors flex items-center gap-1 flex-shrink-0">
                          Seguir <span className="text-lg">+</span>
                        </button>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-4 text-gray-600 text-sm">
                        <span>{prescriptor.followers} seguidores</span>
                        <div className="flex items-center gap-1 bg-black text-white px-2 py-0.5 rounded-md">
                          <span>{prescriptor.rating}</span>
                          <Star className="fill-current" size={14} />
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {prescriptor.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 bg-gray-100 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        to={`/prescriptor/${prescriptor.id}/viajes`}
                        className="text-primary hover:underline mt-auto text-right text-sm"
                      >
                        Ver viajes →
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
  );
};
