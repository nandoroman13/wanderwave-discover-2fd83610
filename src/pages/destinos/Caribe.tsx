
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const viajes = [
  {
    id: 1,
    titulo: "Punta Cana: Paraíso tropical",
    imagen: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    duracion: "7 días",
    precio: 1499,
    slug: "punta-cana-paraiso",
  },
  {
    id: 2,
    titulo: "Jamaica: Cultura y playas",
    imagen: "https://images.unsplash.com/photo-1557129603-0ab327850de7",
    duracion: "8 días",
    precio: 1699,
    slug: "jamaica-cultura-playas",
  },
  {
    id: 3,
    titulo: "Crucero por el Caribe",
    imagen: "https://images.unsplash.com/photo-1548574505-5e239809ee19",
    duracion: "10 días",
    precio: 2399,
    slug: "crucero-caribe",
  }
];

const CaribePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" 
          alt="Playas del Caribe" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="container mx-auto px-4">
            <span className="text-yellow-400 font-medium mb-2 block">AMÉRICA</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Descubre el Caribe
            </h1>
            <p className="text-white text-xl max-w-2xl">
              Aguas turquesas, playas de arena blanca y la calidez de sus gentes te esperan.
            </p>
          </div>
        </div>
      </div>
      
      {/* Información del destino */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold">Sobre el Caribe</h2>
            <p className="text-gray-600 leading-relaxed">
              El Caribe es una región compuesta por el Mar Caribe, sus islas y las costas 
              que lo rodean. Una zona del mundo conocida por sus paradisíacas playas de 
              arena blanca, aguas cristalinas de tonos turquesa y un clima tropical que 
              invita a disfrutar del sol durante todo el año.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Más allá de sus impresionantes paisajes naturales, el Caribe es un crisol de 
              culturas, resultado de una rica historia que incluye influencias indígenas, 
              europeas, africanas y asiáticas. Esta diversidad se refleja en la gastronomía, 
              la música (como el reggae, la salsa y el calipso) y las tradiciones locales.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Cada isla y país del Caribe tiene su propio carácter y encanto, desde la animada 
              República Dominicana hasta la elegante Barbados o la vibrante Cuba, ofreciendo 
              experiencias únicas para cada tipo de viajero.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Información práctica</h3>
            <ul className="space-y-4">
              <li>
                <span className="font-medium block">Clima:</span>
                <span className="text-gray-600">Tropical con temperaturas entre 24°C y 32°C durante todo el año.</span>
              </li>
              <li>
                <span className="font-medium block">Mejor época para visitar:</span>
                <span className="text-gray-600">De diciembre a abril (temporada seca), evitando la temporada de huracanes (junio a noviembre).</span>
              </li>
              <li>
                <span className="font-medium block">Idiomas:</span>
                <span className="text-gray-600">Español, inglés, francés, holandés y diversos dialectos según la isla.</span>
              </li>
              <li>
                <span className="font-medium block">Monedas:</span>
                <span className="text-gray-600">Varía según el país, aunque el dólar estadounidense es ampliamente aceptado.</span>
              </li>
              <li>
                <span className="font-medium block">Requisitos:</span>
                <span className="text-gray-600">Varían según nacionalidad e isla a visitar. Consultar requisitos específicos.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Viajes disponibles */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Viajes al Caribe</h2>
          
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
      
      {/* Destinos destacados */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Destinos destacados en el Caribe</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden shadow-md">
            <div className="h-48">
              <img 
                src="https://images.unsplash.com/photo-1580237072617-771c3ecc4a24" 
                alt="República Dominicana" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">República Dominicana</h3>
              <p className="text-gray-600 text-sm">
                Famosa por sus resorts todo incluido, playas perfectas como Bávaro 
                y una rica cultura con influencia española y africana.
              </p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md">
            <div className="h-48">
              <img 
                src="https://images.unsplash.com/photo-1570168983275-7090d1594c98" 
                alt="Cuba" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Cuba</h3>
              <p className="text-gray-600 text-sm">
                Una mezcla fascinante de historia, música, playas paradisíacas 
                y ciudades coloniales como La Habana y Trinidad.
              </p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md">
            <div className="h-48">
              <img 
                src="https://images.unsplash.com/photo-1606046604972-77cc76aee944" 
                alt="Bahamas" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Bahamas</h3>
              <p className="text-gray-600 text-sm">
                Archipiélago con algunas de las playas más hermosas del mundo, 
                aguas increíblemente claras y excelentes condiciones para bucear.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CaribePage;
