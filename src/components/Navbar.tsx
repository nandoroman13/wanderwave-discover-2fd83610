
import { Menu, Globe, UserCircle, Navigation, Users, PlusCircle, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navbar = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const { language, setLanguage, t } = useLanguage();
  
  const handleAuthClick = (e, mode: 'login' | 'register') => {
    e.preventDefault();
    setAuthMode(mode);
    setAuthModalOpen(true);
  };
  
  return <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          <div className="flex-1 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center">
                {/* Espacio reservado para el futuro logo */}
              </div>
              <span className="text-xl font-semibold text-primary">
                WanderWave
              </span>
            </Link>
          </div>

          <div className="flex-1 flex items-center justify-center gap-12">
            <Link to="/quienes-somos" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
              <Users size={20} />
              <span>{t("quienesSomos")}</span>
            </Link>
            <Link to="/explora" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
              <Navigation size={20} />
              <span>{t("explora")}</span>
            </Link>
          </div>
          
          <div className="flex-1 flex items-center justify-end gap-4">
            <Link to="/crear-viaje" className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors">
              <PlusCircle size={20} />
              <span>{t("creaViaje")}</span>
            </Link>

            {/* Selector de idiomas */}
            <Popover>
              <PopoverTrigger asChild>
                <button className="text-gray-600 hover:text-primary transition-colors">
                  <Globe size={20} />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-40 p-0 rounded-lg shadow-lg border border-gray-200 bg-white">
                <div className="flex flex-col divide-y divide-gray-100">
                  <button 
                    onClick={() => setLanguage('es')} 
                    className={`px-4 py-3 hover:bg-gray-50 transition-colors flex items-center gap-2 ${language === 'es' ? 'text-primary' : 'text-gray-700'}`}
                  >
                    Español
                    {language === 'es' && <span className="ml-auto text-primary">✓</span>}
                  </button>
                  <button 
                    onClick={() => setLanguage('en')} 
                    className={`px-4 py-3 hover:bg-gray-50 transition-colors flex items-center gap-2 ${language === 'en' ? 'text-primary' : 'text-gray-700'}`}
                  >
                    English
                    {language === 'en' && <span className="ml-auto text-primary">✓</span>}
                  </button>
                </div>
              </PopoverContent>
            </Popover>
            
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 gap-3">
              <Popover>
                <PopoverTrigger asChild>
                  <button className="text-gray-600 hover:text-primary transition-colors">
                    <Menu size={20} />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-0 rounded-lg shadow-lg border border-gray-200 bg-white">
                  <div className="flex flex-col divide-y divide-gray-100">
                    <Link to="/ayuda" className="px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">{t("ayuda")}</Link>
                    <Link to="/recursos" className="px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">{t("recursos")}</Link>
                    <a href="#" onClick={(e) => handleAuthClick(e, 'login')} className="px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                      {t("iniciarSesion")}
                    </a>
                    <a href="#" onClick={(e) => handleAuthClick(e, 'register')} className="px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                      {t("registrarse")}
                    </a>
                  </div>
                </PopoverContent>
              </Popover>
              <button className="text-gray-600 hover:text-primary transition-colors">
                <UserCircle size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Autenticación (Login/Registro) */}
      <Dialog open={authModalOpen} onOpenChange={setAuthModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="mb-4">
            <div className="flex justify-between items-center">
              <DialogTitle className="text-center flex-1">
                {authMode === 'login' ? t("iniciarSesion") : t("registrarse")} en WanderWave
              </DialogTitle>
              <Button variant="ghost" size="icon" onClick={() => setAuthModalOpen(false)} className="h-6 w-6">
                <X size={18} />
              </Button>
            </div>
          </DialogHeader>
          
          <div className="py-4">
            <h2 className="text-xl font-semibold mb-6">{t("bienvenidaWanderWave")}</h2>
            
            <div className="space-y-4">
              <div className="space-y-2">
                {authMode === 'login' ? (
                  <>
                    <Label htmlFor="phone">{t("numeroTelefono")}</Label>
                    <Input id="phone" placeholder="+34 600 000 000" className="h-12" />
                    <p className="text-xs text-gray-500 mt-1">
                      {t("tarifasEstandar")}
                    </p>
                  </>
                ) : (
                  <>
                    <Label htmlFor="email">{t("correoElectronico")}</Label>
                    <Input id="email" type="email" placeholder="ejemplo@correo.com" className="h-12" />
                    <p className="text-xs text-gray-500 mt-1">
                      {t("enviarCorreo")}
                    </p>
                  </>
                )}
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 h-12">
                {t("continua")}
              </Button>

              <div className="relative flex items-center justify-center py-2">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-200"></span>
                </div>
                <span className="relative px-4 bg-white text-sm text-gray-500">o</span>
              </div>

              <Button variant="outline" className="w-full flex items-center justify-center gap-2 h-12 border-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                  <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                </svg>
                {t("continuaConGoogle")}
              </Button>

              <Button variant="outline" className="w-full flex items-center justify-center gap-2 h-12 border-gray-300">
                <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0002 2C6.47791 2 2.00024 6.47767 2.00024 12C2.00024 17.5223 6.47791 22 12.0002 22C17.5225 22 22.0002 17.5223 22.0002 12C22.0002 6.47767 17.5225 2 12.0002 2Z" fill="#1877F2" />
                  <path d="M16.6668 8.5H14.1668C13.3334 8.5 12.6668 9.16667 12.6668 10V22H15.5002V15.5H16.6668C17.0835 15.5 17.3335 15.25 17.3335 14.8333V9.16667C17.3335 8.75 17.0835 8.5 16.6668 8.5Z" fill="white" />
                  <path d="M10.3334 10.3333H8.3334V12.3333H10.3334V22.0000H13.3334V12.3333H15.3334L15.6667 10.3333H13.3334V9.33333C13.3334 8.83333 13.5001 8.66667 14.0001 8.66667H15.6667V6.00000H13.6667C11.5001 6.00000 10.3334 7.16667 10.3334 9.00000V10.3333Z" fill="white" />
                </svg>
                {t("continuaConFacebook")}
              </Button>

              <Button variant="outline" className="w-full flex items-center justify-center gap-2 h-12 border-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                {t("continuaConEmail")}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </nav>;
};

