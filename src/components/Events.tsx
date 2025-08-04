import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users2 } from "lucide-react";
import communityEvents from "/lovable-uploads/91f75aee-868c-45d8-935e-573702116f5c.png";

export const Events = () => {
  const upcomingEvents = [
    {
      title: "La Huella China en Sonora",
      date: "25 de Agosto, 2025",
      time: "TBD",
      location: "Biblioteca de la Universidad de Sonora",
      description: "Acompáñanos en una exposición cultural y artistica sobre la diaspora china en Sonora.",
      status: "Próximo",
      featured: true
    },
    {
      title: "Cursos del idioma chino",
      date: "TBD",
      time: "TBD", 
      location: "Oficinas de la Asociacion",
      attendees: "20+ esperados",
      description: "Aprende el arte milenario de la caligrafía china con maestros certificados.",
      status: "Inscripciones Abiertas proximamente"
    },

  ];

  const pastEvents = [
    {
      title: "Visita al Consulado General de China en Tijuana",
      url: "http://tijuana.china-consulate.gov.cn/zxhd/202507/t20250703_11664116.htm"
    },
    {
      title: "Cena de Gala - Año Nuevo Chino 2024",
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            Eventos Comunitarios
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Próximos Eventos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Únete a nuestras celebraciones y actividades
          </p>
        </div>

        {/* Featured Event */}
        <div className="mb-12">
          <Card className="overflow-hidden bg-gradient-to-r from-primary/5 to-terracotta/5 border-primary/20">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-full">
                <img 
                  src={communityEvents} 
                  alt="Community events" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    Evento Destacado
                  </Badge>
                </div>
              </div>
              <div className="p-8">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {upcomingEvents[0].title}
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {upcomingEvents[0].status}
                  </Badge>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {upcomingEvents[0].description}
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{upcomingEvents[0].date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Clock className="h-4 w-4 text-terracotta" />
                      <span>{upcomingEvents[0].time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="h-4 w-4 text-gold" />
                      <span>{upcomingEvents[0].location}</span>
                    </div>
                    {upcomingEvents[0].attendees && (
                      <div className="flex items-center gap-3 text-sm">
                        <Users2 className="h-4 w-4 text-primary" />
                        <span>{upcomingEvents[0].attendees}</span>
                      </div>
                    )}
                  </div>
                  {/* <Button variant="hero" size="lg">
                    Registrarse Ahora
                  </Button> */}
                </CardContent>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Upcoming Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {upcomingEvents.slice(1).map((event, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                  <Badge variant="outline">
                    {event.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {event.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-terracotta" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-gold" />
                    <span>{event.location}</span>
                  </div>
                  {event.attendees && (
                    <div className="flex items-center gap-2 text-sm">
                      <Users2 className="h-4 w-4 text-primary" />
                      <span>{event.attendees}</span>
                    </div>
                  )}
                </div>
                {/* <Button variant="warm" size="sm" className="w-full">
                  Ver Detalles
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Past Events */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Eventos Pasados
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {pastEvents.map((event, index) => (
              <div key={index} className="text-center p-4 bg-background rounded-lg">
                <a 
                  href={event.url} 
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  {event.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
