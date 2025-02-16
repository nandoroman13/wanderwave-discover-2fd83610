
import { Navbar } from "@/components/Navbar";
import { SearchSection } from "@/components/SearchSection";
import { Prescriptores } from "@/components/Prescriptores";
import { FeaturedTrips } from "@/components/FeaturedTrips";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SearchSection />
      <Prescriptores />
      <FeaturedTrips />
    </div>
  );
};

export default Index;
