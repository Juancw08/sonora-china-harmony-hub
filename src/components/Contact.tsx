import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";
import React from "react";

export const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            Contacto
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Contacto
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Para cualquier comentario, mensaje o pregunta, envíanos un correo electrónico a:
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 text-center">
            <CardContent>
              <div className="flex flex-col items-center gap-4">
                <Mail className="h-12 w-12 text-primary" />
                <div className="text-2xl font-bold text-muted-foreground">
                  asociacionchinasonora@gmail.com
                </div>
                <p className="text-muted-foreground mt-4">
                  Estaremos encantados de atenderte.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Badge } from "@/components/ui/badge";
// import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

// export const Contact = () => {
//   const contactInfo = [
//     {
//       icon: MapPin,
//       title: "Dirección",
//       details: ["Av. Revolución 1234", "Colonia Centro", "Hermosillo, Sonora CP 83000"],
//       color: "text-primary"
//     },
//     {
//       icon: Phone, 
//       title: "Teléfono",
//       details: ["+52 (662) 123-4567", "+52 (662) 123-4568"],
//       color: "text-terracotta"
//     },
//     {
//       icon: Mail,
//       title: "Correo Electrónico", 
//       details: ["info@asociacionchinosonora.org", "eventos@asociacionchinosonora.org"],
//       color: "text-gold"
//     },
//     {
//       icon: Clock,
//       title: "Horarios de Atención",
//       details: ["Lunes a Viernes: 9:00 - 18:00", "Sábados: 9:00 - 14:00"],
//       color: "text-primary"
//     }
//   ];

//   return (
//     <section className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
//             Contacto
//           </Badge>
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
//             Estamos Aquí Para Ayudarte
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//             ¿Tienes preguntas sobre nuestra asociación, eventos o membresías? 
//             No dudes en contactarnos. Estaremos encantados de atenderte.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div className="space-y-6">
//             <h3 className="text-2xl font-bold text-foreground mb-6">
//               Información de Contacto
//             </h3>
            
//             {contactInfo.map((info, index) => {
//               const IconComponent = info.icon;
//               return (
//                 <Card key={index} className="group hover:shadow-warm transition-all duration-300">
//                   <CardContent className="p-6">
//                     <div className="flex items-start gap-4">
//                       <div className={`p-3 rounded-full bg-muted group-hover:scale-110 transition-transform duration-300`}>
//                         <IconComponent className={`h-6 w-6 ${info.color}`} />
//                       </div>
//                       <div className="flex-1">
//                         <h4 className="font-semibold text-foreground mb-2">
//                           {info.title}
//                         </h4>
//                         <div className="space-y-1">
//                           {info.details.map((detail, detailIndex) => (
//                             <p key={detailIndex} className="text-muted-foreground">
//                               {detail}
//                             </p>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               );
//             })}

//             {/* Map Placeholder */}
//             <Card className="overflow-hidden">
//               <div className="h-64 bg-gradient-to-br from-gold-light to-secondary flex items-center justify-center">
//                 <div className="text-center">
//                   <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
//                   <p className="text-muted-foreground">
//                     Mapa interactivo próximamente
//                   </p>
//                 </div>
//               </div>
//             </Card>
//           </div>

//           {/* Contact Form */}
//           <div>
//             <Card className="shadow-elegant">
//               <CardHeader>
//                 <CardTitle className="text-2xl font-bold text-foreground">
//                   Envíanos un Mensaje
//                 </CardTitle>
//                 <p className="text-muted-foreground">
//                   Completa el formulario y nos pondremos en contacto contigo a la brevedad.
//                 </p>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-foreground">
//                       Nombre *
//                     </label>
//                     <Input placeholder="Tu nombre completo" />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-foreground">
//                       Apellido *
//                     </label>
//                     <Input placeholder="Tu apellido" />
//                   </div>
//                 </div>
                
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium text-foreground">
//                     Correo Electrónico *
//                   </label>
//                   <Input type="email" placeholder="tu@email.com" />
//                 </div>
                
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium text-foreground">
//                     Teléfono
//                   </label>
//                   <Input placeholder="+52 (662) 123-4567" />
//                 </div>
                
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium text-foreground">
//                     Asunto *
//                   </label>
//                   <Input placeholder="¿En qué podemos ayudarte?" />
//                 </div>
                
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium text-foreground">
//                     Mensaje *
//                   </label>
//                   <Textarea 
//                     placeholder="Escribe tu mensaje aquí..."
//                     className="min-h-32"
//                   />
//                 </div>
                
//                 <Button 
//                   variant="hero" 
//                   size="lg" 
//                   className="w-full"
//                   onClick={() => window.open('https://wa.me/526621234567?text=Hola, me gustaría contactar con la Asociación China en Sonora', '_blank')}
//                 >
//                   <Send className="mr-2 h-5 w-5" />
//                   Contactar por WhatsApp
//                 </Button>
                
//                 <p className="text-xs text-muted-foreground text-center">
//                   * Campos obligatorios. Responderemos en un plazo máximo de 24 horas.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="mt-16 text-center bg-gradient-to-r from-primary/5 to-terracotta/5 rounded-2xl p-8 md:p-12">
//           <h3 className="text-3xl font-bold text-foreground mb-4">
//             ¿Listo para Unirte a Nuestra Comunidad?
//           </h3>
//           <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
//             Forma parte de una comunidad vibrante que celebra la diversidad cultural 
//             y promueve el crecimiento conjunto entre México y China.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button 
//               variant="hero" 
//               size="lg"
//               onClick={() => window.open('https://wa.me/526621234567?text=Hola, me interesa solicitar una membresía en la Asociación China en Sonora', '_blank')}
//             >
//               Solicitar Membresía
//             </Button>
//             <Button 
//               variant="outline" 
//               size="lg"
//               onClick={() => window.open('https://wa.me/526621234567?text=Hola, me gustaría conocer más sobre la Asociación China en Sonora', '_blank')}
//             >
//               Conocer Más
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };