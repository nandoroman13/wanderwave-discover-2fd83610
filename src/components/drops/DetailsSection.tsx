
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, MapPin, DollarSign, Check, X } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  avatar: string;
  rating: number;
  comment: {
    es: string;
    en: string;
  };
}

interface DetailsSectionProps {
  dates: string;
  destination: string;
  itinerary: string[];
  price: number;
  includes: string[];
  excludes: string[];
  testimonials: Testimonial[];
}

export const DetailsSection = ({
  dates,
  destination,
  itinerary,
  price,
  includes,
  excludes,
  testimonials
}: DetailsSectionProps) => {
  const { t, language } = useLanguage();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(language === 'es' ? 'es-ES' : 'en-US', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">{t("tripDetailsTitle")}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {t("tripDetailsDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Trip Details */}
          <div className="space-y-8">
            {/* Dates */}
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t("dates")}</h3>
                <p className="text-gray-600">{dates}</p>
              </div>
            </div>

            {/* Destination */}
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t("destination")}</h3>
                <p className="text-gray-600">{destination}</p>
                
                <h4 className="text-lg font-medium mt-4 mb-2">{t("keyPoints")}</h4>
                <ul className="list-disc ml-5 space-y-1 text-gray-600">
                  {itinerary.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t("totalPrice")}</h3>
                <p className="text-2xl font-bold text-primary">{formatPrice(price)}</p>
                <p className="text-sm text-gray-500 mt-1">{t("perPerson")}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Includes/Excludes */}
          <div className="border rounded-xl p-8 bg-gray-50">
            <h3 className="text-xl font-semibold mb-6">{t("whatIsIncluded")}</h3>
            
            <div className="space-y-6">
              {/* Includes */}
              <div>
                <h4 className="text-lg font-medium mb-3 text-green-600 flex items-center">
                  <Check className="mr-2 h-5 w-5" />
                  {t("included")}
                </h4>
                <ul className="space-y-2">
                  {includes.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Excludes */}
              <div>
                <h4 className="text-lg font-medium mb-3 text-red-600 flex items-center">
                  <X className="mr-2 h-5 w-5" />
                  {t("notIncluded")}
                </h4>
                <ul className="space-y-2">
                  {excludes.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <X className="h-5 w-5 text-red-500 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        {testimonials && testimonials.length > 0 && (
          <div className="mt-20">
            <h3 className="text-2xl font-semibold mb-8 text-center">{t("testimonials")}</h3>
            
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/3 p-4">
                    <div className="bg-white rounded-xl p-6 shadow-md h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="italic text-gray-600 flex-grow">"{testimonial.comment[language]}"</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-6">
                <CarouselPrevious className="relative static inset-0 translate-y-0 mr-4" />
                <CarouselNext className="relative static inset-0 translate-y-0" />
              </div>
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
};
