
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
import { 
  Dialog, 
  DialogContent, 
  DialogTitle,
  DialogDescription,
  DialogClose 
} from "@/components/ui/dialog";

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
      "https://player.vimeo.com/external/321805508.sd.mp4?s=95abff35c7322d1f70e2708631181585e3926fd8&profile_id=164&oauth2_token_id=57447761",
      "https://player.vimeo.com/external/363625327.sd.mp4?s=12ab3b2f56e703ca2216adeb9ea528c7cbf35467&profile_id=164&oauth2_token_id=57447761",
      "https://player.vimeo.com/external/339240136.sd.mp4?s=99e733f8fa8b2d5ca499d45d6e20767fee1be47f&profile_id=164&oauth2_token_id=57447761"
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
      "https://player.vimeo.com/external/408412129.sd.mp4?s=dacb9e82fcd98823ada100eb84c82703806f215f&profile_id=164&oauth2_token_id=57447761",
      "https://player.vimeo.com/external/295482071.sd.mp4?s=49c9384b25c73fb5007d9a2a0e9a6e40ca6fe666&profile_id=164&oauth2_token_id=57447761",
      "https://player.vimeo.com/external/209264345.sd.mp4?s=481acf3e78f5a66acee29595d9e52077fbe7cc8f&profile_id=164&oauth2_token_id=57447761"
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
      "https://player.vimeo.com/external/270245628.sd.mp4?s=6c344454bedd85b49ff9dc4ce8919332cea69645&profile_id=164&oauth2_token_id=57447761",
      "https://player.vimeo.com/external/493174780.sd.mp4?s=e08a4be71e4a40c50a3a8d5b1e4aed4ded6af98d&profile_id=164&oauth2_token_id=57447761",
      "https://player.vimeo.com/external/514370080.sd.mp4?s=ab5cb7ac0952f3f6f0f0d8ee9ede6a7fdab84ab5&profile_id=164&oauth2_token_id=57447761"
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
      "https://player.vimeo.com/external/349775864.sd.mp4?s=c69f22f2ad5f15e26093672aa8a98614e5b7add9&profile_id=164&oauth2_token_id=57447761",
      "https://player.vimeo.com/external/317154844.sd.mp4?s=95e95db5fcefc6fe403c74ef0f402b28e01d01b6&profile_id=164&oauth2_token_id=57447761",
      "https://player.vimeo.com/external/347956585.sd.mp4?s=54d8b887092f87d7ad93c7a7bd65a3f7c27c4ccb&profile_id=164&oauth2_token_id=57447761"
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
      "https://player.vimeo.com/external/430198225.sd.mp4?s=d30978eb36c738b59a299d81cc9bf0c94cc1db5e&profile_id=164&oauth2_token_id=57447761",
      "https://player.vimeo.com/external/350623292.sd.mp4?s=ee7e1ff1d7469f85dbd33adbf0de0df2cff34128&profile_id=164&oauth2_token_id=57447761",
      "https://player.vimeo.com/external/400197112.sd.mp4?s=d9e6c693bc34322029587da895fb03406c5c3a29&profile_id=164&oauth2_token_id=57447761"
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
      "https://player.vimeo.com/external/317154844.sd.mp4?s=95e95db5fcefc6fe403c74ef0f402b28e01d01b6&profile_id=164&oauth2_token_id=57447761",
      "https://player.vimeo.com/external/349775864.sd.mp4?s=c69f22f2ad5f15e26093672aa8a98614e5b7add9&profile_id=164&oauth2_token_id=57447761",
      "https://player.vimeo.com/external/350623292.sd.mp4?s=ee7e1ff1d7469f85dbd33adbf0de0df2cff34128&profile_id=164&oauth2_token_id=57447761"
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
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const dialogVideoRef = useRef<HTMLVideoElement>(null);

  // Reset video state when dialog closes
  const handleDialogClose = () => {
    setOpenDialog(false);
    setIsPlaying(true);
    setProgress(0);
    
    // Pause all hover videos when dialog closes
    videoRefs.current.forEach(video => {
      if (video) {
        video.pause();
      }
    });
  };

  // Handle time update for progress bar
  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    const progress = (video.currentTime / video.duration) * 100;
    setProgress(progress);
    
    // Loop the video when it ends
    if (video.currentTime >= video.duration) {
      video.currentTime = 0;
      video.play().catch(e => console.error("Failed to play video:", e));
    }
  };

  // Toggle play/pause state
  const togglePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
    
    if (dialogVideoRef.current) {
      if (isPlaying) {
        dialogVideoRef.current.pause();
      } else {
        dialogVideoRef.current.play().catch(e => {
          console.error("Failed to play video:", e);
          setIsPlaying(false);
        });
      }
    }
  };

  // Navigate to next video
  const handleNextVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedTrip) return;
    
    const trip = trips.find(t => t.id === selectedTrip);
    if (!trip) return;
    
    const nextIndex = (currentVideoIndex + 1) % trip.videos.length;
    setCurrentVideoIndex(nextIndex);
    setProgress(0);
    setIsPlaying(true);
  };

  // Navigate to previous video
  const handlePrevVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedTrip) return;
    
    const trip = trips.find(t => t.id === selectedTrip);
    if (!trip) return;
    
    const prevIndex = (currentVideoIndex - 1 + trip.videos.length) % trip.videos.length;
    setCurrentVideoIndex(prevIndex);
    setProgress(0);
    setIsPlaying(true);
  };

  // Get the currently selected trip object
  const getSelectedTrip = () => {
    if (!selectedTrip) return null;
    return trips.find(trip => trip.id === selectedTrip) || null;
  };

  // Handle card click to expand video
  const handleCardClick = (tripId: number) => {
    setSelectedTrip(tripId);
    setCurrentVideoIndex(0);
    setOpenDialog(true);
    setProgress(0);
    setIsPlaying(true);
  };

  // Handle opening dialog and setting selected trip
  const handleOpenVideo = (e: React.MouseEvent, tripId: number, videoIndex: number = 0) => {
    e.stopPropagation();
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

  // Handle hover effects for trip cards
  useEffect(() => {
    // Play the hovered video
    if (hoveredTrip !== null) {
      const videoElement = videoRefs.current[hoveredTrip];
      if (videoElement) {
        videoElement.muted = true;
        videoElement.play().catch(e => console.error("Failed to play hover video:", e));
      }
    }
    
    // Pause all videos except the hovered one
    videoRefs.current.forEach((video, index) => {
      if (video && index !== hoveredTrip) {
        video.pause();
        video.currentTime = 0;
      }
    });
    
    return () => {
      // Clean up by pausing all videos when component unmounts
      videoRefs.current.forEach(video => {
        if (video) video.pause();
      });
    };
  }, [hoveredTrip]);

  // Initialize video refs array
  useEffect(() => {
    videoRefs.current = Array(trips.length).fill(null);
  }, []);

  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">Top viajes</h2>
          <button className="text-primary hover:underline">Ver más viajes →</button>
        </div>
        
        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {trips.map((trip, index) => (
              <CarouselItem key={trip.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div 
                  className="relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-up aspect-[3/5] p-4 cursor-pointer"
                  onMouseEnter={() => setHoveredTrip(index)}
                  onMouseLeave={() => setHoveredTrip(null)}
                  onClick={() => handleCardClick(trip.id)}
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
                    {hoveredTrip === index ? (
                      <div className="relative w-full h-full">
                        <video
                          ref={(el) => videoRefs.current[index] = el}
                          src={trip.videos[0]} 
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                          onTimeUpdate={handleTimeUpdate}
                        />
                        <button 
                          onClick={(e) => handleOpenVideo(e, trip.id, 0)}
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
          <DialogTitle className="sr-only">Video del viaje</DialogTitle>
          <DialogDescription className="sr-only">Vista detallada del video del viaje</DialogDescription>
          
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
                    onClick={(e) => {
                      e.stopPropagation();
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
