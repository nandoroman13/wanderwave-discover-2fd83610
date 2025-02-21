
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BellRing, X, MapPin, Calendar, CalendarDays } from "lucide-react";

const tripData = {
  "maldivas": {
    title: "Viaje a Maldivas",
    subtitle: "Descubre el paraíso en la Tierra",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
    location: "Islas Maldivas",
    days: 7,
    price: 2499,
    waver: {
      name: "Paula Díez",
      username: "paula-diez",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    }
  },
  "italia": {
    title: "Descubre Italia",
    subtitle: "Un viaje por la historia y la cultura",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
    location: "Italia",
    days: 10,
    price: 1899,
    waver: {
      name: "Carlos Martínez",
      username: "carlos-martinez",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5"
    }
  },
  "africa": {
    title: "Safari por África",
    subtitle: "Una aventura única en la naturaleza",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    location: "Kenia y Tanzania",
    days: 12,
    price: 3299,
    waver: {
      name: "Ana López",
      username: "ana-lopez",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
    }
  },
  "punta-cana": {
    title: "Relax en Punta Cana",
    subtitle: "Playas paradisíacas del Caribe",
    image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722",
    location: "República Dominicana",
    days: 8,
    price: 1699,
    waver: {
      name: "David García",
      username: "david-garcia",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    }
  }
};

export default function TripDetails() {
  const { slug } = useParams();
  
  if (!slug || !tripData[slug as keyof typeof tripData]) {
    return <div className="container py-16">Destino no encontrado</div>;
  }

  const trip = tripData[slug as keyof typeof tripData];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gray-900">
        <img
          src={trip.image}
          alt={trip.title}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-4xl font-bold text-white">{trip.title}</h1>
              <p className="text-xl text-gray-200">{trip.subtitle}</p>
              
              <div className="flex items-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{trip.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{trip.days} días</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Sobre este viaje</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, 
                quod, quae, voluptate quibusdam voluptatibus quas doloribus quidem 
                voluptatem quos quia. Quisquam, quod. Quisquam voluptates, quod, quae, 
                voluptate quibusdam voluptatibus quas doloribus quidem voluptatem quos 
                quia. Quisquam, quod.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Itinerario del viaje</h2>
              <Accordion type="single" collapsible>
                {Array.from({ length: trip.days }).map((_, index) => (
                  <AccordionItem key={index} value={`day-${index + 1}`}>
                    <AccordionTrigger className="text-left">
                      Día {index + 1}
                    </AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Quisquam voluptates, quod, quae, voluptate quibusdam 
                      voluptatibus quas doloribus quidem voluptatem quos quia.
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold">€{trip.price}</div>
                <div className="text-sm text-gray-500">por persona</div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CalendarDays className="w-5 h-5" />
                  <span>{trip.days} días</span>
                </div>
                <Button className="w-full">Reservar ahora</Button>
                <Button variant="outline" className="w-full">
                  <BellRing className="w-4 h-4 mr-2" />
                  Activar alertas
                </Button>
              </div>
            </div>

            {/* Waver Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Tu Waver para este viaje</h3>
              <div className="flex items-center gap-4">
                <img
                  src={trip.waver.avatar}
                  alt={trip.waver.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium">{trip.waver.name}</div>
                  <div className="text-sm text-gray-500">@{trip.waver.username}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
