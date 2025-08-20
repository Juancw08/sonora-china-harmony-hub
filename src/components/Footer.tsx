import { Heart, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Sobre Nosotros", href: "#nosotros" },
    { name: "Eventos", href: "#eventos" },
    { name: "Membresías", href: "#membresias" },
    { name: "Contacto", href: "#contacto" }
  ];

  const services = [
    "Eventos Culturales",
    "Intercambio Comercial", 
    "Consultoría Empresarial",
    "Programas Educativos"
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-terracotta rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">中</span>
              </div>
              <div>
                <h3 className="font-bold text-xl text-background">
                  Asociación China de Sonora
                </h3>
                <p className="text-sm text-background/70">
                  Uniendo culturas, construyendo futuro
                </p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed mb-4">
              Promovemos el crecimiento armónico y la colaboración entre las 
              comunidades china y mexicana, fortaleciendo los lazos culturales 
              y comerciales en el estado de Sonora.
            </p>
            <div className="flex items-center gap-2 text-background/60">
              <span className="text-sm">Hecho con</span>
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm">en Sonora</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-background">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-background">
              Nuestros Servicios
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-background/80">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
            <div className="flex items-start gap-3 p-3 -mx-4 sm:mx-0 sm:p-0 rounded-lg sm:rounded-none bg-background/5 sm:bg-transparent">
              <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-sm text-background/80 break-all">
                <p className="break-words">asociacionchinasonora@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-4 text-center">
          <p className="text-sm text-background/60">
            {currentYear} Asociación China de Sonora. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};