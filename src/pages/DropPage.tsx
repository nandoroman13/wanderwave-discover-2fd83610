
import { useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/drops/HeroSection";
import { BenefitsSection } from "@/components/drops/BenefitsSection";
import { DetailsSection } from "@/components/drops/DetailsSection";
import { ReservationSection } from "@/components/drops/ReservationSection";
import { FaqSection } from "@/components/drops/FaqSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { dropsData } from "@/data/dropsData";

const DropPage = () => {
  const { slug } = useParams();
  const { t, language } = useLanguage();
  const [dropInfo, setDropInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching drop data
    const fetchData = () => {
      setLoading(true);
      // Find the drop info based on slug
      const foundDrop = dropsData.find(drop => drop.slug === slug);
      
      if (foundDrop) {
        setDropInfo(foundDrop);
      }
      
      setLoading(false);
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!dropInfo) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto py-20 text-center">
          <h1 className="text-3xl font-bold">{t("dropNotFound")}</h1>
          <p className="mt-4">{t("dropNotFoundDesc")}</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection 
          title={dropInfo.title[language]} 
          videoUrl={dropInfo.videoUrl} 
          destination={dropInfo.destination[language]} 
          waver={dropInfo.waver} 
          availableSpots={dropInfo.availableSpots}
        />
        
        <BenefitsSection />
        
        <DetailsSection 
          dates={dropInfo.dates}
          destination={dropInfo.destination[language]}
          itinerary={dropInfo.itinerary[language]}
          price={dropInfo.price}
          includes={dropInfo.includes[language]}
          excludes={dropInfo.excludes[language]}
          testimonials={dropInfo.testimonials}
        />
        
        <ReservationSection 
          price={dropInfo.price} 
          availableSpots={dropInfo.availableSpots}
          paymentOptions={dropInfo.paymentOptions}
        />
        
        <FaqSection faqs={dropInfo.faqs[language]} />
      </main>
      
      <Footer />
    </div>
  );
};

export default DropPage;
