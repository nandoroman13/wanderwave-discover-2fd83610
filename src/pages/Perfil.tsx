
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Calendar, Clock, MapPin, Plane, UserCircle, CreditCard, Settings, LogOut } from "lucide-react";

const Perfil = () => {
  const [activeTab, setActiveTab] = useState("viajes");
  
  const reservas = [
    {
      id: 1,
      destino: "Maldivas",
      fechaInicio: "15/10/2024",
      fechaFin: "22/10/2024",
      estado: "confirmado",
      precio: "3,998 €",
      imagen: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8"
    },
    {
      id: 2,
      destino: "Chicago",
      fechaInicio: "05/12/2024",
      fechaFin: "12/12/2024",
      estado: "pendiente",
      precio: "2,499 €",
      imagen: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-8">
            <div className="w-64 bg-white rounded-xl border p-6 space-y-6 sticky top-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <UserCircle className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="font-semibold">María García</h2>
                  <p className="text-gray-600 text-sm">maria@ejemplo.com</p>
                </div>
              </div>
              
              <div className="space-y-1 border-t pt-6">
                <button 
                  onClick={() => setActiveTab("viajes")}
                  className={`flex items-center gap-3 w-full p-3 rounded-lg text-left ${activeTab === "viajes" ? "bg-primary/10 text-primary" : "hover:bg-gray-100"}`}
                >
                  <Plane className="w-5 h-5" />
                  <span>Mis viajes</span>
                </button>
                
                <button 
                  onClick={() => setActiveTab("datos")}
                  className={`flex items-center gap-3 w-full p-3 rounded-lg text-left ${activeTab === "datos" ? "bg-primary/10 text-primary" : "hover:bg-gray-100"}`}
                >
                  <UserCircle className="w-5 h-5" />
                  <span>Datos personales</span>
                </button>
                
                <button 
                  onClick={() => setActiveTab("pagos")}
                  className={`flex items-center gap-3 w-full p-3 rounded-lg text-left ${activeTab === "pagos" ? "bg-primary/10 text-primary" : "hover:bg-gray-100"}`}
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Métodos de pago</span>
                </button>
                
                <button 
                  onClick={() => setActiveTab("ajustes")}
                  className={`flex items-center gap-3 w-full p-3 rounded-lg text-left ${activeTab === "ajustes" ? "bg-primary/10 text-primary" : "hover:bg-gray-100"}`}
                >
                  <Settings className="w-5 h-5" />
                  <span>Ajustes</span>
                </button>
              </div>
              
              <div className="border-t pt-6">
                <button className="flex items-center gap-3 w-full p-3 rounded-lg text-left text-red-600 hover:bg-red-50">
                  <LogOut className="w-5 h-5" />
                  <span>Cerrar sesión</span>
                </button>
              </div>
            </div>
            
            <div className="flex-1">
              {activeTab === "viajes" && (
                <div className="space-y-6">
                  <h1 className="text-2xl font-bold">Mis viajes</h1>
                  
                  {reservas.length > 0 ? (
                    <div className="space-y-4">
                      {reservas.map(reserva => (
                        <div key={reserva.id} className="bg-white rounded-xl border overflow-hidden">
                          <div className="grid grid-cols-4">
                            <div className="col-span-1">
                              <img 
                                src={reserva.imagen} 
                                alt={reserva.destino} 
                                className="w-full h-full object-cover aspect-square"
                              />
                            </div>
                            <div className="col-span-3 p-6 flex justify-between">
                              <div className="space-y-4">
                                <div>
                                  <h3 className="text-xl font-semibold">Viaje a {reserva.destino}</h3>
                                  <span className={`inline-block px-3 py-1 rounded-full text-xs mt-2 ${
                                    reserva.estado === 'confirmado' 
                                      ? 'bg-green-100 text-green-800' 
                                      : 'bg-yellow-100 text-yellow-800'
                                  }`}>
                                    {reserva.estado === 'confirmado' ? 'Confirmado' : 'Pendiente'}
                                  </span>
                                </div>
                                
                                <div className="flex items-center gap-6 text-gray-600">
                                  <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{reserva.fechaInicio} - {reserva.fechaFin}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>7 noches</span>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="text-right">
                                <p className="text-xl font-bold">{reserva.precio}</p>
                                <Button className="mt-4">Ver detalles</Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-white rounded-xl border p-8 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                        <Plane className="w-8 h-8 text-gray-400" />
                      </div>
                      <h3 className="text-xl font-medium">No tienes viajes reservados</h3>
                      <p className="text-gray-600">
                        Explora nuestro catálogo y reserva tu próxima aventura
                      </p>
                      <Button className="mt-2">Descubrir destinos</Button>
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === "datos" && (
                <div className="space-y-6">
                  <h1 className="text-2xl font-bold">Datos personales</h1>
                  
                  <div className="bg-white rounded-xl border p-6 space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre</Label>
                        <Input id="nombre" defaultValue="María" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="apellidos">Apellidos</Label>
                        <Input id="apellidos" defaultValue="García López" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="maria@ejemplo.com" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="telefono">Teléfono</Label>
                        <Input id="telefono" type="tel" defaultValue="+34 600 123 456" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="direccion">Dirección</Label>
                      <Input id="direccion" defaultValue="Calle Ejemplo 123" />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="ciudad">Ciudad</Label>
                        <Input id="ciudad" defaultValue="Madrid" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="codigoPostal">Código Postal</Label>
                        <Input id="codigoPostal" defaultValue="28001" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="pais">País</Label>
                        <Input id="pais" defaultValue="España" />
                      </div>
                    </div>
                    
                    <Button className="w-full">Guardar cambios</Button>
                  </div>
                </div>
              )}
              
              {activeTab === "pagos" && (
                <div className="space-y-6">
                  <h1 className="text-2xl font-bold">Métodos de pago</h1>
                  
                  <div className="bg-white rounded-xl border p-6">
                    <div className="flex items-center justify-between pb-4 border-b">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-8 bg-blue-600 rounded"></div>
                        <div>
                          <p className="font-medium">Visa terminada en 4242</p>
                          <p className="text-sm text-gray-500">Expira: 12/2025</p>
                        </div>
                      </div>
                      <button className="text-sm text-red-600 hover:underline">Eliminar</button>
                    </div>
                    
                    <div className="mt-6">
                      <Button variant="outline" className="w-full">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Añadir nueva tarjeta
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === "ajustes" && (
                <div className="space-y-6">
                  <h1 className="text-2xl font-bold">Ajustes</h1>
                  
                  <div className="bg-white rounded-xl border p-6 space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="password">Cambiar contraseña</Label>
                      <Input id="password" type="password" placeholder="Nueva contraseña" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="passwordConfirm">Confirmar contraseña</Label>
                      <Input id="passwordConfirm" type="password" placeholder="Confirmar nueva contraseña" />
                    </div>
                    
                    <Button className="w-full">Actualizar contraseña</Button>
                    
                    <div className="border-t pt-6">
                      <h3 className="font-semibold mb-4">Preferencias de notificaciones</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="emailNotif">Notificaciones por email</Label>
                          <input type="checkbox" id="emailNotif" className="toggle" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <Label htmlFor="promociones">Ofertas y promociones</Label>
                          <input type="checkbox" id="promociones" className="toggle" defaultChecked />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Perfil;
