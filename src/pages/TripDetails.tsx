
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TripDetails = () => {
  const { destination } = useParams();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container py-16">
        <h1 className="text-3xl font-semibold mb-8">Configura tu viaje a {destination}</h1>
        {/* Aquí irá el configurador del viaje */}
        <p className="text-muted-foreground">Próximamente podrás configurar todos los detalles de tu viaje...</p>
      </main>
      <Footer />
    </div>
  );
};

export default TripDetails;
