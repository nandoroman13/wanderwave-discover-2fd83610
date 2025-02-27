
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, User, Tag, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Inspirate = () => {
  const articulos = [
    {
      id: 1,
      titulo: "10 destinos increíbles para escapar del invierno",
      resumen: "Descubre los mejores lugares para disfrutar del sol cuando el frío azota en Europa.",
      imagen: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
      categoria: "Escapadas",
      autor: "María Rodríguez",
      fecha: "15 Feb 2024",
      tiempo: "5 min",
      destacado: true
    },
    {
      id: 2,
      titulo: "Guía completa para viajar a Japón por primera vez",
      resumen: "Todo lo que necesitas saber antes de visitar el país del sol naciente: transporte, alojamiento, cultura y más.",
      imagen: "https://images.unsplash.com/photo-1528360983277-13d401cdc186",
      categoria: "Guías",
      autor: "Pablo Martínez",
      fecha: "10 Feb 2024",
      tiempo: "12 min",
      destacado: true
    },
    {
      id: 3,
      titulo: "Los mejores restaurantes de Chicago que debes visitar",
      resumen: "Un recorrido por la escena gastronómica de la Ciudad de los Vientos, desde deep dish pizza hasta fine dining.",
      imagen: "https://images.unsplash.com/photo-1555992336-fb0d29498b13",
      categoria: "Gastronomía",
      autor: "Laura Sánchez",
      fecha: "5 Feb 2024",
      tiempo: "8 min",
      destacado: false
    },
    {
      id: 4,
      titulo: "5 parques nacionales de Noruega que te dejarán sin aliento",
      resumen: "La naturaleza salvaje de Noruega ofrece paisajes espectaculares que parecen sacados de un cuento de hadas.",
      imagen: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
      categoria: "Naturaleza",
      autor: "Carlos López",
      fecha: "1 Feb 2024",
      tiempo: "6 min",
      destacado: false
    },
    {
      id: 5,
      titulo: "Consejos para viajar de forma sostenible en 2024",
      resumen: "Aprende a reducir tu huella ecológica mientras disfrutas de tus aventuras alrededor del mundo.",
      imagen: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
      categoria: "Sostenibilidad",
      autor: "Ana González",
      fecha: "28 Ene 2024",
      tiempo: "7 min",
      destacado: false
    },
    {
      id: 6,
      titulo: "Las mejores playas escondidas de Mallorca",
      resumen: "Calas paradisíacas lejos del turismo masivo donde podrás disfrutar de la auténtica esencia mediterránea.",
      imagen: "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6",
      categoria: "Playas",
      autor: "Diego Fernández",
      fecha: "22 Ene 2024",
      tiempo: "6 min",
      destacado: false
    }
  ];

  const categorias = ["Todos", "Escapadas", "Guías", "Gastronomía", "Naturaleza", "Sostenibilidad", "Playas", "Cultura"];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-4">Inspírate</h1>
        <p className="text-gray-600 text-lg mb-12">
          Descubre historias inspiradoras, guías prácticas y consejos de viaje para tu próxima aventura
        </p>
        
        {/* Artículos destacados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {articulos.filter(a => a.destacado).map(articulo => (
            <div key={articulo.id} className="group">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
                <img 
                  src={articulo.imagen} 
                  alt={articulo.titulo} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary/80 text-white px-3 py-1 rounded-full text-sm">
                  {articulo.categoria}
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{articulo.titulo}</h2>
              <p className="text-gray-600 mb-4">{articulo.resumen}</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <div className="flex items-center mr-4">
                  <User className="w-4 h-4 mr-1" />
                  <span>{articulo.autor}</span>
                </div>
                <div className="flex items-center mr-4">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{articulo.tiempo} lectura</span>
                </div>
                <span>{articulo.fecha}</span>
              </div>
              <Link to={`/inspirate/${articulo.id}`} className="text-primary font-medium flex items-center hover:underline">
                Leer más <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
        
        {/* Filtro de categorías */}
        <Tabs defaultValue="Todos" className="mb-12">
          <TabsList className="mb-8 flex flex-wrap">
            {categorias.map(categoria => (
              <TabsTrigger key={categoria} value={categoria} className="mr-2 mb-2">
                {categoria}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="Todos">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articulos.filter(a => !a.destacado).map(articulo => (
                <div key={articulo.id} className="group">
                  <div className="relative overflow-hidden rounded-xl aspect-video mb-4">
                    <img 
                      src={articulo.imagen} 
                      alt={articulo.titulo} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-primary/80 text-white px-2 py-1 rounded-full text-xs">
                      {articulo.categoria}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{articulo.titulo}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{articulo.resumen}</p>
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <div className="flex items-center mr-3">
                      <User className="w-3 h-3 mr-1" />
                      <span>{articulo.autor}</span>
                    </div>
                    <div className="flex items-center mr-3">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{articulo.tiempo}</span>
                    </div>
                  </div>
                  <Link to={`/inspirate/${articulo.id}`} className="text-primary text-sm font-medium flex items-center hover:underline">
                    Leer más <ChevronRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </TabsContent>
          
          {/* Contenido para otras categorías */}
          {categorias.slice(1).map(categoria => (
            <TabsContent key={categoria} value={categoria}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {articulos
                  .filter(a => a.categoria === categoria)
                  .map(articulo => (
                    <div key={articulo.id} className="group">
                      <div className="relative overflow-hidden rounded-xl aspect-video mb-4">
                        <img 
                          src={articulo.imagen} 
                          alt={articulo.titulo} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3 bg-primary/80 text-white px-2 py-1 rounded-full text-xs">
                          {articulo.categoria}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{articulo.titulo}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{articulo.resumen}</p>
                      <div className="flex items-center text-xs text-gray-500 mb-3">
                        <div className="flex items-center mr-3">
                          <User className="w-3 h-3 mr-1" />
                          <span>{articulo.autor}</span>
                        </div>
                        <div className="flex items-center mr-3">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{articulo.tiempo}</span>
                        </div>
                      </div>
                      <Link to={`/inspirate/${articulo.id}`} className="text-primary text-sm font-medium flex items-center hover:underline">
                        Leer más <ChevronRight className="w-3 h-3 ml-1" />
                      </Link>
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        {/* Suscripción al newsletter */}
        <div className="bg-blue-50 rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-3">Recibe inspiración directamente en tu bandeja de entrada</h3>
          <p className="text-gray-600 mb-6">
            Suscríbete a nuestro newsletter y recibe guías exclusivas, ofertas especiales y consejos de viaje.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Tu email" 
              className="flex-1 px-4 py-3 rounded-lg border"
            />
            <Button className="whitespace-nowrap">Suscribirme</Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Inspirate;
