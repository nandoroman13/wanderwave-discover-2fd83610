
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
    image: "https://images.unsplash.com/photo-1461863109049-ad87a1b01d3",
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 relative overflow-hidden rounded-2xl">
            <div className="relative h-full min-h-[300px]">
              <img
                src={destinos[0].image}
                alt={destinos[0].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 transition-colors hover:bg-black/40" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                <div>
                  <span className="text-sm font-medium tracking-wider">
                    {destinos[0].continent}
                  </span>
                  <h3 className="text-2xl font-semibold mt-2">
                    {destinos[0].title.split(destinos[0].highlight).map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="text-yellow-400">{destinos[0].highlight}</span>
                        )}
                      </span>
                    ))}
                  </h3>
                </div>
                
                <div className="flex items-center justify-between">
                  <Link
                    to={`/destinos/${destinos[0].id}`}
                    className="text-white hover:underline flex items-center gap-2"
                  >
                    Ver todos los viajes
                    <span>→</span>
                  </Link>
                  <span className="text-sm font-medium">
                    {destinos[0].trips} VIAJES
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <div className="relative h-full min-h-[300px]">
              <img
                src={destinos[1].image}
                alt={destinos[1].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 transition-colors hover:bg-black/40" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                <div>
                  <span className="text-sm font-medium tracking-wider">
                    {destinos[1].continent}
                  </span>
                  <h3 className="text-2xl font-semibold mt-2">
                    {destinos[1].title.split(destinos[1].highlight).map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="text-yellow-400">{destinos[1].highlight}</span>
                        )}
                      </span>
                    ))}
                  </h3>
                </div>
                
                <div className="flex items-center justify-between">
                  <Link
                    to={`/destinos/${destinos[1].id}`}
                    className="text-white hover:underline flex items-center gap-2"
                  >
                    Ver todos los viajes
                    <span>→</span>
                  </Link>
                  <span className="text-sm font-medium">
                    {destinos[1].trips} VIAJES
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <div className="relative h-full min-h-[300px]">
              <img
                src={destinos[2].image}
                alt={destinos[2].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 transition-colors hover:bg-black/40" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                <div>
                  <span className="text-sm font-medium tracking-wider">
                    {destinos[2].continent}
                  </span>
                  <h3 className="text-2xl font-semibold mt-2">
                    {destinos[2].title.split(destinos[2].highlight).map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="text-yellow-400">{destinos[2].highlight}</span>
                        )}
                      </span>
                    ))}
                  </h3>
                </div>
                
                <div className="flex items-center justify-between">
                  <Link
                    to={`/destinos/${destinos[2].id}`}
                    className="text-white hover:underline flex items-center gap-2"
                  >
                    Ver todos los viajes
                    <span>→</span>
                  </Link>
                  <span className="text-sm font-medium">
                    {destinos[2].trips} VIAJES
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <div className="relative h-full min-h-[300px]">
              <img
                src={destinos[3].image}
                alt={destinos[3].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 transition-colors hover:bg-black/40" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                <div>
                  <span className="text-sm font-medium tracking-wider">
                    {destinos[3].continent}
                  </span>
                  <h3 className="text-2xl font-semibold mt-2">
                    {destinos[3].title.split(destinos[3].highlight).map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="text-yellow-400">{destinos[3].highlight}</span>
                        )}
                      </span>
                    ))}
                  </h3>
                </div>
                
                <div className="flex items-center justify-between">
                  <Link
                    to={`/destinos/${destinos[3].id}`}
                    className="text-white hover:underline flex items-center gap-2"
                  >
                    Ver todos los viajes
                    <span>→</span>
                  </Link>
                  <span className="text-sm font-medium">
                    {destinos[3].trips} VIAJES
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
