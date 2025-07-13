import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users2 } from "lucide-react";
import communityEvents from "@/assets/community-events.jpg";

export const Events = () => {
  const upcomingEvents = [
    {
      title: "Festival de la Luna",
      date: "15 de Septiembre, 2024",
      time: "18:00 - 22:00",
      location: "Centro Cultural Sonora",
      attendees: "200+ esperados",
      description: "Celebración tradicional china con música, danza del dragón y gastronomía típica.",
      status: "Próximo",
      featured: true
    },
    {
      title: "Intercambio Gastronómico",
      date: "22 de Septiembre, 2024", 
      time: "16:00 - 20:00",
      location: "Plaza Zaragoza",
      attendees: "150+ esperados",
      description: "Degustación de platillos chinos y mexicanos preparados por chefs locales.",
      status: "Próximo"
    },
    {
      title: "Taller de Caligrafía China",
      date: "29 de Septiembre, 2024",
      time: "10:00 - 14:00", 
      location: "Biblioteca Municipal",
      attendees: "50+ esperados",
      description: "Aprende el arte milenario de la caligrafía china con maestros certificados.",
      status: "Inscripciones Abiertas"
    }
  ];

  const pastEvents = [
    "Año Nuevo Chino 2024",
    "Conferencia Negocios México-China",
    "Festival del Té y la Cultura",
    "Exposición de Arte Contemporáneo"
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
            Únete a nuestras celebraciones y actividades que fortalecen los lazos 
            entre nuestras comunidades y promueven el intercambio cultural.
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
                    <div className="flex items-center gap-3 text-sm">
                      <Users2 className="h-4 w-4 text-primary" />
                      <span>{upcomingEvents[0].attendees}</span>
                    </div>
                  </div>
                  <Button variant="hero" size="lg">
                    Registrarse Ahora
                  </Button>
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
                </div>
                <Button variant="warm" size="sm" className="w-full">
                  Ver Detalles
                </Button>
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
                <span className="text-sm text-muted-foreground">{event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
