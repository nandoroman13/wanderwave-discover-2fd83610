
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulamos el envío del email
    setTimeout(() => {
      toast({
        title: "¡Gracias por suscribirte!",
        description: "Te mantendremos informado de las últimas novedades.",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-[#f1f0fb]">
      <div className="container max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-semibold mb-4">
          Suscríbete a nuestra newsletter
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Mantente al día con nuestras últimas ofertas, destinos exclusivos y consejos de viaje personalizados.
        </p>
        
        <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {isLoading ? "Suscribiendo..." : "Suscribirse"}
          </button>
        </form>
      </div>
    </section>
  );
};
