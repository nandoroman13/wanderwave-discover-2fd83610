
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FeaturedTrips } from "@/components/FeaturedTrips";
import { SearchSection } from "@/components/SearchSection";

const ViajesCatalogo = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Descubre nuestros destinos</h1>
        <p className="text-gray-600 mb-8">
          Explora nuestra selección de viajes diseñados por expertos y wavers para ofrecerte
          experiencias únicas alrededor del mundo.
        </p>
        <SearchSection />
        <div className="my-12">
          <FeaturedTrips />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViajesCatalogo;
