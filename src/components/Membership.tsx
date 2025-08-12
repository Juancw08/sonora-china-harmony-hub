import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Gift } from "lucide-react";

export const Membership = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            Membresías
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Programa de Membresías
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Próximamente estaremos lanzando nuestro programa de membresías con diferentes niveles y beneficios para la comunidad.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 text-center">
            <CardContent>
              <div className="text-2xl font-bold text-muted-foreground mb-4">
                ¡Próximamente!
              </div>
              <p className="text-muted-foreground mb-6">
                Estamos trabajando en un programa de membresías exclusivo que ofrecerá beneficios únicos para nuestra comunidad.
              </p>
              {/* <Button variant="outline" className="w-48 mx-auto">
                Mantente Informado
              </Button> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

// TODO: Implement membership tiers when ready
// const membershipTiers = [
//   {
//     name: "Miembro Comunitario",
//     price: "$500 MXN",
//     period: "anual",
//     icon: Gift,
//     color: "secondary",
//     features: [
//       "Acceso a todos los eventos públicos",
//       "Newsletter mensual",
//       "Descuentos en talleres culturales",
//       "Acceso a la biblioteca digital",
//       "Red de contactos básica"
//     ]
//   },
//   {
//     name: "Miembro Activo",
//     price: "$1,200 MXN", 
//     period: "anual",
//     icon: Star,
//     color: "warm",
//     popular: true,
//     features: [
//       "Todos los beneficios del nivel Comunitario",
//       "Acceso a eventos exclusivos",
//       "Talleres premium sin costo adicional",
//       "Consultoría empresarial básica",
//       "Participación en delegaciones comerciales",
//       "Prioridad en registro de eventos"
//     ]
//   },
//   {
//     name: "Miembro Corporativo", 
//     price: "$5,000 MXN",
//     period: "anual",
//     icon: Crown,
//     color: "golden",
//     features: [
//       "Todos los beneficios del nivel Activo",
//       "Logo en materiales oficiales",
//       "Espacios de exhibición en eventos",
//       "Consultoría empresarial especializada",
//       "Organización de eventos personalizados",
//       "Acceso directo a directivos",
//       "Networking premium"
//     ]
//   }
// ];

// const benefits = [
//   "Fortalecimiento de vínculos culturales",
//   "Oportunidades de negocio internacional", 
//   "Desarrollo profesional continuo",
//   "Acceso a programas de intercambio",
//   "Participación en misiones comerciales",
//   "Certificaciones culturales"
// ];

// return (
//   <section className="py-20 bg-gradient-to-b from-gold-light/20 to-background">
//     <div className="container mx-auto px-4">
//       <div className="text-center mb-16">
//         <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
//           Membresías
//         </Badge>
//         <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
//           Forma Parte de Nuestra Comunidad
//         </h2>
//         <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//           Elige el nivel de membresía que mejor se adapte a tus necesidades y 
//           comienza a disfrutar de todos los beneficios de pertenecer a nuestra 
//           asociación.
//         </p>
//       </div>

//       {/* Membership Tiers */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//         {membershipTiers.map((tier, index) => {
//           const IconComponent = tier.icon;
//           return (
//             <Card key={index} className={`relative group hover:shadow-elegant transition-all duration-300 ${tier.popular ? 'border-primary border-2 scale-105' : ''}`}>
//               {tier.popular && (
//                 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                   <Badge className="bg-primary text-primary-foreground px-4 py-1">
//                     Más Popular
//                   </Badge>
//                 </div>
//               )}
                
//               <CardHeader className="text-center pb-4">
//                 <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto ${
//                   tier.color === 'secondary' ? 'bg-secondary' :
//                   tier.color === 'warm' ? 'bg-terracotta' : 'bg-gold'
//                 }`}>
//                   <IconComponent className={`h-8 w-8 ${
//                     tier.color === 'secondary' ? 'text-secondary-foreground' : 'text-white'
//                   }`} />
//                 </div>
//                 <CardTitle className="text-2xl font-bold text-foreground mb-2">
//                   {tier.name}
//                 </CardTitle>
//                 <div className="text-3xl font-bold text-primary mb-1">
//                   {tier.price}
//                 </div>
//                 <div className="text-sm text-muted-foreground">
//                   por {tier.period}
//                 </div>
//               </CardHeader>
                
//               <CardContent>
//                 <ul className="space-y-3 mb-6">
//                   {tier.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-start gap-3">
//                       <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
//                       <span className="text-sm text-muted-foreground leading-relaxed">
//                         {feature}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
                  
//                 <Button 
//                   variant={tier.popular ? "hero" : tier.color as any} 
//                   className="w-full"
//                   size="lg"
//                   onClick={() => window.open(`https://wa.me/526621234567?text=Hola, me interesa el plan ${tier.name} de la Asociación China en Sonora`, '_blank')}
//                 >
//                   Unirse Ahora
//                 </Button>
//               </CardContent>
//             </Card>
//           );
//         })}
//       </div>

//       {/* Additional Benefits */}
//       <div className="bg-white rounded-2xl p-8 md:p-12 shadow-warm">
//         <div className="text-center mb-8">
//           <h3 className="text-3xl font-bold text-foreground mb-4">
//             Beneficios Adicionales para Todos los Miembros
//           </h3>
//           <p className="text-lg text-muted-foreground">
//             Independientemente del nivel que elijas, todos nuestros miembros disfrutan de:
//           </p>
//         </div>
          
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {benefits.map((benefit, index) => (
//             <div key={index} className="flex items-center gap-3 p-4 bg-gold-light/30 rounded-lg">
//               <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
//               <span className="text-foreground font-medium">{benefit}</span>
//             </div>
//           ))}
//         </div>
          
//         <div className="text-center mt-8">
//           <p className="text-muted-foreground mb-4">
//             ¿Tienes preguntas sobre nuestras membresías?
//           </p>
//           <Button 
//             variant="outline" 
//             size="lg"
//             onClick={() => window.open('https://wa.me/526621234567?text=Hola, tengo preguntas sobre las membresías de la Asociación China en Sonora', '_blank')}
//           >
//             Contacta a Nuestro Equipo
//           </Button>
//         </div>
//       </div>
//     </div>
//   </section>
// );