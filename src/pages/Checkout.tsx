
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Checkout = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    codigoPostal: "",
    pais: "España"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de procesamiento del checkout
    console.log("Datos del formulario enviados:", formData);
    alert("¡Compra completada con éxito! Pronto recibirás un email con todos los detalles.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Finalizar compra</h1>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-white p-6 rounded-xl border space-y-6">
                  <h2 className="text-xl font-semibold">Datos personales</h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre</Label>
                      <Input 
                        id="nombre" 
                        name="nombre" 
                        value={formData.nombre} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="apellidos">Apellidos</Label>
                      <Input 
                        id="apellidos" 
                        name="apellidos" 
                        value={formData.apellidos} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono</Label>
                      <Input 
                        id="telefono" 
                        name="telefono" 
                        type="tel" 
                        value={formData.telefono} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="direccion">Dirección</Label>
                    <Input 
                      id="direccion" 
                      name="direccion" 
                      value={formData.direccion} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="ciudad">Ciudad</Label>
                      <Input 
                        id="ciudad" 
                        name="ciudad" 
                        value={formData.ciudad} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="codigoPostal">Código Postal</Label>
                      <Input 
                        id="codigoPostal" 
                        name="codigoPostal" 
                        value={formData.codigoPostal} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="pais">País</Label>
                      <Input 
                        id="pais" 
                        name="pais" 
                        value={formData.pais} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border space-y-6">
                  <h2 className="text-xl font-semibold">Método de pago</h2>
                  <p className="text-gray-600">
                    El pago se procesará de forma segura a través de nuestra pasarela de pagos.
                  </p>
                  {/* Aquí iría el componente de tarjeta de crédito */}
                  <div className="p-4 bg-gray-50 rounded-lg border border-dashed text-center text-gray-500">
                    Componente de pago seguro
                  </div>
                </div>
                
                <Button type="submit" className="w-full py-6 text-lg bg-primary">
                  Confirmar reserva
                </Button>
              </form>
            </div>
            
            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-xl border sticky top-8">
                <h2 className="text-xl font-semibold mb-4">Resumen de compra</h2>
                <div className="border-b pb-4 mb-4">
                  <p className="font-medium">Viaje a Maldivas</p>
                  <p className="text-gray-600 text-sm">Del 15 al 22 de Octubre, 2024</p>
                  <p className="text-gray-600 text-sm">2 adultos</p>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Precio base</span>
                    <span>3,998 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tasas y cargos</span>
                    <span>199 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Seguro de viaje</span>
                    <span>120 €</span>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>4,317 €</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Todos los impuestos incluidos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
