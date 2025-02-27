
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Phone, Mail, MessageSquare } from "lucide-react";

const Ayuda = () => {
  const faqs = [
    {
      categoria: "Reservas",
      preguntas: [
        {
          pregunta: "¿Cómo puedo modificar o cancelar mi reserva?",
          respuesta: "Para modificar o cancelar tu reserva, inicia sesión en tu cuenta y ve a la sección 'Mis viajes'. Allí encontrarás todas tus reservas activas y podrás realizar cambios o solicitar una cancelación. Ten en cuenta que las políticas de cancelación varían según el paquete y la proximidad a la fecha de viaje."
        },
        {
          pregunta: "¿Qué incluye el precio del paquete?",
          respuesta: "El precio incluye lo detallado específicamente en la descripción de cada paquete. Generalmente, nuestros paquetes incluyen vuelos ida y vuelta, alojamiento, traslados aeropuerto-hotel y ciertos tours o actividades. Algunos paquetes pueden incluir comidas, especificadas como desayuno, media pensión o pensión completa. Te recomendamos revisar detalladamente lo que incluye cada paquete antes de la reserva."
        },
        {
          pregunta: "¿Puedo reservar solo el hotel sin los vuelos?",
          respuesta: "Actualmente, nuestros paquetes están diseñados como experiencias completas que incluyen vuelos y alojamiento. Sin embargo, estamos trabajando en ofrecer opciones más flexibles en el futuro. Si necesitas una configuración específica, te recomendamos contactar con nuestro equipo de atención al cliente."
        }
      ]
    },
    {
      categoria: "Pagos",
      preguntas: [
        {
          pregunta: "¿Qué métodos de pago aceptan?",
          respuesta: "Aceptamos tarjetas de crédito y débito (Visa, Mastercard, American Express), PayPal y transferencia bancaria para reservas con más de 30 días de antelación. Todos los pagos se procesan en un entorno seguro con encriptación SSL."
        },
        {
          pregunta: "¿Puedo pagar mi viaje a plazos?",
          respuesta: "Sí, ofrecemos la opción de pago a plazos para reservas realizadas con al menos 45 días de antelación. Puedes pagar una reserva inicial del 25% y el resto en cuotas mensuales hasta 10 días antes de la fecha de viaje. Esta opción está disponible sin intereses para ciertos paquetes."
        },
        {
          pregunta: "¿Cuándo se carga el importe total de mi reserva?",
          respuesta: "Si eliges pagar el importe completo, se cargará inmediatamente en el momento de confirmar la reserva. Si optas por el pago a plazos, el primer pago (25%) se cargará al confirmar, y el resto según el plan de pagos acordado. Siempre recibirás un email de confirmación tras cada cargo."
        }
      ]
    },
    {
      categoria: "Documentación",
      preguntas: [
        {
          pregunta: "¿Qué documentos necesito para viajar?",
          respuesta: "Los documentos necesarios dependen del destino. Para viajes internacionales, generalmente necesitarás un pasaporte con validez mínima de 6 meses desde la fecha de regreso. Algunos países requieren visado específico. Proporcionamos información detallada sobre requisitos documentales específicos al momento de la reserva."
        },
        {
          pregunta: "¿Necesito algún seguro para viajar?",
          respuesta: "Recomendamos encarecidamente contratar un seguro de viaje que cubra gastos médicos, cancelación y equipaje. Todos nuestros paquetes incluyen un seguro básico, pero ofrecemos la posibilidad de ampliar la cobertura por un costo adicional para mayor tranquilidad."
        }
      ]
    },
    {
      categoria: "Wavers y Creadores",
      preguntas: [
        {
          pregunta: "¿Cómo puedo convertirme en un Waver?",
          respuesta: "Para convertirte en un Waver, debes registrarte en nuestra plataforma a través de la sección 'Agencias' y seleccionar la opción 'Para Creadores'. Evaluamos cada solicitud individualmente, considerando tu experiencia en viajes, presencia en redes sociales y tipo de contenido que creas."
        },
        {
          pregunta: "¿Cómo funciona el sistema de comisiones?",
          respuesta: "Los Wavers ganan comisiones por cada reserva completada a través de su perfil o usando su código promocional. El porcentaje de comisión varía entre el 5% y el 15% dependiendo del volumen de ventas y el tipo de paquete. Los pagos se realizan mensualmente para todas las reservas cuyo viaje ya haya finalizado."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-4">Centro de ayuda</h1>
        <p className="text-gray-600 text-lg mb-12">
          Encuentra respuestas a tus preguntas y recibe asistencia para tus viajes
        </p>
        
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <Input 
              className="w-full py-6 pl-12 pr-4 text-lg rounded-xl"
              placeholder="Busca en nuestro centro de ayuda..."
            />
            <svg 
              className="absolute top-1/2 left-4 -translate-y-1/2 w-6 h-6 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
        
        <Tabs defaultValue="faqs" className="mb-16">
          <TabsList className="w-full grid grid-cols-2 max-w-md mx-auto mb-12">
            <TabsTrigger value="faqs">Preguntas frecuentes</TabsTrigger>
            <TabsTrigger value="contacto">Contacto</TabsTrigger>
          </TabsList>
          
          <TabsContent value="faqs">
            <div className="max-w-3xl mx-auto">
              {faqs.map((categoria, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">{categoria.categoria}</h3>
                  <div className="space-y-4">
                    {categoria.preguntas.map((faq, faqIndex) => (
                      <Collapsible key={faqIndex} className="border rounded-lg overflow-hidden">
                        <CollapsibleTrigger className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50">
                          <span className="font-medium">{faq.pregunta}</span>
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4 pt-0 text-gray-600 border-t">
                          {faq.respuesta}
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="contacto">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl border p-6 space-y-6">
                <h3 className="text-xl font-semibold">Envíanos un mensaje</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="nombre" className="text-sm font-medium">Nombre</label>
                      <Input id="nombre" placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="asunto" className="text-sm font-medium">Asunto</label>
                    <Input id="asunto" placeholder="¿En qué podemos ayudarte?" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="mensaje" className="text-sm font-medium">Mensaje</label>
                    <textarea 
                      id="mensaje" 
                      rows={5} 
                      className="w-full border rounded-md p-3" 
                      placeholder="Describe tu consulta con detalle"
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full">Enviar mensaje</Button>
                </form>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl border p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Otras formas de contacto</h3>
                  
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Teléfono</h4>
                      <p className="text-gray-600 text-sm mb-2">De lunes a viernes, 9:00 - 20:00</p>
                      <a href="tel:+34900123456" className="text-primary hover:underline">+34 900 123 456</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600 text-sm mb-2">Respondemos en 24-48h</p>
                      <a href="mailto:ayuda@wanderwave.com" className="text-primary hover:underline">ayuda@wanderwave.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Chat en vivo</h4>
                      <p className="text-gray-600 text-sm mb-2">Asistencia inmediata</p>
                      <button className="text-primary hover:underline">Iniciar chat</button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary/10 rounded-xl p-6 text-center">
                  <h3 className="text-lg font-medium mb-3">¿Eres una agencia?</h3>
                  <p className="text-gray-600 mb-4">
                    Si eres una agencia de viajes o un creador de contenido, visita nuestra sección específica.
                  </p>
                  <Button variant="outline" className="bg-white">
                    Portal de agencias
                  </Button>
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

export default Ayuda;
