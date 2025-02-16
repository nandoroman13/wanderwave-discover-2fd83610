
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
        title: "¡Registro completado!",
        description: "Te ayudaremos a encontrar tu próximo destino soñado.",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    // Simulamos el registro con Google
    setTimeout(() => {
      toast({
        title: "¡Registro completado!",
        description: "Te ayudaremos a encontrar tu próximo destino soñado.",
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-16">
      <div className="container">
        <div className="bg-[#f1f0fb] rounded-2xl p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">
              Regístrate para encontrar tu próximo destino
            </h2>
            <p className="text-gray-600 mb-8">
              Descubre destinos personalizados, ofertas exclusivas y consejos de viaje adaptados a tus preferencias.
            </p>
            
            <div className="flex flex-col gap-4 items-center">
              <form onSubmit={handleSubmit} className="flex gap-4 max-w-md w-full">
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
                  {isLoading ? "Registrando..." : "Registrarse"}
                </button>
              </form>
              
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300"></span>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 text-gray-500 bg-[#f1f0fb]">O continúa con</span>
                </div>
              </div>

              <button
                onClick={handleGoogleSignIn}
                disabled={isLoading}
                className="flex items-center justify-center gap-2 px-6 py-2 bg-white text-gray-700 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors w-full max-w-md"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continuar con Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
