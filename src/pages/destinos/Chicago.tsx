
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const viajes = [
  {
    id: 1,
    titulo: "Chicago: La ciudad del viento",
    imagen: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
    duracion: "5 días",
    precio: 1299,
    slug: "chicago-ciudad-viento",
  },
  {
    id: 2,
    titulo: "Chicago arquitectónico",
    imagen: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f",
    duracion: "4 días",
    precio: 1199,
    slug: "chicago-arquitectonico",
  },
  {
    id: 3,
    titulo: "Chicago: Jazz y Blues",
    imagen: "https://images.unsplash.com/photo-1566086786808-baf97b0dd311",
    duracion: "6 días",
    precio: 1499,
    slug: "chicago-jazz-blues",
  }
];

const ChicagoPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df" 
          alt="Chicago skyline" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="container mx-auto px-4">
            <span className="text-yellow-400 font-medium mb-2 block">AMÉRICA</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Descubre Chicago
            </h1>
            <p className="text-white text-xl max-w-2xl">
              Una ciudad de impresionante arquitectura, rica cultura y una vibrante escena gastronómica.
            </p>
          </div>
        </div>
      </div>
      
      {/* Información del destino */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold">Sobre Chicago</h2>
            <p className="text-gray-600 leading-relaxed">
              Chicago, conocida como "La Ciudad de los Vientos", es una de las metrópolis 
              más importantes de Estados Unidos. Ubicada a orillas del lago Michigan, 
              esta ciudad es famosa por su impresionante arquitectura, sus rascacielos 
              pioneros y su rica historia cultural.
            </p>
            <p className="text-gray-600 leading-relaxed">
              La ciudad ha sido cuna de importantes movimientos artísticos, como el jazz 
              y el blues, y ofrece una vibrante escena cultural con numerosos museos de 
              clase mundial, teatros y espacios artísticos. El arte público es parte integral 
              del paisaje urbano de Chicago, con esculturas y murales repartidos por toda la ciudad.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Además de su oferta cultural, Chicago es conocida por su excelente gastronomía, 
              destacando por sus famosas pizzas de estilo deep dish, los hot dogs al estilo 
              Chicago y una escena culinaria innovadora y diversa.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Información práctica</h3>
            <ul className="space-y-4">
              <li>
                <span className="font-medium block">Clima:</span>
                <span className="text-gray-600">Continental con cuatro estaciones bien definidas. Veranos cálidos e inviernos fríos.</span>
              </li>
              <li>
                <span className="font-medium block">Mejor época para visitar:</span>
                <span className="text-gray-600">De mayo a octubre (primavera a otoño).</span>
              </li>
              <li>
                <span className="font-medium block">Idioma:</span>
                <span className="text-gray-600">Inglés.</span>
              </li>
              <li>
                <span className="font-medium block">Moneda:</span>
                <span className="text-gray-600">Dólar estadounidense (USD).</span>
              </li>
              <li>
                <span className="font-medium block">Transporte:</span>
                <span className="text-gray-600">Excelente sistema de transporte público con 'El' (metro elevado) y autobuses.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Viajes disponibles */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Viajes a Chicago</h2>
          
          <Carousel className="w-full">
            <CarouselContent>
              {viajes.map((viaje) => (
                <CarouselItem key={viaje.id} className="md:basis-1/2 lg:basis-1/3">
                  <Link to={`/viajes/${viaje.slug}`} className="block h-full">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                      <div className="relative h-56">
                        <img 
                          src={viaje.imagen} 
                          alt={viaje.titulo} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-xl mb-2">{viaje.titulo}</h3>
                        <div className="flex justify-between items-center mt-4">
                          <span className="text-gray-600">{viaje.duracion}</span>
                          <span className="font-bold text-primary">{viaje.precio}€</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1" />
            <CarouselNext className="right-1" />
          </Carousel>
        </div>
      </div>
      
      {/* Lugares destacados */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Lugares destacados en Chicago</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden shadow-md">
            <div className="h-48">
              <img 
                src="https://images.unsplash.com/photo-1579033385971-a7bc8c6f8c64" 
                alt="Millennium Park" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Millennium Park</h3>
              <p className="text-gray-600 text-sm">
                Parque urbano famoso por "The Bean" (Cloud Gate), una escultura de acero 
                inoxidable pulido que refleja el horizonte de la ciudad.
              </p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md">
            <div className="h-48">
              <img 
                src="https://images.unsplash.com/photo-1491245338813-c6832976196e" 
                alt="Willis Tower" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Willis Tower</h3>
              <p className="text-gray-600 text-sm">
                Uno de los rascacielos más emblemáticos de Chicago, con su observatorio 
                Skydeck que ofrece vistas panorámicas de la ciudad.
              </p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md">
            <div className="h-48">
              <img 
                src="https://images.unsplash.com/photo-1531248330193-37546cf2e816" 
                alt="Navy Pier" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Navy Pier</h3>
              <p className="text-gray-600 text-sm">
                Popular atracción con parque de atracciones, restaurantes, tiendas y 
                hermosas vistas del lago Michigan y el horizonte de la ciudad.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ChicagoPage;
