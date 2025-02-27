
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Users, Heart, Flag, Award } from "lucide-react";

const QuienesSomos = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gray-100">
        <img
          src="/lovable-uploads/7632cf95-d364-4970-93d5-7cd21dfe7d45.png"
          alt="Personas compartiendo experiencias de viaje"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Quiénes Somos</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Transformando la manera de viajar, conectando personas y creando experiencias únicas
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Values Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Nuestra Misión</h3>
            <p className="text-gray-600">
              Conectar viajeros con expertos locales para crear experiencias auténticas y memorables en cada destino.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Nuestros Valores</h3>
            <p className="text-gray-600">
              Autenticidad, sostenibilidad y pasión por descubrir el mundo de una manera responsable.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Flag className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Nuestro Impacto</h3>
            <p className="text-gray-600">
              Promovemos el turismo sostenible y apoyamos a las comunidades locales en cada destino.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Nuestro Compromiso</h3>
            <p className="text-gray-600">
              Garantizamos experiencias únicas y personalizadas para cada viajero.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <p className="text-gray-600">Viajes organizados</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-gray-600">Destinos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-gray-600">Wavers expertos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <p className="text-gray-600">Viajeros felices</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default QuienesSomos;
