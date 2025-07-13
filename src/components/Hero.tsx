import { Button } from "@/components/ui/button";
import { Heart, Users } from "lucide-react";
import heroImage from "@/assets/hero-community.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Chinese-Mexican cultural harmony" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-terracotta/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-6 flex items-center justify-center gap-2">
          <Heart className="h-8 w-8 text-gold" />
          <span className="text-gold text-lg font-medium">Bienvenidos • 欢迎</span>
          <Heart className="h-8 w-8 text-gold" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Asociación China
          <span className="block text-gold">de Sonora</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-95">
          Uniendo culturas, construyendo puentes entre México y China
          <span className="block mt-2 text-lg opacity-80">
            Unidos por el crecimiento armónico y colaborativo
          </span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-3">
            <Users className="mr-2 h-5 w-5" />
            Únete a Nosotros
          </Button>
          <Button variant="golden" size="lg" className="text-lg px-8 py-3">
            Conoce Nuestros Eventos
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};