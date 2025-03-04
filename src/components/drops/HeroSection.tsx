
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Clock } from "lucide-react";

interface HeroSectionProps {
  title: string;
  videoUrl: string;
  destination: string;
  waver: string;
  availableSpots: number;
}

export const HeroSection = ({ 
  title, 
  videoUrl, 
  destination, 
  waver, 
  availableSpots 
}: HeroSectionProps) => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate video loading and fade-in effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // For the real implementation, this would be a video element
  // For now, we're using an image as a placeholder for the video
  
  const scrollToReservation = () => {
    const reservationSection = document.getElementById('reservation-section');
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video background (using image as placeholder) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${videoUrl})`,
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out'
          }}
        />
        <div className="absolute inset-0 bg-black/50 z-[1]" />
      </div>
      
      {/* Content overlay */}
      <div 
        className="relative z-10 h-full w-full flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8"
        style={{ 
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
          transitionDelay: '0.5s'
        }}
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
            {title}
          </h1>
          
          <div className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full inline-flex items-center font-medium">
              <Clock className="mr-2 h-5 w-5" />
              <div className="flex items-center space-x-1">
                <span>{t("availableSpots")}: </span>
                <span className="text-xl font-bold text-yellow-300">{availableSpots}</span>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">{t("limitedTimeOffer")}</div>
          </div>
          
          <Button 
            onClick={scrollToReservation}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transform transition hover:-translate-y-1 font-medium mt-4"
          >
            {t("reserveNow")}
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};
