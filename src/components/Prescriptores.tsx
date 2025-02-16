
import { Star, UserRound, Users } from "lucide-react";
import { Link } from "react-router-dom";

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
        <div className="flex items-center justify-between mb-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {prescriptores.map((prescriptor) => (
            <div
              key={prescriptor.id}
              className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-6">
                <img
                  src={prescriptor.image}
                  alt={prescriptor.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{prescriptor.name}</h3>
                    <button className="border border-primary text-primary hover:bg-primary hover:text-white px-4 py-1.5 rounded-full transition-colors flex items-center gap-2">
                      Seguir <span className="text-lg">+</span>
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-3 text-gray-600">
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      <span>{prescriptor.followers} seguidores</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-400" size={16} />
                      <span>{prescriptor.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {prescriptor.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm px-3 py-1 bg-gray-100 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <Link
                to={`/prescriptor/${prescriptor.id}/viajes`}
                className="block text-primary hover:underline mt-4 text-right"
              >
                Ver viajes →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
