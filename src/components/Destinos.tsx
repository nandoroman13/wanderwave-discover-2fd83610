
import { Link } from "react-router-dom";

const destinos = [
  {
    id: 1,
    continent: "EUROPA",
    title: "Descubre Italia como nunca antes.",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
    trips: 714,
    highlight: "Italia",
  },
  {
    id: 2,
    continent: "ÁFRICA",
    title: "Viajes y circuitos a África.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    trips: 101,
    highlight: "África",
  },
  {
    id: 3,
    continent: "ASIA",
    title: "Conoce Asia, el continente de contrastes.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    trips: 174,
    highlight: "Asia",
  },
  {
    id: 4,
    continent: "AMÉRICA",
    title: "Déjate sorprender por América",
    image: "https://images.unsplash.com/photo-1461863109049-9ad87a1b01d3",
    trips: 264,
    highlight: "América",
  },
];

export const Destinos = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold">Destinos</h2>
            <p className="text-gray-600 max-w-2xl">
              Explora nuestros destinos más populares y descubre experiencias únicas en cada rincón del mundo.
            </p>
          </div>
          <Link to="/destinos" className="text-primary hover:underline">
            Ver más destinos →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {destinos.map((destino, index) => (
            <div
              key={destino.id}
              className={`relative overflow-hidden rounded-2xl ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              <div className="relative h-full min-h-[300px]">
                <img
                  src={destino.image}
                  alt={destino.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 transition-colors hover:bg-black/40" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                  <div>
                    <span className="text-sm font-medium tracking-wider">
                      {destino.continent}
                    </span>
                    <h3 className="text-2xl font-semibold mt-2">
                      {destino.title.split(destino.highlight).map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className="text-yellow-400">{destino.highlight}</span>
                          )}
                        </span>
                      ))}
                    </h3>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/destinos/${destino.id}`}
                      className="text-white hover:underline flex items-center gap-2"
                    >
                      Ver todos los viajes
                      <span>→</span>
                    </Link>
                    <span className="text-sm font-medium">
                      {destino.trips} VIAJES
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
