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
          src="/lovable-uploads/642b528a-fea7-4ed7-93f5-5f796e87b02a.png"
          alt="Amigos disfrutando en una playa paradisíaca"
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

      {/* About Us Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            En WanderWave, creemos en transformar la manera en que las personas viajan y experimentan el mundo. Nacimos de la pasión por los viajes auténticos y la convicción de que las mejores experiencias surgen cuando conectas con personas locales que comparten tu amor por la aventura. Nuestra plataforma une a viajeros aventureros con expertos locales apasionados, creando experiencias únicas y memorables que van más allá del turismo tradicional.
          </p>
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

      {/* Founders Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Nuestros Fundadores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-lg overflow-hidden">
            <img
              src="/lovable-uploads/bc56bfef-0711-41bf-a428-0e62ae6e1e36.png"
              alt="Carlos Martínez"
              className="w-full aspect-square object-cover"
            />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold mb-2">Carlos Martínez</h3>
              <p className="text-gray-600 mb-2">Co-fundador y CEO</p>
              <p className="text-gray-500 text-sm">
                Apasionado viajero con más de 10 años de experiencia en el sector turístico. Lidera la visión estratégica de WanderWave.
              </p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden">
            <img
              src="/lovable-uploads/0088c1eb-fcbf-4e6b-8c81-543e932a2398.png"
              alt="Ana García"
              className="w-full aspect-square object-cover"
            />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold mb-2">Ana García</h3>
              <p className="text-gray-600 mb-2">Co-fundadora y COO</p>
              <p className="text-gray-500 text-sm">
                Experta en operaciones y desarrollo de productos turísticos. Supervisa la calidad de todas las experiencias WanderWave.
              </p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden">
            <img
              src="/lovable-uploads/bc56bfef-0711-41bf-a428-0e62ae6e1e36.png"
              alt="Miguel Torres"
              className="w-full aspect-square object-cover"
            />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold mb-2">Miguel Torres</h3>
              <p className="text-gray-600 mb-2">Co-fundador y CTO</p>
              <p className="text-gray-500 text-sm">
                Ingeniero de software con experiencia en startups. Lidera el desarrollo tecnológico de la plataforma.
              </p>
            </div>
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
