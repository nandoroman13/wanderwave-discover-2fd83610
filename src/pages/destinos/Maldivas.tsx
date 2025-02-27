
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const viajes = [
  {
    id: 1,
    titulo: "Escapada romántica a Maldivas",
    imagen: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
    duracion: "7 días",
    precio: 2499,
    slug: "escapada-romantica-maldivas",
  },
  {
    id: 2,
    titulo: "Maldivas: Inmersión en paraísos coralinos",
    imagen: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
    duracion: "10 días",
    precio: 3599,
    slug: "inmersion-paraiso-coralino-maldivas",
  },
  {
    id: 3,
    titulo: "Maldivas exclusivo: Islas privadas",
    imagen: "https://images.unsplash.com/photo-1540202404-a2f29016b523",
    duracion: "12 días",
    precio: 4999,
    slug: "islas-privadas-maldivas",
  }
];

const MaldivasPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8" 
          alt="Maldivas" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="container mx-auto px-4">
            <span className="text-yellow-400 font-medium mb-2 block">ASIA</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Descubre las maravillas de Maldivas
            </h1>
            <p className="text-white text-xl max-w-2xl">
              Playas de arena blanca, aguas cristalinas y atardeceres inolvidables te esperan en este paraíso tropical.
            </p>
          </div>
        </div>
      </div>
      
      {/* Información del destino */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold">Sobre Maldivas</h2>
            <p className="text-gray-600 leading-relaxed">
              Maldivas es un país insular ubicado en el océano Índico, famoso por sus playas 
              de arena blanca, aguas cristalinas y una rica vida marina. Este archipiélago 
              está compuesto por 26 atolones con más de 1.000 islas coralinas, creando uno 
              de los destinos más exclusivos y paradisíacos del mundo.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Sus aguas turquesas y transparentes ofrecen un escenario perfecto para 
              actividades acuáticas como el buceo y el snorkel. El ecosistema marino 
              de Maldivas es uno de los más diversos del planeta, con arrecifes de coral, 
              mantas rayas, tiburones ballena y miles de especies de peces tropicales.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Además de sus impresionantes paisajes naturales, Maldivas es conocido por 
              sus lujosos resorts sobre el agua, ofreciendo una experiencia única de 
              privacidad y conexión con la naturaleza.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Información práctica</h3>
            <ul className="space-y-4">
              <li>
                <span className="font-medium block">Clima:</span>
                <span className="text-gray-600">Tropical con temperaturas entre 24°C y 33°C durante todo el año.</span>
              </li>
              <li>
                <span className="font-medium block">Mejor época para visitar:</span>
                <span className="text-gray-600">De noviembre a abril (temporada seca).</span>
              </li>
              <li>
                <span className="font-medium block">Idioma:</span>
                <span className="text-gray-600">Dhivehi (oficial), inglés (ampliamente hablado).</span>
              </li>
              <li>
                <span className="font-medium block">Moneda:</span>
                <span className="text-gray-600">Rufiyaa maldiva (MVR), aunque el dólar es ampliamente aceptado.</span>
              </li>
              <li>
                <span className="font-medium block">Visa:</span>
                <span className="text-gray-600">Se otorga visa de 30 días a la llegada para la mayoría de nacionalidades.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Viajes disponibles */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Viajes a Maldivas</h2>
          
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
        <h2 className="text-3xl font-bold mb-8 text-center">Lugares destacados en Maldivas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden shadow-md">
            <div className="h-48">
              <img 
                src="https://images.unsplash.com/photo-1589979481223-deb893043163" 
                alt="Male" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Malé</h3>
              <p className="text-gray-600 text-sm">
                La capital y ciudad más poblada de Maldivas, ofrece mercados locales, 
                mezquitas históricas y una mirada a la vida cotidiana maldiva.
              </p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md">
            <div className="h-48">
              <img 
                src="https://images.unsplash.com/photo-1586500036706-41963de24d8c" 
                alt="Atolón Baa" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Atolón Baa</h3>
              <p className="text-gray-600 text-sm">
                Reserva de la Biosfera de la UNESCO, famoso por su biodiversidad 
                marina y la bahía de Hanifaru, donde se reúnen mantas rayas.
              </p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md">
            <div className="h-48">
              <img 
                src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b" 
                alt="Isla Maafushi" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Isla Maafushi</h3>
              <p className="text-gray-600 text-sm">
                Una de las islas locales más populares, ofrece una experiencia más 
                auténtica y económica con hermosas playas de Bikini.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MaldivasPage;
