
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PaymentOption {
  months: number;
  fee: number;
}

interface ReservationSectionProps {
  price: number;
  availableSpots: number;
  paymentOptions: {
    fullPayment: boolean;
    installments: PaymentOption[];
  };
}

export const ReservationSection = ({
  price,
  availableSpots,
  paymentOptions
}: ReservationSectionProps) => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    acceptTerms: false
  });
  const [selectedPaymentOption, setSelectedPaymentOption] = useState<string>("full");

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(language === 'es' ? 'es-ES' : 'en-US', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const calculateInstallment = (months: number, fee: number) => {
    const feeAmount = price * (fee / 100);
    const totalPrice = price + feeAmount;
    return totalPrice / months;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the integration with a payment processor
    alert(`Reservation submitted! Payment option: ${selectedPaymentOption}`);
  };

  return (
    <section id="reservation-section" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">{t("reserveYourSpot")}</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            {t("reserveYourSpotDesc")}
          </p>
          
          {availableSpots <= 5 && (
            <div className="mt-6 inline-block bg-red-500/20 text-red-200 px-4 py-2 rounded-full">
              {t("onlyXSpotsLeft").replace('{spots}', availableSpots.toString())}
            </div>
          )}
        </div>

        <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-xl overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-10">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <Label htmlFor="firstName" className="text-gray-700">{t("firstName")}</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-gray-700">{t("lastName")}</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700">{t("email")}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-700">{t("phone")}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">{t("paymentMethod")}</h3>
                
                <Tabs defaultValue="full" onValueChange={setSelectedPaymentOption} className="w-full">
                  <TabsList className="w-full mb-6">
                    {paymentOptions.fullPayment && (
                      <TabsTrigger value="full" className="flex-1">
                        {t("fullPayment")}
                      </TabsTrigger>
                    )}
                    
                    {paymentOptions.installments.map((option, index) => (
                      <TabsTrigger key={index} value={`installment-${option.months}`} className="flex-1">
                        {option.months} {t("monthly")}
                        {option.fee > 0 && <span className="ml-1 text-xs">+{option.fee}%</span>}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  <TabsContent value="full" className="p-4 border rounded-md">
                    <div className="text-center">
                      <p className="mb-2">{t("totalPayment")}</p>
                      <p className="text-2xl font-bold text-primary">{formatPrice(price)}</p>
                    </div>
                  </TabsContent>
                  
                  {paymentOptions.installments.map((option, index) => (
                    <TabsContent key={index} value={`installment-${option.months}`} className="p-4 border rounded-md">
                      <div className="text-center">
                        <p className="mb-2">
                          {option.months} {t("paymentsOf")}
                        </p>
                        <p className="text-2xl font-bold text-primary">
                          {formatPrice(calculateInstallment(option.months, option.fee))}
                        </p>
                        {option.fee > 0 && (
                          <p className="text-sm text-gray-500 mt-1">
                            {t("totalWithInterest")}: {formatPrice(price + (price * (option.fee / 100)))}
                          </p>
                        )}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>

              <div className="mb-8">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="acceptTerms"
                      name="acceptTerms"
                      type="checkbox"
                      checked={formData.acceptTerms}
                      onChange={handleInputChange}
                      required
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                  </div>
                  <label htmlFor="acceptTerms" className="ml-2 text-sm text-gray-600">
                    {t("acceptTermsAndConditions")}
                  </label>
                </div>
              </div>

              <Button type="submit" className="w-full py-6 text-lg font-semibold">
                {t("completeReservation")}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>{t("securePayment")}</p>
        </div>
      </div>
    </section>
  );
};
