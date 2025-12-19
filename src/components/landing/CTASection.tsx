import { Button } from "@/components/ui/button";
import { Play, Share2, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-warm/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-cream mb-6 text-balance">
            Wenn dich ein Gespräch weiterdenken lässt, war es erfolgreich.
          </h2>

          {/* Subheadline */}
          <p className="font-body text-lg md:text-xl text-cream/70 mb-12 max-w-xl mx-auto">
            Werde Teil des Dialogs. Höre zu, denke mit, reflektiere.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="https://zwischen-entscheidungen.podigee.io/" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Podcast hören
              </Button>
            </a>
            <a href="https://zwischen-entscheidungen.podigee.io/" target="_blank" rel="noopener noreferrer">
              <Button variant="heroOutline" size="xl">
                <Share2 className="w-5 h-5" />
                Episode teilen
              </Button>
            </a>
          </div>

          {/* Secondary CTA */}
          <div className="pt-8 border-t border-cream/10">
            <p className="font-body text-cream/60 mb-4">
              Möchtest du als Gast dabei sein?
            </p>
            <Button variant="ghost" className="text-warm hover:text-warm hover:bg-warm/10">
              <Mail className="w-4 h-4 mr-2" />
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
