import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Handshake, Globe, Star, Users } from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: Handshake,
      title: "Colaboración",
      description: "Fomentamos la cooperación entre las comunidades china y mexicana"
    },
    {
      icon: Globe,
      title: "Intercambio Cultural",
      description: "Promovemos el entendimiento mutuo a través del intercambio cultural"
    },
    {
      icon: Star,
      title: "Excelencia",
      description: "Nos esforzamos por la excelencia en todas nuestras actividades"
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Construimos una comunidad fuerte y unida en Sonora"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-gold-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            Nuestra Misión
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Construyendo Puentes Culturales
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            La Asociación China de Sonora es una organización dedicada a fortalecer 
            los lazos entre las comunidades china y mexicana, promoviendo el crecimiento 
            armónico y la colaboración mutua en todos los aspectos de la vida social, 
            cultural y económica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-terracotta rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-elegant">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Unidos por la Diversidad
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Desde nuestra fundación, hemos trabajado incansablemente para crear 
                espacios de encuentro donde las tradiciones chinas y mexicanas se 
                fusionen de manera armoniosa, generando oportunidades de crecimiento 
                para toda nuestra comunidad.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Eventos culturales mensuales</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-terracotta rounded-full"></div>
                  <span className="text-foreground">Programas de intercambio</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-foreground">Apoyo empresarial y comercial</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gold-light to-secondary rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground mb-4">Miembros Activos</div>
                <div className="text-2xl font-bold text-terracotta mb-2">50+</div>
                <div className="text-muted-foreground mb-4">Eventos Anuales</div>
                <div className="text-2xl font-bold text-gold mb-2">15</div>
                <div className="text-muted-foreground">Años de Historia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};