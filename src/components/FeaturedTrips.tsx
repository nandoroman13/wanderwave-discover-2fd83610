
import { Share2, Star, Play, Pause, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

const trips = [
  {
    id: 1,
    title: "Viaja a Maldivas",
    username: "@pauladiez",
    userImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
    price: "3,999",
    rating: 5.0,
    purchases: 361,
    tags: ["Tendencia", "Surf", "Buceo", "Con amigos"],
    slug: "maldivas",
    duration: "9 días, 7 noches",
    configTime: "7",
    videos: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
      "https://images.unsplash.com/photo-1551918120-9739cb430c6d"
    ],
    itinerary: [{
      day: 1,
      title: "Madrid - Maldivas",
      description: "¡Hoy es el día que tanto has esperado! Finalmente, te embarcarás en un emocionante viaje hacia las asombrosas Islas Maldivas."
    }, {
      day: "2-7",
      title: "Maldivas",
      description: "Días libres en Maldivas"
    }, {
      day: 8,
      title: "Maldivas - Madrid",
      description: "Vuelo de regreso a Madrid"
    }]
  },
  {
    id: 2,
    title: "Viaja a Chicago",
    username: "@familiacarameluchi",
    userImage: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
    price: "5,500",
    rating: 5.0,
    purchases: 750,
    tags: ["En familia", "Aventura en familia", "Tendencia"],
    slug: "chicago",
    duration: "7 días, 5 noches",
    configTime: "5",
    videos: [
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
      "https://images.unsplash.com/photo-1494522358652-f30e61a60313",
      "https://images.unsplash.com/photo-1507992781348-310259076fe0"
    ],
    itinerary: [{
      day: 1,
      title: "Madrid - Chicago",
      description: "Vuelo directo a la Ciudad del Viento"
    }, {
      day: "2-6",
      title: "Chicago",
      description: "Días para explorar la ciudad"
    }, {
      day: 7,
      title: "Chicago - Madrid",
      description: "Vuelo de regreso"
    }]
  },
  {
    id: 3,
    title: "Viaja a Noruega",
    username: "@Mikelboisset",
    userImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    image: "https://images.unsplash.com/photo-1520769669658-f07657f5a307",
    price: "4,000",
    rating: 5.0,
    purchases: 602,
    tags: ["Tendencia", "Surf", "Buceo", "Con amigos"],
    slug: "noruega",
    duration: "8 días, 6 noches",
    configTime: "6",
    videos: [
      "https://images.unsplash.com/photo-1520769669658-f07657f5a307",
      "https://images.unsplash.com/photo-1506967554329-2626e0f7d9e4",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38"
    ],
    itinerary: [{
      day: 1,
      title: "Madrid - Oslo",
      description: "Vuelo hacia la capital noruega"
    }, {
      day: "2-7",
      title: "Noruega",
      description: "Días de exploración por los fiordos"
    }, {
      day: 8,
      title: "Oslo - Madrid",
      description: "Regreso a Madrid"
    }]
  },
  {
    id: 4,
    title: "Viaja a Tanzania",
    username: "@olympussafaris",
    userImage: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    price: "6,999",
    rating: 5.0,
    purchases: 283,
    tags: ["Safari", "Naturaleza", "Aventura", "Fotografía"],
    slug: "tanzania",
    duration: "10 días, 8 noches",
    configTime: "8",
    videos: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e",
      "https://images.unsplash.com/photo-1528485238486-507cca6f992c"
    ],
    itinerary: [{
      day: 1,
      title: "Madrid - Tanzania",
      description: "Inicio de la aventura africana"
    }, {
      day: "2-9",
      title: "Safari en Tanzania",
      description: "Experiencia única en la sabana africana"
    }, {
      day: 10,
      title: "Tanzania - Madrid",
      description: "Vuelo de regreso"
    }]
  },
  {
    id: 5,
    title: "Viaja a Japón",
    username: "@asiatraveller",
    userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    price: "4,599",
    rating: 4.9,
    purchases: 892,
    tags: ["Cultural", "Gastronomía", "Templos", "Historia"],
    slug: "japon",
    duration: "12 días, 10 noches",
    configTime: "9",
    videos: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186"
    ],
    itinerary: [{
      day: 1,
      title: "Madrid - Tokio",
      description: "Vuelo al país del sol naciente"
    }, {
      day: "2-11",
      title: "Japón",
      description: "Recorrido por las principales ciudades"
    }, {
      day: 12,
      title: "Tokio - Madrid",
      description: "Regreso a España"
    }]
  },
  {
    id: 6,
    title: "Viaja a Nueva Zelanda",
    username: "@adventurenomad",
    userImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    image: "https://images.unsplash.com/photo-1469521669194-babb45599def",
    price: "5,299",
    rating: 4.9,
    purchases: 447,
    tags: ["Aventura", "Naturaleza", "Senderismo", "Fotografía"],
    slug: "nueva-zelanda",
    duration: "15 días, 13 noches",
    configTime: "10",
    videos: [
      "https://images.unsplash.com/photo-1469521669194-babb45599def",
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad",
      "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5"
    ],
    itinerary: [{
      day: 1,
      title: "Madrid - Auckland",
      description: "Inicio del viaje a las antípodas"
    }, {
      day: "2-14",
      title: "Nueva Zelanda",
      description: "Aventura por las dos islas"
    }, {
      day: 15,
      title: "Auckland - Madrid",
      description: "Vuelo de regreso"
    }]
  }
];

export const FeaturedTrips = () => {
  const navigate = useNavigate();
  const [hoveredTrip, setHoveredTrip] = useState<number | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState<number | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const dialogVideoRef = useRef<HTMLVideoElement>(null);

  // Reset video state when dialog closes
  const handleDialogClose = () => {
    setOpenDialog(false);
    setIsPlaying(true);
    setProgress(0);
  };

  // Handle time update for progress bar
  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    const progress = (video.currentTime / video.duration) * 100;
    setProgress(progress);
  };

  // Toggle play/pause state
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (dialogVideoRef.current) {
      if (isPlaying) {
        dialogVideoRef.current.pause();
      } else {
        dialogVideoRef.current.play();
      }
    }
  };

  // Navigate to next video
  const handleNextVideo = () => {
    if (!selectedTrip) return;
    
    const trip = trips.find(t => t.id === selectedTrip);
    if (!trip) return;
    
    const nextIndex = (currentVideoIndex + 1) % trip.videos.length;
    setCurrentVideoIndex(nextIndex);
    setProgress(0);
  };

  // Navigate to previous video
  const handlePrevVideo = () => {
    if (!selectedTrip) return;
    
    const trip = trips.find(t => t.id === selectedTrip);
    if (!trip) return;
    
    const prevIndex = (currentVideoIndex - 1 + trip.videos.length) % trip.videos.length;
    setCurrentVideoIndex(prevIndex);
    setProgress(0);
  };

  // Get the currently selected trip object
  const getSelectedTrip = () => {
    if (!selectedTrip) return null;
    return trips.find(trip => trip.id === selectedTrip) || null;
  };

  // Handle opening dialog and setting selected trip
  const handleOpenVideo = (tripId: number, videoIndex: number = 0) => {
    setSelectedTrip(tripId);
    setCurrentVideoIndex(videoIndex);
    setOpenDialog(true);
    setProgress(0);
    setIsPlaying(true);
  };

  // Start playing video when dialog opens
  useEffect(() => {
    if (openDialog && dialogVideoRef.current) {
      dialogVideoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
        setIsPlaying(false);
      });
    }
  }, [openDialog, currentVideoIndex]);

  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">Top viajes</h2>
          <button className="text-primary hover:underline">Ver más viajes →</button>
        </div>
        
        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {trips.map((trip) => (
              <CarouselItem key={trip.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div 
                  className="relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-up aspect-[3/5] p-4 cursor-pointer"
                  onMouseEnter={() => setHoveredTrip(trip.id)}
                  onMouseLeave={() => setHoveredTrip(null)}
                  onClick={() => handleOpenVideo(trip.id)}
                >
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full pl-1 pr-3 py-0.5 whitespace-nowrap max-w-[90%] overflow-hidden">
                    <img
                      src={trip.userImage}
                      alt={trip.username}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <div className="text-xs overflow-hidden">
                      <span className="text-gray-900">{trip.title}</span>
                      <span className="text-gray-600"> como {trip.username}</span>
                    </div>
                  </div>
                  
                  <div className="relative h-full rounded-2xl overflow-hidden">
                    {hoveredTrip === trip.id ? (
                      <div className="relative w-full h-full">
                        <video
                          ref={hoveredTrip === trip.id ? videoRef : undefined}
                          src={trip.videos[0]} 
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                          onTimeUpdate={handleTimeUpdate}
                        />
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenVideo(trip.id, 0);
                          }}
                          className="absolute inset-0 w-full h-full flex items-center justify-center"
                        >
                          <div className="bg-black/25 rounded-full p-3 backdrop-blur-sm hover:bg-black/40 transition-colors">
                            <Play className="fill-white text-white" size={24} />
                          </div>
                        </button>
                        <div className="absolute bottom-4 left-4 right-4 flex space-x-1">
                          {trip.videos.map((_, i) => (
                            <div key={i} className="h-1 flex-1 bg-white/40 rounded-full overflow-hidden">
                              {i === 0 && (
                                <div 
                                  className="h-full bg-white rounded-full" 
                                  style={{ width: `${progress}%` }}
                                />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full h-full">
                        <img
                          src={trip.image}
                          alt={trip.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black/25 rounded-full p-2 backdrop-blur-sm">
                            <Play className="fill-white text-white" size={24} />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-4 rounded-2xl">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-black text-white text-sm px-2 py-1 rounded-full flex items-center gap-1">
                          <span>{trip.rating}</span>
                          <Star className="fill-current" size={14} />
                        </div>
                        <span className="text-sm text-gray-600">+{trip.purchases} comprados</span>
                      </div>
                      <button 
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <Share2 size={20} className="text-gray-600" />
                      </button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {trip.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-sm px-3 py-1 bg-gray-100 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-gray-600">Desde</span>
                        <p className="text-xl font-semibold">{trip.price} €</p>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/viajes/${trip.slug}`);
                        }}
                        className="bg-[#FFD233] hover:bg-[#FFD233]/90 text-black px-4 py-2 rounded-full transition-colors"
                      >
                        Configura paquete
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Video Dialog */}
      <Dialog open={openDialog} onOpenChange={(open) => !open && handleDialogClose()}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] p-0 bg-black border-none">
          <DialogClose className="absolute right-4 top-4 z-30 rounded-full p-2 bg-black/50 text-white hover:bg-black/70">
            <X className="h-5 w-5" />
          </DialogClose>
          
          {selectedTrip && getSelectedTrip() && (
            <div className="relative w-full h-full aspect-video">
              <video
                ref={dialogVideoRef}
                src={getSelectedTrip()?.videos[currentVideoIndex]}
                className="w-full h-full object-cover"
                autoPlay
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onClick={togglePlayPause}
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                {!isPlaying && (
                  <button onClick={togglePlayPause} className="bg-black/30 rounded-full p-4 backdrop-blur-sm">
                    <Play className="fill-white text-white" size={32} />
                  </button>
                )}
              </div>
              
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
                <button 
                  onClick={handlePrevVideo}
                  className="bg-black/30 rounded-full p-2 backdrop-blur-sm hover:bg-black/50 transition-colors"
                >
                  <ChevronLeft className="text-white" size={24} />
                </button>
                <button 
                  onClick={handleNextVideo}
                  className="bg-black/30 rounded-full p-2 backdrop-blur-sm hover:bg-black/50 transition-colors"
                >
                  <ChevronRight className="text-white" size={24} />
                </button>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                {getSelectedTrip()?.videos.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 flex-1 ${i === currentVideoIndex ? 'bg-white/40' : 'bg-white/20'} rounded-full overflow-hidden cursor-pointer`}
                    onClick={() => {
                      setCurrentVideoIndex(i);
                      setProgress(0);
                    }}
                  >
                    {i === currentVideoIndex && (
                      <div 
                        className="h-full bg-white rounded-full" 
                        style={{ width: `${progress}%` }}
                      />
                    )}
                  </div>
                ))}
              </div>
              
              <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/70 to-transparent">
                <div className="flex items-center gap-2">
                  <img
                    src={getSelectedTrip()?.userImage}
                    alt={getSelectedTrip()?.username}
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <div className="text-white">
                    <span className="font-medium">{getSelectedTrip()?.title}</span>
                    <span className="opacity-80"> como {getSelectedTrip()?.username}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
