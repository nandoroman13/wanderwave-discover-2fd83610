
import { Star } from "lucide-react";

const trips = [
  {
    id: 1,
    title: "Viaje a Maldivas",
    image: "/lovable-uploads/642b528a-fea7-4ed7-93f5-5f796e87b02a.png",
    price: "3,999",
    rating: 4.8,
    reviews: 261,
    tags: ["Turismo", "Surf", "Relax", "Gourmet"],
  },
  {
    id: 2,
    title: "Nueva York",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
    price: "5,500",
    rating: 4.9,
    reviews: 789,
    tags: ["En familia", "Aventura en familia", "Teen"],
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map((trip) => (
            <div
              key={trip.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-up"
            >
              <div className="relative h-48">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="text-yellow-400" size={16} />
                  <span className="text-sm text-gray-600">
                    {trip.rating} · {trip.reviews} opiniones
                  </span>
                </div>
                
                <h3 className="font-semibold mb-2">{trip.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {trip.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-600">Desde</span>
                    <p className="text-lg font-semibold">{trip.price} €</p>
                  </div>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                    Configurar paquete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
