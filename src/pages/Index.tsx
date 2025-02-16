
import { Navbar } from "@/components/Navbar";
import { SearchSection } from "@/components/SearchSection";
import { Prescriptores } from "@/components/Prescriptores";
import { FeaturedTrips } from "@/components/FeaturedTrips";
import { Destinos } from "@/components/Destinos";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SearchSection />
      <FeaturedTrips />
      <Prescriptores />
      <Destinos />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
