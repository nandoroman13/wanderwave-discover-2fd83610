
import { Navbar } from "@/components/Navbar";
import { SearchSection } from "@/components/SearchSection";
import { Prescriptores } from "@/components/Prescriptores";
import { FeaturedTrips } from "@/components/FeaturedTrips";
import { Destinos } from "@/components/Destinos";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SearchSection />
      <Prescriptores />
      <FeaturedTrips />
      <Destinos />
    </div>
  );
};

export default Index;
