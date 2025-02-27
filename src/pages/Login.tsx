
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container py-8">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Accede a tu cuenta</h1>
          
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login">Iniciar sesión</TabsTrigger>
              <TabsTrigger value="registro">Crear cuenta</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <div className="bg-white rounded-xl border p-6 space-y-6">
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Contraseña</Label>
                        <Link to="/recuperar-password" className="text-sm text-primary hover:underline">
                          ¿Olvidaste tu contraseña?
                        </Link>
                      </div>
                      <div className="relative">
                        <Input 
                          id="password" 
                          type={showPassword ? "text" : "password"} 
                          placeholder="••••••••" 
                          required 
                        />
                        <button 
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? "Ocultar" : "Mostrar"}
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Iniciar sesión
                  </Button>
                </form>
                
                <div className="relative flex items-center justify-center mt-6">
                  <div className="border-t w-full absolute"></div>
                  <div className="relative bg-white px-4 text-sm text-gray-500">o continúa con</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    Google
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                    Facebook
                  </Button>
                </div>
              </div>
              
              <p className="text-center mt-8 text-gray-600">
                ¿No tienes cuenta?
                <button 
                  className="text-primary font-medium ml-1 hover:underline"
                  onClick={() => document.querySelector('[value="registro"]')?.dispatchEvent(new Event('click'))}
                >
                  Regístrate
                </button>
              </p>
            </TabsContent>
            
            <TabsContent value="registro">
              <div className="bg-white rounded-xl border p-6 space-y-6">
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre</Label>
                        <Input id="nombre" placeholder="Tu nombre" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="apellidos">Apellidos</Label>
                        <Input id="apellidos" placeholder="Tus apellidos" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email-reg">Email</Label>
                      <Input id="email-reg" type="email" placeholder="tu@email.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="password-reg">Contraseña</Label>
                      <div className="relative">
                        <Input 
                          id="password-reg" 
                          type={showPassword ? "text" : "password"} 
                          placeholder="Mínimo 8 caracteres" 
                          required 
                        />
                        <button 
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? "Ocultar" : "Mostrar"}
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <input 
                        type="checkbox" 
                        id="terminos" 
                        className="mt-1"
                        required
                      />
                      <label htmlFor="terminos" className="text-sm text-gray-600">
                        Acepto los <a href="#" className="text-primary hover:underline">Términos y Condiciones</a> y la <a href="#" className="text-primary hover:underline">Política de Privacidad</a>
                      </label>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Crear cuenta
                  </Button>
                </form>
                
                <div className="relative flex items-center justify-center mt-6">
                  <div className="border-t w-full absolute"></div>
                  <div className="relative bg-white px-4 text-sm text-gray-500">o regístrate con</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    Google
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                    Facebook
                  </Button>
                </div>
              </div>
              
              <p className="text-center mt-8 text-gray-600">
                ¿Ya tienes cuenta?
                <button 
                  className="text-primary font-medium ml-1 hover:underline"
                  onClick={() => document.querySelector('[value="login"]')?.dispatchEvent(new Event('click'))}
                >
                  Inicia sesión
                </button>
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;
