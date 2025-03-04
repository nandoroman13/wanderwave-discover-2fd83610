
import { useLanguage } from "@/contexts/LanguageContext";
import { Star, MapPin, Users } from "lucide-react";

export const BenefitsSection = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: <Star className="h-12 w-12 md:h-16 md:w-16" />,
      title: t("exclusivity"),
      description: t("exclusivityDesc")
    },
    {
      icon: <MapPin className="h-12 w-12 md:h-16 md:w-16" />,
      title: t("uniqueExperience"),
      description: t("uniqueExperienceDesc")
    },
    {
      icon: <Users className="h-12 w-12 md:h-16 md:w-16" />,
      title: t("community"),
      description: t("communityDesc")
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">{t("benefitsTitle")}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {t("benefitsDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-6 text-primary">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
