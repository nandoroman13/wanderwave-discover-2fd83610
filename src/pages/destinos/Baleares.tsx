
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const viajes = [
  {
    id: 1,
    titulo: "Mallorca: Calas y montañas",
    imagen: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    duracion: "5 días",
    precio: 899,
    slug: "mallorca-calas-montanas",
  },
  {
    id: 2,
    titulo: "Ibiza: Ocio y relax",
    imagen: "https://images.unsplash.com/photo-1433603306838-9cd2746aa780",
    duracion: "6 días",
    precio: 999,
    slug: "ibiza-ocio-relax",
  },
  {
    id: 3,
    titulo: "Menorca tranquila",
    imagen: "https://images.unsplash.com/photo-1533799446025-97de7c6a3635",
    duracion: "4 días",
    precio: 799,
    slug: "menorca-tranquila",
  }
];

const BalearesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
          alt="Islas Baleares" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="container mx-auto px-4">
            <span className="text-yellow-400 font-medium mb-2 block">EUROPA</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Descubre las Islas Baleares
            </h1>
            <p className="text-white text-xl max-w-2xl">
              Un archipiélago mediterráneo de belleza natural, playas cristalinas y rica cultura.
            </p>
          </div>
        </div>
      </div>
      
      {/* Información del destino */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold">Sobre las Islas Baleares</h2>
            <p className="text-gray-600 leading-relaxed">
              Las Islas Baleares son un archipiélago español situado en el Mediterráneo, 
              compuesto principalmente por Mallorca, Menorca, Ibiza y Formentera. 
              Cada isla tiene su propio carácter y encanto particular, pero todas 
              comparten la belleza del paisaje mediterráneo, con calas de aguas 
              cristalinas, vegetación característica y un clima privilegiado.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Mallorca, la mayor de las islas, combina playas espectaculares con una 
              imponente sierra y pueblos con encanto. Menorca es un paraíso tranquilo 
              con una naturaleza bien preservada. Ibiza es famosa por su vida nocturna 
              y su ambiente cosmopolita, aunque también ofrece rincones de paz y belleza 
              natural. Formentera, la más pequeña, destaca por sus playas vírgenes y 
              aguas turquesas.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Más allá de sus atractivos naturales, las Baleares poseen una rica historia 
              y patrimonio cultural, con influencias fenicias, romanas, bizantinas y árabes, 
              visible en su arquitectura, gastronomía y tradiciones.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Información práctica</h3>
            <ul className="space-y-4">
              <li>
                <span className="font-medium block">Clima:</span>
                <span className="text-gray-600">Mediterráneo con veranos cálidos y secos e inviernos suaves.</span>
              </li>
              <li>
                <span className="font-medium block">Mejor época para visitar:</span>
                <span className="text-gray-600">De mayo a octubre, siendo junio y septiembre los meses ideales (menos masificados y buen clima).</span>
              </li>
              <li>
                <span className="font-medium block">Idiomas:</span>
                <span className="text-gray-600">Español y catalán (balear), inglés en zonas turísticas.</span>
              </li>
              <li>
                <span className="font-medium block">Moneda:</span>
                <span className="text-gray-600">Euro (EUR).</span>
              </li>
              <li>
                <span className="font-medium block">Transporte:</span>
                <span className="text-gray-600">Conexiones aéreas desde principales ciudades europeas y ferries desde la península.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Viajes disponibles */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Viajes a las Islas Baleares</h2>
          
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
      
      {/* Islas destacadas */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Islas del archipiélago Balear</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden shadow-md">
            <div className="h-48">
              <img 
                src="https://images.unsplash.com/photo-1586969593607-881fecbd9575" 
                alt="Mallorca" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Mallorca</h3>
              <p className="text-gray-600 text-sm">
                La mayor de las Baleares, combina calas paradisíacas, montañas 
                imponentes como la Sierra de Tramuntana, y ciudades históricas como Palma.
              </p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md">
            <div className="h-48">
              <img 
                src="https://images.unsplash.com/photo-1591284897177-7e025293fc6e" 
                alt="Ibiza" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Ibiza</h3>
              <p className="text-gray-600 text-sm">
                Conocida por su animada vida nocturna, también ofrece playas 
                paradisíacas, calas escondidas y la encantadora Dalt Vila (Patrimonio de la UNESCO).
              </p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md">
            <div className="h-48">
              <img 
                src="https://images.unsplash.com/photo-1623869525476-baac89e4f329" 
                alt="Menorca" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Menorca</h3>
              <p className="text-gray-600 text-sm">
                Reserva de la Biosfera por la UNESCO, destaca por sus calas vírgenes, 
                su tranquilidad y su rico patrimonio prehistórico.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BalearesPage;
