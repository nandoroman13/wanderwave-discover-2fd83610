
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const viajes = [
  {
    id: 1,
    titulo: "Fiordos noruegos: Maravillas naturales",
    imagen: "https://images.unsplash.com/photo-1520769669658-f07657f5a307",
    duracion: "8 días",
    precio: 1899,
    slug: "fiordos-noruegos",
  },
  {
    id: 2,
    titulo: "Aurora boreal en Tromsø",
    imagen: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7",
    duracion: "6 días",
    precio: 1699,
    slug: "aurora-boreal-tromso",
  },
  {
    id: 3,
    titulo: "Oslo y Bergen: Historia y naturaleza",
    imagen: "https://images.unsplash.com/photo-1513799022979-1dff15548e36",
    duracion: "7 días",
    precio: 1599,
    slug: "oslo-bergen",
  }
];

const NoruegaPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1520769669658-f07657f5a307" 
          alt="Fiordos de Noruega" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="container mx-auto px-4">
            <span className="text-yellow-400 font-medium mb-2 block">EUROPA</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Descubre Noruega
            </h1>
            <p className="text-white text-xl max-w-2xl">
              Tierra de fiordos majestuosos, auroras boreales y paisajes de ensueño.
            </p>
          </div>
        </div>
      </div>
      
      {/* Información del destino */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold">Sobre Noruega</h2>
            <p className="text-gray-600 leading-relaxed">
              Noruega, ubicada en el norte de Europa, es un país conocido por sus 
              impresionantes paisajes naturales: fiordos profundos, montañas 
              escarpadas, glaciares y la espectacular aurora boreal. Su geografía 
              única la convierte en uno de los destinos más impresionantes para 
              los amantes de la naturaleza.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Además de su belleza natural, Noruega cuenta con ciudades vibrantes 
              como Oslo, Bergen y Trondheim, que combinan arquitectura moderna con 
              historia y tradición. El país tiene una rica herencia cultural, desde 
              la época vikinga hasta sus contemporáneos diseñadores y artistas.
            </p>
            <p className="text-gray-600 leading-relaxed">
              La sostenibilidad y el respeto por el medio ambiente son pilares fundamentales 
              de la sociedad noruega, lo que se refleja en sus políticas de conservación 
              y en el estilo de vida de sus habitantes.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Información práctica</h3>
            <ul className="space-y-4">
              <li>
                <span className="font-medium block">Clima:</span>
                <span className="text-gray-600">Varía según la región. Inviernos fríos (especialmente en el norte) y veranos suaves.</span>
              </li>
              <li>
                <span className="font-medium block">Mejor época para visitar:</span>
                <span className="text-gray-600">Mayo a septiembre para actividades al aire libre; noviembre a marzo para auroras boreales.</span>
              </li>
              <li>
                <span className="font-medium block">Idioma:</span>
                <span className="text-gray-600">Noruego (bokmål y nynorsk), inglés ampliamente hablado.</span>
              </li>
              <li>
                <span className="font-medium block">Moneda:</span>
                <span className="text-gray-600">Corona noruega (NOK).</span>
              </li>
              <li>
                <span className="font-medium block">Sol de medianoche:</span>
                <span className="text-gray-600">De mayo a julio en el norte del país, cuando el sol no se pone.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Viajes disponibles */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Viajes a Noruega</h2>
          
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
        <h2 className="text-3xl font-bold mb-8 text-center">Lugares destacados en Noruega</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden shadow-md">
            <div className="h-48">
              <img 
                src="https://images.unsplash.com/photo-1508592931388-95bc7b61033d" 
                alt="Fiordo de Geiranger" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Fiordo de Geiranger</h3>
              <p className="text-gray-600 text-sm">
                Patrimonio de la UNESCO, este espectacular fiordo es uno de los más 
                visitados de Noruega, con cascadas impresionantes y vistas panorámicas.
              </p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md">
            <div className="h-48">
              <img 
                src="https://images.unsplash.com/photo-1603445388034-8621de1435ef" 
                alt="Tromsø" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Tromsø</h3>
              <p className="text-gray-600 text-sm">
                Conocida como la "Puerta del Ártico", es uno de los mejores lugares 
                para ver auroras boreales y disfrutar del sol de medianoche en verano.
              </p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md">
            <div className="h-48">
              <img 
                src="https://images.unsplash.com/photo-1580807295534-b2c61bf8cc89" 
                alt="Bergen" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Bergen</h3>
              <p className="text-gray-600 text-sm">
                Ciudad portuaria rodeada de montañas, famosa por su distrito histórico 
                Bryggen (Patrimonio de la UNESCO) y su mercado de pescado.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NoruegaPage;
