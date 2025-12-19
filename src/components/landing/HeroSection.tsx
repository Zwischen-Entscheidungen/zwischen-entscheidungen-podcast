import { Button } from "@/components/ui/button";
import { Play, Headphones } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Abstract dialogue visualization"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-warm/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-warm/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream/10 border border-cream/20 mb-8 opacity-0 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-warm animate-pulse-soft" />
            <span className="text-cream/90 text-sm font-body tracking-wide">
              Aus dem BNI-Netzwerk Schweiz
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream mb-6 opacity-0 animate-fade-up stagger-1 text-balance leading-tight">
            Zwischen
            <span className="block italic text-warm">Entscheidungen</span>
          </h1>

          {/* Subtitle */}
          <p className="font-display text-xl md:text-2xl text-cream/80 mb-4 opacity-0 animate-fade-up stagger-2">
            Unternehmer im Dialog
          </p>

          {/* Description */}
          <p className="font-body text-lg md:text-xl text-cream/70 max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up stagger-3 leading-relaxed">
            Ein Podcast, in dem Unternehmer im Dialog denken, zweifeln und entscheiden – 
            ehrlich, reflektiert, auf Augenhöhe.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up stagger-4">
            <a href="https://zwischen-entscheidungen.podigee.io/" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Jetzt reinhören
              </Button>
            </a>
            <a href="https://zwischen-entscheidungen.podigee.io/" target="_blank" rel="noopener noreferrer">
              <Button variant="heroOutline" size="xl">
                <Headphones className="w-5 h-5" />
                Abonnieren
              </Button>
            </a>
          </div>

          {/* Trust Indicator */}
          <p className="mt-12 text-cream/50 text-sm font-body opacity-0 animate-fade-up stagger-5">
            Verfügbar auf Spotify, Apple Podcasts & überall wo es Podcasts gibt
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up" style={{ animationDelay: "1s" }}>
        <div className="w-6 h-10 rounded-full border-2 border-cream/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-cream/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
