
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapPin, Star, Clock, Shield, Tag, User, Users, Calendar, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const tripsData = {
  maldivas: {
    title: "Viaje a Maldivas",
    subtitle: "Descubre el paraíso en la tierra",
    rating: "5,0",
    reviews: 157,
    waver: {
      name: "Paula Díez",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      slug: "pauladiez"
    },
    price: 3999,
    location: "Maldivas, Océano Índico",
    images: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
      "https://images.unsplash.com/photo-1540202404-d0c7fe46a087",
      "https://images.unsplash.com/photo-1551918120-9739cb430c6d"
    ],
    duration: "7 días, 6 noches",
    departure: "Madrid",
    dates: "Disponible todo el año",
    details: "Descubre el lujo y la belleza incomparable de Maldivas en este viaje diseñado para los amantes del mar. Alójate en impresionantes villas sobre el agua con acceso directo al océano cristalino. Disfruta de actividades acuáticas como snorkel, buceo y paseos en barco para ver delfines. Las puestas de sol en Maldivas son simplemente mágicas, con cielos que se tiñen de tonos naranjas y rosados sobre el infinito océano Índico.",
    highlights: [
      "Alojamiento en villa sobre el agua",
      "Tour de snorkel en los arrecifes de coral",
      "Cena romántica a la luz de las velas en la playa",
      "Excursión para avistar delfines",
      "Sesión de spa con tratamientos locales"
    ],
    includes: [
      "Vuelos ida y vuelta desde Madrid",
      "Traslados aeropuerto-hotel-aeropuerto",
      "6 noches de alojamiento en régimen de todo incluido",
      "Excursiones mencionadas en los highlights",
      "Seguro de viaje",
      "Asistencia 24/7 durante el viaje"
    ],
    notIncludes: [
      "Gastos personales y propinas",
      "Excursiones no mencionadas",
      "Seguro de cancelación opcional"
    ],
    activities: [
      {
        title: "Snorkel en arrecifes de coral",
        description: "Explora la increíble vida marina de Maldivas con una excursión guiada de snorkel.",
        included: true
      },
      {
        title: "Clase de cocina maldiva",
        description: "Aprende a preparar platos locales con un chef profesional del resort.",
        included: false,
        price: 89
      },
      {
        title: "Buceo PADI",
        description: "Descubre las profundidades del océano con instructores certificados.",
        included: false,
        price: 150
      },
      {
        title: "Paseo en hidroavión",
        description: "Disfruta de vistas panorámicas de los atolones desde el aire.",
        included: false,
        price: 299
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Llegada a Malé",
        description: "Llegada al Aeropuerto Internacional de Malé y traslado en lancha rápida o hidroavión al resort. Check-in y tiempo libre para disfrutar de las instalaciones."
      },
      {
        day: 2,
        title: "Exploración de la isla",
        description: "Desayuno en el resort. Tour guiado por la isla y sus alrededores. Tarde libre para actividades acuáticas. Cena buffet con show cultural."
      },
      {
        day: 3,
        title: "Snorkel y vida marina",
        description: "Desayuno en el resort. Excursión de snorkel en los arrecifes cercanos para observar la colorida vida marina. Almuerzo en el resort. Tarde libre y cena temática."
      },
      {
        day: 4,
        title: "Excursión a isla local",
        description: "Desayuno en el resort. Visita a una isla habitada local para conocer la cultura maldiva. Almuerzo en un restaurante local. Regreso al resort y cena."
      },
      {
        day: 5,
        title: "Relax y bienestar",
        description: "Desayuno en el resort. Mañana libre para disfrutar de la playa. Sesión de spa por la tarde. Cena romántica a la luz de las velas en la playa."
      },
      {
        day: 6,
        title: "Aventura acuática",
        description: "Desayuno en el resort. Excursión para avistar delfines. Almuerzo en el resort. Tarde libre para actividades opcionales. Cena de despedida."
      },
      {
        day: 7,
        title: "Regreso a casa",
        description: "Desayuno temprano en el resort. Check-out y traslado al aeropuerto de Malé para tomar el vuelo de regreso."
      }
    ],
    id: "12321"
  },
  chicago: {
    title: "Viaje a Chicago",
    subtitle: "La ciudad de los vientos te espera",
    rating: "4,8",
    reviews: 96,
    waver: {
      name: "Carlos Martínez",
      image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6",
      slug: "carlosmartinez"
    },
    price: 2199,
    location: "Chicago, Illinois, Estados Unidos",
    images: [
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
      "https://images.unsplash.com/photo-1494522358652-f30e61a60313",
      "https://images.unsplash.com/photo-1507893378978-62701dc548fc",
      "https://images.unsplash.com/photo-1565812444585-eb92029fb653"
    ],
    duration: "6 días, 5 noches",
    departure: "Barcelona",
    dates: "Disponible de abril a octubre",
    details: "Chicago, conocida como la Ciudad de los Vientos, es un destino cultural y arquitectónico de primer nivel. En este viaje, explorarás los impresionantes rascacielos, disfrutarás de su vibrante escena musical de jazz y blues, y probarás su famosa pizza de estilo deep dish. Pasearás por el Millennium Park para ver el famoso 'Bean' y navegarás por el río Chicago mientras aprendes sobre la fascinante historia arquitectónica de la ciudad.",
    highlights: [
      "Tour arquitectónico en barco por el río Chicago",
      "Visita al mirador Skydeck del Willis Tower",
      "Concierto de blues en un club auténtico",
      "Visita guiada al Art Institute of Chicago",
      "Degustación de deep dish pizza"
    ],
    includes: [
      "Vuelos ida y vuelta desde Barcelona",
      "Traslados aeropuerto-hotel-aeropuerto",
      "5 noches de alojamiento con desayuno",
      "City Pass con acceso a las principales atracciones",
      "Tour arquitectónico en barco",
      "Seguro de viaje",
      "Asistencia 24/7 durante el viaje"
    ],
    notIncludes: [
      "Comidas no mencionadas",
      "Propinas y gastos personales",
      "Seguro de cancelación opcional"
    ],
    activities: [
      {
        title: "Tour gastronómico",
        description: "Recorrido por los mejores restaurantes y puestos de comida de la ciudad.",
        included: false,
        price: 85
      },
      {
        title: "Partido de los Chicago Bulls",
        description: "Asiste a un partido de baloncesto en el United Center (sujeto a calendario).",
        included: false,
        price: 120
      },
      {
        title: "Tour de gangsters y prohibición",
        description: "Conoce la historia de Al Capone y la era de la Ley Seca en Chicago.",
        included: false,
        price: 45
      },
      {
        title: "Crucero al atardecer en el Lago Michigan",
        description: "Disfruta de las vistas del skyline de Chicago al atardecer.",
        included: true
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Llegada a Chicago",
        description: "Llegada al Aeropuerto Internacional O'Hare y traslado al hotel. Check-in y tiempo libre para una primera toma de contacto con la ciudad. Cena de bienvenida."
      },
      {
        day: 2,
        title: "Magnificient Mile y Millennium Park",
        description: "Desayuno en el hotel. Visita a la famosa Magnificent Mile para ir de compras. Almuerzo libre. Por la tarde, recorrido por el Millennium Park para ver 'The Bean' y Crown Fountain. Noche libre."
      },
      {
        day: 3,
        title: "Arquitectura y rascacielos",
        description: "Desayuno en el hotel. Tour en barco por el río Chicago para admirar la arquitectura de la ciudad. Almuerzo libre. Visita al Skydeck del Willis Tower. Noche de blues en un club local."
      },
      {
        day: 4,
        title: "Cultura y arte",
        description: "Desayuno en el hotel. Visita al Art Institute of Chicago y al Field Museum. Almuerzo libre. Tarde en Navy Pier y crucero al atardecer por el Lago Michigan."
      },
      {
        day: 5,
        title: "Historia y gastronomía",
        description: "Desayuno en el hotel. Tour opcional sobre gangsters y la Ley Seca. Almuerzo con degustación de deep dish pizza. Tarde libre para compras o actividades opcionales. Cena de despedida."
      },
      {
        day: 6,
        title: "Regreso a casa",
        description: "Desayuno en el hotel. Tiempo libre según horario de vuelo. Check-out y traslado al aeropuerto para tomar el vuelo de regreso."
      }
    ],
    id: "23432"
  }
};

const TripDetails = () => {
  // Actualizamos para extraer los tres parámetros desde la URL
  const { destino, waver, id } = useParams();
  
  // Modificamos la búsqueda de datos para usar los tres parámetros
  const tripData = destino ? tripsData[destino as keyof typeof tripsData] : null;
  
  // Verificamos que los parámetros waver e id coincidan con los datos del viaje
  const isValidTrip = tripData && 
                      tripData.waver.slug === waver && 
                      tripData.id === id;

  if (!tripData || !isValidTrip) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Viaje no encontrado</h1>
            <p className="text-gray-600 mb-6">
              Lo sentimos, el viaje que estás buscando no existe o ha sido eliminado.
            </p>
            <Link to="/" className="text-primary hover:underline">
              Volver a la página principal
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="container py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{tripData.title}</h1>
            <p className="text-xl text-gray-600 mb-4">{tripData.subtitle}</p>
            
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="bg-black text-white px-2 py-1 rounded-md flex items-center gap-1 text-sm">
                  <span>{tripData.rating}</span>
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-gray-600 text-sm">
                  ({tripData.reviews} opiniones)
                </span>
              </div>
              
              <Link 
                to={`/wavers/${tripData.waver.slug}`} 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <img 
                  src={tripData.waver.image} 
                  alt={tripData.waver.name} 
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span>{tripData.waver.name}</span>
              </Link>
              
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{tripData.location}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl border p-6 w-full md:w-auto">
            <div className="mb-4">
              <span className="text-gray-600 text-sm">Desde</span>
              <p className="text-3xl font-bold">{tripData.price} €</p>
              <span className="text-gray-600 text-sm">por persona</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <span>{tripData.duration}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <User className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <span>Salida desde {tripData.departure}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <span>{tripData.dates}</span>
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <Button className="w-full">Reservar ahora</Button>
              <Button variant="outline" className="w-full">
                Configurar paquete
              </Button>
            </div>
          </div>
        </div>
        
        {/* Gallery */}
        <div className="mb-16">
          <Carousel className="w-full">
            <CarouselContent>
              {tripData.images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-xl aspect-[4/3]">
                      <img 
                        src={image} 
                        alt={`${tripData.title} - Imagen ${index + 1}`} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        
        {/* Content Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <Tabs defaultValue="descripcion">
              <TabsList className="mb-8">
                <TabsTrigger value="descripcion">Descripción</TabsTrigger>
                <TabsTrigger value="itinerario">Itinerario</TabsTrigger>
                <TabsTrigger value="incluye">Qué incluye</TabsTrigger>
                <TabsTrigger value="actividades">Actividades</TabsTrigger>
              </TabsList>
              
              <TabsContent value="descripcion" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Acerca de este viaje</h2>
                  <p className="text-gray-600 leading-relaxed">{tripData.details}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Destacados del viaje</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tripData.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                          ✓
                        </div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="itinerario" className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Itinerario del viaje</h2>
                
                <div className="space-y-8">
                  {tripData.itinerary.map((day, index) => (
                    <div key={index} className="relative border-l-2 border-gray-200 pl-8 pb-8">
                      <div className="absolute left-[-17px] top-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                        {day.day}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{day.title}</h3>
                      <p className="text-gray-600">{day.description}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="incluye" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Qué incluye</h2>
                  <ul className="space-y-3">
                    {tripData.includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          ✓
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Qué no incluye</h2>
                  <ul className="space-y-3">
                    {tripData.notIncludes.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          ✕
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="actividades" className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Actividades disponibles</h2>
                
                <div className="grid grid-cols-1 gap-4">
                  {tripData.activities.map((activity, index) => (
                    <div key={index} className="border rounded-xl p-4 flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">{activity.title}</h3>
                        <p className="text-gray-600 text-sm">{activity.description}</p>
                        {activity.included ? (
                          <span className="inline-block mt-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            Incluido en el paquete
                          </span>
                        ) : (
                          <span className="block mt-2 font-semibold">
                            {activity.price} € <span className="text-xs font-normal text-gray-600">por persona</span>
                          </span>
                        )}
                      </div>
                      
                      {!activity.included && (
                        <Button variant="outline" size="sm">
                          Añadir
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl border p-6">
              <h3 className="text-lg font-semibold mb-4">Compartir este viaje</h3>
              <div className="flex items-center gap-3">
                <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border p-6">
              <h3 className="text-lg font-semibold mb-4">Información importante</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Política de cancelación</p>
                    <p className="text-sm text-gray-600">
                      Cancelación gratuita hasta 30 días antes del viaje.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Tamaño del grupo</p>
                    <p className="text-sm text-gray-600">
                      Máximo 15 personas para garantizar una experiencia personalizada.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Tag className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Etiquetas</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs px-3 py-1 bg-gray-100 rounded-full">Relax</span>
                      <span className="text-xs px-3 py-1 bg-gray-100 rounded-full">Playa</span>
                      <span className="text-xs px-3 py-1 bg-gray-100 rounded-full">Lujo</span>
                      <span className="text-xs px-3 py-1 bg-gray-100 rounded-full">Pareja</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TripDetails;
