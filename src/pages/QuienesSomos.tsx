
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Users, Heart, Flag, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const QuienesSomos = () => {
  const { t } = useLanguage();
  
  return <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gray-100">
        <img src="https://res.cloudinary.com/dwtgmf1a7/image/upload/v1740689980/sacha-verheij-X0rRYtJy0R8-unsplash_v5morp.jpg" alt="Amigos disfrutando en una playa paradisíaca" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">{t("quienesSomos")}</h1>
            <p className="text-xl max-w-2xl mx-auto">
              {t("transformando")}
            </p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t("aboutUs")}</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {t("quienesSomosTexto")}
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
            <h3 className="text-xl font-semibold mb-3">{t("nuestraMision")}</h3>
            <p className="text-gray-600">
              {t("nuestraMisionTexto")}
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t("nuestrosValores")}</h3>
            <p className="text-gray-600">
              {t("nuestrosValoresTexto")}
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Flag className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t("nuestroImpacto")}</h3>
            <p className="text-gray-600">
              {t("nuestroImpactoTexto")}
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t("nuestroCompromiso")}</h3>
            <p className="text-gray-600">
              {t("nuestroCompromisoTexto")}
            </p>
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">{t("nuestrosFundadores")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-lg overflow-hidden">
            <img src="/lovable-uploads/bc56bfef-0711-41bf-a428-0e62ae6e1e36.png" alt="Nando Román" className="w-full aspect-square object-cover" />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold mb-2">Nando Román</h3>
              <p className="text-gray-600 mb-2">{t("fundadorCEO")}</p>
              <p className="text-gray-500 text-sm">
                {t("fundadorCEOTexto")}
              </p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden">
            <img src="/lovable-uploads/0088c1eb-fcbf-4e6b-8c81-543e932a2398.png" alt="Ana García" className="w-full aspect-square object-cover" />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold mb-2">Ana García</h3>
              <p className="text-gray-600 mb-2">{t("fundadorCOO")}</p>
              <p className="text-gray-500 text-sm">
                {t("fundadorCOOTexto")}
              </p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden">
            <img src="/lovable-uploads/bc56bfef-0711-41bf-a428-0e62ae6e1e36.png" alt="Miguel Torres" className="w-full aspect-square object-cover" />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold mb-2">Miguel Torres</h3>
              <p className="text-gray-600 mb-2">{t("fundadorCTO")}</p>
              <p className="text-gray-500 text-sm">
                {t("fundadorCTOTexto")}
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
              <p className="text-gray-600">{t("viajesOrganizados")}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-gray-600">{t("destinos")}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-gray-600">{t("waversExpertos")}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <p className="text-gray-600">{t("viajerosfelices")}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>;
};
export default QuienesSomos;
