
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Agencias = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Portal para Agencias y Creadores</h1>
            <p className="text-lg text-gray-700 mb-8">
              Únete a nuestra plataforma y comienza a ofrecer tus experiencias de viaje únicas a miles de clientes potenciales.
            </p>
            <Button size="lg" className="bg-primary text-white">Comenzar ahora</Button>
          </div>
        </div>
      </div>
      
      <div className="container py-16">
        <Tabs defaultValue="agencias" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="agencias">Para Agencias</TabsTrigger>
            <TabsTrigger value="creadores">Para Creadores</TabsTrigger>
          </TabsList>
          
          <TabsContent value="agencias" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Amplía tu alcance</h2>
                <p className="text-gray-600 mb-6">
                  Conecta con una nueva generación de viajeros que buscan experiencias auténticas y personalizadas.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <span>Accede a una audiencia digital en crecimiento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <span>Gestiona reservas de forma eficiente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <span>Colabora con creadores de contenido influyentes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <span>Análisis detallados de rendimiento</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl border p-8">
                <h3 className="text-xl font-semibold mb-6">Regístrate como Agencia</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombreAgencia">Nombre de la agencia</Label>
                      <Input id="nombreAgencia" placeholder="Tu agencia de viajes" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="sitioWeb">Sitio web</Label>
                      <Input id="sitioWeb" placeholder="www.tuagencia.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="emailProfesional">Email profesional</Label>
                    <Input id="emailProfesional" type="email" placeholder="contacto@tuagencia.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono de contacto</Label>
                    <Input id="telefono" type="tel" placeholder="+34 XXX XXX XXX" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="descripcion">Cuéntanos sobre tu agencia</Label>
                    <textarea 
                      id="descripcion" 
                      className="w-full border rounded-md p-3 h-24" 
                      placeholder="Describe brevemente los servicios que ofreces, tu especialidad, etc."
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full">Enviar solicitud</Button>
                </form>
              </div>
            </div>
            
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Beneficios para Agencias</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl border p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Aumenta tus ventas</h3>
                  <p className="text-gray-600">
                    Accede a un nuevo canal de ventas y amplía tu base de clientes con viajeros digitales.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl border p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Crea experiencias únicas</h3>
                  <p className="text-gray-600">
                    Diseña paquetes personalizados que destaquen entre la oferta tradicional.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl border p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Colabora con influencers</h3>
                  <p className="text-gray-600">
                    Conecta con creadores de contenido para promover tus destinos y experiencias.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="creadores" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Monetiza tu contenido de viajes</h2>
                <p className="text-gray-600 mb-6">
                  Convierte tu pasión por los viajes en un negocio rentable, compartiendo tus experiencias únicas con tu audiencia.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <span>Crea paquetes de viaje basados en tus experiencias</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <span>Gana comisiones por cada reserva completada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <span>Acceso a herramientas profesionales de marketing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                    <span>Colaboración con agencias de viajes establecidas</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl border p-8">
                <h3 className="text-xl font-semibold mb-6">Regístrate como Creador</h3>
                <form className="space-y-4">
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
                    <Label htmlFor="nombreUsuario">Nombre de usuario</Label>
                    <Input id="nombreUsuario" placeholder="@tuusername" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="emailCreador">Email</Label>
                    <Input id="emailCreador" type="email" placeholder="tu@email.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="redesSociales">Tus redes sociales (Instagram, TikTok, etc.)</Label>
                    <Input id="redesSociales" placeholder="URL de tus perfiles" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="nicho">Tu especialidad en viajes</Label>
                    <select id="nicho" className="w-full border rounded-md p-3">
                      <option>Aventura</option>
                      <option>Gastronomía</option>
                      <option>Viajes en familia</option>
                      <option>Mochilero</option>
                      <option>Lujo</option>
                      <option>Otro</option>
                    </select>
                  </div>
                  
                  <Button type="submit" className="w-full">Enviar solicitud</Button>
                </form>
              </div>
            </div>
            
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-center">¿Cómo funciona para Creadores?</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl border p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 text-white font-bold">1</div>
                  <h3 className="font-semibold mb-2">Regístrate</h3>
                  <p className="text-gray-600 text-sm">
                    Completa tu perfil con tus especialidades y enlaces a tus redes sociales.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl border p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 text-white font-bold">2</div>
                  <h3 className="font-semibold mb-2">Crea tu itinerario</h3>
                  <p className="text-gray-600 text-sm">
                    Diseña experiencias de viaje basadas en tus destinos favoritos.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl border p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 text-white font-bold">3</div>
                  <h3 className="font-semibold mb-2">Promociona</h3>
                  <p className="text-gray-600 text-sm">
                    Comparte tus paquetes con tu audiencia a través de tus canales.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl border p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 text-white font-bold">4</div>
                  <h3 className="font-semibold mb-2">Gana comisiones</h3>
                  <p className="text-gray-600 text-sm">
                    Recibe ingresos por cada reserva completada a través de tu perfil.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default Agencias;
